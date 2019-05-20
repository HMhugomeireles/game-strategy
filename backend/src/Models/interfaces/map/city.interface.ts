import { Document } from 'mongoose';

export default interface City extends Document {
    /**
   * Definition of Proprieties
   */
  uid: string;
  name: string;
  /**
   * Definition of Methods
   */
  getCityUid(): string;
  getCityName(): string;
}