import { FlagsClass } from './flagsClass';

/**
 *
 *
 * @export
 * @class CssFlagsClass
 * @extends {FlagsClass}
 */
export class CssFlagsClass extends FlagsClass {
  #flags: any;

  get flags() {
    return this.#flags;
  }

  #cssFlagsPrefix: string;

  get cssFlagsPrefix() {
    return this.#cssFlagsPrefix;
  }

  /**
   * Creates an instance of CssFlagsClass.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='flags']
   *
   * @memberOf CssFlagsClass
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'flags') {
    super(ua);

    this.#flags = flags;

    this.#flags[1] = true;
    this.#cssFlagsPrefix = cssFlagsPrefix;
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
      .reduce((acc: string[], prop) => {
        if (!!this[prop]) {
          acc.push(
            `${this.#cssFlagsPrefix}--${prop}--${
              typeof this[prop] !== 'boolean' ? '--' + this[prop] : ''
            }`.toLowerCase()
          );
        }

        return acc;
      }, []);
  }
}
