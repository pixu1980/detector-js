import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

export default class Platform extends CssFlagsClass {
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'platform') {
    super(ua, flags, cssFlagsPrefix);
  }

  get mobile() {
    return Asserts.one([
      window.orientation !== undefined,
      this._flags.browser.ChromeMobile,
      this._flags.browser.EdgeMobile,
      this._flags.browser.IEMobile,
      this._flags.browser.FirefoxMobile,
      this._flags.browser.MaxthonMobile,
      this._flags.browser.OperaCoast,
      this._flags.browser.OperaMini,
      this._flags.browser.OperaMobile,
      this._flags.browser.OperaTouch,
      this._flags.browser.SafariMobile,
    ]);
  }

  get smartphone() {
    return Asserts.one([
      this.mobile,
    ]);
  }

  get tablet() {
    return Asserts.one([
      this.mobile,
    ]);
  }

  get desktop() {
    return Asserts.one([
      window.orientation === undefined,
      !this.mobile,
    ]);
  }

  get bot() {
    return Asserts.one([
      /googlebot/i.test(this._ua),
    ]);
  }
}
