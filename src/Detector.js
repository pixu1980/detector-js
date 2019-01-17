/*jshint expr: true */

// import Platform from './Platform/Platform';
import Features from './Features/Features';
import UserAgent from './UserAgent/UserAgent';

import { merge } from './Utils/Utils';

// import release from './release.json';

const { navigator } = window;

const features = new Features();
const userAgent = new UserAgent();

export default class Detector {
  constructor(cssFlags = false, cssFlagsPrefix = 'djs') {
    if (!!cssFlags) {
      this._cssFlags = [];
      this._cssFlagsPrefix = cssFlagsPrefix;
    }

    this.platform = this.getPlatform(cssFlags);
    this.os = this.getOS(cssFlags);
    this.browser = this.getBrowser(cssFlags);
    this.features = this.getFeatures(cssFlags);
    this.audio = this.getAudio(cssFlags);
    this.video = this.getVideo(cssFlags);

    if (!!cssFlags) {
      this.setCssFlags();
    }

    // const detectorJSStatus = merge(release.version, {
    //   initialized: true,
    // });

    // console.log('DetectorJS initialized', detectorJSStatus);
  }

  getPlatform(cssFlags = false) {
    let p = {};

    try {
      // see https://github.com/bestiejs/platform.js/blob/master/doc/README.md#readme
      p = merge(p, {
        // description: platform.description,
        // manufacturer: platform.manufacturer, // eg. 'Apple', 'Archos', 'Amazon', 'Asus', 'Barnes & Noble', 'BlackBerry', 'Google', 'HP', 'HTC', 'LG', 'Microsoft', 'Motorola', 'Nintendo', 'Nokia', 'Samsung' and 'Sony'
        desktop: !userAgent.mobile && !userAgent.tablet,
        phone: userAgent.mobile,
        tablet: userAgent.tablet,
        // desktop: false,
        // pc: false,
        // mac: false,
        // iPhone: false,
        // iPad: false,
      });

      if (!!cssFlags) {
        !!p.desktop && this._cssFlags.push('desktop');
        !!p.phone && this._cssFlags.push('phone');
        !!p.tablet && this._cssFlags.push('tablet');
      }
    } catch (e) {
      throw e;
    }

    return p;
  }

  getOS(cssFlags = false) {
    let o = {};

    try {
      o = merge(o, {
        // architecture: platform.os.architecture === 32 ? 'x86' : 'x64',
        // name: platform.os.family,
        // version: platform.os.version || userAgent.osversion,
        android: userAgent.android, //&& platform.os.family === 'Android',
        bada: userAgent.bada,
        blackberry: userAgent.blackberry,
        chromeOS: userAgent.chromeos,
        firefoxOS: userAgent.firefoxos,
        iOS: userAgent.ios, // && platform.os.family === 'iOS',
        linux: userAgent.linux, //&& ['Ubuntu', 'Debian', 'Fedora', 'Red Hat', 'SuSE'].includes(platform.os.family),
        macOS: /Mac OS/.test(navigator.UserAgent), // && userAgent.mac && ['OS X', 'macOS'].includes(platform.os.family),
        sailfish: userAgent.sailfish,
        tizen: userAgent.tizen,
        windows: userAgent.windows, // && ['Windows', 'Windows Server 2008 R2 / 7', 'Windows Server 2008 / Vista', 'Windows XP'].includes(platform.os.family),
        windowsPhone: userAgent.windowsphone, // && platform.os.family === 'Windows Phone',
      });

      if (!!cssFlags) {
        !!o.android && this._cssFlags.push('os-android');
        !!o.bada && this._cssFlags.push('os-bada');
        !!o.blackberry && this._cssFlags.push('os-blackberry');
        !!o.chromeOS && this._cssFlags.push('os-chromeos');
        !!o.firefoxOS && this._cssFlags.push('os-firefoxos');
        !!o.iOS && this._cssFlags.push('os-ios');
        !!o.linux && this._cssFlags.push('os-linux');
        !!o.macOS && this._cssFlags.push('os-macos');
        !!o.sailfish && this._cssFlags.push('os-sailfish');
        !!o.tizen && this._cssFlags.push('os-tizen');
        !!o.windows && this._cssFlags.push('os-windows');
        !!o.windowsPhone && this._cssFlags.push('os-windowsphone');
        !!o.version && this._cssFlags.push('os-version-' + o.version);
      }
    } catch (e) {
      throw e;
    }

    return o;
  }

