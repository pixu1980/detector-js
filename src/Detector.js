import _ from 'lodash';
import platform from 'platform';
import feature from 'feature-js';
import bowser from 'bowser';

import release from './release.json';

const { navigator } = window;

export default class Detector {
  constructor(addCssFlags = false) {
    if (!!addCssFlags) {
      this.cssFlags = [];
    }

    this.platform = this.getPlatform(addCssFlags);
    this.os = this.getOS(addCssFlags);
    this.browser = this.getBrowser(addCssFlags);
    this.features = this.getFeatures(addCssFlags);
    this.audio = this.getAudio(addCssFlags);
    this.video = this.getVideo(addCssFlags);

    if (!!addCssFlags) {
      this.setCssFlags();
    }

    const detectorJSStatus = _.merge(release.version, {
      initialized: true,
    });

    console.log('DetectorJS initialized', detectorJSStatus);
  }

  getPlatform(addCssFlags = false) {
    const p = {};

    try {
      // see https://github.com/bestiejs/platform.js/blob/master/doc/README.md#readme
      _.merge(p, {
        description: platform.description,
        manufacturer: platform.manufacturer, // eg. 'Apple', 'Archos', 'Amazon', 'Asus', 'Barnes & Noble', 'BlackBerry', 'Google', 'HP', 'HTC', 'LG', 'Microsoft', 'Motorola', 'Nintendo', 'Nokia', 'Samsung' and 'Sony'
        desktop: !bowser.mobile && !bowser.tablet,
        phone: bowser.mobile,
        tablet: bowser.tablet,
        // desktop: false,
        // pc: false,
        // mac: false,
        // iPhone: false,
        // iPad: false,
      });

      if (!!addCssFlags) {
        !!p.desktop && this.cssFlags.push('djs-desktop');
        !!p.phone && this.cssFlags.push('djs-phone');
        !!p.tablet && this.cssFlags.push('djs-tablet');
      }
    } catch (e) {
      throw e;
    }

    return p;
  }

  getOS(addCssFlags = false) {
    const o = {};

    try {
      _.merge(o, {
        architecture: platform.os.architecture === 32 ? 'x86' : 'x64',
        name: platform.os.family,
        version: platform.os.version || bowser.osversion,
        android: bowser.android && platform.os.family === 'Android',
        bada: bowser.bada,
        blackberry: bowser.blackberry,
        chromeOS: bowser.chromeos,
        firefoxOS: bowser.firefoxos,
        iOS: bowser.ios && platform.os.family === 'iOS',
        linux: bowser.linux && _.includes(['Ubuntu', 'Debian', 'Fedora', 'Red Hat', 'SuSE'], platform.os.family),
        macOS: /Mac OS/.test(navigator.userAgent) && bowser.mac && _.includes(['OS X', 'macOS'], platform.os.family),
        sailfish: bowser.sailfish,
        tizen: bowser.tizen,
        windows: bowser.windows && _.includes(['Windows', 'Windows Server 2008 R2 / 7', 'Windows Server 2008 / Vista', 'Windows XP'], platform.os.family),
        windowsPhone: bowser.windowsphone && platform.os.family === 'Windows Phone',
      });

      if (!!addCssFlags) {
        !!o.android && this.cssFlags.push('djs-os-android');
        !!o.bada && this.cssFlags.push('djs-os-bada');
        !!o.blackberry && this.cssFlags.push('djs-os-blackberry');
        !!o.chromeOS && this.cssFlags.push('djs-os-chromeos');
        !!o.firefoxOS && this.cssFlags.push('djs-os-firefoxos');
        !!o.iOS && this.cssFlags.push('djs-os-ios');
        !!o.linux && this.cssFlags.push('djs-os-linux');
        !!o.macOS && this.cssFlags.push('djs-os-macos');
        !!o.sailfish && this.cssFlags.push('djs-os-sailfish');
        !!o.tizen && this.cssFlags.push('djs-os-tizen');
        !!o.windows && this.cssFlags.push('djs-os-windows');
        !!o.windowsPhone && this.cssFlags.push('djs-os-windowsphone');
        !!o.version && this.cssFlags.push('djs-os-version-' + o.version);
      }
    } catch (e) {
      throw e;
    }

    return o;
  }

