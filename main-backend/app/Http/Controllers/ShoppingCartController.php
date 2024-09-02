<?php

namespace App\Http\Controllers;

use App\Models\ShoppingCart;
use Illuminate\Http\Request;


class ShoppingCartController extends Controller
{
    public function showCart(Request $request)
    {


        $user = $request->user();

        $cart = ShoppingCart::where(['user_id' => $user->id])->with('product')->get();
        return response()->json($cart, 200);
    }

    public function update(Request $request)
    {

        $product = ShoppingCart::find($request->id);
        $product->update($request->all());

        return response()->json($product, 200);
    }
}
