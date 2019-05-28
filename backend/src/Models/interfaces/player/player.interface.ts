import EnumStatus from './../../status.enum';
import { Schema } from 'mongoose';

export default interface PlayerInterface {
  _id: Schema.Types.ObjectId;
  nick: string;
  worldRoom: String;
  countryRoom: String;
  cityRoom: String;
  level: number;
  experience: number;
};
