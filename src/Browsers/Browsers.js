/* eslint-disable prefer-destructuring */
import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Core/Asserts';

export default class Browsers extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'browser') {
    super(ua, cssFlagsPrefix);

    this._versionDefaultRegEx = /version\/(\d+(\.?_?\d+)+)/i;

    this._ua.match(this._versionDefaultRegEx);

    this._version = RegExp.$1;
  }

  get AndroidBrowser() {
    if(Asserts.all([
      !/like android/i.test(this._ua),
      /android/i.test(this._ua),
      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
    ])) {
      this._version = RegExp.$1;

      return true;
    }

    return false;
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
    if(Asserts.all([
      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      !this.AndroidBrowser,
    ])) {
      this._version = RegExp.$1;

      return true;
    }

    return false;
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
      this._version = RegExp.$1;

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
    ]) && Asserts.all([
      !this.AndroidBrowser,
    ]);
  }

  get SafariMobile() {
    return Asserts.one([
      /iphone|ipad|ipod/i.test(this._ua),
      /safari/i.test(this._ua) && !this.Chrome && !this.PhantomJS && !this.AndroidBrowser,
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
