FROM node:lts-alpine3.16
RUN npm install express cors
COPY server.js .
EXPOSE 8080
CMD [ "node", "server.js" ]
