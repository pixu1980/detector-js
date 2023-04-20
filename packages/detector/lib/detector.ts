import packageJSON from '../package.json';

/*jshint expr: true */
import { FlagsClass } from '@detector-js/core';

//! Features
import { Feature, AudioFeature, VideoFeature } from '@detector-js/feature';

//! Hardware
import { Platform, Device, CPU, GPU } from '@detector-js/hardware';

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
  #values: boolean;
  #cssFlags: string[] | null;
  #cssFlagsPrefix: string;

  feature: any;
  browser: {};
  engine: any;
  os: {};
  device: any;
  cpu: {};
  gpu: any;
  platform: string;

  /**
   * Creates an instance of Detector.
   * @param {boolean} [cssFlags=false]
   * @param {string} [cssFlagsPrefix='djs']
   * @param {any} [ua=null]
   *
   * @memberOf Detector
   */
  constructor(ua: string | null = null, values = true, cssFlags = false, cssFlagsPrefix = 'djs') {
    super(ua);

    this.#values = values;
    this.#cssFlags = !!cssFlags ? [] : null;
    this.#cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');

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

    // remove unnecessary memory usage
    // delete this.booleanFlagsValuePropertyName;
    // delete this._values;
    // delete this._cssFlags;
    // delete this._cssFlagsPrefix;
    // delete this.root;
    // delete this.process;
    // delete this.navigator;
    // delete this.document;
    // delete this.ua;

    // console.warn('DetectorJS initialized', this.toFlags());
  }

  //! Feature
  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkFeature() {
    const feature = new Feature(this.ua);
    const audio = new AudioFeature(this.ua);
    const video = new VideoFeature(this.ua);

    this.feature = feature.toFlags().merge({
      audio: audio.toFlags(),
      video: video.toFlags()
    });

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
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
    const engine = new Engine(this.ua, this.toFlags());

    if (this.#values) {
      this.engine = engine.toValues();
    } else {
      this.engine = engine.toFlags();
    }

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(engine.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkBrowser() {
    const browser = new Browser(this.ua, this.toFlags());

    if (this.#values) {
      this.browser = browser.toValues();
    } else {
      this.browser = browser.toFlags();
    }

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(browser.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkOS() {
    const os = new OS(this.ua, this.toFlags());

    if (this.#values) {
      this.os = os.toValues();
    } else {
      this.os = os.toFlags();
    }

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(os.toCssFlags());
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
    const device = new Device(this.ua, this.toFlags());

    this.device = device.toFlags();

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(device.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkCPU() {
    const cpu = new CPU(this.ua, this.toFlags());

    if (this.#values) {
      this.cpu = cpu.toValues();
    } else {
      this.cpu = cpu.toFlags();
    }

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(cpu.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkGPU() {
    const gpu = new GPU(this.ua, this.toFlags());

    this.gpu = gpu.toFlags();

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(gpu.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  checkPlatform() {
    const platform = new Platform(this.ua, this.toFlags());

    if (this.#values) {
      this.platform = platform.toValues();
    } else {
      this.platform = platform.toFlags();
    }

    if (!!this.#cssFlags) {
      this.#cssFlags = this.#cssFlags.concat(platform.toCssFlags());
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
    if (!!this.#cssFlags) {
      const cssFlagsPrefixed = this.#cssFlags.map((cssFlag) => {
        return this.#cssFlagsPrefix + cssFlag;
      });

      const htmlElement = document.documentElement || document.querySelector('html');

      cssFlagsPrefixed.forEach((cssFlag) => {
        return htmlElement.className.replace(cssFlag, '');
      });

      htmlElement.className += cssFlagsPrefixed.join(' ').trim();
    }
  }
}

console.log(`DetectorJS v${packageJSON.version} initialized`);
