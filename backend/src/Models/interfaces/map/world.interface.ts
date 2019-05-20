import { Document } from 'mongoose';
import Country from './country.interface';

export default interface World extends Document {
  /**
   * Definition of Proprieties
   */
  uid: string;
  name: string;
  nCountries: Array<Country>;

  /**
   * Definition of Methods
   */
  getWorldUid(): string;
  getWorldName(): string;

}