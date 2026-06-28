FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=production

COPY . .

EXPOSE 10000

CMD ["node", "app.js"]
