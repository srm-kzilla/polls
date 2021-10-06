import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import errorClass from '../error';

type RequestLocation = 'query' | 'body' | 'params';

export function validateRequest(location: RequestLocation, schema: yup.AnyObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    let _location: any;
    switch (location) {
      case 'query':
        _location = req.query;
        break;
      case 'body':
        _location = req.body;
        break;
      case 'params':
        _location = req.params;
    }
    try {
      const data = await schema.validate(_location, { stripUnknown: true });
      req.body = data;
      next();
    } catch (err) {
      next(new errorClass('Validation Failure', 400));
    }
  };
}
