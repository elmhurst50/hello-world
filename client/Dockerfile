FROM php:7.4.20-apache

COPY .docker/.bash_aliases /root/.bash_aliases
RUN echo ". ~/.bash_aliases" >> /root/.bashrc

ENV NODE_VERSION=16.17.1
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN apt-get update && apt-get install -y python2
RUN a2enmod proxy
RUN a2enmod proxy_http

RUN npm install --global yarn
RUN npm install pm2@latest -g

COPY  .docker/vhosts/vhost.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html/src


