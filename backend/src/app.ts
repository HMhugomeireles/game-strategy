import express from 'express';
import cors from 'cors';
import Util from './util/utility';
import Controller from './controllers/interfaces/controller.interface';

class App {
	private app: express.Application;
	private port: number;

	public constructor(controllers: Controller[]) {
		this.app = express();
		this.port = 4441;

		this.initMiddlewares();
		this.initControllers(controllers);
	}

	private initMiddlewares(): void {
		Util.setEnv();
		this.app.use(express.json());
		this.app.use(cors());
	}

	private initControllers(controllers: Controller[]): void {
		controllers.forEach((controller: Controller): void => {
			this.app.use('/', controller.router);
		});
	}

	public listen(): void {
		this.app.listen(this.port, (): void => {
			console.log(`App started on port ${this.port}.`);
		});
	}
}

export default App;
