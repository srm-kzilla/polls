import { NextFunction } from 'express';
import { DataReceived } from '../../shared/customTypes';
import database from '../../shared/database';
import CustomError from '../../shared/error';

export const addData = async (data: DataReceived, next: NextFunction) => {
  try {
    await (await database()).collection('polls').insertOne({ ...data });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
