import express, { Request, Response, NextFunction } from 'express';
import AbstractController from './abstractController';
import worldModel from './../../Models/world.model';
import countryModel from './../../Models/country.model';

class CountryController extends AbstractController {
	public constructor() {
		super('/country', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getCountries);
		super.getRouter().post(super.getPath(), this.createCountry);
		super.getRouter().get(`${super.getPath()}/:countryId`, this.getCountryById);
	}

	public async getCountryById(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const countryId = req.params.countryId;
			const country = await countryModel.findById({ _id: countryId }).exec();
			console.log(country);

			return res.status(200).json(country);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getCountries(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const country = await countryModel.find();
			console.log(country);

			return res.status(200).json(country);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async createCountry(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const world = await worldModel.findOne({ name: req.body.idWorld }).exec();

			const country = new countryModel({
				idWorld: world._id,
				name: req.body.name
			});
			const countryCreate = await country.save();
			console.log(countryCreate);

			return res.status(201).json(countryCreate);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default CountryController;
