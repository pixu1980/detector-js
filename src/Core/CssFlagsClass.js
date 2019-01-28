import FlagsClass from './FlagsClass';

/**
 *
 *
 * @export
 * @class CssFlagsClass
 * @extends {FlagsClass}
 */
export default class CssFlagsClass extends FlagsClass {
  /**
   * Creates an instance of CssFlagsClass.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='flags']
   *
   * @memberOf CssFlagsClass
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'flags') {
    super(ua);

    this._flags = flags;
    this._cssFlagsPrefix = cssFlagsPrefix;
  }

  /**
   *
   *
   * @returns object
   *
   * @memberOf CssFlagsClass
   */
  toCssFlags() {
    const proto = Object.getPrototypeOf(this);

    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, item) => {
      if(!!this[item]) {
        acc.push((this._cssFlagsPrefix + '--' + item + (typeof this[item] !== 'boolean' ? '--' + this[item] : '')).toLowerCase());
      }

      return acc;
    }, []);
  }
}
