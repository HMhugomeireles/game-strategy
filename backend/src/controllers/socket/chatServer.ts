import socket, { Socket } from 'socket.io';
import socketActionInterface from './socketAction.interface';

export default class ChatServer implements socketActionInterface {
	public start(name: string, socketClient: Socket, io: SocketIO.Server): void {
		socketClient.on('sendMsg', (arg) => {
			io.emit('msg', {
				userID: socketClient.id,
				nick: name,
				msg: arg.userMsg
			});
		});
	}
}
