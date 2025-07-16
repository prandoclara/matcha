#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER auth_user WITH PASSWORD 'auth_password';
    CREATE DATABASE auth_db OWNER auth_user;

    \connect auth_db

    GRANT ALL PRIVILEGES ON DATABASE auth_db TO auth_user;
    GRANT ALL ON SCHEMA public TO auth_user;
    ALTER SCHEMA public OWNER TO auth_user;
EOSQL
