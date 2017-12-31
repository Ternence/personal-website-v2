all: build

.PHONY: node_modules
node_modules:
	yarn install

.PHONY: build
build: node_modules
	rm -rf build
	NODE_ENV=production ./node_modules/.bin/babel src --out-dir build
	rsync --recursive node_modules/@larah/personal-website-frontend/build/ build/public

clean:
	git clean -ffdx
