import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as database from '../db/databaseInterface';

const router = express.Router();

//get USER by ID
router.route('/:id').get( async (req: Request, res: Response) => {
  try {
    const results = await database.find("username", "users", { id_user: req.params.id } );
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//signup a new USER
router.route('/signup').post( async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, email: req.body.email, password: hashedPassword, avatar: req.body.avatar };
    database.signUp(user);
    const response = "Success";
    res.json(response);
    //res.status(201).send("Sign up successful!");
  } catch {
    res.status(500).send();
  }
});
//login a USER
router.route('/login').post( async (req: Request, res: Response) => {
  let user: any = await database.find("*", "users", { email: req.body.email});
  user = user[0];
  if (user === null) {
    return res.status(400).send("Cannot find user.");
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      const response = { id_user: user.id_user, username: user.username, avatar: user.avatar };
      res.json(response);
      //res.status(202).send('Success');
    } else {
      res.status(403).send("Not Allowed");
    }
  } catch {
    res.status(403).send("Not Allowed");
    //res.status(500).send();
  }
});

export default router;