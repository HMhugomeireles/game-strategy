import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Util from './util/utility';
import Controller from './controllers/interfaces/controller.interface';
import SocketsServer from './middlewares/socketServer';

class App {
	private app: express.Application;
	private onlineUsers: number;

	public constructor(controllers: Controller[]) {
		this.app = express();
		this.onlineUsers = 0;

		this.initMiddlewares();
		this.database();
		this.socketsConnection();
		this.initControllers(controllers);
	}

	private initMiddlewares(): void {
		Util.setEnv();
		this.app.use(express.json());
		this.app.use(cors());
	}

	private socketsConnection(): void {
		new SocketsServer(this.app);
	}

	private database(): void {
		mongoose
			.connect(process.env.MONGO_SERVER, {
				useNewUrlParser: true
			})
			.then(() => console.log('Connect on MongoDB.'))
			.catch((e: Error) => console.log('Error on connection of MongoDB: ' + e));
	}

	private initControllers(controllers: Controller[]): void {
		controllers.forEach((controller: Controller): void => {
			this.app.use('/', controller.router);
		});
	}

	public listen(): void {
		this.server.listen(process.env.PORT, (): void => {
			console.log(`App started on port ${process.env.PORT}.`);
		});
	}
}

export default App;
