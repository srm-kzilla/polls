import { Socket } from 'socket.io';
import { socketEvents } from '../shared/sockEvents';

export const errorHandler = (io: any, socket: Socket, data: any) => {
  io.to(socket.id).emit(socketEvents.RESPONSE, data);
};

export const sendData = (io: any, socket: Socket, data: any) => {
  try {
    console.log('sending data');
    io.to(socket.id).emit(socketEvents.DATA, data);
  } catch (error) {
    console.log(error);
  }
};

export const sendUpdatedVote = (io: any, data: any) => {
  try {
    io.emit(socketEvents.UPDATE, data);
  } catch (error) {
    console.log(error);
  }
};
