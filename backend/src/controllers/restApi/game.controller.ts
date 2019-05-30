import express, { Request, Response, NextFunction } from 'express';
import AbstractController  from './abstractController';
import PromiseErrorException from './../../middlewares/exceptions/PromiseErrorException';
import gameSaveModel from './../../models/gameSave.model';

class GameController extends AbstractController {
  public constructor() {
    super('/game', express.Router());

    this.initRoutes();
  }

  private initRoutes(): void {
    super.getRouter().get(`${super.getPath()}/player/:idPlayer`, super.authGuard(), this.getGameSaveByPlayer);
  }

  private async getGameSaveByPlayer(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const gameSave = await gameSaveModel.findOne({ idPlayer: req.params.idPlayer });

     return res.status(200).json(gameSave);
    } catch (error) {
      next( new PromiseErrorException(error))
    }
  }

}

export default GameController;