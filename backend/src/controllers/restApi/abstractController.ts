import { Router, Request } from 'express';
import ControllerInterface from '../interfaces/controller.interface';
import * as authGuard from '../../middlewares/auth/authGuard'


export default abstract class Controller implements ControllerInterface {
	path: string;
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

  public authGuard() {
    return authGuard.secureGuard;
  }

}
