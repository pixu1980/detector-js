/*jshint expr: true */

// import Platform from './Platform/Platform';

import CPU from './Hardware/CPU';
import OS from './OS/OS';
import Engines from './Engines/Engines';
import Features from './Features/Features';
import VideoFeature from './Features/VideoFeature';
import AudioFeature from './Features/AudioFeature';
import GPU from './Hardware/GPU';

export default class Detector {
  constructor(cssFlags = false, cssFlagsPrefix = 'djs', ua = window.navigator.userAgent) {
    this._ua = ua;

    if (!!cssFlags) {
      this._cssFlags = [];
      this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');
    }

    //! Hardware
    this.hardware = {
      cpu: this.getCPU(cssFlags),
      gpu: this.getGPU(cssFlags),
    };

    //! Software
    this.os = this.getOS(cssFlags);
    this.platform = this.getPlatform(cssFlags);

    this.engines = this.getEngines(cssFlags);
    this.features = this.getFeatures(cssFlags);
    this.audio = this.getAudio(cssFlags);
    this.video = this.getVideo(cssFlags);


    this.browser = this.getBrowser(cssFlags);

    if (!!cssFlags) {
      this.setCssFlags();
    }

    console.warn('DetectorJS initialized', this);
  }

  getCPU(cssFlags = false) {
    const cpu = new CPU(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(cpu.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return cpu.toFlags();
  }

  getGPU(cssFlags = false) {
    const gpu = new GPU(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(gpu.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return gpu.toFlags();
  }

  getOS(cssFlags = false) {
    const os = new OS(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(os.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return os.toFlags();
  }

  getEngines(cssFlags = false) {
    const engines = new Engines(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(engines.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return engines.toFlags();
  }

  getFeatures(cssFlags = false) {
    const features = new Features(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(features.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return features.toFlags();
  }

  getVideo(cssFlags = false) {
    const video = new VideoFeature(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(video.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return video.toFlags();
  }

  getAudio(cssFlags = false) {
    const audio = new AudioFeature(this._ua);

    try {
      if (!!cssFlags) {
        this._cssFlags = this._cssFlags.concat(audio.toCssFlags());
      }
    } catch (e) {
      throw e;
    }

    return audio.toFlags();
  }

  getPlatform(cssFlags = false) {
    const p = {};

    try {
      // see https://github.com/bestiejs/platform.js/blob/master/doc/README.md#readme
      // p = merge(p, {
      // description: platform.description,
      // manufacturer: platform.manufacturer, // eg. 'Apple', 'Archos', 'Amazon', 'Asus', 'Barnes & Noble', 'BlackBerry', 'Google', 'HP', 'HTC', 'LG', 'Microsoft', 'Motorola', 'Nintendo', 'Nokia', 'Samsung' and 'Sony'
      // desktop: !userAgent.mobile && !userAgent.tablet,
      // phone: userAgent.mobile,
      // tablet: userAgent.tablet,
      // desktop: false,
      // pc: false,
      // mac: false,
      // iPhone: false,
      // iPad: false,
      // });

      if (!!cssFlags) {
        // !!p.desktop && this._cssFlags.push('desktop');
        // !!p.phone && this._cssFlags.push('phone');
        // !!p.tablet && this._cssFlags.push('tablet');
      }
    } catch (e) {
      throw e;
    }

    return p;
  }

  // getOS(cssFlags = false) {
  //   const o = {};

  //   try {
  //     // o = merge(o, {
  //     // architecture: platform.os.architecture === 32 ? 'x86' : 'x64',
  //     // name: platform.os.family,
  //     // version: platform.os.version || userAgent.osversion,
  //     // android: userAgent.android, //&& platform.os.family === 'Android',
  //     // bada: userAgent.bada,
  //     // blackberry: userAgent.blackberry,
  //     // chromeOS: userAgent.chromeos,
  //     // firefoxOS: userAgent.firefoxos,
  //     // iOS: userAgent.ios, // && platform.os.family === 'iOS',
  //     // linux: userAgent.linux, //&& ['Ubuntu', 'Debian', 'Fedora', 'Red Hat', 'SuSE'].includes(platform.os.family),
  //     // macOS: /Mac OS/.test(navigator.UserAgent), // && userAgent.mac && ['OS X', 'macOS'].includes(platform.os.family),
  //     // sailfish: userAgent.sailfish,
  //     // tizen: userAgent.tizen,
  //     // windows: userAgent.windows, // && ['Windows', 'Windows Server 2008 R2 / 7', 'Windows Server 2008 / Vista', 'Windows XP'].includes(platform.os.family),
  //     // windowsPhone: userAgent.windowsphone, // && platform.os.family === 'Windows Phone',
  //     // });

  //     if (!!cssFlags) {
  //       // !!o.android && this._cssFlags.push('os-android');
  //       // !!o.bada && this._cssFlags.push('os-bada');
  //       // !!o.blackberry && this._cssFlags.push('os-blackberry');
  //       // !!o.chromeOS && this._cssFlags.push('os-chromeos');
  //       // !!o.firefoxOS && this._cssFlags.push('os-firefoxos');
  //       // !!o.iOS && this._cssFlags.push('os-ios');
  //       // !!o.linux && this._cssFlags.push('os-linux');
  //       // !!o.macOS && this._cssFlags.push('os-macos');
  //       // !!o.sailfish && this._cssFlags.push('os-sailfish');
  //       // !!o.tizen && this._cssFlags.push('os-tizen');
  //       // !!o.windows && this._cssFlags.push('os-windows');
  //       // !!o.windowsPhone && this._cssFlags.push('os-windowsphone');
  //       // !!o.version && this._cssFlags.push('os-version-' + o.version);
  //     }
  //   } catch (e) {
  //     throw e;
  //   }

  //   return o;
  // }

  getBrowser(cssFlags = false) {
    const b = {};

    try {
      // b = merge(b, {
      // name: userAgent.name, // || platform.name,
      // version: userAgent.version,
      // // WebApp mode in iOS
      // webApp: navigator.standalone,
      // engine: {
      //   blink: userAgent.blink, // && platform.layout === 'Blink',
      //   gecko: userAgent.gecko, // && platform.layout === 'Gecko',
      //   trident: userAgent.msie, // && platform.layout === 'Trident',
      //   edgeHTML: userAgent.msedge, // && platform.layout === 'EdgeHTML',
      //   webkit: userAgent.webkit, // && platform.layout === 'WebKit',
      // },
      // android: userAgent.android, // native android browser
      // arora: /Arora/.test(navigator.UserAgent),
      // bada: userAgent.bada, // native bada browser
      // blackberry: userAgent.blackberry, // native blackberry browser
      // chrome: userAgent.chrome, // && platform.name.includes('Chrome'),
      // chromeMobile: userAgent.chrome && userAgent.mobile, // && platform.name === 'Chrome Mobile',
      // cocoonJS: navigator.isCocoonJS,
      // edge: userAgent.msedge, // && platform.name === 'Microsoft Edge',
      // ejecta: typeof window.ejecta !== 'undefined',
      // // electron: platform.name === 'Electron',
      // epiphany: /Epiphany/.test(navigator.UserAgent),
      // firefox: userAgent.firefox, // && platform.name.includes('Firefox'),
      // firefoxMobile: userAgent.firefox, // && ['Firefox for iOS', 'Firefox Mobile'].includes(platform.name),
      // ie: userAgent.msie, // && platform.name.includes('IE'),
      // ieMobile: userAgent.msie && userAgent.mobile, // && platform.name === 'IE Mobile',
      // midori: /Midori/.test(navigator.UserAgent),
      // opera: userAgent.opera, // && platform.name.includes('Opera'),
      // operaMobile: userAgent.opera && userAgent.mobile, // && ['Opera Mini', 'Opera Mobile'].includes(platform.name),
      // phantom: userAgent.phantom, // && platform.name === 'PhantomJS',
      // safari: userAgent.safari, // && platform.name.includes('Safari'),
      // safariMobile: /Mobile Safari/.test(navigator.UserAgent) && userAgent.safari && userAgent.ios && userAgent.mobile, // && platform.name.includes('Safari'),
      // sailfish: userAgent.sailfish,
      // seamonkey: userAgent.seamonkey, // && platform.name === 'SeaMonkey',
      // samsung: userAgent.samsungBrowser, // native samsung browser
      // silk: userAgent.silk, // && platform.name === 'Silk', // native amazon kindle browser
      // tizen: userAgent.tizen, //- native browser
      // webOS: userAgent.webos, //- native browser
      // });

      if (!!cssFlags) {
        // !!b.engine.blink && this._cssFlags.push('engine-blink');
        // !!b.engine.gecko && this._cssFlags.push('engine-gecko');
        // !!b.engine.trident && this._cssFlags.push('engine-trident');
        // !!b.engine.edgeHTML && this._cssFlags.push('engine-edge');
        // !!b.engine.webkit && this._cssFlags.push('engine-webkit');

        // !!b.android && this._cssFlags.push('browser-android-native');
        // !!b.arora && this._cssFlags.push('browser-arora');
        // !!b.bada && this._cssFlags.push('browser-bada');
        // !!b.blackberry && this._cssFlags.push('browser-blackberry');
        // !!b.chrome && this._cssFlags.push('browser-chrome');
        // !!b.chromeMobile && this._cssFlags.push('browser-chrome-mobile');
        // !!b.cocoonJS && this._cssFlags.push('browser-cocoonjs');
        // !!b.edge && this._cssFlags.push('browser-edge');
        // !!b.ejecta && this._cssFlags.push('browser-ejecta');
        // !!b.electron && this._cssFlags.push('browser-electron');
        // !!b.epiphany && this._cssFlags.push('browser-epiphany');
        // !!b.firefox && this._cssFlags.push('browser-firefox');
        // !!b.firefoxMobile && this._cssFlags.push('browser-firefox-mobile');
        // !!b.ie && this._cssFlags.push('browser-ie');
        // !!b.ieMobile && this._cssFlags.push('browser-ie-mobile');
        // !!b.midori && this._cssFlags.push('browser-midori');
        // !!b.opera && this._cssFlags.push('browser-opera');
        // !!b.operaMobile && this._cssFlags.push('browser-opera-mobile');
        // !!b.phantom && this._cssFlags.push('browser-phantom');
        // !!b.safari && this._cssFlags.push('browser-safari');
        // !!b.safariMobile && this._cssFlags.push('browser-safari-mobile');
        // !!b.sailfish && this._cssFlags.push('browser-sailfish');
        // !!b.seamonkey && this._cssFlags.push('browser-seamonkey');
        // !!b.samsung && this._cssFlags.push('browser-samsung');
        // !!b.silk && this._cssFlags.push('browser-silk');
        // !!b.tizen && this._cssFlags.push('browser-tizen');
        // !!b.webOS && this._cssFlags.push('browser-webos');

        // !!b.version && this._cssFlags.push('browser-version-' + b.version);
      }
    } catch (e) {
      throw e;
    }

    return b;
  }

  setCssFlags() {
    document.documentElement.className += this._cssFlagsPrefix + this._cssFlags.join(' ' + this._cssFlagsPrefix).trim();
  }
}
