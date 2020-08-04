import express, { Request, Response } from 'express';
import * as database from '../db/databaseInterface';

const router = express.Router();

//get all CHANNELS
router.route('/').get( async (req: Request, res: Response) => {
  try {
    const results = await database.getAllChannels();
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//get all MESSAGES in a CHANNEL
router.route('/messages/:id').get( async (req: Request, res: Response) => {
  try {
    const results = await database.getMessages(req.params.id);
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//post a new MESSAGES
router.route('/messages/new').post( async (req: Request, res: Response) => {
  try {
    const message = { id_user: req.body.id_user, id_channel: req.body.id_channel, message: req.body.message };
    database.postMessage(message);
    res.status(201).send("Message posted!");
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;