FROM node:14

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "nodemon", "src/index.js" ]