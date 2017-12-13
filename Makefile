export DOCKER_TAG ?= markl-website

docker-build:
	docker build --file Dockerfile -t $(DOCKER_TAG) .

docker-run: docker-build
	docker run -it --rm -p 9123:9123 --name $(DOCKER_TAG) $(DOCKER_TAG)

.PHONY: node_modules
node_modules:
	yarn install

.PHONY: build
build: node_modules
	rm -rf build
	./node_modules/.bin/webpack -p --config webpack.config.js
	./node_modules/.bin/babel src/server.js -o build/server.js
	# TODO: replace this with a seperate SSR webpack build?
	./node_modules/.bin/babel src/web -d build/web
	# TODO: include this in the webpack build (that is guaranteed to ignore CommonsChunkPlugin)
	./node_modules/.bin/babel src/web/public/service-worker.js -o build/web/public/service-worker.js

serve: build
	node ./build/server.js

clean:
	git clean -fdx
