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
   *
   *
   * @static
   * @param {any} [asserts=[]]
   * @param {boolean} [safe=false]
   * @returns
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
   *
   *
   * @static
   * @param {any} [asserts=[]]
   * @param {boolean} [safe=false]
   * @returns
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
