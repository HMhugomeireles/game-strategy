import { Schema, model } from 'mongoose';
import Util from '../util/utility';
import CountryInterface from './interfaces/map/country.interface';
import { CitySchema } from './City';

export const CountrySchema = new Schema({
  uid: {
    type: String,
    set: (): string => Util.createNewUID(),
  },
  name: {
    type: String,
    required: true
  },
  cities: {
    type: CitySchema,
    required: true
  }
}, 
{
  timestamps: true
});


export default model<CountryInterface>('World', CountrySchema);