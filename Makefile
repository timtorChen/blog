.DEFAULT_GOAD :=build

.PHONY: build docker-build docker-build-local

build:
	yarn build

IMAGE     = timtor/blog
VERSION  ?= latest
TAG      ?= timtor/blog:$(VERSION)
PLATFORM ?= linux/arm64,linux/amd64
FLAGS    ?= 
	
docker-build:
	DOCKER_CLI_EXPERIMENTAL=enabled
	docker buildx build \
	  -t $(TAG) \
	  --platform=$(PLATFORM) \
	  -f deploy/Dockerfile \
	  $(FLAGS) \
	  . 

docker-build-local:
	PLATFORM=linux/amd64 $(MAKE) docker-build