import { Router } from 'express';
import { dataHandler } from './dataHandling/router';
import { urlShortner } from './urlShorten/router';

export default (): Router => {
  const app = Router();

  app.use('/data', dataHandler());
  app.use('/shortUrl', urlShortner());

  return app;
};
