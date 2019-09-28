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

## Docker commands

- `docker create <image-name>`
- `docker start <container id>` Also restart a stopped cotainer

  - `-a` output logs (stdout)

- `docker run <image-name> <command>` create and run a container

  - `docker run -it <image-name> sh` Start a container in a shell and get full terminal access inside the context of the container, which is usefull for debugging.

- `docker run -p 5000:3000 -d <username>/image-name`

  - `-p` Port mapping
  - `-d` Run in detached mode

* `docker ps` list al of the running cotainers

  - `--all` list all of containers created`

* `docker system prune` Remove all stopped containers

* `docker logs <container id>` Retrive log outputs

* `docker stop <container-id>` stop gracefully SIGTERM, wait 10s

* `docker kill <container-id>` stop inmiadiatly SIGKILL

* `docker exec -it <container-id> <command>` Execute an additional command in a container

  - `-i` STDIN
  - `-t` STDOUT

- `docker build -t <username/image-name:latest> .` Building and tagging an image

- `docker image ls` list images

- `docker push username/repository:tag` Upload a tagged image to the repository (Docker hub)

## Docker Compose

Separate CLI that gets installed along with Docker, it's used to start up multiple docker containers at the same time in an application.

## steps to run an application with compose

1. Define the app environment with `Dockerfile` so it can be reproduced anywhere.
2. Define the services that make up the app in a `docker-compose.yml` file so they can be run together in an isolated environment.
3. Run `docker-compose up` and Compose starts and runs the entire app.

## commands

- `docker-compose up`

  - `--build` This command is like `docker build .` and `docker run myimage` together
  - `-d` Run in detached mode

- `docker-compose down`

- `docker-compose ps` this command must be executed within a folder that has a `docker-compose.yml` file, otherwise, it'll throw an error.
