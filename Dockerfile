# First build stage
FROM bitnami/nginx

COPY ./application/dist /app

# The application's directory will be the working directory

EXPOSE 8080 8443

WORKDIR /app

USER 1001


ENTRYPOINT [ "/opt/bitnami/scripts/nginx/entrypoint.sh" ]
CMD [ "/opt/bitnami/scripts/nginx/run.sh" ]
