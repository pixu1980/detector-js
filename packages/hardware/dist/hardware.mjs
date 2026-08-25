import { CssFlagsClass, Asserts } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class Platform
 * @extends {CssFlagsClass}
 */
class Platform extends CssFlagsClass {
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
    return Asserts.one([/googlebot/i.test(this._ua)]);
  }

  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get console() {
    return Asserts.all([/(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this._ua), !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this._ua)]);
  }

  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get tv() {
    return Asserts.one([/(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this._ua), /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this._ua)]) && Asserts.one([!this.mobile, !this.bot, this._flags.feature.fullscreenKeyboard]) && Asserts.one([this._flags.os.Android, this._flags.os.Tizen, this._flags.os.WebOS]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */
  get tablet() {
    return Asserts.all([this.mobile, /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this._ua)]);
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
    return Asserts.one([this._flags.feature.deviceMotion, this._flags.feature.deviceOrientation, this._flags.feature.pixelRatio > 1]) && Asserts.one([this._flags.feature.touch, this._flags.feature.forceTouch, ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile', 'SamsungBrowser', 'DuckDuckGo', 'Facebook', 'Instagram', 'TikTok', 'Kiwi', 'HuaweiBrowser', 'Line'].includes(this._flags.browser.name)]) && Asserts.all([!this._flags.feature.pointerEvents, this._flags.feature.file]) || Asserts.all([['Android', 'iOS', 'WindowsPhone', 'Bada', 'Blackberry', 'Contiki', 'MeeGo', 'RIM', 'QNX', 'Palm', 'Symbian', 'WebOS'].includes(this._flags.os.name), ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile', 'SamsungBrowser', 'DuckDuckGo', 'Facebook', 'Instagram', 'TikTok', 'Kiwi', 'HuaweiBrowser', 'Line'].includes(this._flags.browser.name)]);
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
    const protoProperties = Object.getOwnPropertyNames(proto).filter(prop => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
    });
    return protoProperties[0] || 'n/a';
  }
}

/**
 *
 *
 * @export
 * @class Device
 * @extends {CssFlagsClass}
 */
class Device extends CssFlagsClass {
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

class CPU extends CssFlagsClass {
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'cpu') {
    super(ua, flags, cssFlagsPrefix);
    this._booleanFlagsValuePropertyName = 'vendor';
    this.platform = this.getPlatform();
    this.cores = this.getCores();
    this.architecture = this.getArchitecture();
    this.sparc = this.getSparc();
    this.irix = this.getIrix();
    this.mips = this.getMips();
    this.risc = this.getRisc();
    this.avr = this.getAvr();
    this.arm = this.getArm();
    this.powerPC = this.getPowerPC();
    this.amd = this.getAmd();
    this.intel = this.getIntel();
  }

  /**
   *
   *
   * @returns number
   *
   * @memberOf CPU
   */
  getCores() {
    return this._navigator.hardwareConcurrency || 1;
  }

  /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */
  getPlatform() {
    return this._navigator.platform || 'Win32';
  }

  /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */
  getArchitecture() {
    let cpuClass = this._navigator.cpuClass || 'x86';
    if (Asserts.one([cpuClass === 'x64', ['Win64', 'MacIntel', 'Linux x86_64', 'Linux i686'].includes(this._navigator.platform), /(?:x86_64|x86-64|win64|wow64|x64;|amd64|arm64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|ppc64|powerpc64)/i.test(this._ua)])) {
      cpuClass = 'x64';
    }
    return cpuClass;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getSparc() {
    return Asserts.one([/(sun4\w)[;\)]/i.test(this._ua), /sparc(?:64)?(?=;);/i.test(this._ua)]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getIrix() {
    return Asserts.all([/irix(?:64)?(?=;);/i.test(this._ua)]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getMips() {
    return Asserts.all([/mips(?:64)?(?=;);/i.test(this._ua)]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getRisc() {
    return Asserts.all([/pa-risc(?:64)?(?=;);/i.test(this._ua)]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getAvr() {
    return Asserts.all([/(?=atmel\s)avr/i.test(this._ua)]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getArm() {
    return Asserts.one([/windows\s(ce|mobile);\sppc;/i.test(this._ua), /arm(?:64|(?=v\d+[;l]))/i.test(this._ua)]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getPowerPC() {
    return Asserts.one([/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua), this._navigator.platform === 'MacPPC']);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getAmd() {
    return Asserts.one([/(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x64', this._navigator.platform === 'Linux x86_64']) || Asserts.one([/(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), /((?:i[346]|x)86)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x86']);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getIntel() {
    return Asserts.one([/(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua), /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x64', this._navigator.platform === 'MacIntel', this._navigator.platform === 'Linux x86_64']) || Asserts.one([/(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), /(ia32(?=;))/i.test(this._ua), /((?:i[346]|x)86)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x86']);
  }
}

/**
 *
 *
 * @export
 * @class GPU
 * @extends {CssFlagsClass}
 */
class GPU extends CssFlagsClass {
  /**
   * Creates an instance of GPU.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='gpu']
   *
   * @memberOf GPU
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'gpu') {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.webGLVendor = this._info.webGLVendor;
    this.webGLRenderer = this._info.webGLRenderer;
    this.vendor = this._info.vendor;
    this.model = this._info.model;
    this.renderer = this._info.renderer;
  }

  /**
   *
   *
   *
   * @memberOf GPU
   */
  _createTestElements() {
    this._canvas = this._document.createElement('canvas');
    this._info = this.getInfo();
  }

  // /**
  //  *
  //  *
  //  *
  //  * @memberOf GPU
  //  */
  // _destroyTestElements() {
  //   this._canvas = null;
  //   this._info = null;

  //   delete this._canvas;
  //   delete this._info;
  // }

  /**
   *
   *
   * @returns object
   *
   * @memberOf GPU
   */
  getInfo() {
    const info = {
      webGLVendor: 'n/a',
      webGLRenderer: 'n/a',
      vendor: 'n/a',
      model: 'n/a',
      renderer: 'n/a'
    };
    try {
      const webGLContext = this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl');
      if (webGLContext) {
        const dbgRenderInfo = webGLContext.getExtension('WEBGL_debug_renderer_info');
        if (dbgRenderInfo != null) {
          info.merge({
            vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
            model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(' OpenGL Engine', ''),
            renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
          });
        }
        info.merge({
          webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
          webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER)
        });
      }
    } catch (e) {
      console.warn('webGL is not supported', e.message);
    }
    return info;
  }
}

//! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Hardware Module v' + ("3.0.0" ) + ' initialized');
}

export { CPU, Device, GPU, Platform };
//# sourceMappingURL=hardware.mjs.map
