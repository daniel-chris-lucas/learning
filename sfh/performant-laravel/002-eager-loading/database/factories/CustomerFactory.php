<?php

use Faker\Generator as Faker;

$factory->define(App\Customer::class, function (Faker $faker) {
    return [
        'user_id' => $faker->randomNumber(),
        'hash' => $faker->sha1
    ];
});
