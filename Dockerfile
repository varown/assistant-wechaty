FROM alpine:latest

RUN apk add nodejs
RUN apk add npm
COPY ./ /var/assistant-wechaty
WORKDIR /var/assistant-wechaty
RUN  npm ci --no-color --quiet --omit=dev --registry=https://registry.npm.taobao.org
ENTRYPOINT npm run dev