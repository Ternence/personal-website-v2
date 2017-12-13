FROM node:latest
MAINTAINER Mark Larah "mark@larah.me"

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

COPY . /code
WORKDIR /code

EXPOSE 9123
RUN ["/root/.yarn/bin/yarn", "install"]
HEALTHCHECK CMD curl --fail http://localhost:9123/ || exit 1
ENTRYPOINT ["/code/bin/entrypoint-web"]
