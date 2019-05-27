import express, { Request, Response, NextFunction } from 'express';
import AbstractController from './abstractController';
import playerModel from './../../Models/player.model';

class PlayerController extends AbstractController {
	public constructor() {
		super('/player', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getPlayers);
		super.getRouter().get(`${super.getPath()}/:playerId`, this.getPlayerById);
	}

	public async getPlayerById(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const playerId = req.params.playerId;
			const player = await playerModel.findById({ _id: playerId }).exec();
			console.log(player);

			return res.status(200).json(player);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getPlayers(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const players = await playerModel.find();
			console.log(players);

			return res.status(200).json(players);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default PlayerController;
