FROM node:8.11.4

WORKDIR /usr/src/graphql

ARG NODE_ENV  

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD npm start