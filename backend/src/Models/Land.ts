import { Schema, model } from 'mongoose';
import Util from './../util/utility';
import LandInterface from './interfaces/map/land.interface';

export const LandSchema = new Schema({
  uid: {
    type: String,
    set: (): string => Util.createNewUID(),
  },
  positionX: {
    type: Number,
    required: true
  },
  positionY: {
    type: Number,
    required: true
  }
}, 
{
  timestamps: true
});


export default model<LandInterface>('World', LandSchema);