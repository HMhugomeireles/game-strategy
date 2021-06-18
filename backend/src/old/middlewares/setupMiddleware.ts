import { Express, json } from 'express'
import helmet from 'helmet'
import cors from 'cors'

export const setupMiddlewares = (app: Express): void => {
  app.use(helmet());
  app.use(cors());
  app.use(json());
}