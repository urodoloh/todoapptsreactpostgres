// import path from 'path';
// import { migrate } from 'postgres-migrations'; 
import { Pool } from 'pg';
import createConnectionPool, {sql} from '@databases/pg';
export {sql};
//import TABLE SCHEME
import tables from '@databases/pg-typed';
import DatabaseSchema from '../__generated__';

//.ENV require
const dotenv = require('dotenv')
dotenv.config()

//Pool connection config
const poolConfig = {
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    max: Number(process.env.POOL_SIZE),
    idleTimeoutMillis: Number(process.env.DB_POOL_CLIENT_IDLE_TIMEOUT),
    connectionTimeoutMillis: Number(process.env.DB_POOL_CLIENT_CONNECTION_TIMEOUT)
}
// const pool = new Pool(poolConfig);
// module.exports = pool //pool = db
const connectionSpring = 'postgres://postgres:root@localhost:5432/p_ts_psql_react_nodexpr'
const db = createConnectionPool(poolConfig);
export default db;

//postgres+typescript SCHEME (see in readme.dm)
const {todotype} = tables<DatabaseSchema>({
    databaseSchema: require('../__generated__/schema.json'),
  });
export {todotype};

//Connections Opened Totally check
// let connectionsCount = 0;
// const openConnections = createConnectionPool({
//   onConnectionOpened: () => {
//     console.log(
//       `Opened connection. Active connections = ${++connectionsCount}`,
//     );
//   },
//   onConnectionClosed: () => {
//     console.log(
//       `Closed connection. Active connections = ${--connectionsCount}`,
//     );
//   },
// });

// export default openConnections;





// const db = {
//     runMigrations:async function():Promise<void>{
//         const client = await pool.connect();
//         try {
//             await migrate({ client }, path.resolve(__dirname, 'migrations/sql'));
//             console.log("connect suc")
//         } catch (err) {
//             console.error('migrations failed', err);
//         } finally {
//             client.release();
//         };
//     },
// };
