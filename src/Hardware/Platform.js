import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class Platform
 * @extends {CssFlagsClass}
 */
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
   * @param {any} [ua=window.navigator.userAgent]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='platform']
   *
   * @memberOf Platform
   */
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'platform') {
    super(ua, flags, cssFlagsPrefix);
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
    ]) && (Asserts.one([
      this._flags.feature.vibration,
      this._flags.feature.battery,
      this._flags.feature.fullscreenKeyboard,
    ]) || Asserts.one([
      this._flags.os.Android,
      this._flags.os.iOS,
      this._flags.os.WindowsPhone,
      this._flags.os.Bada,
      this._flags.os.Blackberry,
      this._flags.os.Contiki,
      this._flags.os.MeeGo,
      this._flags.os.RIM,
      this._flags.os.QNX,
      this._flags.os.Palm,
      this._flags.os.Symbian,
      this._flags.os.WebOS,
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
    ]));
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
}
