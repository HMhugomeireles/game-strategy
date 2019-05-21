import { Socket, Server } from 'socket.io';

interface SocketActionGeneric {
  start(socketClient: Socket, io: Server): void;
}

export default SocketActionGeneric;
