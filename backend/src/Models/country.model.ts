import { Schema, model, Document } from 'mongoose';
import Util from '../util/utility';
import Country from './interfaces/map/country.interface';

const CountrySchema = new Schema(
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

const countryModel = model<Country & Document>('Country', CountrySchema);

export default countryModel;
