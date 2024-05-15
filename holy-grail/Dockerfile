# Stage 1: Build the Angular app
FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM node:18-alpine
WORKDIR /usr/app
COPY --from=build /app/dist/holy-grail/server ./
CMD node server.mjs
EXPOSE 4000