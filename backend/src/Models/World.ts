import { Schema, model } from 'mongoose';
import Util from './../util/utility';
import WorldInterface from './interfaces/map/world.interface';
import { CountrySchema } from './Country';

export const WorldSchema = new Schema({
  uid: {
    type: String,
    set: (): string => Util.createNewUID(),
  },
  name: {
    type: String,
    required: true
  },
  countries: {
    type: CountrySchema,
    required: true
  }
}, 
{
  timestamps: true
});


export default model<WorldInterface>('World', WorldSchema);