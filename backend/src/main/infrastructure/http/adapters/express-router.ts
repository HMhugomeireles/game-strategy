import { Request, Response } from 'express';
import { Controller } from '@/presentation/contracts';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<void> => {
    const httpResponse = await controller.handle();
    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}