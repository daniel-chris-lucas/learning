<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = factory(\App\User::class)->create([
            'name' => 'Daniel Lucas',
            'email' => 'daniel.chris.lucas@gmail.com',
        ]);

        $user->customers()->saveMany(factory(\App\Customer::class, 6)->make());

        factory(\App\User::class, 3)->create()->each(function ($u) {
            $u->customers()->saveMany(factory(\App\Customer::class, 6)->make());
        });
    }
}
