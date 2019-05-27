export default interface World {
	/**
   * Definition of Proprieties
   */
	uid: string;
	name: string;

	/**
   * Definition of Methods
   */
	getWorldUid(): string;
	getWorldName(): string;
};
