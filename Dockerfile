FROM yarnpkg/node-yarn
MAINTAINER Mark Larah "mark@larah.me"

ADD . /code
WORKDIR /code

EXPOSE 9123

ENTRYPOINT ['/code/bin/entrypoint']