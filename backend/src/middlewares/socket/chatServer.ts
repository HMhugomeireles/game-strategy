import socket, { Socket } from 'socket.io';
import socketActionInterface from './socketAction.interface';

export default class ChatServer implements socketActionInterface {

  public start(socketClient: Socket, io: SocketIO.Server): void {
			socketClient.on('sendMsg', (arg) => {
				console.log(arg);
				io.emit('msg', {
					userID: socketClient.id,
					msg: arg.userMsg
				});
			});
  }

}
