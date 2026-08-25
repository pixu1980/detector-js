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
    // navigator.platform 'MacIntel' is legacy compat on Apple Silicon: infer the real
    // CPU from the GPU (WebGL) evidence — works even where Client Hints are missing (Safari)
    this._refineCpuWithGpu();
    this.checkPlatform();

    this.setCssFlags();

    // kick off the (optional, async) Client-Hints upgrade; reads never throw
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
    const gpuText = String([vendor, model, renderer].filter(Boolean).join(' '));

    // 'Apple M1..M9/Pro/Max/Ultra' or the masked 'Apple GPU' renderer are Apple Silicon
    // only (Apple never shipped an Apple GPU on Intel Macs)
    if (/apple\s+(?:m(?:[1-9]|pro|max|ultra)|gpu)\b/i.test(gpuText)) {
      this.cpu = {
        ...cpu,
        architecture: 'arm64',
        vendor: 'apple',
      };
    } else if (cpu.architecture === 'arm64' && this._isMacOS() && (!cpu.vendor || cpu.vendor === 'arm')) {
      // arm64 on macOS is, by definition, Apple Silicon
      this.cpu = {
        ...cpu,
        vendor: 'apple',
      };
    } else if (/\bintel\b/i.test(gpuText) && (!cpu.architecture || cpu.architecture === 'x86')) {
      // Intel GPU + macOS: macOS on Intel is x86_64
      this.cpu = {
        ...cpu,
        architecture: 'x64',
        vendor: 'intel',
      };
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

    return os.name === 'macOS' || /mac/i.test(this.ua);
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

    if (this._os && typeof this._os.upgrade === 'function') {
      tasks.push(this._os.upgrade().then((values) => { this.os = values; }));
    }

    if (this._cpu && typeof this._cpu.upgrade === 'function') {
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
//! placeholder is rewritten at build time (esbuild `define`).
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Detector Module v' + (typeof __VERSION__ !== 'undefined' ? __VERSION__ : '0.0.0') + ' initialized');
}
