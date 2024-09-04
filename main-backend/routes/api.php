<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BestSellerController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/logout', [AuthController::class, 'destroy']);
Route::post('auth/login', [AuthController::class, 'login']);
Route::post('products/add-to-cart', [ProductController::class, 'addToCart'])->middleware('auth:sanctum');
Route::post('products/delete', [ProductController::class, 'delete'])->middleware('auth:sanctum');
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/favorites', [ProductController::class, 'showFavorites'])->middleware('auth:sanctum');
Route::post('/products/delete-product', [ProductController::class, 'DeleteProduct']);
Route::post('/products/add-new-product', [ProductController::class, 'AddNewProduct']);
Route::post('/products/decrease', [ProductController::class, 'decrease'])->middleware('auth:sanctum');
Route::get('/products/{id}', [ProductController::class, 'findProduct']);
Route::post('/products/{id}', [ProductController::class, 'update']);
Route::get('/bestsellers', [BestSellerController::class, 'index']);


Route::get('/cart', [ShoppingCartController::class, 'showCart'])->middleware('auth:sanctum');

Route::delete('cart/remove{id}', [ProductController::class, 'removeCartItem']);
