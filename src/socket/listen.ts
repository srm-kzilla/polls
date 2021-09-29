import { Socket } from 'socket.io';
import { DataReceived, ParamData, VoteData } from '../shared/customTypes';
import database from '../shared/database';
import { ackHandler, sendData, sendUpdatedVote } from './emit';

export const receiveData = async (data: DataReceived, io: any, socket: Socket) => {
  try {
    console.log(data);
    await (await database()).collection('polls').insertOne({ ...data, adminId: socket.id });
    ackHandler(io, socket, { sucess: true, msg: 'Poll Created Successfully' });
  } catch (error) {
    console.log(error);
    ackHandler(io, socket, { sucess: false, msg: 'Error in creating Poll' });
  }
};

export const sendDataHandler = async (data: ParamData, io: any, socket: Socket) => {
  try {
    console.log(data);
    var databaseResponse;
    if (data?.userId) databaseResponse = await (await database()).collection('polls').findOne({ userId: data.userId });
    else if (data.adminId)
      databaseResponse = await (await database()).collection('polls').findOne({ adminId: data.adminId });
    if (databaseResponse === null) throw Error('No Polls with that Unique ID');
    sendData(io, socket, databaseResponse);
  } catch (error) {
    console.log(error);
    ackHandler(io, socket, { sucess: false, msg: error.message });
  }
};

export const voteHandler = async (data: VoteData, io: any) => {
  try {
    console.log(data);
    await (await database())
      .collection('polls')
      .updateOne({ userId: data.userId, 'options.id': data.id }, { $inc: { 'options.$.count': 1 } });
    const dataFetched = await (await database()).collection('polls').findOne({ userId: data.userId });
    console.log(dataFetched);
    sendUpdatedVote(io, dataFetched);
  } catch (error) {
    console.log(error);
  }
};
