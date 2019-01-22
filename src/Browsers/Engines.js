import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Utils/Asserts';

export default class Engines extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'engine') {
    super(ua, cssFlagsPrefix);
  }

  get Blink() {
    return Asserts.all([
      (!!window.Intl && !!Intl.v8BreakIterator),
      'CSS' in window,
      /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua),
    ]);
  }

  get WebKit() {
    return Asserts.all([
      typeof window.webkitConvertPointFromNodeToPage === 'function',
      /(?:apple)?webkit\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get Trident() {
    return Asserts.all([
      /*@cc_on!@*/false || !!document.documentMode,
      /(trident)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]);
  }

  get EdgeHTML() {
    return Asserts.all([
      !!window.StyleMedia,
      /edge\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /windows.+\sedge\/([\w\.]+)/i.test(this._ua),
      !this.Trident,
    ]);
  }

  get Gecko() {
    return Asserts.all([
      typeof InstallTrigger !== 'undefined',
      /rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua),
    ]);
  }

  get NetFront() {
    return Asserts.all([
      /(netfront)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get NetSurf() {
    return Asserts.all([
      /(netsurf)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get Amaya() {
    return Asserts.all([
      /(amaya)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get KHTML() {
    return Asserts.all([
      /(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]);
  }

  get Presto() {
    return Asserts.all([
      /(presto)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get iCab() {
    return Asserts.all([
      /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua),
    ]);
  }

  get Tasman() {
    return Asserts.all([
      /(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]);
  }

  get W3M() {
    return Asserts.all([
      /(w3m)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get Goanna() {
    return Asserts.all([
      /(goanna)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get Linx() {
    return Asserts.all([
      /(lynx)\/([\w\.]+)/i.test(this._ua),
    ]);
  }

  get Links() {
    return Asserts.all([
      /(links)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]);
  }
}
