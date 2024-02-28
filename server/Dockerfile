FROM node:latest

RUN mkdir -p /backend-app
WORKDIR /backend-app/
COPY package.json .
RUN npm install
WORKDIR /backend-app/server
COPY ./server ./server
CMD [ "npm", "run", "start:app" ]
