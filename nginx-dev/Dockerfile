FROM nginx

COPY cert.crt /etc/nginx/cert.crt
COPY cert.key /etc/nginx/cert.key
COPY reverse-proxy.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/opt/scripts/wait-for-it.sh", "front:443", "--timeout=0", "--", "nginx", "-g daemon off;"]
