FROM node:14-alpine
WORKDIR /webapp
COPY ./package.json ./yarn.lock  ./
COPY ./packages/client/package.json ./packages/client/
COPY ./packages/server/package.json  ./packages/server/
RUN yarn install --prod=false
RUN apk add curl
COPY . .
CMD yarn dev