import { Db, MongoClient } from 'mongodb';
import config from '../config';

let db: Db;

async function initializeClient(): Promise<Db> {
  try {
    const client = await MongoClient.connect(config.databaseURL);
    return client.db();
  } catch (err) {
    console.log('Error connecting to database!');
  }
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};
