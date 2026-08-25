var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// packages/hardware/lib/hardware.js
var hardware_exports = {};
__export(hardware_exports, {
  CPU: () => CPU,
  Device: () => Device,
  GPU: () => GPU,
  Platform: () => Platform
});
module.exports = __toCommonJS(hardware_exports);

// packages/hardware/lib/platform.js
var import_core = require("@detector-js/core");
var Platform = class extends import_core.CssFlagsClass {
  /**
   * Creates an instance of Platform.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='platform']
   *
   * @memberOf Platform
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "platform") {
    super(ua, flags, cssFlagsPrefix);
  }
  /**
   *
   *
   * @readonly
   * @memberOf Platform
   */
  get bot() {
    return import_core.Asserts.one([
      /googlebot/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get console() {
    return import_core.Asserts.all([
      /(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this._ua),
      !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @readonly
   * @memberof Platform
   */
  get tv() {
    return import_core.Asserts.one([
      /(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this._ua),
      /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this._ua)
    ]) && import_core.Asserts.one([
      !this.mobile,
      !this.bot,
      this._flags.feature.fullscreenKeyboard
    ]) && import_core.Asserts.one([
      this._flags.os.Android,
      this._flags.os.Tizen,
      this._flags.os.WebOS
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
    return import_core.Asserts.all([
      this.mobile,
      /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this._ua)
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
    return import_core.Asserts.all([
      this.mobile,
      !this.tablet
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
    return import_core.Asserts.one([
      this._flags.feature.deviceMotion,
      this._flags.feature.deviceOrientation,
      this._flags.feature.pixelRatio > 1
    ]) && import_core.Asserts.one([
      this._flags.feature.touch,
      this._flags.feature.forceTouch,
      ["ChromeMobile", "EdgeMobile", "IEMobile", "FirefoxMobile", "MaxthonMobile", "OperaMobile", "SafariMobile", "SamsungBrowser", "DuckDuckGo", "Facebook", "Instagram", "TikTok", "Kiwi", "HuaweiBrowser", "Line"].includes(this._flags.browser.name)
    ]) && import_core.Asserts.all([
      !this._flags.feature.pointerEvents,
      this._flags.feature.file
    ]) || import_core.Asserts.all([
      ["Android", "iOS", "WindowsPhone", "Bada", "Blackberry", "Contiki", "MeeGo", "RIM", "QNX", "Palm", "Symbian", "WebOS"].includes(this._flags.os.name),
      ["ChromeMobile", "EdgeMobile", "IEMobile", "FirefoxMobile", "MaxthonMobile", "OperaMobile", "SafariMobile", "SamsungBrowser", "DuckDuckGo", "Facebook", "Instagram", "TikTok", "Kiwi", "HuaweiBrowser", "Line"].includes(this._flags.browser.name)
    ]);
  }
  /**
   *
   *
   * @readonly
   * @memberOf Platform
   */
  get desktop() {
    return import_core.Asserts.all([
      !this.bot,
      !this.console,
      !this.mobile,
      !this.tv
    ]);
  }
  toValues() {
    const proto = Object.getPrototypeOf(this);
    const protoProperties = Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
    });
    return protoProperties[0] || "n/a";
  }
};

// packages/hardware/lib/device.js
var import_core2 = require("@detector-js/core");
var Device = class extends import_core2.CssFlagsClass {
  /**
   * Creates an instance of Device.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='device']
   *
   * @memberOf Device
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "device") {
    super(ua, flags, cssFlagsPrefix);
  }
};

// packages/hardware/lib/cpu.js
var import_core3 = require("@detector-js/core");
var CPU = class extends import_core3.CssFlagsClass {
  constructor(ua = null, flags = {}, cssFlagsPrefix = "cpu") {
    super(ua, flags, cssFlagsPrefix);
    this._booleanFlagsValuePropertyName = "vendor";
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
    return this._navigator.platform || "Win32";
  }
  /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */
  getArchitecture() {
    let cpuClass = this._navigator.cpuClass || "x86";
    if (import_core3.Asserts.one([
      cpuClass === "arm64",
      this._navigator.platform === "MacARM",
      /(?:arm64|aarch64|armv\d|(?:^|[\/\s;(])arm(?=[\s;)\/]|$))/i.test(this._ua)
    ])) {
      cpuClass = "arm64";
    } else if (import_core3.Asserts.one([
      cpuClass === "x64",
      ["Win64", "Linux x86_64", "Linux i686"].includes(this._navigator.platform),
      /(?:x86_64|x86-64|win64|wow64|x64;|amd64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|powerpc64)/i.test(this._ua)
    ])) {
      cpuClass = "x64";
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
    return import_core3.Asserts.one([
      /(sun4\w)[;\)]/i.test(this._ua),
      /sparc(?:64)?(?=;);/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getIrix() {
    return import_core3.Asserts.all([
      /irix(?:64)?(?=;);/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getMips() {
    return import_core3.Asserts.all([
      /mips(?:64)?(?=;);/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getRisc() {
    return import_core3.Asserts.all([
      /pa-risc(?:64)?(?=;);/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getAvr() {
    return import_core3.Asserts.all([
      /(?=atmel\s)avr/i.test(this._ua)
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getArm() {
    return import_core3.Asserts.one([
      /windows\s(ce|mobile);\sppc;/i.test(this._ua),
      /(?:arm64|aarch64|armv\d|(?:^|[\/\s;(])arm(?=[\s;)\/]|$))/i.test(this._ua),
      this._navigator.platform === "MacARM"
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getPowerPC() {
    return import_core3.Asserts.one([
      /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua),
      this._navigator.platform === "MacPPC"
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getAmd() {
    return import_core3.Asserts.one([
      /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === "x64",
      this._navigator.platform === "Linux x86_64"
    ]) || import_core3.Asserts.one([
      /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === "x86"
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getIntel() {
    return import_core3.Asserts.one([
      /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua),
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === "x64",
      this._navigator.platform === "Linux x86_64"
    ]) || import_core3.Asserts.one([
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /(ia32(?=;))/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === "x86"
    ]);
  }
  /**
   * Resolves the true CPU architecture through User-Agent Client Hints
   * (navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness'])).
   * High-entropy: async, can be denied; falls back to the UA-based result.
   *
   * @returns {Promise<object>}
   *
   * @memberOf CPU
   */
  upgrade() {
    return __async(this, null, function* () {
      const uaData = this._navigator.userAgentData;
      if (uaData && typeof uaData.getHighEntropyValues === "function") {
        try {
          const hints = yield uaData.getHighEntropyValues(["architecture", "bitness"]);
          const arch = hints && typeof hints.architecture === "string" ? hints.architecture : null;
          if (arch === "arm") {
            this.architecture = String(hints.bitness || "64") === "32" ? "arm" : "arm64";
            this.arm = true;
            this.intel = false;
            this.amd = false;
            this.powerPC = false;
          } else if (arch === "x86") {
            this.architecture = String(hints.bitness || "64") === "32" ? "x86" : "x64";
            this.intel = true;
            this.amd = false;
            this.arm = false;
          }
        } catch (e) {
        }
      }
      return this.toValues();
    });
  }
};

// packages/hardware/lib/gpu.js
var import_core4 = require("@detector-js/core");
var GPU = class extends import_core4.CssFlagsClass {
  /**
   * Creates an instance of GPU.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='gpu']
   *
   * @memberOf GPU
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "gpu") {
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
    this._canvas = this._document.createElement("canvas");
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
      webGLVendor: "n/a",
      webGLRenderer: "n/a",
      vendor: "n/a",
      model: "n/a",
      renderer: "n/a"
    };
    try {
      const webGLContext = this._canvas.getContext("webgl") || this._canvas.getContext("experimental-webgl");
      if (webGLContext) {
        const dbgRenderInfo = webGLContext.getExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo != null) {
          info.merge({
            vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
            model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(" OpenGL Engine", ""),
            renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
          });
        }
        info.merge({
          webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
          webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER)
        });
      }
    } catch (e) {
      console.warn("webGL is not supported", e.message);
    }
    return info;
  }
};

// packages/hardware/lib/hardware.js
if (typeof process !== "undefined" && process.env && true) {
  console.log("DetectorJS Hardware Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
}
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//# sourceMappingURL=hardware.js.map
