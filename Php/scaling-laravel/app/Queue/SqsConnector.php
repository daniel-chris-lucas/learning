<?php

namespace App\Queue;

use Aws\Sqs\SqsClient;
use Illuminate\Support\Arr;
use Illuminate\Queue\Connectors\SqsConnector as BaseConnector;

class SqsConnector extends BaseConnector
{
    /**
     * Establish a queue connection.
     *
     * @param  array  $config
     * @return \Illuminate\Contracts\Queue\Queue
     */
    public function connect(array $config)
    {
        $config = $this->getDefaultConfiguration($config);
        if ($config['key'] && $config['secret']) {
            $config['credentials'] = Arr::only($config, ['key', 'secret']);
        }

        // This uses SqsQueue object within our App\Queue namespace
        return new SqsQueue(
            new SqsClient($config), $config['queue'], $config['prefix'] ?? ''
        );
    }
}