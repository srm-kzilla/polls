import { Router, Request, Response } from 'express';
import { validateRequest } from '../../shared/middlewares/validation';
import { addData } from './controller';
import { DataSchema } from './schema';

export const dataHandler = (): Router => {
  const app = Router();
  app.post('/', validateRequest('Body', DataSchema), handelData);
  return app;
};

const handelData = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    await addData(req.body);
    res.json({ status: true, data: 'Data added Successfully' });
  } catch (error) {
    res.status(400).json({ status: false, data: error.message });
  }
};
