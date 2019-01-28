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

    // const objectTypes = {
    //   function: true,
    //   object: true,
    // };

    // /** Used as a reference to the global object. */
    // let root = (objectTypes[typeof window] && window) || this;

    // /** Backup possible global object. */
    // const oldRoot = root;

    // /** Detect free variable `exports`. */
    // const freeExports = objectTypes[typeof exports] && exports;

    // /** Detect free variable `module`. */
    // const freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

    // /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
    // const freeGlobal = freeExports && freeModule && typeof global === 'object' && global;

    // if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    //   root = freeGlobal;
    // }

    // /** The environment context object. */
    // let context = root;

    // /** Used to flag when a custom context is provided. */
    // const isCustomContext = ua && typeof ua === 'object' && Object.getPrototypeOf(ua) !== String;

    // // Juggle arguments.
    // if (isCustomContext) {
    //   context = ua;
    //   ua = null;
    // }

    // /** Browser navigator object. */
    // const nav = context.navigator || {};

    // /** Browser user agent string. */
    // const userAgent = nav.userAgent || '';

    // ua || (ua = userAgent);


    // /** Browser document object. */
    // const doc = context.document || {};
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
