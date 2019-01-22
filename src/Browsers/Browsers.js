/* eslint-disable prefer-destructuring */
import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Utils/Asserts';

export default class Browsers extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'browser') {
    super(ua, cssFlagsPrefix);

    this._version = this._ua.match(/version\/(\d+(\.?_?\d+)+)/i)[1];
  }

  get version() {
    return this._version;
  }

  get AndroidBrowser() {
    return Asserts.all([
      !/like android/i.test(this._ua),
      /android/i.test(this._ua),
    ]);
  }

  get Safari() {
    return Asserts.one([
      /safari|applewebkit/i.test(this._ua),
    ]);
  }

  get Chrome() {
    return Asserts.one([
    ]);
  }

  get Chromium() {
    return Asserts.one([
    ]);
  }

  get Firefox() {
    return Asserts.one([
    ]);
  }

  get Opera() {
    return Asserts.one([
    ]);
  }

  get IE() {
    return Asserts.one([
      /(msie |rv:)(\d+(\.\d+)?)/i.test(this._ua),
    ]);
  }

  get Edge() {
    return Asserts.one([
    ]);
  }

  get Yandex() {
    return Asserts.one([
    ]);
  }

  get Brave() {
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
}
