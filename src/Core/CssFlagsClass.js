import FlagsClass from './flagsClass';

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

    return Object.getOwnPropertyNames(proto)
      .filter((prop) => {
        return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
      })
      .reduce((acc, prop) => {
        if (!!this[prop]) {
          acc.push(
            `${this._cssFlagsPrefix}--${prop}--${
              typeof this[prop] !== 'boolean' ? '--' + this[prop] : ''
            }`.toLowerCase()
          );
        }

        return acc;
      }, []);
  }
}
