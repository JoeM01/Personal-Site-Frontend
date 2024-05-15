# Stage 1: Build the Angular app
FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/holy-grail/server/server.mjs"]

EXPOSE 4000