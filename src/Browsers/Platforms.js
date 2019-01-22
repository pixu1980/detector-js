import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Core/Asserts';

export default class Platforms extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'platform') {
    super(ua, cssFlagsPrefix);
  }

  get desktop() {
    return Asserts.one([
    ]);
  }

  get mobile() {
    return Asserts.one([
    ]);
  }

  get smartphone() {
    return Asserts.one([
    ]);
  }

  get tablet() {
    return Asserts.one([
    ]);
  }

  get bot() {
    return Asserts.one([
      /googlebot/i.test(this._ua),
    ]);
  }
}
