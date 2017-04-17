export DOCKER_TAG ?= markl-website

docker-build:
	docker build --file Dockerfile -t $(DOCKER_TAG) .

docker-run: docker-build
	docker run -it --rm --env-file env_vars -p 9123:9123 --name $(DOCKER_TAG) $(DOCKER_TAG)

.PHONY: node_modules
node_modules:
	yarn install --verbose

build-ssr: node_modules
	rm -rf ssr_bundles
	node_modules/.bin/webpack --config webpack.ssr.config.js

link-ssr: build-ssr
	ln -vsf "$(shell readlink -f ssr_bundles/*.js)" server-side-renderer/ssr-bundle.js

build-web: node_modules
	node_modules/.bin/webpack --config webpack.web.config.js

serve-ssr:
	node ./server-side-renderer/hypernova.js

serve-web: build-web
	node ./webserver.js

clean:
	rm -f server-side-renderer/ssr-bundle.js
	rm -rf build
	rm -rf ssr_bundles
