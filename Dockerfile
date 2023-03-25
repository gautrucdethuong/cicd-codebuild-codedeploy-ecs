FROM --platform=arm64 node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
RUN npm install
USER node
CMD [ "npm","start" ]
