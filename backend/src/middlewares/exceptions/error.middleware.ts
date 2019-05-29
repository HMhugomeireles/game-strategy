import { Response, Request, NextFunction } from 'express';
import HttpException from './HttpException';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction): void => {
	const status = error.status || 500;
	const message = error.message || 'Something went wrong';
	res.status(status).json({
		error: message
	});
};

export default errorMiddleware;
