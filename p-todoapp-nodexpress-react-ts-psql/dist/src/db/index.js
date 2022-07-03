"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todotype = exports.sql = void 0;
const pg_1 = __importStar(require("@databases/pg"));
Object.defineProperty(exports, "sql", { enumerable: true, get: function () { return pg_1.sql; } });
//import TABLE SCHEME
const pg_typed_1 = __importDefault(require("@databases/pg-typed"));
//.ENV require
const dotenv = require('dotenv');
dotenv.config();
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
};
// const pool = new Pool(poolConfig);
// module.exports = pool //pool = db
const connectionSpring = 'postgres://postgres:root@localhost:5432/p_ts_psql_react_nodexpr';
const db = (0, pg_1.default)(poolConfig);
exports.default = db;
//postgres+typescript SCHEME (see in readme.dm)
const { todotype } = (0, pg_typed_1.default)({
    databaseSchema: require('../__generated__/schema.json'),
});
exports.todotype = todotype;
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
