<?php

use Illuminate\Database\Seeder;

class PageviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::with('customers')
            ->get()
            ->each(function ($u) {
                $u->customers->each(function ($c) use ($u) {
                    for ($i = 0; $i < 1000; $i++) {
                        $u->pageviews()->save(factory(\App\Pageview::class)->make([
                            'customer_id' => $c->id,
                        ]));
                    }
                });
            });
    }
}
