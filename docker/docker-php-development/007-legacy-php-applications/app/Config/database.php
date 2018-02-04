<?php

class DATABASE_CONFIG {
    function __construct()
    {
        $this->default = array(
            'datasource' => cakeenv('DB_DATASOURCE', 'Database/Mysql'),
            'persistent' => false,
            'host' => cakeenv('DB_HOST', 'localhost'),
            'login' => cakeenv('DB_USER', 'user'),
            'password' => cakeenv('DB_PASSWORD', 'password'),
            'database' => cakeenv('DB_DATABASE', 'database_name'),
            'prefix' => cakeenv('DB_PREFIX', ''),
            // 'encoding' => cakeenv('DB_ENCODING', 'utf8'),
        );

        $this->test = array(
            'datasource' => 'Database/Mysql',
            'persistent' => false,
            'host' => 'localhost',
            'login' => 'user',
            'password' => 'password',
            'database' => 'test_database_name',
            'prefix' => '',
        );
    }
}
