import express, {Request, Response, Express} from "express";
import db, {sql} from '../src/db/index'; 
import router from "./routes/index";
import cors from "cors"

const PORT = process.env.PORT || 4000;
const database = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const uri: string = `postgres//${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/${process.env.DATABASE}`
//App 
const app: Express = express();
app.use(cors())
app.use(express.json())
app.use(router)
// app.get('/', (req: Request, res: Response) =>{
//     res.send('Kek Mir');
// });
const ferf = typeof process.env.DB_PASSWORD;


app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
    console.log(`localhost:${PORT} , ${database}, ${user}, ${password} ${ferf}`);
    // console.log(openConnections)
    // db.runMigrations();
    process.once('SIGTERM', () => {
        db.dispose().catch((ex) => {
          console.error(ex);
        });
      });
})