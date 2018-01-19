FROM node:0.10.38

WORKDIR /app

RUN npm install -g nodemon

CMD ["nodemon","./bin/www"]
