export DOCKER_TAG ?= markl-website

docker-build:
	docker build --file Dockerfile -t $(DOCKER_TAG) .

docker-run: docker-build
	docker run -it --rm --env-file env_vars -p 9123:9123 --name $(DOCKER_TAG) $(DOCKER_TAG)

.PHONY: node_modules
node_modules:
	yarn install --verbose

build-ssr: node_modules
	node_modules/.bin/webpack --config webpack.ssr.config.js

build-web: node_modules
	node_modules/.bin/webpack --config webpack.web.config.js

serve-ssr:
	node server-side-renderer/hypernova.js

serve-web: build-web
	node ./webserver.js
