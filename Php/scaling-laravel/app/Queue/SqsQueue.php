<?php

namespace App\Queue;

use Illuminate\Queue\Jobs\SqsJob;
use Illuminate\Queue\SqsQueue as BaseQueue;

class SqsQueue extends BaseQueue
{
    public function pop($queue = null)
    {
        $response = $this->sqs->receiveMessage([
            'QueueUrl' => $queue = $this->getQueue($queue),
            'AttributeNames' => ['ApproximateReceiveCount'],
            'WaitTimeSeconds' => 20, // THIS IS OUR NEW PARAMETER TO ENABLE LONG-POLLING
        ]);
        if (count($response['Messages']) > 0) {
            return new SqsJob(
                $this->container, $this->sqs, $response['Messages'][0],
                $this->connectionName, $queue
            );
        }
    }
}