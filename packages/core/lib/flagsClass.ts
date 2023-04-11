/**
 *
 *
 * @export
 * @class FlagsClass
 */
export class FlagsClass {
  #booleanFlagsValuePropertyName: string;

  get booleanFlagsValuePropertyName() {
    return this.#booleanFlagsValuePropertyName;
  }

  set booleanFlagsValuePropertyName(booleanFlagsValuePropertyName: string) {
    this.#booleanFlagsValuePropertyName = booleanFlagsValuePropertyName;
  }

  #root: Window & typeof globalThis;

  get root() {
    return this.#root;
  }

  #process: any; // NodeJS.Process

  get process() {
    return this.#process;
  }

  #navigator: Navigator;

  get navigator() {
    return this.#navigator;
  }

  #document: Document;

  get document() {
    return this.#document;
  }

  #ua: string;

  get ua() {
    return this.#ua;
  }

  /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=null]
   *
   * @memberOf FlagsClass
   */
  constructor(ua: string | null = null) {
    this.#booleanFlagsValuePropertyName = 'name';
    this.#root = self || window || global || {};

    this.#process = this.#root.process || {};
    this.#navigator = this.#root.navigator || {};
    this.#document = this.#root.document || null;
    this.#ua = ua || this.#navigator.userAgent || 'n/a';
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
    const protoName = (this.#booleanFlagsValuePropertyName || this.constructor.name).toLowerCase();

    const protoProperties = Object.getOwnPropertyNames(proto)
      .filter((prop) => {
        return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
      })
      .concat(
        Object.getOwnPropertyNames(this).filter((prop) => {
          return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(this, prop)?.get;
        })
      );

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

    return (
      Object.getOwnPropertyNames(proto)
        .filter((prop) => {
          return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        })
        .reduce((acc, prop) => {
          acc[prop] = this[prop];

          return acc;
        }, {})
        //@ts-ignore
        .merge(
          Object.getOwnPropertyNames(this)
            .filter((prop) => {
              return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(this, prop)?.get;
            })
            .reduce((acc, prop) => {
              acc[prop] = this[prop];

              return acc;
            }, {})
        )
    );
  }
}
