import { Socket } from 'socket.io';

export const ackHandler = (io: any, socket: Socket, data: any) => {
  io.to(socket.id).emit('Response', data);
};

export const sendData = (io: any, socket: Socket, data: any) => {
  try {
    console.log('sending data');
    io.to(socket.id).emit('data', data);
  } catch (error) {
    console.log(error);
  }
};

export const sendUpdatedVote = (io: any, data: any) => {
  try {
    io.emit('update', data);
  } catch (error) {
    console.log(error);
  }
};
