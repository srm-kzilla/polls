import { Router, Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../shared/middlewares/validation';
import { addData } from './controller';
import { DataSchema } from './schema';
import CustomError from '../../shared/error';

export const dataHandler = (): Router => {
  const app = Router();
  app.post('/', validateRequest('body', DataSchema), handelData);
  return app;
};

const handelData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addData(req.body, next);
    res.json({ status: true, data: 'Data added Successfully' });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
