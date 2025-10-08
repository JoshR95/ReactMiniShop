<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

     // Creating our products database table 

    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // product name
            $table->text('description'); // product description
            $table->decimal('price', 10, 2); // product price
            $table->string('category'); // product category
            $table->string('image_url')->nullable(); // product picture
            $table->integer('stock')->default(0); // product stock count, set to 0 by default
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
