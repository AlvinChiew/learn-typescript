import { Router, Request, Response, NextFunction } from "express";


interface RequestWithBody extends Request {
  body:{[keys: string]: string | undefined}
}

const router = Router();


function requireAuth(req: RequestWithBody, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send(`Permission denied`);
}

router.get('/login', (req: Request, res: Response) => {
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
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body;
    if (email && password && email === 'a' && password === '1') {
      // res.send(email + password)
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      req.session = undefined;
      res.send(`
        <div>Failed to login. Click below to login again</div>
        <a href="/login">Login</a>
      `);
    }
})

router.get('/', (req: RequestWithBody, res:Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>You are logged in!</div>
      <a href="/protected">Protected Page</a> <br/>
      <a href="/logout">Logout</a>
    `)
  } else {
    res.send(`
      <div>Click here to login</div>
      <a href="/login">Login</a><br/>
      <a href="/protected">Protected Page</a> <br/>
    `)
  }
})

router.get('/logout', (req: RequestWithBody, res:Response) => {
  req.session = undefined;
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: RequestWithBody, res:Response): void => {
  res.send(`
    <div>Welcome to protected page!</div>
    <a href="/logout">Logout</a>
  `)
})

export { router };
