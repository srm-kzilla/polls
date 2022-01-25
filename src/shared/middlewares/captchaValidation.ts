import { Request, Response, NextFunction } from 'express';
import CustomError from '../error';
import config from '../../config';
import axios from 'axios';

export const validateReCaptcha = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response: any = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptchaSecretKey}&response=${req.headers['x-recaptcha-token']}`,
    );
    if (response.data.success) next();
    else next(new CustomError('Recaptcha validation Failure', 400));
  } catch (error) {
    next(new CustomError('Recaptcha validation Failure', 400));
  }
};
