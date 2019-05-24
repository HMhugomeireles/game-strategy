import express, { Request, Response } from 'express';
import AbstractController from './abstractController';
import Country from '../../models/Country';
import City from '../../models/City';
import Land from '../../models/Land';
import { Schema } from 'mongoose';

class CountryController extends AbstractController {
	public constructor() {
		super('/city', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getCities);
		super.getRouter().post(super.getPath(), this.createCity);
		super.getRouter().get(`${super.getPath()}/:cityId`, this.getCityById);
	}

	public async getCityById(req: Request, res: Response): Promise<Response> {
		try {
			const cityId = req.params.countryId;
			const city = await City.findById({ _id: cityId }).exec();
			console.log(city);

			return res.status(200).json(city);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getCities(req: Request, res: Response): Promise<Response> {
		try {
			const city = await City.find();
			console.log(city);

			return res.status(200).json(city);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async createCity(req: Request, res: Response): Promise<Response> {
		try {
			const country = await Country.findOne({ name: req.body.idCountry }).exec();
			req.body.idCountry = country._id;

			const cityCreate = await City.create(req.body);

      console.log(req.body.nMatrix)
			const allLandCreate = [];
			for (let row = 0; row < req.body.nMatrix; row++) {
				for (let col = 0; col < req.body.nMatrix; col++) {
					let land = new Land({
						idCity: cityCreate.id,
						positionRow: row,
						positionCol: col,
						occupation: false
          });
					allLandCreate.push(land);
				}
			}

      // create all lands for that city
      await Land.create(allLandCreate);
			console.log(cityCreate);
			console.log('Number Lands create for this city: ' + allLandCreate.length);

			return res.status(201).json(cityCreate);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default CountryController;
