import { Router } from 'express';
import { dataHandler } from './dataHandling/router';

export default (): Router => {
  const app = Router();

  app.use('/data', dataHandler());

  return app;
};
