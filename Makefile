export DOCKER_TAG ?= markl-website

docker-build:
	docker build --file Dockerfile -t $(DOCKER_TAG) .

docker-run: docker-build
	docker run -it --rm --env-file env_vars -p 9123:9123 --name $(DOCKER_TAG) $(DOCKER_TAG)

.PHONY: node_modules
node_modules:
	yarn install

.PHONY: build
build: node_modules
	mkdir -p build
	node_modules/.bin/babel app -d build
	node_modules/.bin/webpack -p --config webpack.config.js

serve: build
	node ./build/webserver.js

clean:
	git clean -fdx
