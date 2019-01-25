import FlagsClass from './FlagsClass';

export default class CssFlagsClass extends FlagsClass {
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'flags') {
    super(ua);

    this._flags = flags;
    this._cssFlagsPrefix = cssFlagsPrefix;
  }

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
