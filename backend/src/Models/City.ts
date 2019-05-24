import { Schema, model } from 'mongoose';
import Util from '../util/utility';
import CityInterface from './interfaces/map/city.interface';

export const CitySchema = new Schema(
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

export default model<CityInterface>('City', CitySchema);
