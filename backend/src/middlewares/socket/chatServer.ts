import socket from 'socket.io';

class ChatServer {
  private io: SocketIO.Server;

  public constructor(socketServer: SocketIO.Server) {
    this.io = socketServer;

    this.start();
  }

  private start(): void {
    this.io.on('connection', (socket) => {

      socket.on('disconnect', () => {
        console.log('Client disconnect from chat Server.'):
      });

			socket.on('sendMsg', (arg) => {
				console.log(arg);
				this.io.emit('msg', {
					userID: socket.id,
					msg: arg.userMsg
				});
			});

    });
  }

}