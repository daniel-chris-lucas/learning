FROM php:7.1-apache

LABEL maintainer="Daniel Lucas"
COPY .docker/php/php.ini /usr/local/etc/php/
COPY . /srv/app
COPY .docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
RUN docker-php-ext-install pdo_mysql opcache \
    && pecl install xdebug-2.5.1 \
    && docker-php-ext-enable xdebug \
    && a2enmod rewrite

COPY .docker/php/xdebug-dev.ini /usr/local/etc/php/conf.d/xdebug-dev.ini

RUN cp -R /usr/local/etc/php/conf.d \
    /usr/local/etc/php/conf.d-dev \
    && rm -f /usr/local/etc/php/conf.d/*-dev.ini \
    && rm -f /usr/local/etc/php/conf.d/*xdebug.ini

RUN chown -R www-data:www-data /srv/app
