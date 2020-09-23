<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'price' => $faker->numberBetween(1,200),
        'image' => $faker->name,
        'description' => $faker->text,
        'category_id' => factory(App\Models\Category::class),
        'branch_id' => factory(App\Models\Branch::class)
    ];
});
