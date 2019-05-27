import express, { Request, Response } from 'express';
import AbstractController from './abstractController';
import Country from '../../models/Country';
import City from '../../models/City';
import Land from './../../models/Land';

class CountryController extends AbstractController {
	public constructor() {
		super('/city', express.Router());
		this.initRoutes();
	}

	private initRoutes(): void {
		super.getRouter().get(super.getPath(), this.getCities);
		super.getRouter().post(super.getPath(), this.createCity);
		super.getRouter().get(`${super.getPath()}/:cityName`, this.getCityById);
		super.getRouter().get(`${super.getPath()}/:cityName/land`, this.getLandsByCityName);
		super.getRouter().get(`${super.getPath()}/:cityName/land/position/:positionCol/:positionRow`, this.getLandInCityWithPosition);
	}

	public async getCityById(req: Request, res: Response): Promise<Response> {
		try {
			const city = await City.findById({ name: req.params.cityName }).exec();
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

			console.log(req.body.nMatrix);
			const allLandCreate = [];
			for (let row = 0; row < req.body.nMatrix; row++) {
				for (let col = 0; col < req.body.nMatrix; col++) {
					allLandCreate.push(
						new Land({
							idCity: cityCreate.id,
							positionRow: row,
							positionCol: col,
							occupation: false
						})
					);
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

	public async getLandsByCityName(req: Request, res: Response): Promise<Response> {
		try {
			const cityId = await City.findOne({ name: req.params.cityName }).exec();
			const lands = await Land.find({ idCity: cityId._id }).exec();
      console.log("Number of lands found:" + lands.length);
      
			return res.status(200).json(lands);
		} catch (error) {
			return res.status(500).json(error);
		}
  }
  
  public async getLandInCityWithPosition(req: Request, res: Response): Promise<Response> {
		try {
			const cityId = await City.findOne({ name: req.params.cityName }).exec();
      const land = await Land.find({
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
