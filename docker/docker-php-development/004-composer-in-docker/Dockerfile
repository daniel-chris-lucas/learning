FROM php:7.1-apache

COPY composer-installer.sh /usr/local/bin/composer-installer

# Install composer
RUN apt-get -yqq update \
    && apt-get -yqq install --no-install-recommends unzip \
    && chmod +x /usr/local/bin/composer-installer \
    && composer-installer \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer \
    && composer --version

# Cache Composer dependencies
WORKDIR /tmp
ADD app/composer.json app/composer.lock app/auth.json /tmp/
RUN mkdir -p database/seeds \
    mkdir -p database/factories \
    && composer install \
        --no-interaction \
        --no-plugins \
        --no-scripts \
        --prefer-dist \
    && rm -rf composer.json composer.lock auth.json \
        database/ vendor/

# Add the project
ADD app /var/www/html

WORKDIR /var/www/html

RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist