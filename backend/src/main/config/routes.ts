import { Express, Router } from 'express'
import { readFileSync } from 'fs'

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use(router);
  readFileSync(`${__dirname}/../routes`).map(async (fileName) => {
    (await import(`../routes/${fileName}`)).default(router)
  });
};
