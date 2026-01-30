FROM nginxinc/nginx-unprivileged:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./Jenkins-CICD /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
