import { Socket } from 'socket.io';
import { DataReceived, ParamData, VoteData } from '../shared/customTypes';
import { receiveDataHandler, sendDataHandler, voteHandler } from './listen';
import { socketEvents } from '../shared/sockEvents';

const { SEND, VOTE, GET_DATA } = socketEvents;

export const intialize = (socket: Socket, io: any) => {
  //Socket Event to Where Question Data is Received and Added to Database
  socket.on(SEND, (data: DataReceived) => receiveDataHandler(data, io, socket));

  // Send the Question Data to Whoever connects with req param as unique ID for poll
  socket.on(GET_DATA, (data: ParamData) => sendDataHandler(data, io, socket));

  // Vote Event Where User sends the vote
  socket.on(VOTE, (data: VoteData) => voteHandler(data, io, socket));
};
