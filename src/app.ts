import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';

const app:Application = express();
//middlewares
app.use(express.json()); //json parsing and stringify now default in express no body-parser needed
app.use(cors()); //cors parsing and stringify now default in express

//here import routes 
import gameRoute from './routes/gameRoute';
import authRoute from './routes/authRoutes';

//here we declare routes paths
//these were the test routs to see if local host works
// app.get('/', (req:Request, res: Response) => {
//   res.send({message: "It works!"})
// });

app.use('/api/games', gameRoute);
app.use('/api/auth', authRoute);

export {app}