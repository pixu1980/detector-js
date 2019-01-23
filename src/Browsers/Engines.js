import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Core/Asserts';

export default class Engines extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'engine') {
    super(ua, cssFlagsPrefix);
  }

  get Amaya() {
    return this._checkAssertsResult(Asserts.all([
      /(amaya)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Blink() {
    return this._checkAssertsResult(Asserts.all([
      (!!window.Intl && !!Intl.v8BreakIterator),
      'CSS' in window,
      /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua),
    ]));
  }

  get EdgeHTML() {
    return this._checkAssertsResult(Asserts.all([
      !!window.StyleMedia,
      !this.Trident,
      /edge\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /windows.+\sedge\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Gecko() {
    return this._checkAssertsResult(Asserts.all([
      typeof InstallTrigger !== 'undefined',
      !/like gecko/i.test(this._ua),
      /gecko\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua),
    ]));
  }

  get Goanna() {
    return this._checkAssertsResult(Asserts.all([
      /(goanna)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get iCab() {
    return this._checkAssertsResult(Asserts.all([
      /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua),
    ]));
  }

  get KHTML() {
    return this._checkAssertsResult(Asserts.all([
      /(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Links() {
    return this._checkAssertsResult(Asserts.all([
      /(links)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Linx() {
    return this._checkAssertsResult(Asserts.all([
      /(lynx)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get NetFront() {
    return this._checkAssertsResult(Asserts.all([
      /(netfront)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get NetSurf() {
    return this._checkAssertsResult(Asserts.all([
      /(netsurf)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Presto() {
    return this._checkAssertsResult(Asserts.all([
      /presto\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /(presto)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Tasman() {
    return this._checkAssertsResult(Asserts.all([
      /(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]));
  }

  get Trident() {
    return this._checkAssertsResult(Asserts.all([
      /*@cc_on!@*/false || !!document.documentMode,
      /trident\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /(trident)[\/\s]\(?([\w\.]+)/i.test(this._ua) || /(trident)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get w3m() {
    return this._checkAssertsResult(Asserts.all([
      /(w3m)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  get WebKit() {
    return this._checkAssertsResult(Asserts.all([
      typeof window.webkitConvertPointFromNodeToPage === 'function',
      /webkit\/(\d+(\.?_?\d+)+)/i.test(this._ua) || /(?:apple)?webkit\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  _checkAssertsResult(assertsResult = false, version = null) {
    if (assertsResult) {
      this.setVersion(version);

      return true;
    }

    return false;
  }

  setVersion(version = null) {
    this._version = version || RegExp.$1 || 'u/a';
  }

  get version() {
    return this._version.replace(/_/ig, '.');
  }
}
