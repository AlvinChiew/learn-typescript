import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';


const app = express();


// app.get('/', (req:Request, res:Response) => {
//   res.send(`
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   `); 
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['']}));
app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
