
import express from 'express'
import { setupRoutes } from './routes'
import { setupMiddlewares } from '@/main/middlewares/setupMiddleware'

const app = express();

setupMiddlewares(app);
setupRoutes(app);

export default app;