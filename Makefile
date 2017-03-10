build:
	yarn install
	webpack

.PHONY: serve
serve: build
	http-server -d false -p 9123 build