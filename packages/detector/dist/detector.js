var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
    this._refineCpuWithGpu();
    this.checkPlatform();
    this.setCssFlags();
    this.upgrade();
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
    this._os = os;
    if (this._values) {
      this.os = os.toValues();
    } else {
      this.os = os.toFlags();
    }
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(os.toCssFlags());
    }
  }
  /**
   * Resolves the real OS version through User-Agent Client Hints (high-entropy)
   * and refreshes `os` (e.g. modern macOS reports a legacy-compat UA "Mac OS X
   * 10_15_7" while the real version is, say, 26.6.2 "Tahoe").
   * Already kicked off automatically in the constructor; call it again to await.
   *
   * @returns {Promise<object>}
   *
   * @memberOf Detector
   */
  /**
   * Refines the CPU detection from the GPU (WebGL) identity — the only reliable
   * synchronous evidence for Apple Silicon, since UA/platform use the legacy
   * "MacIntel"/"Mac OS X 10_15_7" strings on both Intel and Apple chips.
   *
   * @memberOf Detector
   */
  _refineCpuWithGpu() {
    const { cpu } = this;
    if (!cpu) return;
    const { vendor, model, renderer } = this.gpu || {};
    const gpuText = String([vendor, model, renderer].filter(Boolean).join(" "));
    if (/apple\s+(?:m(?:[1-9]|pro|max|ultra)|gpu)\b/i.test(gpuText)) {
      this.cpu = __spreadProps(__spreadValues({}, cpu), {
        architecture: "arm64",
        vendor: "apple"
      });
    } else if (cpu.architecture === "arm64" && this._isMacOS() && (!cpu.vendor || cpu.vendor === "arm")) {
      this.cpu = __spreadProps(__spreadValues({}, cpu), {
        vendor: "apple"
      });
    } else if (/\bintel\b/i.test(gpuText) && (!cpu.architecture || cpu.architecture === "x86")) {
      this.cpu = __spreadProps(__spreadValues({}, cpu), {
        architecture: "x64",
        vendor: "intel"
      });
    }
  }
  /**
   *
   *
   * @returns {boolean}
   *
   * @memberOf Detector
   */
  _isMacOS() {
    const os = this.os || {};
    return os.name === "macOS" || /mac/i.test(this.ua);
  }
  /**
   * Resolves the real OS and CPU versions through User-Agent Client Hints
   * (high-entropy), then re-runs the GPU-based CPU refinement. Auto-started in
   * the constructor; await it for determinism. Safe no-op when hints are absent
   * (Safari/WebKit, Firefox) or denied (Permissions-Policy).
   *
   * @returns {Promise<object>}
   *
   * @memberOf Detector
   */
  upgrade() {
    const tasks = [];
    if (this._os && typeof this._os.upgrade === "function") {
      tasks.push(this._os.upgrade().then((values) => {
        this.os = values;
      }));
    }
    if (this._cpu && typeof this._cpu.upgrade === "function") {
      tasks.push(this._cpu.upgrade().then((values) => {
        this.cpu = values;
        this._refineCpuWithGpu();
      }));
    }
    this._upgradePromise = Promise.all(tasks).then(() => {
      this._upgraded = true;
      return this.toFlags ? this.toFlags() : this.os;
    });
    return this._upgradePromise;
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
    this._cpu = cpu;
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
if (import_feature.Feature && import_feature.Feature.APIS) {
  Detector.PROBES = import_feature.Feature.APIS;
}
if (typeof process !== "undefined" && process.env && true) {
  console.log("DetectorJS Detector Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
}
//! Features
//! Hardware
//! Software
//! MDN Web API catalog (probes + mdn urls) — exposed for tooling/UIs
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//# sourceMappingURL=detector.js.map
