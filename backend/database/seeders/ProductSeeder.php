<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // creating a faker instance
        $faker = Faker::create();

        // defining 30 specific products with matching details
        $products = [

            // Electronics
            ['name' => 'Wireless Headphones', 'category' => 'Electronics', 'description' => 'High-quality wireless headphones with noise cancellation and 20-hour battery life.'],
            ['name' => 'Laptop Stand', 'category' => 'Electronics', 'description' => 'Ergonomic aluminum laptop stand for better posture and cooling.'],
            ['name' => 'USB-C Hub', 'category' => 'Electronics', 'description' => 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.'],
            ['name' => 'Wireless Mouse', 'category' => 'Electronics', 'description' => 'Ergonomic wireless mouse with precision tracking and long battery life.'],
            ['name' => 'Phone Charger', 'category' => 'Electronics', 'description' => 'Fast-charging USB-C phone charger with 20W power delivery.'],
            
            // Clothing
            ['name' => 'Cotton T-Shirt', 'category' => 'Clothing', 'description' => '100% organic cotton t-shirt, soft and breathable for everyday wear.'],
            ['name' => 'Denim Jeans', 'category' => 'Clothing', 'description' => 'Classic fit denim jeans with stretch fabric for comfort.'],
            ['name' => 'Winter Jacket', 'category' => 'Clothing', 'description' => 'Warm waterproof winter jacket with insulated lining.'],
            ['name' => 'Running Shoes', 'category' => 'Clothing', 'description' => 'Lightweight running shoes with cushioned sole and breathable mesh.'],
            ['name' => 'Baseball Cap', 'category' => 'Clothing', 'description' => 'Adjustable baseball cap with embroidered logo.'],
            
            // Books
            ['name' => 'Learn JavaScript', 'category' => 'Books', 'description' => 'Comprehensive guide to modern JavaScript for beginners and professionals.'],
            ['name' => 'Cooking Basics', 'category' => 'Books', 'description' => 'Essential cooking techniques and recipes for home chefs.'],
            ['name' => 'Mystery Novel', 'category' => 'Books', 'description' => 'Thrilling mystery novel with unexpected twists and turns.'],
            ['name' => 'Photography Guide', 'category' => 'Books', 'description' => 'Complete guide to digital photography and photo editing.'],
            ['name' => 'Fitness Manual', 'category' => 'Books', 'description' => 'Workout routines and nutrition tips for a healthy lifestyle.'],
            
            // Home & Garden
            ['name' => 'Plant Pot Set', 'category' => 'Home & Garden', 'description' => 'Set of 3 ceramic plant pots with drainage holes and saucers.'],
            ['name' => 'Garden Tools', 'category' => 'Home & Garden', 'description' => 'Essential garden tool set including spade, rake, and trowel.'],
            ['name' => 'LED Desk Lamp', 'category' => 'Home & Garden', 'description' => 'Adjustable LED desk lamp with touch control and USB charging port.'],
            ['name' => 'Throw Pillow', 'category' => 'Home & Garden', 'description' => 'Soft decorative throw pillow with removable washable cover.'],
            ['name' => 'Wall Clock', 'category' => 'Home & Garden', 'description' => 'Modern minimalist wall clock with silent quartz movement.'],
            
            // Sports
            ['name' => 'Yoga Mat', 'category' => 'Sports', 'description' => 'Non-slip yoga mat with extra cushioning and carrying strap.'],
            ['name' => 'Dumbbells Set', 'category' => 'Sports', 'description' => 'Adjustable dumbbell set from 5-25 lbs for home workouts.'],
            ['name' => 'Tennis Racket', 'category' => 'Sports', 'description' => 'Professional-grade tennis racket with graphite frame.'],
            ['name' => 'Water Bottle', 'category' => 'Sports', 'description' => 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.'],
            ['name' => 'Resistance Bands', 'category' => 'Sports', 'description' => 'Set of 5 resistance bands with different tension levels.'],
            
            // Toys
            ['name' => 'Building Blocks', 'category' => 'Toys', 'description' => 'Creative building blocks set with 200 pieces in various colors.'],
            ['name' => 'Puzzle Game', 'category' => 'Toys', 'description' => '1000-piece jigsaw puzzle with beautiful landscape scene.'],
            ['name' => 'RC Car', 'category' => 'Toys', 'description' => 'Remote control racing car with rechargeable battery.'],
            ['name' => 'Board Game', 'category' => 'Toys', 'description' => 'Strategy board game for 2-4 players, ages 8 and up.'],
            ['name' => 'Stuffed Animal', 'category' => 'Toys', 'description' => 'Soft plush teddy bear, perfect gift for kids.'],
        ];

        // creating each product with random price and stock

        // we use a for each loop to loop through every item in the products array above,
        // we use the pre defined categories and then use faker to generate random prices and stock quantities 
        foreach ($products as $productData) {
            Product::create([
                'name' => $productData['name'], // name 
                'description' => $productData['description'], // description
                'category' => $productData['category'], // category
                'price' => $faker->randomFloat(2, 10, 500), // random price £10-£500
                'image_url' => 'https://via.placeholder.com/640x480.png?text=' . urlencode($productData['name']), // placeholder image with product name
                'stock' => $faker->numberBetween(0, 100), // random stock 0-100
            ]);
        }
    }
}
