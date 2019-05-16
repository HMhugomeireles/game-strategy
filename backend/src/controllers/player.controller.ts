import express from 'express';
import AbstractController from './abstractController';

import PlayersMock from './../mocks/mocks';

class PlayerController extends AbstractController {
	private players = PlayersMock;

	public constructor() {
		super('/player', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getListPlayers);
	}

	private getListPlayers = (req: express.Request, res: express.Response): void => {
		console.log(req);
		console.log(this.players);
		res.status(200).json(this.players);
	};
}

export default PlayerController;
