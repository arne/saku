FROM alpine

RUN apk add --update nodejs
RUN npm install

ENTRYPOINT npm run serve
