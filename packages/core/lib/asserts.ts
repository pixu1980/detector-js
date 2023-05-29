/**
 *
 *
 * @export
 * @class Asserts
 */
export class Asserts {
  static checkAssert(assert, safe = false) {
    if (!!assert) {
      if (assert instanceof Function) {
        if (!!safe) {
          try {
            return assert();
          } catch (e) {
            return false;
          }
        }

        return assert();
      }

      return assert;
    }

    return false;
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
  static all(asserts: any[] = [], safe = false) {
    return asserts.every((assert) => {
      return Asserts.checkAssert(assert, safe);
    });
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
  static one(asserts: any[] = [], safe = false) {
    return asserts.some((assert) => {
      return Asserts.checkAssert(assert, safe);
    });
  }
}
