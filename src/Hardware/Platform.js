import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';
import OS from '../Software/OS';
import Browser from '../Software/Browser';

/**
 *
 *
 * @export
 * @class Platform
 * @extends {CssFlagsClass}
 */
export default class Platform extends CssFlagsClass {
  /**
   * Creates an instance of Platform.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='platform']
   *
   * @memberOf Platform
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'platform') {
    super(ua, flags, cssFlagsPrefix);
  }

  /**
   *
   *
   * @readonly
   * @memberOf Platform
   */
  get bot() {
    return Asserts.one([
      /googlebot/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get console() {
    return Asserts.all([
      /(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this._ua),
      !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get tv() {
    return Asserts.one([
      /(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this._ua),
      /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this._ua),
    ]) && Asserts.one([
      !this.mobile,
      !this.bot,
      this._flags.feature.fullscreenKeyboard,
    ]) && Asserts.one([
      this._flags.os.Android,
      this._flags.os.Tizen,
      this._flags.os.WebOS,
    ]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get tablet() {
    return Asserts.all([
      this.mobile,
      /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get smartphone() {
    return Asserts.all([
      this.mobile,
      !this.tablet,
    ]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get mobile() {
    return Asserts.one([
      this._flags.feature.deviceMotion,
      this._flags.feature.deviceOrientation,
      this._flags.feature.pixelRatio > 1,
    ]) && Asserts.one([
      this._flags.feature.touch,
      this._flags.feature.forceTouch,
    ]) && Asserts.all([
      !this._flags.feature.pointerEvents,
      this._flags.feature.file,
    ]) && Asserts.one([
      ['Android', 'iOS', 'WindowsPhone', 'Bada', 'Blackberry', 'Contiki', 'MeeGo', 'RIM', 'QNX', 'Palm', 'Symbian', 'WebOS'].includes(this._flags.os.name),
      ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile'].includes(this._flags.browser.name),
    ]);
  }

  /**
   *
   *
   * @readonly
   * @memberOf Platform
   */
  get desktop() {
    return Asserts.all([
      !this.bot,
      !this.console,
      !this.mobile,
      !this.tv,
    ]);
  }

  toValues() {
    const proto = Object.getPrototypeOf(this);

    const protoProperties = Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
    });

    return protoProperties[0] || 'n/a';
  }
}
