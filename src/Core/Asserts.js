/**
 *
 *
 * @export
 * @class Asserts
 */
export default class Asserts {
  static _checkAssert(assert) {
    return !!assert && assert instanceof Function ? assert() : assert;
  }

  /**
   * Check for every assert to be true
   *
   * @static
   * @param {any} [asserts=[]] - array of asserts (can be boolean, strings, functions, whatever you want ;-)
   * @param {boolean} [safe=false] - executes asserts in a safe mode (try/catch)
   * @returns boolean
   *
   * @memberOf Asserts
   */
  static all(asserts = [], safe = false) {
    if (!!safe) {
      try {
        return asserts.every(Asserts._checkAssert);
      } catch (e) {
        return false;
      }
    }

    return asserts.every(Asserts._checkAssert);
  }

  /**
   * Check for at least one assert to be true
   *
   * @static
   * @param {any} [asserts=[]] - array of asserts (can be boolean, strings, functions, whatever you want ;-)
   * @param {boolean} [safe=false] - executes asserts in a safe mode (try/catch)
   * @returns boolean
   *
   * @memberOf Asserts
   */
  static one(asserts = [], safe = false) {
    if (!!safe) {
      try {
        return asserts.some(Asserts._checkAssert);
      } catch (e) {
        return false;
      }
    }

    return asserts.some(Asserts._checkAssert);
  }
}
