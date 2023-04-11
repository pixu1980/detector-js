import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class Device
 * @extends {CssFlagsClass}
 */
export class Device extends CssFlagsClass {
  /**
   * Creates an instance of Device.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='device']
   *
   * @memberOf Device
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'device') {
    super(ua, flags, cssFlagsPrefix);
  }
}
