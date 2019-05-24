import express, { Request, Response } from 'express';
import AbstractController from './abstractController';
import bcrypt from 'bcryptjs';
import Player from '../../models/Player';

class PlayerController extends AbstractController {
	public constructor() {
		super('/player', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getPlayers);
		super.getRouter().post(super.getPath(), this.createPlayer);
		super.getRouter().get(`${super.getPath()}/:playerId`, this.getPlayerById);
	}

	public async getPlayerById(req: Request, res: Response): Promise<Response> {
		try {
			const playerId = req.params.playerId;
			const player = await Player.findById({ _id: playerId }).exec();
			console.log(player);

			return res.status(200).json(player);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getPlayers(req: Request, res: Response): Promise<Response> {
		try {
			const players = await Player.find();
			console.log(players);

			return res.status(200).json(players);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async createPlayer(req: Request, res: Response): Promise<Response> {
		try {
			req.body.password = bcrypt.hashSync(req.body.password, 10);
			const playerCreate = await Player.create(req.body);
			console.log(playerCreate);

			return res.status(201).json(playerCreate);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default PlayerController;
