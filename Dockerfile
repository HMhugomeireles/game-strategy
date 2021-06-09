FROM node:14.17.0-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run dev

CMD [ "npm", "start" ]
EXPOSE 7701