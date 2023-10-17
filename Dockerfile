FROM node:18 AS build

RUN npm i -g bun pm2
RUN pm2 install pm2-logrotate && pm2 set pm2-logrotate:max_size 10M && pm2 set pm2-logrotate:compress true
WORKDIR /app

RUN mkdir build
COPY . .

RUN bun install

EXPOSE 4000

RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]