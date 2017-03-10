FROM node:latest
MAINTAINER Mark Larah "mark@larah.me"

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

COPY . /code
WORKDIR /code

EXPOSE 9123

ENTRYPOINT ["/code/bin/entrypoint"]
