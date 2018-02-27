<?php

namespace App\Http\Controllers;

use App\User;
use App\Pageview;
use Illuminate\Http\Request;

class PlayController extends Controller
{
    public function index()
    {
        Pageview::select('domain')
            ->where('domain', 'like', '%.biz')
            ->chunk(1000, function ($pageviews) {
                // do something with $pageviews
            });

        return 'Memory Usage: ' . round(xdebug_peak_memory_usage() / 1048576, 2) . 'MB';
    }

    public function eagerLoading()
    {
        $users = User::with('customers')->get();

        foreach ($users as $user) {
            $customers = $user->customers;
            // Perform some operation
        }

        return 'done';
    }
}
