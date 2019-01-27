/*jshint expr: true */
import FlagsClass from './Core/FlagsClass';

//! Features
import Feature from './Feature/Feature';
import VideoFeature from './Feature/VideoFeature';
import AudioFeature from './Feature/AudioFeature';

//! Hardware
import Platform from './Hardware/Platform';
import Device from './Hardware/Device';
import CPU from './Hardware/CPU';
import GPU from './Hardware/GPU';

//! Software
import OS from './Software/OS';
import Browser from './Software/Browser';
import Engine from './Software/Engine';

/**
 *
 *
 * @export
 * @class Detector
 * @extends {FlagsClass}
 */
export default class Detector extends FlagsClass {
  /**
   * Creates an instance of Detector.
   * @param {boolean} [cssFlags=false]
   * @param {string} [cssFlagsPrefix='djs']
   * @param {any} [ua=window.navigator.userAgent]
   *
   * @memberOf Detector
   */
  constructor(cssFlags = false, cssFlagsPrefix = 'djs', ua = window.navigator.userAgent) {
    super(ua);

    if (!!cssFlags) {
      this._cssFlags = [];
      this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');
    }

    //! Features
    this.checkFeature(cssFlags);

    //! Software
    this.checkEngine(cssFlags);
    this.checkBrowser(cssFlags);
    this.checkOS(cssFlags);

    //! Hardware
    this.checkPlatform(cssFlags);
    this.checkDevice(cssFlags);
    this.checkCPU(cssFlags);
    this.checkGPU(cssFlags);

    if (!!cssFlags) {
      this.setCssFlags();
    }


    // remove unnecessary memory usage
    delete this._cssFlags;
    delete this._cssFlagsPrefix;
    delete this._ua;

    console.warn('DetectorJS initialized', this);
  }

  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   * @memberof Detector
   */
  checkFeature(cssFlags = false) {
    const feature = new Feature(this._ua);
    const audio = new AudioFeature(this._ua);
    const video = new VideoFeature(this._ua);

    this.feature = feature.toFlags().merge({
      audio: audio.toFlags(),
      video: video.toFlags(),
    });

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
    }
  }

  //! Software
  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkEngine(cssFlags = false) {
    const engine = new Engine(this._ua, this.toFlags());

    this.engine = engine.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(engine.toCssFlags());
    }
  }

  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkBrowser(cssFlags = false) {
    const browser = new Browser(this._ua, this.toFlags());

    this.browser = browser.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(browser.toCssFlags());
    }
  }

  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkOS(cssFlags = false) {
    const os = new OS(this._ua, this.toFlags());

    this.os = os.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(os.toCssFlags());
    }
  }

  //! Hardware
  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkPlatform(cssFlags = false) {
    const platform = new Platform(this._ua, this.toFlags());

    this.platform = platform.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(platform.toCssFlags());
    }
  }

  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkDevice(cssFlags = false) {
    const device = new Device(this._ua, this.toFlags());

    this.device = device.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(device.toCssFlags());
    }
  }

  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkCPU(cssFlags = false) {
    const cpu = new CPU(this._ua, this.toFlags());

    this.cpu = cpu.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(cpu.toCssFlags());
    }
  }

  /**
   *
   *
   * @param {boolean} [cssFlags=false]
   *
   * @memberOf Detector
   */
  checkGPU(cssFlags = false) {
    const gpu = new GPU(this._ua, this.toFlags());

    this.gpu = gpu.toFlags();

    if (!!cssFlags) {
      this._cssFlags = this._cssFlags.concat(gpu.toCssFlags());
    }
  }

  /**
   *
   *
   *
   * @memberOf Detector
   */
  setCssFlags() {
    const cssFlagsPrefixed = this._cssFlags.map(cssFlag => this._cssFlagsPrefix + cssFlag);

    if (!!document.documentElement.classList) {
      document.documentElement.classList.add(...cssFlagsPrefixed);
    } else {
      cssFlagsPrefixed.forEach(cssFlag => document.documentElement.className.replace(cssFlag, ''));

      document.documentElement.className += this._cssFlags.join(' ').trim();
    }
  }
}
