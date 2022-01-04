FROM node:latest as prod
WORKDIR /app

COPY package*.json ./

FROM prod
RUN npm ci
COPY ./ ./
EXPOSE 3400
RUN npm test
RUN npm ci
