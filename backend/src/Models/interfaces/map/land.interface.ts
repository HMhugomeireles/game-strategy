import { Document } from 'mongoose';

export default interface Country extends Document {
	/**
   * Definition of Proprieties
   */
	playerId: string;
	uid: string;

	/**
   * Definition of Methods
   */
};
