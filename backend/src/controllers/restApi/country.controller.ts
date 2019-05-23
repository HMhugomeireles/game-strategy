import express, { Request, Response } from 'express';
import AbstractController from './abstractController';
import World from '../../models/World';
import Country from '../../models/Country';

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

	public async getCountryById(req: Request, res: Response): Promise<Response> {
		try {
			const countryId = req.params.countryId;
			const country = await Country.findById({ _id: countryId }).exec();
			console.log(country);

			return res.status(200).json(country);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getCountries(req: Request, res: Response): Promise<Response> {
		try {
			const country = await Country.find();
			console.log(country);

			return res.status(200).json(country);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async createCountry(req: Request, res: Response): Promise<Response> {
		try {
			const world = await World.findOne({ name: req.body.idWorld }).exec();
			req.body.idWorld = world._id;

			const countryCreate = await Country.create(req.body);
			console.log(countryCreate);

			return res.status(201).json(countryCreate);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default CountryController;
