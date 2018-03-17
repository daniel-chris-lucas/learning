<?php

namespace App\Jobs;

use App\Events\TaskCompleted;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class LongRunningJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return bool
     */
    public function handle()
    {
        sleep(3);

        event(new TaskCompleted($this->job->getJobId()));

        return true;
    }
}
