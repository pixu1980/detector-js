export default class FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'flags') {
    this._ua = ua;
    this._cssFlagsPrefix = cssFlagsPrefix;
  }

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

  toCssFlags() {
    const proto = Object.getPrototypeOf(this);

    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, item) => {
      if(!!this[item]) {
        acc.push((this._cssFlagsPrefix + '--' + item.toLowerCase()));
      }
      return acc;
    }, []);
  }
}
