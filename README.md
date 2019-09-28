## Hello Docker

Getting started with Docker

## Course

[Docker and Kubernetes: The complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide)

## Notes

## What is a Container?

A container is an instance of an image

## What is an Image?

A image is a executable package that includes everything needed to run an application (Dockerfile)

## Steps for creating a Dockerfile

1. Specify a base image
2. Run some commands to install additional programs
3. Specify a command to run on container startup

## steps for creating a Nodejs application

1. Create a Node.js app
2. Create a Dockerfile
3. Build image from dockerfile
4. Run image as container
5. Test the app

## commands

- `docker create <image-name>`
- `docker start <container id>` Also restart a stopped cotainer

  - `-a` output logs (stdout)

- `docker run <image-name> <command>` create and run a container

  - `command` execute it after the container is created

- `docker ps` list al of the running cotainers

  - `--all` list all of containers created`

- `docker system prune` Remove all stopped containers

- `docker logs <container id>` Retrive log outputs

- `docker stop <container-id>` stop gracefully SIGTERM, wait 10s

- `docker kill <container-id>` stop inmiadiatly SIGKILL

- `docker exec -it <container-id> <command>` Execute an additional command in a container

  - `-i` STDIN
  - `-t` STDOUT

  if you pass `sh` as `<command>`, you'll get full terminal access inside the context of the container, which is usefull for debugging.

- `docker run -it <image-name> sh` Start a container in a shell

- `docker build -t <username/image-name:latest> .` Building and tagging an image

- `docker image ls` list images
