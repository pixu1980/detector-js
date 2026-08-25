import { FlagsClass } from './flagsClass';

/**
 *
 *
 * @export
 * @class CssFlagsClass
 * @extends {FlagsClass}
 */
export class CssFlagsClass extends FlagsClass {
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
    // NOTE: kept for parity with upstream v2 (`flags` is currently unused downstream)
    this._flags[1] = true;
    this._cssFlagsPrefix = cssFlagsPrefix;
  }

  //! Public getters (kept available after construction, like upstream v2)
  /**
   *
   *
   * @readonly
   *
   * @memberOf CssFlagsClass
   */
  get flags() {
    return this._flags;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf CssFlagsClass
   */
  get cssFlagsPrefix() {
    return this._cssFlagsPrefix;
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
    }).reduce((acc, prop) => {
      if(!!this[prop]) {
        acc.push((this._cssFlagsPrefix + '--' + prop + (typeof this[prop] !== 'boolean' ? '--' + this[prop] : '')).toLowerCase());
      }

      return acc;
    }, []);
  }
}
