build:
	yarn install
	webpack

serve: build
	http-server -d false -p 9123 build
