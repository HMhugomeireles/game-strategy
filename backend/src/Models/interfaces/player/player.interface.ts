import { Document } from 'mongoose';
import EnumStatus from './../../status.enum';

export default interface Player extends Document {
	/**
   * Definition of Proprieties
   */
	uid: string;
  nick: string;
  email: string;
  password: string;
  worldRoom: string;
  countryRoom: String;
  cityRoom: String;
	level: number;
	experience: Number;

	/**
   * Definition of Methods
   */
	getPlayerUid(): string;
	getPlayerNick(): string;
	getPlayerLevel(): number;
	getPlayerExperience(): Number;
};