  getBrowser(cssFlags = false) {
    let b = {};

    try {
      b = merge(b, {
        name: userAgent.name, // || platform.name,
        version: userAgent.version,
        // WebApp mode in iOS
        webApp: navigator.standalone,
        engine: {
          blink: userAgent.blink, // && platform.layout === 'Blink',
          gecko: userAgent.gecko, // && platform.layout === 'Gecko',
          trident: userAgent.msie, // && platform.layout === 'Trident',
          edgeHTML: userAgent.msedge, // && platform.layout === 'EdgeHTML',
          webkit: userAgent.webkit, // && platform.layout === 'WebKit',
        },
        android: userAgent.android, // native android browser
        arora: /Arora/.test(navigator.UserAgent),
        bada: userAgent.bada, // native bada browser
        blackberry: userAgent.blackberry, // native blackberry browser
        chrome: userAgent.chrome, // && platform.name.includes('Chrome'),
        chromeMobile: userAgent.chrome && userAgent.mobile, // && platform.name === 'Chrome Mobile',
        cocoonJS: navigator.isCocoonJS,
        edge: userAgent.msedge, // && platform.name === 'Microsoft Edge',
        ejecta: typeof window.ejecta !== 'undefined',
        // electron: platform.name === 'Electron',
        epiphany: /Epiphany/.test(navigator.UserAgent),
        firefox: userAgent.firefox, // && platform.name.includes('Firefox'),
        firefoxMobile: userAgent.firefox, // && ['Firefox for iOS', 'Firefox Mobile'].includes(platform.name),
        ie: userAgent.msie, // && platform.name.includes('IE'),
        ieMobile: userAgent.msie && userAgent.mobile, // && platform.name === 'IE Mobile',
        midori: /Midori/.test(navigator.UserAgent),
        opera: userAgent.opera, // && platform.name.includes('Opera'),
        operaMobile: userAgent.opera && userAgent.mobile, // && ['Opera Mini', 'Opera Mobile'].includes(platform.name),
        phantom: userAgent.phantom, // && platform.name === 'PhantomJS',
        safari: userAgent.safari, // && platform.name.includes('Safari'),
        safariMobile: /Mobile Safari/.test(navigator.UserAgent) && userAgent.safari && userAgent.ios && userAgent.mobile, // && platform.name.includes('Safari'),
        sailfish: userAgent.sailfish,
        seamonkey: userAgent.seamonkey, // && platform.name === 'SeaMonkey',
        samsung: userAgent.samsungBrowser, // native samsung browser
        silk: userAgent.silk, // && platform.name === 'Silk', // native amazon kindle browser
        tizen: userAgent.tizen, //- native browser
        webOS: userAgent.webos, //- native browser
      });

      if (!!cssFlags) {
        !!b.engine.blink && this._cssFlags.push('engine-blink');
        !!b.engine.gecko && this._cssFlags.push('engine-gecko');
        !!b.engine.trident && this._cssFlags.push('engine-trident');
        !!b.engine.edgeHTML && this._cssFlags.push('engine-edge');
        !!b.engine.webkit && this._cssFlags.push('engine-webkit');

        !!b.android && this._cssFlags.push('browser-android-native');
        !!b.arora && this._cssFlags.push('browser-arora');
        !!b.bada && this._cssFlags.push('browser-bada');
        !!b.blackberry && this._cssFlags.push('browser-blackberry');
        !!b.chrome && this._cssFlags.push('browser-chrome');
        !!b.chromeMobile && this._cssFlags.push('browser-chrome-mobile');
        !!b.cocoonJS && this._cssFlags.push('browser-cocoonjs');
        !!b.edge && this._cssFlags.push('browser-edge');
        !!b.ejecta && this._cssFlags.push('browser-ejecta');
        !!b.electron && this._cssFlags.push('browser-electron');
        !!b.epiphany && this._cssFlags.push('browser-epiphany');
        !!b.firefox && this._cssFlags.push('browser-firefox');
        !!b.firefoxMobile && this._cssFlags.push('browser-firefox-mobile');
        !!b.ie && this._cssFlags.push('browser-ie');
        !!b.ieMobile && this._cssFlags.push('browser-ie-mobile');
        !!b.midori && this._cssFlags.push('browser-midori');
        !!b.opera && this._cssFlags.push('browser-opera');
        !!b.operaMobile && this._cssFlags.push('browser-opera-mobile');
        !!b.phantom && this._cssFlags.push('browser-phantom');
        !!b.safari && this._cssFlags.push('browser-safari');
        !!b.safariMobile && this._cssFlags.push('browser-safari-mobile');
        !!b.sailfish && this._cssFlags.push('browser-sailfish');
        !!b.seamonkey && this._cssFlags.push('browser-seamonkey');
        !!b.samsung && this._cssFlags.push('browser-samsung');
        !!b.silk && this._cssFlags.push('browser-silk');
        !!b.tizen && this._cssFlags.push('browser-tizen');
        !!b.webOS && this._cssFlags.push('browser-webos');

        !!b.version && this._cssFlags.push('browser-version-' + b.version);
      }
    } catch (e) {
      throw e;
    }

    return b;
  }

