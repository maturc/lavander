import express, { Application, Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users';
import channelsRouter from './routes/channels';
import cors from 'cors';
import socket from 'socket.io'

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use('/users', usersRouter);
app.use('/channels', channelsRouter);

const port = process.env.PORT || '5000'
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port} `)
})


const io = socket(server);

io.on('connection', (socket) => {
  console.log("Socket connection established:", socket.id);
  socket.on('disconnect', () => { 
    console.log('Disconnected from socket:', socket.id) 
  }); 

  socket.on('new message', (data) => {
    console.log('there is a new msg:', data);
    io.emit("new message", data);
  });
});