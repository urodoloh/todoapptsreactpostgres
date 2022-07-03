"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../src/db/index"));
const index_2 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 4000;
const database = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const uri = `postgres//${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/${process.env.DATABASE}`;
//App 
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// app.use(express.json())
app.use(index_2.default);
// app.get('/', (req: Request, res: Response) =>{
//     res.send('Kek Mir');
// });
const ferf = typeof process.env.DB_PASSWORD;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
    console.log(`localhost:${PORT} , ${database}, ${user}, ${password} ${ferf}`);
    // console.log(openConnections)
    // db.runMigrations();
    process.once('SIGTERM', () => {
        index_1.default.dispose().catch((ex) => {
            console.error(ex);
        });
    });
});
