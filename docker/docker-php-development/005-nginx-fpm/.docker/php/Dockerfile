FROM php:7.1-fpm

LABEL maintainer="Daniel Lucas"

COPY . /srv/app/
COPY .docker/php/php.ini /usr/local/etc/php/php.ini

WORKDIR /srv/app/

RUN chown -R www-data:www-data /srv/app