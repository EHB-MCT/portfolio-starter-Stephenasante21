FROM node:latest

WORKDIR /usr/app

COPY package*.json ./ 

RUN npm install --quiet

COPY ./src ./src

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

