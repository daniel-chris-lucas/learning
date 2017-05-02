<?php

namespace App\Providers;

use App\Channel;
use Illuminate\Support\ServiceProvider;
use Schema;
use View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Fix for utf8mb4 on Mariadb
        // See https://laravel-news.com/laravel-5-4-key-too-long-error
        Schema::defaultStringLength(191);

        View::composer('*', function ($view) {
            $channels = \Cache::rememberForever('channels', function () {
                return Channel::all();
            });
            
            $view->with('channels', $channels);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
        }
    }
}
