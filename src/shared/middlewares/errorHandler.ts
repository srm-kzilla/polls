import { Request, Response, NextFunction } from 'express';

//Error Handling Middleware
export const errorHandler = (error, req: Request, res: Response, next: NextFunction) => {
  const status = error.statusCode || 500;
  const message = error.message || 'Something Wrong Happened';
  res.status(status).send({ success: false, message });
};
