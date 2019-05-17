import { Document } from 'mongoose';
import EnumStatus from './../../status.enum';

export default interface Player extends Document {
	/**
   * Definition of Proprieties
   */
	uid: string;
	nick: string;
	username: string;
	password: string;
	level: number;
	experience: Number;
	Online: boolean;

	/**
   * Definition of Methods
   */
	getPlayerUid(): string;
	getPlayerNick(): string;
	getPlayerLevel(): number;
	getPlayerExperience(): Number;
	getPlayerStatus(): EnumStatus;
};
