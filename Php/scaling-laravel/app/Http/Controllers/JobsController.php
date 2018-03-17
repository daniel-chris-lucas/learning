<?php

namespace App\Http\Controllers;

use Queue;
use App\Jobs\LongRunningJob;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function startJob()
    {
        // dispatch(new LongRunningJob);

        return [
            'job' => Queue::push(new LongRunningJob),
        ];
    }
}
