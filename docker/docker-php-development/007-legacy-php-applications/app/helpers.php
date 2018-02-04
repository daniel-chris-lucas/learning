<?php

if (! function_exists('value')) {
    /**
     * Return the default value of the given value.
     *
     * @param mixed $value
     * @return mixed
     */
    function value($value)
    {
        return $value instanceof Closure ? $value() : $value;
    }
}

if (! function_exists('cakeenv')) {
    function cakeenv($key, $default = null) {
        $value = getenv($key);

        if ($value === false) {
            return value($default);
        }

        switch (strtolower($value)) {
            case 'true':
            case '(true)':
                return true;
            case 'false':
            case '(false)':
                return false;
            case 'empty':
            case '(empty)':
                return '';
            case 'null':
            case '(null)':
                return;
        }

        if (
            strlen($value) > 1 &&
            strpos($value, '"') === 0 &&
            strpos(strrev($value), '"') === 0
        ) {
            return substr($value, 1, -1);
        }

        return $value;
    }
}