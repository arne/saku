FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install
WORKDIR /app/node_modules/better-sqlite3
RUN npm install -g node-gyp
RUN apk add --no-cache python make gcc g++ libc-dev && node-gyp configure && node-gyp build && apk --no-cache del make gcc g++ libc-dev python
WORKDIR /app
RUN npm rebuild node-sass

ENTRYPOINT npm run serve
