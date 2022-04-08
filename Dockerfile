FROM node:17-slim

WORKDIR /doe-backend/

# COPY ./server/package.json ./server/package-lock.json /doe-backend/

COPY ./server/ /doe-backend/

RUN npm i --silent

USER node

EXPOSE 3000
