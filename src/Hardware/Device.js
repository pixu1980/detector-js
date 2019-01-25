import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

export default class Device extends CssFlagsClass {
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'device') {
    super(ua, flags, cssFlagsPrefix);

    // remove unnecessary memory usage
    delete this._flags;
  }
}
