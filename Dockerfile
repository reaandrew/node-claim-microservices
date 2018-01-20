FROM node:alpine

WORKDIR /app

RUN npm install -g nodemon

CMD ["nodemon","./bin/www"]
