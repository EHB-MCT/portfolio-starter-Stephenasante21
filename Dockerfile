FROM node:latest



COPY package.json . 

RUN npm install --quit

COPY ./ ./ 


CMD ["node", "app.js"]

