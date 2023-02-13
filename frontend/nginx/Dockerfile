FROM nginx:latest
WORKDIR /etc/nginx
COPY nginx.conf .
EXPOSE 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]