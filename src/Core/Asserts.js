/**
 *
 *
 * @export
 * @class Asserts
 */
export default class Asserts {
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
        return asserts.every(assert => (!!assert && assert instanceof Function ? assert() : assert));
      } catch (e) {
        return false;
      }
    }

    return asserts.every(assert => (!!assert && assert instanceof Function ? assert() : assert));
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
        return asserts.some(assert => (!!assert && assert instanceof Function ? assert() : assert));
      } catch (e) {
        return false;
      }
    }

    return asserts.some(assert => (!!assert && assert instanceof Function ? assert() : assert));
  }
}
