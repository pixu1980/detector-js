/**
 *
 *
 * @export
 * @class FlagsClass
 */
export class FlagsClass {
  /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=null]
   *
   * @memberOf FlagsClass
   */
  constructor(ua = null) {
    this._booleanFlagsValuePropertyName = 'name';
    this._root = self || window || global || {};
    this._process = this._root.process || {};
    this._navigator = this._root.navigator || {};
    this._document = this._root.document || null;
    this._ua = ua || this._navigator.userAgent || 'n/a';
  }

  //! Public getters (kept available after construction, like upstream v2)
  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get booleanFlagsValuePropertyName() {
    return this._booleanFlagsValuePropertyName;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get root() {
    return this._root;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get process() {
    return this._process;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get navigator() {
    return this._navigator;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get document() {
    return this._document;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get ua() {
    return this._ua;
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
