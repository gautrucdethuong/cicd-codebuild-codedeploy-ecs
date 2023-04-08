FROM node:18.15.0
WORKDIR /app
COPY package.json .
RUN npm install
ADD . .
EXPOSE 8080
USER node
CMD [ "node","index.js" ]