import UUID from 'uuid-js';

class Util {
  
  /**
   * Generate UUID(Universally unique identifier)
   * Use the lib uuid-js
   * @returns String
   */
  static createNewUID(): string {
    return UUID.create(4).toString();
  }

}

export default Util;