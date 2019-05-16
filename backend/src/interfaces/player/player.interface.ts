import { Document } from 'mongoose';

export default interface Player extends Document {
    /**
   * Definition of Proprieties
   */
  uid: string;
  nick: string;
  level: number;
  experience: Number;

  /**
   * Definition of Methods
   */
}