  getBrowser(addCssFlags = false) {
    const b = {};

    try {
      _.merge(b, {
        name: bowser.name || platform.name,
        version: bowser.version,
        // WebApp mode in iOS
        webApp: navigator.standalone,
        engine: {
          blink: bowser.blink && platform.layout === 'Blink',
          gecko: bowser.gecko && platform.layout === 'Gecko',
          trident: bowser.msie && platform.layout === 'Trident',
          edgeHTML: bowser.msedge && platform.layout === 'EdgeHTML',
          webkit: bowser.webkit && platform.layout === 'WebKit',
        },
        android: bowser.android, // native android browser
        arora: /Arora/.test(navigator.userAgent),
        bada: bowser.bada, // native bada browser
        blackberry: bowser.blackberry, // native blackberry browser
        chrome: bowser.chrome && _.includes(platform.name, 'Chrome'),
        chromeMobile: bowser.chrome && bowser.mobile && platform.name === 'Chrome Mobile',
        cocoonJS: navigator.isCocoonJS,
        edge: bowser.msedge && platform.name === 'Microsoft Edge',
        ejecta: typeof window.ejecta !== 'undefined',
        electron: platform.name === 'Electron',
        epiphany: /Epiphany/.test(navigator.userAgent),
        firefox: bowser.firefox && _.includes(platform.name, 'Firefox'),
        firefoxMobile: bowser.firefox && _.includes(['Firefox for iOS', 'Firefox Mobile'], platform.name),
        ie: bowser.msie && _.includes(platform.name, 'IE'),
        ieMobile: bowser.msie && bowser.mobile && platform.name === 'IE Mobile',
        midori: /Midori/.test(navigator.userAgent),
        opera: bowser.opera && _.includes(platform.name, 'Opera'),
        operaMobile: bowser.opera && bowser.mobile && _.includes(['Opera Mini', 'Opera Mobile'], platform.name),
        phantom: bowser.phantom && platform.name === 'PhantomJS',
        safari: bowser.safari && _.includes(platform.name, 'Safari'),
        safariMobile: /Mobile Safari/.test(navigator.userAgent) && bowser.safari && bowser.ios && bowser.mobile && _.includes(platform.name, 'Safari'),
        sailfish: bowser.sailfish,
        seamonkey: bowser.seamonkey && platform.name === 'SeaMonkey',
        samsung: bowser.samsungBrowser, // native samsung browser
        silk: bowser.silk && platform.name === 'Silk', // native amazon kindle browser
        tizen: bowser.tizen, //- native browser
        webOS: bowser.webos, //- native browser
      });

      if (!!addCssFlags) {
        !!b.engine.blink && this.cssFlags.push('djs-engine-blink');
        !!b.engine.gecko && this.cssFlags.push('djs-engine-gecko');
        !!b.engine.trident && this.cssFlags.push('djs-engine-trident');
        !!b.engine.edgeHTML && this.cssFlags.push('djs-engine-edge');
        !!b.engine.webkit && this.cssFlags.push('djs-engine-webkit');

        !!b.android && this.cssFlags.push('djs-browser-android-native');
        !!b.arora && this.cssFlags.push('djs-browser-arora');
        !!b.bada && this.cssFlags.push('djs-browser-bada');
        !!b.blackberry && this.cssFlags.push('djs-browser-blackberry');
        !!b.chrome && this.cssFlags.push('djs-browser-chrome');
        !!b.chromeMobile && this.cssFlags.push('djs-browser-chrome-mobile');
        !!b.cocoonJS && this.cssFlags.push('djs-browser-cocoonjs');
        !!b.edge && this.cssFlags.push('djs-browser-edge');
        !!b.ejecta && this.cssFlags.push('djs-browser-ejecta');
        !!b.electron && this.cssFlags.push('djs-browser-electron');
        !!b.epiphany && this.cssFlags.push('djs-browser-epiphany');
        !!b.firefox && this.cssFlags.push('djs-browser-firefox');
        !!b.firefoxMobile && this.cssFlags.push('djs-browser-firefox-mobile');
        !!b.ie && this.cssFlags.push('djs-browser-ie');
        !!b.ieMobile && this.cssFlags.push('djs-browser-ie-mobile');
        !!b.midori && this.cssFlags.push('djs-browser-midori');
        !!b.opera && this.cssFlags.push('djs-browser-opera');
        !!b.operaMobile && this.cssFlags.push('djs-browser-opera-mobile');
        !!b.phantom && this.cssFlags.push('djs-browser-phantom');
        !!b.safari && this.cssFlags.push('djs-browser-safari');
        !!b.safariMobile && this.cssFlags.push('djs-browser-safari-mobile');
        !!b.sailfish && this.cssFlags.push('djs-browser-sailfish');
        !!b.seamonkey && this.cssFlags.push('djs-browser-seamonkey');
        !!b.samsung && this.cssFlags.push('djs-browser-samsung');
        !!b.silk && this.cssFlags.push('djs-browser-silk');
        !!b.tizen && this.cssFlags.push('djs-browser-tizen');
        !!b.webOS && this.cssFlags.push('djs-browser-webos');
        !!b.version && this.cssFlags.push('djs-browser-version-' + b.version);
      }
    } catch (e) {
      throw e;
    }

    return b;
  }

