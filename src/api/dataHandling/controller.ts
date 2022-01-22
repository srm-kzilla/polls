import { DataReceived } from '../../shared/customTypes';
import database from '../../shared/database';

export const addData = async (data: DataReceived) => {
  await (await database()).collection('polls').insertOne(data);
  // await (await database()).collection('polls').createIndex({ createdAt: 1 }, { expireAfterSeconds: 259200 });
  // await (await database()).collection('polls').dropIndex('*');
};
