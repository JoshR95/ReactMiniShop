<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // gets all products with pagination support
    public function index(Request $request){
        // Laravel's paginate() automatically handles pagination from query parameters
        // If URL is /api/products?page=2, it gets page 2
        // If URL is /api/products?page=1&per_page=12, it gets page 1 with 12 items
        $perPage = $request->get('per_page', 12); // Default 12 items per page
        $products = Product::paginate($perPage);
        
        // Laravel returns pagination data automatically:
        // {
        //   "data": [...products...],
        //   "current_page": 1,
        //   "last_page": 3,
        //   "per_page": 12,
        //   "total": 25,
        //   ...
        // }
        return response()->json($products);
    }

    // gets single product by id 
    public function show($id){
        // we capture the data in the url after product with our route, then this number is saved as id
        $product = Product::find($id);

        // if the id returned doesnt match an id in our database, return a 404 error
        if (!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }

        // if the product with the id was found, convert to json and send back
        return response()->json($product);
    }
}
