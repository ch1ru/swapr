FROM nginx:latest
WORKDIR /etc/nginx
COPY nginx.conf .
EXPOSE 80
EXPOSE 3000
EXPOSE 4000
EXPOSE 5000
ENTRYPOINT ["nginx", "-g", "daemon off;"]