FROM node:lts AS build
WORKDIR /home/node/app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /home/node/app/dist /usr/local/apache2/htdocs/
EXPOSE 80