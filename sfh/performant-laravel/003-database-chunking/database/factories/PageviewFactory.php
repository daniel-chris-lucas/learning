<?php

use Faker\Generator as Faker;

$factory->define(App\Pageview::class, function (Faker $faker) {
    return [
        'customer_id' => 1,
        'user_id' => 1,
        'uri' => "/{$faker->slug}",
        'domain' => $faker->domainName,
    ];
});
