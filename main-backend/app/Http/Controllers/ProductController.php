<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ShoppingCart;
use App\Models\UserLiked;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{

    public function index()
    {
        return  Product::all();
    }

    public function findProduct(Request $request)
    {;

        $product = Product::find($request->id);


        $product['liked'] = $product->isLikedByUser();




        return $product;
    }

    public function update(Request $request)
    {
        $product = Product::find($request->id);

        $item = UserLiked::where([
            "product_id" => $product->id,
            "user_id" => auth('sanctum')->user()->id
        ])->first();

        if (!$item) {
            $item = UserLiked::create([
                'product_id' => $product->id,
                'user_id' => auth('sanctum')->user()->id


            ]);
            return response()->json(['message' => 'added to liked'], 201);
        } else {
            $item->delete();
            return response()->json(['message' => 'remove from liked'], 202);
        }
    }


    public function addToCart(Request $request)
    {

        $product = Product::find($request->id);

        if (!$product) {
            return response()->json(["message" => "product Not found"], 404);
        }

        $itemInCart = ShoppingCart::where([
            "product_id" => $product->id,
            "user_id" => $request->user()->id
        ])->first();

        if ($itemInCart) {
            $itemInCart->quantity += 1;
            $itemInCart->update();
        } else {
            $itemInCart = ShoppingCart::create([
                'product_id' => $product->id,
                'user_id' => $request->user()->id,
                'quantity' => 1
            ]);
        }

        return response()->json(['message' => 'added to cart'], 200);
    }
    public function decrease(Request $request)
    {
        $product = Product::find($request->id);

        $itemInCart = ShoppingCart::where([
            "product_id" => $product->id,
            "user_id" => $request->user()->id
        ])->first();


        if ($itemInCart && $itemInCart->quantity > 1) {
            $itemInCart->quantity -= 1;

            $itemInCart->update();
        } else {
            $itemInCart->delete();
        }

        return response()->json(["message" => "item removed from cart"], 200);
    }
    public function delete(Request $request)
    {
        $product = Product::find($request->id);

        $itemInCart = ShoppingCart::where([
            "product_id" => $product->id,
            "user_id" => $request->user()->id
        ])->first();

        $itemInCart->delete();


        return response()->json(["message" => "item removed from cart"], 200);
    }
    public function base64ToImage($base64String)
    {
        $image = explode('base64,', $base64String);
        $image = end($image);
        $image = str_replace(' ', '+', $image);
        $file = "images/" . uniqid() . '.png';

        // $file->store('storage/images', 'public');

        Storage::disk('public')->put($file, base64_decode($image));

        return $file;
    }


    public function AddNewProduct(Request $request)

    {
        $request->validate([
            'productname' => ['required', 'string', 'max:255'],
            'price' => ['required', 'integer']

        ]);


        $file = $this->base64ToImage($request->img);


        // $path = $request->img->store('storage/images', 'public');


        $product = Product::create([
            'name' => $request->productname,
            'price' => $request->price,
            'img' => $file,
            'category' => $request->category

        ]);
        // event(new Registered($product));

        return response()->json(["message" => "added seccessfully"], 200);
    }
    public function showFavorites(Request $request)
    {
        $user = $request->user();
        $likes = UserLiked::where(['user_id' => $user->id])->with('product')->get();
        return response()->json($likes, 200);
    }
    public function DeleteProduct(Request $request)
    {
        $product = Product::find($request->id);

        $product->delete();
        return response()->json(['message' => 'deleted'], 200);
    }
}
