export default interface City {
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