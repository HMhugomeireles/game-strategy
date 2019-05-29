import express, { Request, Response, NextFunction } from 'express';
import AbstractController from './abstractController';
import cityModel from './../../models/city.model';
import landModel from './../../models/land.model';
import countryModel from './../../models/country.model';

class CountryController extends AbstractController {
	public constructor() {
		super('/city', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), super.authGuard(), this.getCities);
		super.getRouter().post(super.getPath(), super.authGuard(), this.createCity);
		super.getRouter().get(`${super.getPath()}/:cityName`, super.authGuard(), this.getCityById);
		super.getRouter().get(`${super.getPath()}/:cityName/land`, super.authGuard(), this.getLandsByCityName);
		super
			.getRouter()
			.get(
				`${super.getPath()}/:cityName/land/position/:positionCol/:positionRow`,
				this.getLandInCityWithPosition
			);
	}

	public async getCityById(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const city = await cityModel.findById({ name: req.params.cityName }).exec();
			console.log(city);

			return res.status(200).json(city);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getCities(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const city = await cityModel.find();
			console.log(city);

			return res.status(200).json(city);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async createCity(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const country = await countryModel.findOne({ name: req.body.idCountry }).exec();
			req.body.idCountry = country._id;

			const cityCreate = await cityModel.create(req.body);

			const allLandCreate = [];
			// create all lands for that city
			for (let row = 0; row < req.body.nMatrix; row++) {
				for (let col = 0; col < req.body.nMatrix; col++) {
					allLandCreate.push(
						new landModel({
							idCity: cityCreate.id,
							positionRow: row,
							positionCol: col,
							occupation: false
						})
					);
				}
      }
      
			await landModel.create(allLandCreate);

			console.log(cityCreate);
			console.log('Number Lands create for this city: ' + allLandCreate.length);

			return res.status(201).json(cityCreate);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getLandsByCityName(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const cityId = await cityModel.findOne({ name: req.params.cityName }).exec();
			const lands = await landModel.find({ idCity: cityId._id }).exec();
			console.log('Number of lands found:' + lands.length);

			return res.status(200).json(lands);
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	public async getLandInCityWithPosition(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const cityId = await cityModel.findOne({ name: req.params.cityName }).exec();
			const land = await landModel.find({
				idCity: cityId._id,
				positionCol: req.params.positionCol,
				positionRow: req.params.positionRow
			}).exec();

			console.log(land);

			return res.status(200).json(land);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export default CountryController;
