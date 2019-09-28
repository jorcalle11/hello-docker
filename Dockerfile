FROM node:10-alpine

WORKDIR /usr/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 3000

CMD [ "node", "index.js" ]