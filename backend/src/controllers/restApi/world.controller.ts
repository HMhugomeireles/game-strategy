import express, { Request, Response, NextFunction } from 'express';
import AbstractController from './abstractController';
import worldModel from './../../models/world.model';
class WorldController extends AbstractController {
	public constructor() {
		super('/world', express.Router());
    this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getWorlds);
		super.getRouter().post(super.getPath(), this.createWorld);
		super.getRouter().get(`${super.getPath()}/:worldId`, this.getWorldById);
	}

	public async getWorldById(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const worldId = req.params.worldId;
			const world = await worldModel.findById({ _id: worldId }).exec();
			console.log(world);

			return res.status(200).json(world);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getWorlds(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const world = await worldModel.find();
			console.log(world);

			return res.status(200).json(world);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async createWorld(req: Request, res: Response): Promise<Response> {
		try {
			const worldCreate = await worldModel.create(req.body);
			console.log(worldCreate);

			return res.status(201).json(worldCreate);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default WorldController;
