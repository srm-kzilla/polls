import { Socket } from 'socket.io';
import { socketEvents } from '../shared/sockEvents';

export const errorHandler = (io: any, socket: Socket, data: any) => {
  io.to(socket.id).emit(socketEvents.RESPONSE, data);
};

export const sendData = (io: any, socket: Socket, data: any) => {
  try {
    sortData(data);
    io.to(socket.id).emit(socketEvents.DATA, data);
  } catch (error) {
    console.log(error);
  }
};

export const sendUpdatedVote = (io: any, data: any) => {
  try {
    sortData(data);
    io.emit(socketEvents.UPDATE, data);
  } catch (error) {
    console.log(error);
  }
};

const sortData = data => {
  data.options.sort((a, b) => {
    if (a.count < b.count) return 1;
    else if (a.count > b.count) return -1;
    return 0;
  });
};
