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

    this._cssFlags = !!cssFlags ? [] : null;
    this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');

    //! Features
    this.checkFeature();

    //! Software
    this.checkEngine();
    this.checkBrowser();
    this.checkOS();

    //! Hardware
    this.checkDevice();
    this.checkCPU();
    this.checkGPU();
    this.checkPlatform();

    this.setCssFlags();

    // remove unnecessary memory usage
    delete this._cssFlags;
    delete this._cssFlagsPrefix;
    delete this._ua;

    console.warn('DetectorJS initialized', this);
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

    this.engine = engine.toFlags();

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

    this.browser = browser.toFlags();

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

    this.os = os.toFlags();

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

    this.cpu = cpu.toFlags();

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

    this.platform = platform.toFlags();

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
    const cssFlagsPrefixed = this._cssFlags.map(cssFlag => this._cssFlagsPrefix + cssFlag);
    const htmlElement = document.documentElement || document.querySelector('html');


    if ('classList' in htmlElement) {
      htmlElement.classList.add(...cssFlagsPrefixed);
    } else {
      cssFlagsPrefixed.forEach(cssFlag => htmlElement.className.replace(cssFlag, ''));

      htmlElement.className += this._cssFlags.join(' ').trim();
    }
  }
}
