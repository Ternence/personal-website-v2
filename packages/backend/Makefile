all: build

node_modules: package.json
	yarn install

.PHONY: build
build: node_modules
	NODE_ENV=production ./node_modules/.bin/babel src --out-dir build
	rsync --recursive node_modules/@larah/personal-website-frontend/build/ build/public

clean:
	git clean -ffdx
