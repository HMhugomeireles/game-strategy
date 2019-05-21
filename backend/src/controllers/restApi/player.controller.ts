import express, { Request, Response } from 'express';
import AbstractController from './abstractController';
import bcrypt from 'bcryptjs';
import Util from '../../util/utility';
import Player from '../../models/Player';

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
		let pwHash: string;
		const salt = await bcrypt.genSalt(10);
		await bcrypt.hash(req.body.password, salt, (err, hash) => {
			pwHash = hash;
		});

		console.log(pwHash);

		const player = {
			uid: Util.createNewUID(),
			nick: req.body.nick,
			username: req.body.username,
			password: pwHash,
			email: req.body.email,
			worldRoom: req.body.wordRoom,
			countryRoom: req.body.countryRoom,
			cityRoom: req.body.cityRoom,
			landRoom: req.body.landRoom
		};

		const resCreate = await Player.create(player);
		console.log(resCreate);

		return res.status(201).json(resCreate);
	}
}

export default PlayerController;
