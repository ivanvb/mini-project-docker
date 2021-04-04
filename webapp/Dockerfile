FROM node:14-alpine
WORKDIR /webapp
COPY ./package.json ./yarn.lock ./packages/client/package.json ./packages/client/yarn.lock ./packages/server/package.json ./packages/server/yarn.lock ./
RUN yarn install
RUN apk add curl
COPY . .
CMD yarn dev