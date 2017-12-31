all: build

.PHONY: node_modules
node_modules:
	yarn install

.PHONY: build
build: NODE_ENV = production
build: node_modules
	rm -rf {build,ssr_build}
	NODE_ENV=production ./node_modules/.bin/webpack -p --config webpack.client.config.js
	NODE_ENV=production ./node_modules/.bin/webpack -p --config webpack.ssr.config.js

clean:
	git clean -ffdx
