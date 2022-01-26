import { Socket } from 'socket.io';
import { DataReceived, ParamData, VoteData } from '../shared/customTypes';
import database from '../shared/database';
import { errorHandler, sendData, sendUpdatedVote } from './emit';
import { isValid } from '../shared/utils';

export const receiveDataHandler = async (data: DataReceived, io: any, socket: Socket) => {
  try {
    await (await database()).collection('polls').insertOne({ ...data, adminId: socket.id });
  } catch (error) {
    errorHandler(io, socket, { sucess: false, msg: 'Error in creating Poll' });
  }
};

export const sendDataHandler = async (data: ParamData, io: any, socket: Socket) => {
  try {
    var databaseResponse;
    if (data?.userId) databaseResponse = await (await database()).collection('polls').findOne({ userId: data.userId });
    else if (data.adminId)
      databaseResponse = await (await database()).collection('polls').findOne({ adminId: data.adminId });
    if (databaseResponse === null) throw Error('No Polls with that Unique ID');
    if (isValid(databaseResponse.createdAt, databaseResponse.validTill) == false) {
      errorHandler(io, socket, { success: false, msg: "Poll doesn't exists or expired." });
    }
    sendData(io, socket, databaseResponse);
  } catch (error) {
    errorHandler(io, socket, { sucess: false, msg: error.message });
  }
};

export const voteHandler = async (data: VoteData, io: any, socket: Socket) => {
  try {
    const currData = await (await database()).collection('polls').findOne({ userId: data.userId });
    if (currData && isValid(currData.createdAt, currData.validTill)) {
      await (await database())
        .collection('polls')
        .updateOne({ userId: data.userId, 'options.id': data.id }, { $inc: { 'options.$.count': 1 } });
      const dataFetched = await (await database()).collection('polls').findOne({ userId: data.userId });
      sendUpdatedVote(io, dataFetched);
      return;
    }
    errorHandler(io, socket, { success: false, msg: "Poll doesn't exists or expired." });
  } catch (error) {
    errorHandler(io, socket, { sucess: false, msg: error.message });
  }
};
