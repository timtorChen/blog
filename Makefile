.DEFAULT_GOAD :=build

.PHONY: build test start

YARN = yarn --cwd website 

yanr:
	$(YARN)
build:
	$(YARN) build
test:
	$(YARN) test
start:
	$(YARN) start


.PHONY: docker-build docker-build-amd

PLATFORM ?= linux/arm64,linux/amd64
FLAGS    ?= 

docker-build:
	DOCKER_CLI_EXPERIMENTAL=enabled
	docker buildx build \
	  -t timtor/blog:test \
	  --platform=$(PLATFORM) \
	  -f Dockerfile \
	  $(FLAGS) \
	  . 

docker-build-amd:
	PLATFORM=linux/amd64 FLAGS="--load" $(MAKE) docker-build 