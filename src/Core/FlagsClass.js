/**
 *
 *
 * @export
 * @class FlagsClass
 */
export default class FlagsClass {
  /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=null]
   *
   * @memberOf FlagsClass
   */
  constructor(ua = null) {
    this._booleanFlagsValuePropertyName = 'name';
    this._root = window || global || {};
    this._process = this._root.process || {};
    this._navigator = this._root.navigator || {};
    this._document = this._root.document || null;
    this._ua = ua || this._navigator.userAgent || 'n/a';
  }

  /**
   *
   *
   * @returns {object}
   *
   * @memberOf FlagsClass
   */
  toValues() {
    const proto = Object.getPrototypeOf(this);
    const protoName = (this._booleanFlagsValuePropertyName || this.constructor.name).toLowerCase();

    const protoProperties = Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).concat(Object.getOwnPropertyNames(this).filter((prop) => {
      return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(this, prop).get;
    }));

    const protoPropertiesReduced = protoProperties.reduce((acc, prop) => {
      if (!!this[prop]) {
        if (typeof this[prop] === 'boolean') {
          acc[protoName] = prop;
        } else {
          acc[prop] = this[prop];
        }
      }
      return acc;
    }, {});

    return protoPropertiesReduced;
  }

  /**
   *
   *
   * @returns {object}
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
