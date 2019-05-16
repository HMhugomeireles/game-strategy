import express, { Request, Response } from 'express';
import AbstractController from './abstractController';

import Util from './../util/utility'
import Player from './../models/Player';

class PlayerController extends AbstractController {

	public constructor() {
		super('/player', express.Router());
    this.initRoutes();
	}

	private initRoutes(): void {
    super.getRouter().get(super.getPath(), this.getPlayers);
    super.getRouter().post(super.getPath(), this.createPlayer);
	}

	public async getPlayers(req: Request, res: Response): Promise<Response> {
    const players = await Player.find();

    return res.status(200).json(players);
  }
  
  public async createPlayer(req: Request, res: Response): Promise<Response> {
    const player = {
      uid: Util.createNewUID(),
      nick: req.body.nick
    }
    const resCreate = await Player.create(player);
    console.log(resCreate);

    return res.status(201).json(resCreate);
  }
}

export default PlayerController;
