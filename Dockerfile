FROM node:12.16.1-alpine3.10

WORKDIR /USR/APP
COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000
CMD ["npm", "start"]