import { Router } from 'express';
import { dataHandler } from './dataHandling/router';
import { urlShortner } from './urlShorten/router';

export default (): Router => {
  const app = Router();

  app.use('/polls/create', dataHandler());
  app.use('/shrink-url', urlShortner());

  return app;
};
