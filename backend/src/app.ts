import express from 'express';
import httpModule from 'http';
import socket from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import Util from './util/utility';
import Controller from './controllers/interfaces/controller.interface';

class App {
	private app: express.Application;
	private server: any;
  private io: any;
  private onlineUsers: number;

	public constructor(controllers: Controller[]) {
		this.app = express();
		this.server = httpModule.createServer(this.app);
    this.io = socket(this.server);
    this.onlineUsers = 0;

		this.initMiddlewares();
		this.database();
		this.clientConnection();
		this.initControllers(controllers);
	}

	private initMiddlewares(): void {
		Util.setEnv();
		this.app.use(express.json());
		this.app.use(cors());
	}

	private clientConnection(): void {
		this.io.on('connection', (socket: any) => {
			console.log('Client connected! socketID:' + socket.id);
      this.onlineUsers+=1;

      socket.on('disconnect', () => {
        console.log('Client disconnected. sockedID:' + socket.id);
      });

      socket.emit('onlineUsers', {
        onlineUsers: this.onlineUsers
      });

			socket.on('sendMsg', (arg) => {
        console.log(arg)
        this.io.emit('msg', 
        { 
          userID: socket.id,
          msg: arg.userMsg
        });
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
