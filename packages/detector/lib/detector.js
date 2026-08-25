/*jshint expr: true */
import { FlagsClass } from '@detector-js/core';

//! Features
import { Feature, AudioFeature, VideoFeature } from '@detector-js/feature';

//! Hardware
import {
  Platform,
  Device,
  CPU,
  GPU,
} from '@detector-js/hardware';

//! Software
import { Browser, Engine, OS } from '@detector-js/software';

/**
 *
 *
 * @export
 * @class Detector
 * @extends {FlagsClass}
 */
export class Detector extends FlagsClass {
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
    const feature = new Feature(this._ua);
    const audio = new AudioFeature(this._ua);
    const video = new VideoFeature(this._ua);

    this.feature = feature.toFlags().merge({
      audio: audio.toFlags(),
      video: video.toFlags(),
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
    const engine = new Engine(this._ua, this.toFlags());

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
    const browser = new Browser(this._ua, this.toFlags());

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
    const os = new OS(this._ua, this.toFlags());

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
    const device = new Device(this._ua, this.toFlags());

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
    const cpu = new CPU(this._ua, this.toFlags());

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
    const gpu = new GPU(this._ua, this.toFlags());

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
    const platform = new Platform(this._ua, this.toFlags());

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

      const htmlElement = document.documentElement || document.querySelector('html');

      cssFlagsPrefixed.forEach((cssFlag) => {
        return htmlElement.className.replace(cssFlag, '');
      });

      htmlElement.className += cssFlagsPrefixed.join(' ').trim();
    }
  }
}

//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Detector Module v' + (typeof __VERSION__ !== 'undefined' ? __VERSION__ : '0.0.0') + ' initialized');
}
