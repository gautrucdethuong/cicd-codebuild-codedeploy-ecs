# FROM node:18.15.0
FROM --platform=linux/amd64 node:18.15.0
WORKDIR /app
COPY package.json .
RUN npm install --force
ADD . .
EXPOSE 8080
USER node
CMD [ "npm","start" ]