import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Core/Asserts';

export default class OS extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'os') {
    super(ua, cssFlagsPrefix);
  }

  //! Desktop OSs
  get Windows() {
    return Asserts.one([
      /Win/i.test(this._ua),
    ]);
  }

  get macOS() {
    return Asserts.all([
      /Mac/i.test(this._ua),
      !/like Mac/i.test(this._ua),
      !this.iOS,
      !/Mobile\//i.test(this._ua),
    ]);
  }

  get Unix() {
    return Asserts.one([
      /X11/i.test(this._ua),
    ]);
  }

  get Linux() {
    return Asserts.all([
      /Linux/i.test(this._ua),
      !this.Android,
    ]);
  }

  //! Mobile OSs
  get iOS() {
    return Asserts.one([
      /iPad|iPhone|iPod/i.test(this._ua) && !window.MSStream,
    ]);
  }

  get Android() {
    return Asserts.one([
      /Android/i.test(this._ua),
    ]);
  }
}
