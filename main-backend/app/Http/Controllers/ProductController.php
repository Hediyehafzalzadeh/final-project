<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ShoppingCart;



class ProductController extends Controller
{

    public function index()
    {
        return  Product::all();
    }

    public function findProduct(Request $request)
    {
        return  Product::find($request->id);
    }

    public function update(Request $request)
    {

        $product = Product::find($request->id);
        $product->update($request->all());

        return response()->json($product, 200);
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















    // public function addToCart(Request $request)
    // {
    //     $productId = $request->input('product_id');
    //     $product = Product::find($productId);

    //     if (!$product) {
    //         return redirect()->route('products.index')->with('error', 'Product not found!');
    //     }
    //     if (!Auth()->user()) {
    //         $cart = session()->get('cart', []);
    //         $cart[$productId] = [
    //             'name' => $product->name,
    //             'img' => $product->img,
    //             'price' => $product->price,
    //         ];
    //         session()->put('cart', $cart);

    //         // dd(session()->get('cart'));

    //         return redirect()->route('products.index')->with('cart', $cart);
    //     }

    //     if (Auth()->user()) {
    //         $id = Auth()->user()->id;
    //         $cart = ShoppingCart::where(['user_id' => $id]);
    //         session()->put('cart', $cart);
    //         return redirect()->route('products.index')->with('success', 'Product added to cart successfully!');
    //     }
    // }
}
