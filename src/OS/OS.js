import FlagsClass from '../Core/FlagsClass';

export default class OS extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'os') {
    super(ua, cssFlagsPrefix);
  }

  //! Desktop OSs
  get windows() {
    return window.navigator.appVersion.includes('Win');
  }

  get macOS() {
    return window.navigator.appVersion.includes('Mac');
  }

  get unix() {
    return window.navigator.appVersion.includes('X11');
  }

  get linux() {
    return window.navigator.appVersion.includes('Linux');
  }

  //! Mobile OSs
  get iOS() {
    return /iPad|iPhone|iPod/i.test(this._ua) && !window.MSStream;
  }

  get Android() {
    return /Android/i.test(this._ua);
  }
}
