import { Router } from 'express';
import ControllerInterface from './interfaces/controller.interface';

export default abstract class Controller implements ControllerInterface {
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	path: string;
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	router: Router;

	public constructor(path: string, router: Router) {
		this.path = path;
		this.router = router;
	}

	public getPath(): string {
		return this.path;
	}

	public getRouter(): Router {
		return this.router;
	}
}
