FROM node:10-slim

WORKDIR /server
COPY . /server

RUN npm install
RUN mkdir build && npm build

CMD [ "npm", "start" ]
