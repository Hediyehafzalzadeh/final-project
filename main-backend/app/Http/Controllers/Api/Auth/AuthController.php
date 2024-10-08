<?php

namespace App\Http\Controllers\api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => ['required', 'string', 'max:255'],
            'password' => ['required', Password::defaults()],
        ]);

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $device = substr($request->userAgent() ?? '', 0, 255);

        return response()->json([
            'access_token' => $user->createToken($device)->plainTextToken,
            'role' => $user->role
        ], Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {

        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $user = User::where(["username" => $credentials['username']])->first();
            $device = substr($request->userAgent() ?? '', 0, 255);


            return response()->json([
                'access_token' => $user->createToken($device)->plainTextToken,
                'role' => $user->role
            ], Response::HTTP_CREATED);
        }

        return response()->json(['message' => 'Not Athorized'], 403);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'current' => 'required|current_password:sanctum',
            'new' => 'required|different:current|min:8'
        ]);

        $user = User::where([
            'username' => $request->user()->username
        ])->first();


        if (! Hash::check($request->current, $user->password)) {
            return response()->json(['message'=> 'Old Password is incorrect'], 403);
        }

        $user->update([
            'password' => Hash::make($request->new)
        ]);
        $device = substr($request->userAgent() ?? '', 0, 255);

        return response()->json([
            'access_token' => $user->createToken($device)->plainTextToken
        ], Response::HTTP_CREATED);


    }

}