  getAudio(addCssFlags = false) {
    const a = {
      audioData: !!(window.Audio),
      webAudio: !!(window.webkitAudioContext || window.AudioContext),
    };

    try {
      const audioElement = document.createElement('audio');

      if (!!audioElement.canPlayType) {
        _.merge(a, {
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

        if (!!addCssFlags) {
          !!a.ogg && this.cssFlags.push('djs-audio-ogg');
          !!a.opus && this.cssFlags.push('djs-audio-opus');
          !!a.mp3 && this.cssFlags.push('djs-audio-mp3');
          !!a.wav && this.cssFlags.push('djs-audio-wav');
          !!a.m4a && this.cssFlags.push('djs-audio-m4a');
          !!a.webm && this.cssFlags.push('djs-audio-webm');
        }
      }
    } catch (e) {
      throw e;
    }

    return a;
  }

  getVideo(addCssFlags = false) {
    const v = {};

    try {
      const videoElement = document.createElement('video');

      if (!!videoElement.canPlayType) {
        _.merge(v, {
          mp4: videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '',
          ogv: videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '',
          webm: videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '',
        });

        if (!!addCssFlags) {
          !!v.mp4 && this.cssFlags.push('djs-video-mp4');
          !!v.ogv && this.cssFlags.push('djs-video-ogv');
          !!v.webm && this.cssFlags.push('djs-video-webm');
        }
      }
    } catch (e) {
      throw e;
    }

    return v;
  }

  checkFeature(f) {
    let el = null;

    try {
      if (f === 'css3d') {
        el = document.createElement('p');
        let hasCSS3D = false;

        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);

        _.each(['-webkit-transform', '-o-transform', '-ms-transform', '-moz-transform', 'transform'], (t) => {
          if (!!el.style[t]) {
            el.style[t] = 'translate3d(1px,1px,1px)';
            hasCSS3D = window.getComputedStyle(el).getPropertyValue(t);
          }
        });

        document.body.removeChild(el);

        return (!!hasCSS3D && hasCSS3D.length > 0 && hasCSS3D !== 'none');
      } else if (f === 'fullscreen') {
        el = document.createElement('canvas');
        return !!el.requestFullscreen || !!el.webkitRequestFullscreen || !!el.msRequestFullscreen || !!el.mozRequestFullScreen;
      } else if (f === 'webGL') {
        el = document.createElement('canvas');
        return !!window.WebGLRenderingContext && (el.getContext('webgl') || el.getContext('experimental-webgl'));
      }
    } catch (error) {
      return false;
    }

    return false;
  }

  getFeatures(addCssFlags = false) {
    const f = {};

    try {
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

      _.merge(f, {
        async: feature.async,
        addEventListener: feature.addEventListener,
        battery: !!navigator.battery,
        canvas: feature.canvas,
        classList: feature.classList,
        cors: feature.cors,
        contextMenu: feature.contextMenu,
        css3D: this.checkFeature('css3d') && feature.css3Dtransform,
        cssTransform: feature.cssTransform,
        cssTransition: feature.cssTransition,
        defer: feature.defer,
        file: !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob,
        fileSystem: !!window.requestFileSystem,
        fullscreen: this.checkFeature('fullscreen'),
        // fullscreenKeyboard: window.Element && Element['ALLOW_KEYBOARD_INPUT'],
        geolocation: feature.geolocation,
        getUserMedia: !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia),
        historyAPI: feature.historyAPI,
        littleEndian: (typeof Int8Array !== 'undefined') && new Int8Array(new Int16Array([1]).buffer)[0] > 0,
        localStorage: feature.localStorage,
        matchMedia: feature.matchMedia,
        motion: feature.deviceMotion,
        mspointer: window.navigator.msPointerEnabled || window.navigator.pointerEnabled,
        orientation: feature.deviceOrientation,
        pictureElement: feature.pictureElement,
        pixelRatio: window.devicePixelRatio || 1,
        placeholder: feature.placeholder,
        pointerLock: 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document,
        querySelectorAll: feature.querySelectorAll,
        quirksMode: !(document.compatMode === 'CSS1Compat'),
        remUnit: feature.remUnit,
        serviceWorker: feature.serviceWorker,
        sizes: feature.sizes,
        srcset: feature.srcset,
        svg: feature.svg,
        touch: ('ontouchstart' in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1)) && feature.touch,
        typedArray: (typeof Int8Array !== 'undefined'),
        vibration: navigator.vibrate,
        viewportUnit: feature.viewportUnit,
        webGL: this.checkFeature('webGL') && feature.webGL,
        worker: !!window.Worker,
      });

      if (!!addCssFlags) {
        !!f.css3D && this.cssFlags.push('djs-feature-css3d');
        !!f.cssTransform && this.cssFlags.push('djs-feature-css-transforms');
        !!f.cssTransition && this.cssFlags.push('djs-feature-css-transitions');
        !!f.fullscreen && this.cssFlags.push('djs-feature-fullscreen');
        !!f.motion && this.cssFlags.push('djs-feature-device-motion');
        !!f.orientation && this.cssFlags.push('djs-feature-device-orientation');
        !!f.pixelRatio && this.cssFlags.push('djs-feature-pixel-ratio-' + f.pixelRatio);
        !!f.remUnit && this.cssFlags.push('djs-feature-rem-unit');
        !!f.touch && this.cssFlags.push('djs-feature-touch');
        !!f.webGL && this.cssFlags.push('djs-feature-webgl');
      }
    } catch (e) {
      throw e;
    }

    return f;
  }

  setCssFlags() {
    document.documentElement.className += this.cssFlags.join(' ');
  }
}
