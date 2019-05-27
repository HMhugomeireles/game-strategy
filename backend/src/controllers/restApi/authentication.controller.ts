import bcrypt from 'bcryptjs';
import express, { Response, Request, NextFunction } from 'express';
import AbstractController from './abstractController';
import userModel from './../../Models/user.model';
import playerModel from './../../Models/player.model';

class Authentication extends AbstractController {
	public constructor() {
		super('/authentication', express.Router());

		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().post(`${super.getPath()}/registration`, this.registration);
		super.getRouter().post(`${super.getPath()}/login`);
	}

	private async registration(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const user = await userModel.findOne({ email: req.body.email });

			if (user === null) {
				const userCreate = await userModel.create(req.body);

				const playerCreate = new playerModel({
					idUser: userCreate._id,
					nick: req.body.playerData.nick
				});

				const player = await playerCreate.save();

				console.log(player);

				const host = `http://${req.headers.host}`;
				console.log(userCreate);

				res.status(200).json({
					name: userCreate.name,
					email: userCreate.email,
					playerData: {
						nick: req.body.playerData.nick
					},
					links: {
						userLink: `${host}/user/${userCreate._id}`,
						playerLink: `${host}/player/${userCreate._id}`
					}
				});
			} else {
				// email exists on DB
				console.log('email exists');

				res.status(500).json({
					error: 'Email already exists.'
				});
			}
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default Authentication;
