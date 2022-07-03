create scheme:
npx @databases/pg-schema-cli --database postgres://postgres:root@localhost:5432/p_ts_psql_react_nodexpr --directory src/__generated__

connection string:
postgres://postgres:root@localhost:5432/p_ts_psql_react_nodexpr

PORT=3001
DB_HOST=localhost
DB_USER=postgres
DATABASE=p_ts_psql_react_nodexpr
DB_PASSWORD=root
DB_PORT=5432
DB_POOL_SIZE=2
DB_POOL_CLIENT_IDLE_TIMEOUT=10000
DB_POOL_CLIENT_CONNECTION_TIMEOUT=2000