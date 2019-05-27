import { Document } from 'mongoose';
import EnumStatus from './../../status.enum';

export default interface Player extends Document {
	/**
   * Definition of Methods
   */
	getPlayerNick(): string;
	getPlayerLevel(): number;
	getPlayerExperience(): Number;
};
