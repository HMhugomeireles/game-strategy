import { Socket } from "socket.io";

export default interface PlayerConnect {

  getName(): string;
  getSocketClient(): Socket;
}