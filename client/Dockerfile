FROM node:19.3.0-alpine3.17

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@13

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--open"]
