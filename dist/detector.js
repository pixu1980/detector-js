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

// packages/detector/lib/detector.js
var detector_exports = {};
__export(detector_exports, {
  Detector: () => Detector
});
module.exports = __toCommonJS(detector_exports);
var import_core = require("@detector-js/core");
var import_feature = require("@detector-js/feature");
var import_hardware = require("@detector-js/hardware");
var import_software = require("@detector-js/software");
var Detector = class extends import_core.FlagsClass {
  /**
   * Creates an instance of Detector.
   * @param {boolean} [cssFlags=false]
   * @param {string} [cssFlagsPrefix='djs']
   * @param {any} [ua=null]
   *
   * @memberOf Detector
   */
  constructor(ua = null, values = true, cssFlags = false, cssFlagsPrefix = "djs") {
    super(ua);
    this._values = values;
    this._cssFlags = !!cssFlags ? [] : null;
    this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? "--" : "");
    this.checkFeature();
    this.checkEngine();
    this.checkBrowser();
    this.checkOS();
    this.checkCPU();
    this.checkGPU();
    this.checkPlatform();
    this.setCssFlags();
  }
  //! Feature
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkFeature() {
    const feature = new import_feature.Feature(this._ua);
    const audio = new import_feature.AudioFeature(this._ua);
    const video = new import_feature.VideoFeature(this._ua);
    this.feature = feature.toFlags().merge({
      audio: audio.toFlags(),
      video: video.toFlags()
    });
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
    }
  }
  //! Software
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkEngine() {
    const engine = new import_software.Engine(this._ua, this.toFlags());
    if (this._values) {
      this.engine = engine.toValues();
    } else {
      this.engine = engine.toFlags();
    }
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(engine.toCssFlags());
    }
  }
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkBrowser() {
    const browser = new import_software.Browser(this._ua, this.toFlags());
    if (this._values) {
      this.browser = browser.toValues();
    } else {
      this.browser = browser.toFlags();
    }
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(browser.toCssFlags());
    }
  }
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkOS() {
    const os = new import_software.OS(this._ua, this.toFlags());
    if (this._values) {
      this.os = os.toValues();
    } else {
      this.os = os.toFlags();
    }
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(os.toCssFlags());
    }
  }
  //! Hardware
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkDevice() {
    const device = new import_hardware.Device(this._ua, this.toFlags());
    this.device = device.toFlags();
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(device.toCssFlags());
    }
  }
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkCPU() {
    const cpu = new import_hardware.CPU(this._ua, this.toFlags());
    if (this._values) {
      this.cpu = cpu.toValues();
    } else {
      this.cpu = cpu.toFlags();
    }
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(cpu.toCssFlags());
    }
  }
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkGPU() {
    const gpu = new import_hardware.GPU(this._ua, this.toFlags());
    this.gpu = gpu.toFlags();
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(gpu.toCssFlags());
    }
  }
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkPlatform() {
    const platform = new import_hardware.Platform(this._ua, this.toFlags());
    if (this._values) {
      this.platform = platform.toValues();
    } else {
      this.platform = platform.toFlags();
    }
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(platform.toCssFlags());
    }
  }
  //! CSS Flags
  /**
   *
   *
   *
   * @memberOf Detector
   */
  setCssFlags() {
    if (!!this._cssFlags) {
      const cssFlagsPrefixed = this._cssFlags.map((cssFlag) => {
        return this._cssFlagsPrefix + cssFlag;
      });
      const htmlElement = document.documentElement || document.querySelector("html");
      cssFlagsPrefixed.forEach((cssFlag) => {
        return htmlElement.className.replace(cssFlag, "");
      });
      htmlElement.className += cssFlagsPrefixed.join(" ").trim();
    }
  }
};
if (typeof process !== "undefined" && process.env && true) {
  console.log("DetectorJS Detector Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
}
//! Features
//! Hardware
//! Software
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//# sourceMappingURL=detector.js.map
