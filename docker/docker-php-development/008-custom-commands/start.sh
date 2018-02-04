#!/usr/bin/env bash

set -e

function shutdown {
    kill -s SIGTERM $CONFD_PID
    wait $CONFD_PID
    kill -s SIGTERM $PHP_FPM_PID
    wait $PHP_FPM_PID
}

# wait until the initial configuration succeeds
until confd -onetime -backend consul -no consul:8500; do
    echo "Waiting for the initial confd configuration"
    sleep 5
done

confd -interval 10 -backend consul -node consul:8500 &
CONFD_PID=$!

php-fpm &
PHP_FPM_PID=$!

# Create infinity loop to keep container running
# trap : TERM INT; sleep infinity & wait

trap shutdown SIGTERM SIGINT

/usr/bin/caddy -validate --agree=true --conf=/etc/Caddyfile

exec /usr/bin/caddy --agree=true --conf=/etc/Caddyfile