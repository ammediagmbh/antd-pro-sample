# First build stage
FROM bitnami/nginx

COPY ./application/dist /app

COPY ./deployment/nginx.conf /opt/bitnami/nginx/conf/nginx.conf

# The application's directory will be the working directory

EXPOSE 80 443

WORKDIR /app

USER 1001


ENTRYPOINT [ "/opt/bitnami/scripts/nginx/entrypoint.sh" ]
CMD [ "/opt/bitnami/scripts/nginx/run.sh" ]
