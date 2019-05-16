import { Router } from 'express';

export default interface ControllerInterface {
	path: string;
	router: Router;
}
