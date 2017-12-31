export DOCKER_TAG ?= magicmark/personal-website

docker-build:
	docker build -t $(DOCKER_TAG) .

docker-run: docker-build
	docker run --rm -p 9123:9123 --name mark-website $(DOCKER_TAG)

itest: docker-build
	docker run -d --rm -p 9123:9123 --name mark-website $(DOCKER_TAG)
	bash -c "\
		for i in 1 2 3 4 5; do docker exec -it mark-website /bin/bash -c 'curl -L localhost:9123' && break || sleep 5; done; \
		docker stop mark-website"

.PHONY: node_modules
node_modules:
	yarn install

.PHONY: build
build: node_modules
	echo "Nothing to build!"

clean:
	git clean -fdx
