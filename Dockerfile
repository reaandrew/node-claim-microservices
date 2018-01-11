FROM node:alpine

ADD . /app

WORKDIR /app

CMD ["./bin/www"]
