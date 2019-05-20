import { Document } from 'mongoose';

export default interface Country extends Document {
    /**
   * Definition of Proprieties
   */
  uid: string;
  x: Number;
  y: Number;


  /**
   * Definition of Methods
   */
}