export DOCKER_TAG ?= markl-website

.PHONY: docker-build
docker-build:
	docker build -t $(DOCKER_TAG) .

.PHONY: docker-run
docker-run: docker-build
	docker run -it --rm --name $(DOCKER_TAG) $(DOCKER_TAG)

build:
	yarn install
	node_modules/.bin/webpack

.PHONY: serve
serve: build
	node_modules/.bin/http-server -d false -p 9123 build
