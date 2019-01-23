/* eslint-disable prefer-destructuring */
import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Core/Asserts';

export default class Browsers extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'browser') {
    super(ua, cssFlagsPrefix);

    this._versionDefaultRegEx = /version\/(\d+(\.?_?\d+)+)/i;

    this._ua.match(this._versionDefaultRegEx);

    this.setVersionFromRegExp();
  }

  get AndroidBrowser() {
    return this.checkAssertsResult(Asserts.all([
      !/like android/i.test(this._ua),
      /android/i.test(this._ua),
      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get BlackBerry() {
    return this.checkAssertsResult(Asserts.one([
      /blackberry|\bbb\d+/i.test(this._ua),
      /rim\stablet/i.test(this._ua),
    ]) && Asserts.all([
      /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get BadaBrowser() {
    return this.checkAssertsResult(Asserts.all([
      /bada/i.test(this._ua),
      /dolfin\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Brave() {
    return Asserts.one([
      /bada/i.test(this._ua),
      /dolfin\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]);
  }

  get Chrome() {
    return this.checkAssertsResult(Asserts.all([
      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      !this.AndroidBrowser,
    ]));
  }

  get Chromium() {
    return this.checkAssertsResult(Asserts.one([
    ]));
  }

  get Edge() {
    return this.checkAssertsResult(Asserts.all([
      !this.IE,
      /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get Electron() {
    return this.checkAssertsResult(Asserts.one([
      typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer', // Renderer process
      typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron, // Main process
      typeof window.navigator === 'object' && typeof this._ua === 'string' && this._ua.indexOf('Electron') >= 0, // Detect the user agent when the `nodeIntegration` option is set to true
    ]));
  }

  get Epiphany() {
    return this.checkAssertsResult(Asserts.one([
      /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Firefox() {
    return this.checkAssertsResult(Asserts.one([
      /firefox/i.test(this._ua),
    ]));
  }

  get Focus() {
    return this.checkAssertsResult(Asserts.one([
      /(?:focus)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]));
  }

  get GoogleBot() {
    return this.checkAssertsResult(Asserts.one([
      /googlebot\/(\d+(\.\d+))/i.test(this._ua),
    ]));
  }

  get IE() {
    return this.checkAssertsResult(Asserts.all([
      /(msie|trident)/i.test(this._ua),
      /(?:msie |rv:)(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get KMeleon() {
    return this.checkAssertsResult(Asserts.all([
      /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Maxthon() {
    return this.checkAssertsResult(Asserts.all([
      /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get MZBrowser() {
    return this.checkAssertsResult(Asserts.all([
      /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]));
  }

  get Opera() {
    return this.checkAssertsResult(Asserts.one([
      /(?:opera)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(?:opr)[\s/](\S+)/i.test(this._ua),
    ]), true);
  }

  get OperaMini() {
    return this.checkAssertsResult(Asserts.one([
      /(?:opios)[\s/](\S+)/i.test(this._ua),
    ]));
  }

  get OperaCoast() { // a.k.a. Opera Coast
    return this.checkAssertsResult(Asserts.one([
      /(?:coast)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get PhantomJS() {
    return this.checkAssertsResult(Asserts.all([
      /phantom/i.test(this._ua),
      /phantomjs\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get Puffin() {
    return this.checkAssertsResult(Asserts.one([
      /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Safari() {
    return this.checkAssertsResult(Asserts.one([
      /safari|applewebkit/i.test(this._ua),
      /safari/i.test(this._ua) && !this.Chrome && !this.PhantomJS,
    ]) && Asserts.all([
      !this.AndroidBrowser,
    ]));
  }

  get SafariMobile() {
    return this.checkAssertsResult(Asserts.one([
      /iphone|ipad|ipod/i.test(this._ua),
      /safari/i.test(this._ua) && !this.Chrome && !this.PhantomJS && !this.AndroidBrowser,
    ]));
  }

  get Sailfish() {
    return this.checkAssertsResult(Asserts.one([
      /sailfish\s?browser\/(\d+(\.\d+)?)/i.test(this._ua),
    ]));
  }

  get Silk() {
    return this.checkAssertsResult(Asserts.one([
      /silk\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get SlimerJS() {
    return this.checkAssertsResult(Asserts.one([
      /slimerjs\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get SeaMonkey() {
    return this.checkAssertsResult(Asserts.all([
      /seamonkey\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get SamsungBrowser() {
    return this.checkAssertsResult(Asserts.all([
      /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Sleipnir() {
    return this.checkAssertsResult(Asserts.all([
      /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Swing() {
    return this.checkAssertsResult(Asserts.all([
      /(?:swing)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]));
  }

  get UCBrowser() {
    return this.checkAssertsResult(Asserts.all([
      /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Vivaldi() {
    return this.checkAssertsResult(Asserts.all([
      /vivaldi\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get WebOSBrowser() {
    return this.checkAssertsResult(Asserts.one([
      /(web|hpw)[o0]s/i.test(this._ua),
      /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ]), true);
  }

  get WeChat() {
    return this.checkAssertsResult(Asserts.all([
      /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]));
  }

  get Whale() {
    return this.checkAssertsResult(Asserts.all([
      /(?:whale)[\s/](\d+(?:\.\d+)+)/i.test(this._ua),
    ]), true);
  }

  get Yandex() {
    return Asserts.one([
      /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
    ]);
  }

  checkAssertsResult(assertsResult = false, inverted = false) {
    if (assertsResult) {
      this.setVersionFromRegExp(null, inverted);

      return true;
    }

    return false;
  }

  setVersionFromRegExp(value = null, inverted = false) {
    if (inverted) {
      this._version = value || this._version || RegExp.$1 || 'unknown';
    } else {
      this._version = value || RegExp.$1 || this._version || 'unknown';
    }

    this._version = value;
  }

  get version() {
    return this._version;
  }
}
