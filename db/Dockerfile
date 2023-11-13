FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=prueba

COPY create_table.sql /docker-entrypoint-initdb.d
