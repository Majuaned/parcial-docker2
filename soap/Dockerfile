FROM node:latest
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5051

CMD ["node", "app.js"]
