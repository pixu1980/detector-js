/* eslint-disable prefer-destructuring */
import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Core/Asserts';

export default class Browsers extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'browser') {
    super(ua, cssFlagsPrefix);

    this._versionDefaultRegEx = /version\/(\d+(\.?_?\d+)+)/i;
    this._version = this._ua.match(this._versionDefaultRegEx)[1];
  }

  get AndroidBrowser() {
    return Asserts.all([
      !/like android/i.test(this._ua),
      /android/i.test(this._ua),
    ]);
  }

  get Brave() {
    return Asserts.one([
    ]);
  }

  get Edge() {
    return Asserts.one([
    ]);
  }

  get Electron() {
    return Asserts.one([
      // Renderer process
      typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer',

      // Main process
      typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron,

      // Detect the user agent when the `nodeIntegration` option is set to true
      typeof window.navigator === 'object' && typeof this._ua === 'string' && this._ua.indexOf('Electron') >= 0,
    ]);
  }

  get IE() {
    return Asserts.one([
      /(msie |rv:)(\d+(\.\d+)?)/i.test(this._ua),
      /(msie|trident)/i.test(this._ua),
    ]);
  }

  get Chrome() {
    return Asserts.one([
      /chrome/i.test(this._ua),
    ]);
  }

  get Chromium() {
    return Asserts.one([
    ]);
  }

  get Firefox() {
    return Asserts.one([
      /firefox/i.test(this._ua),
    ]);
  }

  get Opera() {
    if(Asserts.one([
      /(?:opera)[\s/](\d+(\.?_?\d+)+)/i.test(this._ua),
      /(?:opr|opios)[\s/](\S+)/i.test(this._ua),
    ])) {
      this._version = RegExp.$1 || this._version;

      return true;
    }

    return false;
  }

  get PhantomJS() {
    return Asserts.one([
      /phantom/i.test(this._ua),
    ]);
  }

  get Safari() {
    return Asserts.one([
      /safari|applewebkit/i.test(this._ua),
      /safari/i.test(this._ua) && !this.Chrome && !this.PhantomJS,
    ]);
  }

  get SafariMobile() {
    return Asserts.one([
      /iphone|ipad|ipod/i.test(this._ua),
      /safari/i.test(this._ua) && !this.Chrome && !this.PhantomJS,
    ]);
  }

  get Yandex() {
    return Asserts.one([
    ]);
  }

  get version() {
    return this._version;
  }
}
