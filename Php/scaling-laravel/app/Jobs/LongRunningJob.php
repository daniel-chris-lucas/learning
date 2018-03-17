<?php

namespace App\Jobs;

use App\Events\TaskCompleted;
use App\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class LongRunningJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var int
     */
    private $taskId;

    public function __construct($taskId)
    {
        $this->taskId = $taskId;
    }

    /**
     * Execute the job.
     *
     * @return bool
     */
    public function handle()
    {
        $task = Task::findOrFail($this->taskId);

        sleep(3);

        $this->completeTask($task);

        return true;
    }

    protected function completeTask($task)
    {
        event(new TaskCompleted(
            $task->complete()->id
        ));
    }
}
