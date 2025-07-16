FROM postgres:15

COPY init-multiple-dbs.sh /docker-entrypoint-initdb.d/init-multiple-dbs.sh
RUN chmod +x /docker-entrypoint-initdb.d/init-multiple-dbs.sh
