import { Application } from 'express';
import { createServer, Server } from 'http';
import socket from 'socket.io';

class SocketsServer {
	private server: Server;
	private io: SocketIO.Server;

	public constructor(app: Application) {
		this.server = createServer(app);
		this.io = socket(this.server);
	}

	public listenSocket() {
		console.log('aa');
	}
}

export default SocketsServer;
