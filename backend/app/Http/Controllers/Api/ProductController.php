<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Http\Requests;

class ProductController extends Controller
{
    // gets all products and is a public function so can be accessed by anyone
    public function index(){
        // this gets all info from the products table in the database and stores it in $products
        $products = Product::all();
        // this converts the php data to json so it can be used by the front end
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
