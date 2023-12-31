FROM node:18-alpine3.17

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]