  getAudio(cssFlags = false) {
    let a = {
      audioData: !!(window.Audio),
      webAudio: !!(window.webkitAudioContext || window.AudioContext),
    };

    try {
      const audioElement = document.createElement('audio');

      if (!!audioElement.canPlayType) {
        a = merge(a, {
          ogg: audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== '',
          opus: audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== '',
          mp3: audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== '',
          // Mimetypes accepted:
          //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
          //   bit.ly/iphoneoscodecs
          wav: audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== '',
          m4a: (audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== '',
          webm: audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== '',
        });

        if (!!cssFlags) {
          !!a.ogg && this._cssFlags.push('audio-ogg');
          !!a.opus && this._cssFlags.push('audio-opus');
          !!a.mp3 && this._cssFlags.push('audio-mp3');
          !!a.wav && this._cssFlags.push('audio-wav');
          !!a.m4a && this._cssFlags.push('audio-m4a');
          !!a.webm && this._cssFlags.push('audio-webm');
        }
      }
    } catch (e) {
      throw e;
    }

    return a;
  }

  getVideo(cssFlags = false) {
    let v = {};

    try {
      const videoElement = document.createElement('video');

      if (!!videoElement.canPlayType) {
        v = merge(v, {
          mp4: videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '',
          ogv: videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '',
          webm: videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '',
        });

        if (!!cssFlags) {
          !!v.mp4 && this._cssFlags.push('video-mp4');
          !!v.ogv && this._cssFlags.push('video-ogv');
          !!v.webm && this._cssFlags.push('video-webm');
        }
      }
    } catch (e) {
      throw e;
    }

    return v;
  }

  getFeatures(cssFlags = false) {
    let f = {};

    try {
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

      f = merge(f, {
        async: features.async,
        addEventListener: features.addEventListener,
        battery: !!navigator.battery,
        canvas: features.canvas,
        classList: features.classList,
        cors: features.cors,
        contextMenu: features.contextMenu,
        css3D: features.css3Dtransform,
        cssTransform: features.cssTransform,
        cssTransition: features.cssTransition,
        defer: features.defer,
        file: !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob,
        fileSystem: !!window.requestFileSystem,
        fullscreen: features.fullscreen,
        // fullscreenKeyboard: window.Element && Element['ALLOW_KEYBOARD_INPUT'],
        geolocation: features.geolocation,
        getUserMedia: !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia),
        historyAPI: features.historyAPI,
        littleEndian: (typeof Int8Array !== 'undefined') && new Int8Array(new Int16Array([1]).buffer)[0] > 0,
        localStorage: features.localStorage,
        matchMedia: features.matchMedia,
        motion: features.deviceMotion,
        mspointer: window.navigator.msPointerEnabled || window.navigator.pointerEnabled,
        orientation: features.deviceOrientation,
        pictureElement: features.pictureElement,
        pixelRatio: window.devicePixelRatio || 1,
        placeholder: features.placeholder,
        pointerLock: 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document,
        querySelectorAll: features.querySelectorAll,
        quirksMode: (document.compatMode !== 'CSS1Compat'),
        remUnit: features.remUnit,
        serviceWorker: features.serviceWorker,
        sizes: features.sizes,
        srcset: features.srcset,
        svg: features.svg,
        touch: ('ontouchstart' in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1)) && features.touch,
        typedArray: (typeof Int8Array !== 'undefined'),
        vibration: navigator.vibrate,
        viewportUnit: features.viewportUnit,
        webGL: features.webGL,
        webVR: features.webVR,
        worker: !!window.Worker,
      });

      if (!!cssFlags) {
        !!f.css3D && this._cssFlags.push('feature-css3d');
        !!f.cssTransform && this._cssFlags.push('feature-css-transforms');
        !!f.cssTransition && this._cssFlags.push('feature-css-transitions');
        !!f.fullscreen && this._cssFlags.push('feature-fullscreen');
        !!f.motion && this._cssFlags.push('feature-device-motion');
        !!f.orientation && this._cssFlags.push('feature-device-orientation');
        !!f.pixelRatio && this._cssFlags.push('feature-pixel-ratio-' + f.pixelRatio);
        !!f.remUnit && this._cssFlags.push('feature-rem-unit');
        !!f.touch && this._cssFlags.push('feature-touch');
        !!f.webGL && this._cssFlags.push('feature-webgl');
        !!f.webVR && this._cssFlags.push('feature-webvr');
      }
    } catch (e) {
      throw e;
    }

    return f;
  }

  setCssFlags() {
    document.documentElement.className += this._cssFlags.join(' ' + this._cssFlagsPrefix + '-');
  }
}
