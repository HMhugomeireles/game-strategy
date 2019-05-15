import express from 'express';
import PlayerModel from './../models/player.model';
import Controller from './interfaces/controller.interface';

import PlayersMock from './../mocks/mocks';

class PlayerController implements Controller {
  public path = '/player';
  public router = express.Router();
  private players = PlayersMock;

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.path, this.getListPlayers);
  }

  private getListPlayers = (req: express.Request, res: express.Response) => {
    console.log(this.players);
    res.status(200).json(this.players);
  }

}

export default PlayerController;
