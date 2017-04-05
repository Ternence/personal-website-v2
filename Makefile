export DOCKER_TAG_WEB ?= markl-website-web
export DOCKER_TAG_SSR ?= markl-website-ssr

docker-build-ssr:
	docker build --file Dockerfile.ssr -t $(DOCKER_TAG_SSR) .

docker-build-web:
	docker build --file Dockerfile.web -t $(DOCKER_TAG_WEB) .

docker-run-ssr: docker-build-ssr
	docker run -it --rm --name $(DOCKER_TAG_SSR) $(DOCKER_TAG_SSR)

docker-run-web: docker-build-web
	docker run -it --rm --name $(DOCKER_TAG_WEB) $(DOCKER_TAG_WEB)

.PHONY: node_modules
node_modules:
	yarn install

build-ssr: node_modules
	node_modules/.bin/webpack --config webpack.ssr.config.js

build-web: node_modules
	node_modules/.bin/webpack --config webpack.web.config.js

serve-ssr: build-ssr
	node server-side-renderer/index.js

serve-web: build-web
	node_modules/.bin/http-server -d false -p 9123 build
