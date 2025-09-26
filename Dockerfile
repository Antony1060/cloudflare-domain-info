FROM node:16

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .

RUN yarn

COPY src src

CMD ["yarn", "start"]
