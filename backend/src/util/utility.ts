import uuid from 'uuid/v4';
import Dotenv from 'dotenv';

class Util {
	/**
   * Generate UUID(Universally unique identifier)
   * Use the lib uuid-js
   * @returns String
   */
	public static createNewUID(): string {
		return uuid();
	}

	/**
   * Get the environments variables in the file .env
   */
	public static setEnv(): void {
		Dotenv.config();
	}
}

export default Util;
