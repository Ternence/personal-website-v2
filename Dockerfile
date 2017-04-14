FROM node:latest
MAINTAINER Mark Larah "mark@larah.me"

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Install supervisor
RUN apt-get update && apt-get install -y supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
RUN mkdir -p /var/log/supervisor

COPY . /code
WORKDIR /code

EXPOSE 9123

ENTRYPOINT ["/usr/bin/supervisord"]
