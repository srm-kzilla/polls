import express from 'express';
import config from './config';
import { Server, Socket } from 'socket.io';
import { socketEvents } from './shared/sockEvents';
import { intialize } from './socket';
import route from './api';
import cors from 'cors';
import { errorHandler } from './shared/middlewares/errorHandler';

const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(errorHandler);

  app.use('/', route());

  const httpServer = app.listen(config.port, () => {
    console.log('RUNNING');
  });

  const io = new Server(httpServer, config.corsParms);

  io.on(socketEvents.CONNECT, (socket: Socket) => intialize(socket, io));
};

startServer();
