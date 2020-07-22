import express, { Request, Response } from 'express';
import * as database from '../db/databaseInterface';

const router = express.Router();

//get all CHANNELS a USER is part of
router.route('/:id').get( async (req: Request, res: Response) => {
  try {
    const results = await database.getChannels(req.params.id);
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;