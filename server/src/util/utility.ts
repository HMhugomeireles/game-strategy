import uuid from 'uuid/v4';

class Util {
	/**
   * Generate UUID(Universally unique identifier)
   * Use the lib uuid-js
   * @returns String
   */
	public static createNewUID(): string {
		return uuid();
	}
}

export default Util;
