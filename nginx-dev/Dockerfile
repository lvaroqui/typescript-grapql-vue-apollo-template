FROM nginx

COPY cert.crt /etc/nginx/cert.crt
COPY cert.key /etc/nginx/cert.key
COPY reverse-proxy.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g daemon off;"]