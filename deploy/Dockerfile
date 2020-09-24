FROM fedora:32 AS builder
RUN dnf install nodejs yarnpkg -y -q
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn install
RUN gatsby build

FROM nginx:alpine
COPY --from=builder /app/public  /usr/share/nginx/html
COPY deploy/nginx/example.nginx.conf /etc/nginx/nginx.conf
EXPOSE 80