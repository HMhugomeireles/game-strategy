import { Schema, model } from 'mongoose';
import Util from '../util/utility';
import CityInterface from './interfaces/map/city.interface';
import { LandSchema } from './Land';

export const CitySchema = new Schema({
  uid: {
    type: String,
    set: (): string => Util.createNewUID(),
  },
  name: {
    type: String,
    required: true
  },
  land: {
    type: LandSchema,
    required: true
  }
}, 
{
  timestamps: true
});


export default model<CityInterface>('World', CitySchema);