import { createServer, Server } from 'http';
import express from 'express';
import socket from 'socket.io';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Controller from './controllers/interfaces/controller.interface';
import socketsActions from './controllers/socket/socketsArray';
import SocketActionInterface from './controllers/socket/socketAction.interface';
import PlayerConnectionInterface from './models/interfaces/player/playerConnection.interface';
import PlayerConnection from './services/game/player/entity/playerConnection';
import errorHandler from './middlewares/exceptions/error.middleware';

class App {
	private app: express.Application;
	private server: Server;
	private io: SocketIO.Server;
	private onlineUsers: Array<PlayerConnectionInterface>;

	public constructor(controllers: Controller[]) {
		this.app = express();
		this.server = createServer(this.app);
		this.io = socket(this.server);
		this.onlineUsers = [];

		this.database();
		this.initMiddlewares();
		this.socketsConnection();
		this.initControllers(controllers);
		this.initErrorHandle();
	}

	private initMiddlewares(): void {
		this.app.use(cookieParser());
		this.app.use(bodyParser.json({ strict: true }));
		//this.app.use(bodyParser.urlencoded());
    this.app.use(cors());
    //this.app.use(jwt({ secret: process.env.SECRET }));
  }
  
  private defineHttpHeaders(): void {

  }

	private initErrorHandle(): void {
		this.app.use(errorHandler);
	}

	private socketsConnection(): void {
		this.io.on('connection', (socketClient) => {
			let clientName = 'Client_' + (this.onlineUsers.length + 1);
			const connection = new PlayerConnection(clientName, socketClient);
			this.onlineUsers.push(connection);

			socketClient.on('disconnect', () => {
				this.onlineUsers.forEach((player, index) => {
					if (player.getSocketClient().id === socketClient.id) {
						this.onlineUsers.slice(index, 1);
					}
				});
				socketClient.broadcast.emit('onlineUsers', { onlineUsers: this.onlineUsers.length });
				console.log('Client disconnect from chat Server.');
			});

			// Send number of connection
			socketClient.emit('onlineUsers', { onlineUsers: this.onlineUsers.length });

			socketsActions.forEach((socketAction: SocketActionInterface): void => {
				socketAction.start(clientName, socketClient, this.io);
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
