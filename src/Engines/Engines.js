import FlagsClass from '../Core/FlagsClass';

export default class Engines extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'engine') {
    super(ua, cssFlagsPrefix);
  }

  get Blink() {
    const asserts = [
      (!!window.Intl && !!Intl.v8BreakIterator),
      'CSS' in window,
      /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua),
    ];

    return asserts.every(assert => !!assert);
  }

  get WebKit() {
    const asserts = [
      typeof window.webkitConvertPointFromNodeToPage === 'function',
      /(?:apple)?webkit\/([\w\.]+)/i.test(this._ua),
    ];

    return asserts.every(assert => !!assert);
  }

  get Trident() {
    const asserts = [
      /*@cc_on!@*/false || !!document.documentMode,
      /(trident)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ];

    return asserts.every(assert => !!assert);
  }

  get EdgeHTML() {
    const asserts = [
      !!window.StyleMedia,
      /edge\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /windows.+\sedge\/([\w\.]+)/i.test(this._ua),
      !this.Trident,
    ];

    return asserts.every(assert => !!assert);
  }

  get Gecko() {
    const asserts = [
      typeof InstallTrigger !== 'undefined',
      /rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua),
    ];

    return asserts.every(assert => !!assert);
  }

  get NetFront() {
    return /(netfront)\/([\w\.]+)/i.test(this._ua);
  }

  get NetSurf() {
    return /(netsurf)\/([\w\.]+)/i.test(this._ua);
  }

  get Amaya() {
    return /(amaya)\/([\w\.]+)/i.test(this._ua);
  }

  get KHTML() {
    return /(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua);
  }

  get Presto() {
    return /(presto)\/([\w\.]+)/i.test(this._ua);
  }

  get iCab() {
    return /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua);
  }

  get Tasman() {
    return /(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua);
  }

  get W3M() {
    return /(w3m)\/([\w\.]+)/i.test(this._ua);
  }

  get Goanna() {
    return /(goanna)\/([\w\.]+)/i.test(this._ua);
  }

  get Linx() {
    return /(lynx)\/([\w\.]+)/i.test(this._ua);
  }

  get Links() {
    return /(links)[\/\s]\(?([\w\.]+)/i.test(this._ua);
  }
}
