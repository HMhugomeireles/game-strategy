import express, { Response, Request, NextFunction } from 'express';
import AbstractController from './abstractController';
import userModel from './../../models/user.model';
import playerModel from './../../models/player.model';
import gameSaveModel from './../../models/gameSave.model';
import WrongCredentialsException from './../../middlewares/exceptions/WrongCredentialsException';
import User from '../../models/interfaces/user/user.interface';
import jwt from 'jsonwebtoken';
import DataStoredInToken from './../../middlewares/auth/dataStoredInToken.interface';
import TokenData from './../../middlewares/auth/token.interface';
class Authentication extends AbstractController {
	public constructor() {
		super('/authentication', express.Router());

    this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().post(`${super.getPath()}/registration`, this.registration);
		super.getRouter().post(`${super.getPath()}/login`, this.login);
	}

	public async registration(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const user = await userModel.findOne({ email: req.body.email });

			if (user === null) {
				const userCreate = await userModel.create(req.body);

				const playerCreate = new playerModel({
					idUser: userCreate._id,
					nick: req.body.playerData.nick
				});

        const player = await playerCreate.save();
        const game = new gameSaveModel({ idPlayer: player._id });
        const gameSave = await game.save();

				const host = `http://${req.headers.host}`;
        
        console.log(userCreate, player);
        console.log(gameSave);

				return res.status(200).json({
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

			  return	res.status(500).json({
					error: 'Email already exists.'
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const user = await userModel.findOne({ email: req.body.email });

      if(user === null){
        next(new WrongCredentialsException());
        return;
      }

      const isPasswordValid = await user.comparePassword(req.body.password, user.password);

      if(isPasswordValid) {
        const userPlayer = await playerModel.findOne({ idUser: user._id });
        const playerGameSave = await gameSaveModel.findOne({ idPlayer: userPlayer._id });
        
        const host = `http://${req.headers.host}`;
        
        //const token = this.createToken(user);
        //res.setHeader('userCookie', [this.createCookie(token)]);

        return res.status(200).json({
          session: {
            expiresIn: '',
            token: ''
          },
          name: user.name,
          email: user.email,
					playerData: {
						nick: userPlayer.nick
					},
					links: {
						userLink: `${host}/user/${user._id}`,
						playerLink: `${host}/player/${userPlayer._id}`
          },
          game: playerGameSave
        });


      } else {
        next(new WrongCredentialsException());
        return;
      }

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  private createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }

  private createToken(user: User): TokenData {
    console.log(user);
    return;
    /*
    const expiresIn = 60 * 60; // an hour
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };*/
  }

}

export default Authentication;
