FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN apk add --no-cache openssl \
 && mkdir -p /certs \
 && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
     -keyout /certs/cert.key -out /certs/cert.crt -subj "/CN=localhost"

# COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
