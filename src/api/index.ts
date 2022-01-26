import { dataHandler } from './dataHandling/router';
import { urlShortner } from './urlShorten/router';
import { Router } from 'express';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

export default (): Router => {
  const app = Router();
  app.use('/create', dataHandler());
  app.use('/shrink-url', urlShortner());

  app.use(express.static(path.join(__dirname, '..', 'client')));

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
  });

  return app;
};
