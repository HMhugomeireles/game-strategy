import { Schema, model, Document } from 'mongoose';
import Util from '../util/utility';
import City from './interfaces/map/city.interface';

const CitySchema = new Schema(
	{
		idCountry: { type: Schema.Types.ObjectId, ref: 'Country' },
		uid: {
			type: String,
			set: (): string => Util.createNewUID()
		},
		name: {
			type: String,
			required: true
    },
    nMatrix: {
      type: Number,
      required: true
    }
	},
	{
		timestamps: true
	}
);

const cityModel = model<City & Document>('City', CitySchema);

export default cityModel;
