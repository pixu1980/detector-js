import CssFlagsClass from '../core/cssFlagsClass';
import Asserts from '../core/asserts';

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
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='device']
   *
   * @memberOf Device
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'device') {
    super(ua, flags, cssFlagsPrefix);
  }
}
