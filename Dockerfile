FROM node:latest as prod
WORKDIR /app

COPY package*.json ./

FROM prod
RUN npm ci
COPY ./ ./
EXPOSE 3400
CMD ["npm","test"]

FROM prod
RUN npm ci
COPY ./ ./
EXPOSE 3400
CMD ["npm","start"]