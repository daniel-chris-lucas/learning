FROM php:7.1-fpm

ENV CADDY_HOSTNAME=0.0.0.0
ADD https://github.com/kelseyhightower/confd/releases/download/v0.11.0/confd-0.11.0-linux-amd64 /usr/local/bin/confd

RUN chmod +x /usr/local/bin/confd \
    && mkdir -p /etc/confd/conf.d /etc/confd/templates

RUN curl --silent --show-error --fail --location \
    --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
    "https://caddyserver.com/download/linux/amd64?plugins=http.expires,http.realip&license=personal" \
        | tar --no-same-owner -C /usr/bin/ -xz caddy \
    && chmod 0755 /usr/bin/caddy \
    && /usr/bin/caddy -version \
    && docker-php-ext-install mbstring pdo pdo_mysql

COPY confd-configs/conf.d/ /etc/confd/conf.d/
COPY confd-configs/templates/ /etc/confd/templates/
COPY start.sh /usr/local/bin/start.sh
COPY index.php /srv/app/public/index.php

RUN chmod +x /usr/local/bin/start.sh \
    && chown -R www-data:www-data /srv/app

EXPOSE 80

CMD ["/usr/local/bin/start.sh"]