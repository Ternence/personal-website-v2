all: build

.PHONY: node_modules
node_modules:
	yarn install

.PHONY: build
build: NODE_ENV = production
build: node_modules
	rm -rf build
	NODE_ENV=production ./node_modules/.bin/webpack -p

clean:
	git clean -ffdx
