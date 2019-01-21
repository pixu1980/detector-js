export default class FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'flags') {
    this._ua = ua;
    this._cssFlagsPrefix = cssFlagsPrefix;
    this._navigator = window.navigator;
    this._document = window.document;
    this._window = window;
  }

  toFlags() {
    const proto = Object.getPrototypeOf(this);

    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, item) => {
      acc[item.toLowerCase()] = this[item];
      return acc;
    }, {});
  }

  toCssFlags() {
    const proto = Object.getPrototypeOf(this);

    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, item) => {
      if(!!this[item]) {
        acc.push((this._cssFlagsPrefix + '-' + item.toLowerCase()));
      }
      return acc;
    }, []);
  }
}
