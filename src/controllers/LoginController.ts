import { NextFunction, Request, Response } from "express";
import { get, post, controller, use, bodyValidator } from "./decorators"


function logger(req: Request, res: Response, next: NextFunction): void {
  console.log('I - Middleware is triggered!');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Login</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const {email, password} = req.body;
      if (email === 'a' && password === '1') {
        // res.send(email + password)
        req.session = { loggedIn: true };
        res.redirect('/');
      } else {
        req.session = undefined;
        res.send(`
          <div>Failed to login. Click below to login again</div>
          <a href="/auth/login">Login</a>
        `);
      }
  }

  @get('/logout')
  getLogout(req: Request, res:Response) {
    req.session = undefined;
    res.redirect('/')
  }
}
