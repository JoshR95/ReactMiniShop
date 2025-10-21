<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

// Test route to verify API is working
Route::get('/test', function () {
    return response()->json([
        'message' => 'React Mini Shop API is running!',
        'status' => 'success'
    ]);
});

// product routes

// this gets the url path for products and When someone visits /api/products, it runa the index() method in the ProductController class
Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{id}', [ProductController::class, 'show']);