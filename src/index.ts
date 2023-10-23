import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController'
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
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('listening on port 3000');
});
