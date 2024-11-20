FROM php:fpm

# Install MySQLi extension
RUN docker-php-ext-install mysqli
