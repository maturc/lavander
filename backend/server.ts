import express, { Application, Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users';
import channelsRouter from './routes/channels';
import cors from 'cors';

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use('/users', usersRouter);
app.use('/channels', channelsRouter);

const port = process.env.PORT || '5000'
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `)
})