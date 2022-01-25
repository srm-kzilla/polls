import { Router, Request, Response, NextFunction } from 'express';
import { urlSchema } from './schema';
import { validateRequest } from '../../shared/middlewares/validation';
import { urlShort } from '../../shared/customTypes';
import { getShortURL } from './controller';
import CustomError from '../../shared/error';

export const urlShortner = (): Router => {
  const app = Router();
  app.post('/', validateRequest('body', urlSchema), handelUrlShorten);
  return app;
};

const handelUrlShorten = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getShortURL(req.body, next);
    res.json({ success: true, data: result });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
