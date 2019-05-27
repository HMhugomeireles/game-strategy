import { Schema, model } from 'mongoose';
import Util from '../util/utility';
import CountryInterface from './interfaces/map/country.interface';

export const CountrySchema = new Schema(
	{
		idWorld: { type: Schema.Types.ObjectId, ref: 'World' },
		uid: {
			type: String,
			set: (): string => Util.createNewUID()
		},
		name: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export default model<CountryInterface>('Country', CountrySchema);
