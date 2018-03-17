<?php

namespace App\Http\Controllers;

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
        dispatch(new LongRunningJob);

        return ['status' => 'success'];
    }
}
