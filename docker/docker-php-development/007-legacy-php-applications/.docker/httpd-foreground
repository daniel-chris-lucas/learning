#!/bin/bash
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid
source /etc/apache2/envvars && exec apachectl -D FOREGROUND
