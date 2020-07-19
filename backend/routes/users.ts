import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as database from '../db/databaseInterface';

const router = express.Router();

router.route('/').get( async (req: Request, res: Response) => {
  try {
    const results = await database.findAll("users");
    console.log(results)
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.route('/:id').get( async (req: Request, res: Response) => {
  try {
    const results = await database.findById("users", { id_user: req.params.id }, "username");
    console.log(results)
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});
router.route('/signup').post( async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const user = { username: req.body.username, email: req.body.email, password: hashedPassword };
    database.signUp(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});
router.route('/login').post( async (req: Request, res: Response) => {
  const user: any = await database.findByEmail(req.body.email);//type
  if (user === null) {
    return res.status(400).send("Cannot find user.");
  }
  try {
    if(await bcrypt.compare(req.body.password, user[0].password)) {
      res.json(user[0]);
      //res.status(202).send('Success');
    } else {
      res.status(403).send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

export default router;