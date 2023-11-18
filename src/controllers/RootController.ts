import { Request, Response, NextFunction } from "express"
import { get, use, controller } from './decorators'


function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send(`Permission denied`);
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res:Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>You are logged in!</div>
        <a href="/protected">Protected Page</a> <br/>
        <a href="/auth/logout">Logout</a>
      `)
    } else {
      res.send(`
        <div>Click here to login</div>
        <a href="/auth/login">Login</a><br/>
        <a href="/protected">Protected Page</a> <br/>
      `)
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected (req: Request, res:Response) {
    res.send(`
      <div>Welcome to protected page!</div>
      <a href="/auth/logout">Logout</a>
    `)
  }
}
