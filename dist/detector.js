'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@detector-js/core');
var feature = require('@detector-js/feature');
var hardware = require('@detector-js/hardware');
var software = require('@detector-js/software');

/*jshint expr: true */

/**
 *
 *
 * @export
 * @class Detector
 * @extends {FlagsClass}
 */
class Detector extends core.FlagsClass {
  /**
   * Creates an instance of Detector.
   * @param {boolean} [cssFlags=false]
   * @param {string} [cssFlagsPrefix='djs']
   * @param {any} [ua=null]
   *
   * @memberOf Detector
   */
  constructor(ua = null, values = true, cssFlags = false, cssFlagsPrefix = 'djs') {
    super(ua);
    this._values = values;
    this._cssFlags = !!cssFlags ? [] : null;
    this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');

    //! Features
    this.checkFeature();

    //! Software
    this.checkEngine();
    this.checkBrowser();
    this.checkOS();

    //! Hardware
    // this.checkDevice();
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
    const feature$1 = new feature.Feature(this._ua);
    const audio = new feature.AudioFeature(this._ua);
    const video = new feature.VideoFeature(this._ua);
    this.feature = feature$1.toFlags().merge({
      audio: audio.toFlags(),
      video: video.toFlags()
    });
    if (!!this._cssFlags) {
      this._cssFlags = this._cssFlags.concat(feature$1.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
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
    const engine = new software.Engine(this._ua, this.toFlags());
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
    const browser = new software.Browser(this._ua, this.toFlags());
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
    const os = new software.OS(this._ua, this.toFlags());
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
    const device = new hardware.Device(this._ua, this.toFlags());
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
    const cpu = new hardware.CPU(this._ua, this.toFlags());
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
    const gpu = new hardware.GPU(this._ua, this.toFlags());
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
    const platform = new hardware.Platform(this._ua, this.toFlags());
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
      const cssFlagsPrefixed = this._cssFlags.map(cssFlag => {
        return this._cssFlagsPrefix + cssFlag;
      });
      const htmlElement = document.documentElement || document.querySelector('html');
      cssFlagsPrefixed.forEach(cssFlag => {
        return htmlElement.className.replace(cssFlag, '');
      });
      htmlElement.className += cssFlagsPrefixed.join(' ').trim();
    }
  }
}

//! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Detector Module v' + ("3.0.0" ) + ' initialized');
}

exports.Detector = Detector;
//# sourceMappingURL=detector.js.map
