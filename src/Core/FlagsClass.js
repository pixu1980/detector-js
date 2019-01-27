/**
 *
 *
 * @export
 * @class FlagsClass
 */
export default class FlagsClass {
  /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=window.navigator.userAgent]
   *
   * @memberOf FlagsClass
   */
  constructor(ua = window.navigator.userAgent) {
    this._ua = ua;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf FlagsClass
   */
  toFlags() {
    const proto = Object.getPrototypeOf(this);

    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, prop) => {
      acc[prop] = this[prop];

      return acc;
    }, {}).merge(Object.getOwnPropertyNames(this).filter((prop) => {
      return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(this, prop).get;
    }).reduce((acc, prop) => {
      acc[prop] = this[prop];

      return acc;
    }, {}));
  }
}
