import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

type RequestLocation = 'Query' | 'Body';

export function validateRequest(location: RequestLocation, schema: yup.AnyObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    let _location: any;
    switch (location) {
      case 'Query':
        _location = req.query;
        break;
      case 'Body':
        _location = req.body;
    }
    try {
      const data = await schema.validate(_location, { stripUnknown: true });
      req.body = data;
      next();
    } catch (err) {
      console.log(err);
      res.status(400).send({ status: false, msg: 'Validation Failure' });
    }
  };
}
