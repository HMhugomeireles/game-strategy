import Country from './country.interface';

export default interface World {
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