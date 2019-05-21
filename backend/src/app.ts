import { createServer, Server } from 'http';
import express from 'express';
import socket from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import Util from './util/utility';
import Controller from './controllers/interfaces/controller.interface';
import socketsActions from './middlewares/socket/socketsArray';
import SocketActionInterface from './middlewares/socket/socketAction.interface';

class App {
  private app: express.Application;
  private server: Server;
	private io: SocketIO.Server;
  private onlineUsers: number;
  

	public constructor(controllers: Controller[]) {
    this.app = express();
    this.server = createServer(this.app);
		this.io = socket(this.server);
		this.onlineUsers = 0;

		this.database();
		this.initMiddlewares();
		this.socketsConnection();
		this.initControllers(controllers);
	}

	private initMiddlewares(): void {
		Util.setEnv();
		this.app.use(express.json());
		this.app.use(cors());
	}

	private socketsConnection(): void {
    this.io.on('connection', (socketClient) => {

      socketClient.on('disconnect', () => {
        this.onlineUsers-=1;
        console.log('Client disconnect from chat Server.');
      });

      // Send number of connection
      socketClient.emit('onlineUsers', { onlineUsers: this.onlineUsers+=1 });

      socketsActions.forEach( (socketAction: SocketActionInterface): void => {
        socketAction.start(socketClient, this.io);
      });
    });
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
