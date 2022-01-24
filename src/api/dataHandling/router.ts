import { Router, Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../shared/middlewares/validation';
import { addData } from './controller';
import { DataSchema } from './schema';
import CustomError from '../../shared/error';
import { validateReCaptcha } from '../../shared/middlewares/captchaValidation';

export const dataHandler = (): Router => {
  const app = Router();
  app.post('/', validateReCaptcha, validateRequest('body', DataSchema), handleData);
  return app;
};

const handleData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addData(req.body);
    res.json({ status: true, data: 'Data added Successfully' });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
