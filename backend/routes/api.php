<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Test route to verify API is working
Route::get('/test', function () {
    return response()->json([
        'message' => 'React Mini Shop API is running!',
        'status' => 'success'
    ]);
});

// Product routes (to be implemented)
// Route::get('/products', [ProductController::class, 'index']);
// Route::get('/products/{id}', [ProductController::class, 'show']);

// Authentication routes (to be implemented)
// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);


