import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Util from './util/utility';
import Controller from './controllers/interfaces/controller.interface';

class App {
	private app: express.Application;
	private port: number;

	public constructor(controllers: Controller[]) {
		this.app = express();

    this.initMiddlewares();
    this.database();
		this.initControllers(controllers);
	}

	private initMiddlewares(): void {
		Util.setEnv();
		this.app.use(express.json());
		this.app.use(cors());
  }
  
  private database(): void {
    console.time('Connected to Mongo DB!');
    mongoose.connect(process.env.MONGO_SERVER, {
      useNewUrlParser: true
    });
  }

	private initControllers(controllers: Controller[]): void {
		controllers.forEach((controller: Controller): void => {
			this.app.use('/', controller.router);
		});
	}

	public listen(): void {
		this.app.listen(process.env.PORT, (): void => {
			console.log(`App started on port ${process.env.PORT}.`);
		});
	}
}

export default App;
