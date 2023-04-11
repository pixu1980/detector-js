import { Asserts, CssFlagsClass } from '@detector-js/core';
/**
 *
 *
 * @export
 * @class Platform
 * @extends {CssFlagsClass}
 */
export class Platform extends CssFlagsClass {
  /**
   * Creates an instance of Platform.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='platform']
   *
   * @memberOf Platform
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'platform') {
    super(ua, flags, cssFlagsPrefix);
  }

  /**
   *
   *
   * @readonly
   * @memberOf Platform
   */
  get bot() {
    return Asserts.one([/googlebot/i.test(this.ua)]);
  }

  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get console() {
    return Asserts.all([
      /(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this.ua),
      !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this.ua)
    ]);
  }

  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get tv() {
    return (
      Asserts.one([
        /(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this.ua),
        /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(
          this.ua
        )
      ]) &&
      Asserts.one([!this.mobile, !this.bot, this.flags.feature.fullscreenKeyboard]) &&
      Asserts.one([this.flags.os.Android, this.flags.os.Tizen, this.flags.os.WebOS])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get tablet() {
    return Asserts.all([this.mobile, /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this.ua)]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get smartphone() {
    return Asserts.all([this.mobile, !this.tablet]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get mobile() {
    return (
      (Asserts.one([
        this.flags.feature.deviceMotion,
        this.flags.feature.deviceOrientation,
        this.flags.feature.pixelRatio > 1
      ]) &&
        Asserts.one([
          this.flags.feature.touch,
          this.flags.feature.forceTouch,
          [
            'ChromeMobile',
            'EdgeMobile',
            'IEMobile',
            'FirefoxMobile',
            'MaxthonMobile',
            'OperaMobile',
            'SafariMobile'
          ].includes(this.flags.browser.name)
        ]) &&
        Asserts.all([!this.flags.feature.pointerEvents, this.flags.feature.file])) ||
      Asserts.all([
        [
          'Android',
          'iOS',
          'WindowsPhone',
          'Bada',
          'Blackberry',
          'Contiki',
          'MeeGo',
          'RIM',
          'QNX',
          'Palm',
          'Symbian',
          'WebOS'
        ].includes(this.flags.os.name),
        [
          'ChromeMobile',
          'EdgeMobile',
          'IEMobile',
          'FirefoxMobile',
          'MaxthonMobile',
          'OperaMobile',
          'SafariMobile'
        ].includes(this.flags.browser.name)
      ])
    );
  }

  /**
   *
   *
   * @readonly
   * @memberOf Platform
   */
  get desktop() {
    return Asserts.all([!this.bot, !this.console, !this.mobile, !this.tv]);
  }

  toValues() {
    const proto = Object.getPrototypeOf(this);

    const protoProperties = Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
    });

    return protoProperties[0] || 'n/a';
  }
}
