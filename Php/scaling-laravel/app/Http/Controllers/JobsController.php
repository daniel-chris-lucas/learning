<?php

namespace App\Http\Controllers;

use App\Task;
use App\Jobs\LongRunningJob;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getTasks()
    {
        return Task::where('user_id', auth()->user()->id)
            ->whereNull('completed_at')
            ->get();
    }

    public function startJob()
    {
        $task = Task::create([
            'user_id' => auth()->user()->id,
            'name' => 'LongRunningJob',
            'created_at' => new \DateTime
        ]);

        dispatch(new LongRunningJob($task->id));

        return $task;
    }
}