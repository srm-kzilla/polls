import { DataReceived } from '../../shared/customTypes';
import database from '../../shared/database';

export const addData = async (data: DataReceived) => {
  await (await database()).collection('polls').insertOne(data);
};
