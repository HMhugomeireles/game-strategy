import Util from './../util/utility';
import GenericEntity from './interfaces/entity.interface';

class Player implements GenericEntity {
  uid: string;
  registerAt: any;
  updatedAt: any;
  private user: string;
  private pass: string;

  constructor(user: string, pass: string) {
    this.uid = Util.createNewUID();
    this.user = user;
    this.pass = pass;
  }

  public getUserUID():string {
    return this.uid;
  }

  public getUser():string {
    return this.user
  }

  public toString(): string {
    return `ID: ${this.uid} User: ${this.user}`;
  }
}

export default Player;
