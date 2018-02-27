<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class PlayController extends Controller
{
    public function index()
    {
        $users = User::with('customers')->get();

        foreach ($users as $user) {
            $customers = $user->customers;
            // Perform some operation
        }

        return 'done';
    }
}
