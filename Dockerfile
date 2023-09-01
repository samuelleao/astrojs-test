FROM node:18 AS build
WORKDIR /home/node/app
COPY . .
RUN npm i
RUN npm run build

FROM litespeedtech/openlitespeed:1.7.18-lsphp81 AS runtime
COPY --from=build /home/node/app/dist /var/www/vhosts/localhost/html/
EXPOSE 80