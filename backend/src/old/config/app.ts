
import express from 'express'
import { setupRoutes } from '../../main/infrastructure/http/express/routes'
import { setupMiddlewares } from '@/old/middlewares/setupMiddleware'

const app = express();

setupMiddlewares(app);
setupRoutes(app);

export default app;