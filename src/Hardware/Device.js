import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class Device
 * @extends {CssFlagsClass}
 */
export default class Device extends CssFlagsClass {
  /**
   * Creates an instance of Device.
   * @param {any} [ua=window.navigator.userAgent]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='device']
   *
   * @memberOf Device
   */
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'device') {
    super(ua, flags, cssFlagsPrefix);

    // remove unnecessary memory usage
    delete this._flags;
  }
}
