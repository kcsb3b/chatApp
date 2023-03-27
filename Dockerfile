FROM denoland/deno:alpine-1.29.2

EXPOSE 7777

WORKDIR /app

COPY . .

RUN deno cache app.js

CMD [ "run", "--allow-net", "--allow-read", "--watch", "--unstable", "--allow-env", "app.js" ]