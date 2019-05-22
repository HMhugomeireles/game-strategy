import PlayerConnectionInterface from './../../../models/interfaces/player/playerConnection.interface';
import { Socket } from 'socket.io';

class PlayerConnection implements PlayerConnectionInterface {
  private name: string;  
  private socketClient: Socket;

  public constructor(name: string, socket: Socket){
    this.name = name;
    this.socketClient = socket;
  }

  public getName(): string {
    return this.name;
  }

  public getSocketClient(): Socket {
    return this.socketClient;
  }

}

export default PlayerConnection;