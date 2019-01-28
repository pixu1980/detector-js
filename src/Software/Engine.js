import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class Engine
 * @extends {CssFlagsClass}
 */
export default class Engine extends CssFlagsClass {
  /**
   * Creates an instance of Engine.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='engine']
   *
   * @memberOf Engine
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'engine') {
    super(ua, flags, cssFlagsPrefix);

    this.version = 'n/a';
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Amaya() {
    return this._checkAssertsResult(Asserts.all([
      /(amaya)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Blink() {
    return this._checkAssertsResult(Asserts.all([
      () => 'Intl' in this._root && 'v8BreakIterator' in this._root.Intl,
      'CSS' in this._root,
      /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua),
    ]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get EdgeHTML() {
    return this._checkAssertsResult(Asserts.all([
      'StyleMedia' in this._root,
      !this.Trident,
    ]) && Asserts.one([
      /edge\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Gecko() {
    return this._checkAssertsResult(Asserts.all([
      'InstallTrigger' in this._root,
      !/like gecko/i.test(this._ua),
    ]) && Asserts.one([
      /rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua),
      /gecko\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Goanna() {
    return this._checkAssertsResult(Asserts.all([
      /(goanna)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get iCab() {
    return this._checkAssertsResult(Asserts.all([
      /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get KHTML() {
    return this._checkAssertsResult(Asserts.all([
      /(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Links() {
    return this._checkAssertsResult(Asserts.all([
      /(links)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Linx() {
    return this._checkAssertsResult(Asserts.all([
      /(lynx)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get NetFront() {
    return this._checkAssertsResult(Asserts.all([
      /(netfront)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get NetSurf() {
    return this._checkAssertsResult(Asserts.all([
      /(netsurf)\/([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Presto() {
    return this._checkAssertsResult(Asserts.one([
      /(presto)\/([\w\.]+)/i.test(this._ua),
      /presto\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Tasman() {
    return this._checkAssertsResult(Asserts.all([
      /(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Trident() {
    return this._checkAssertsResult(Asserts.all([
      /*@cc_on!@*/false || !!document.documentMode,
    ]) && Asserts.one([
      /trident[\/\s](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get w3m() {
    return this._checkAssertsResult(Asserts.all([
      /w3m[\/\s]([\w\.]+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get WebKit() {
    return this._checkAssertsResult(Asserts.all([
      'webkitConvertPointFromNodeToPage' in this._root,
    ]) && Asserts.one([
      /((?:apple)?webkit)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  /**
   *
   *
   * @param {boolean} [assertsResult=false]
   * @param {any} [version=null]
   * @returns boolean
   *
   * @memberOf Engine
   */
  _checkAssertsResult(assertsResult = false, version = null) {
    if (assertsResult) {
      this.setVersion(version);

      return true;
    }

    return false;
  }

  /**
   *
   *
   * @param {any} [version=null]
   *
   * @memberOf Engine
   */
  /**
   *
   *
   * @param {any} [version=null]
   *
   * @memberOf Engine
   */
  setVersion(version = null) {
    this.version = version || RegExp.$1 || 'n/a';
  }
}
