import { Socket, Server } from 'socket.io';

interface SocketActionGeneric {
  start(name: string, socketClient: Socket, io: Server): void;
}

export default SocketActionGeneric;
