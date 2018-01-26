import platform from 'platform';
import feature from 'feature-js';
import bowser from 'bowser';
import ƒ from 'flavor-js';

import release from './release.json';

const {navigator} = window;

export default class Detector {
  constructor() {
    this.platform = this.getPlatform();
    this.os = this.getOS();
    this.browser = this.getBrowser();
    this.features = this.getFeatures();
    this.audio = this.getAudio();

    const detectorJSStatus = {
      initialized: true,
      version: release.version,
      build: release.buildDate,
    };

    console.log('DetectorJS initialized', detectorJSStatus);
  }

  getPlatform() {
    const p = {};

    try {
      // see https://github.com/bestiejs/platform.js/blob/master/doc/README.md#readme
      p.inherit({
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
    } catch (e) {
      throw e;
    }

    return p;
  }

  getOS() {
    const o = {};

    try {
      o.inherit({
        architecture: platform.os.architecture === 32 ? 'x86' : 'x64',
        name: platform.os.family,
        version: platform.os.version || bowser.osversion,
        android: bowser.android && platform.os.family === 'Android',
        bada: bowser.bada,
        blackberry: bowser.blackberry,
        chromeOS: bowser.chromeos,
        firefoxOS: bowser.firefoxos,
        iOS: bowser.ios && platform.os.family === 'iOS',
        linux: bowser.linux && ['Ubuntu', 'Debian', 'Fedora', 'Red Hat', 'SuSE'].contains(platform.os.family),
        macOS: /Mac OS/.test(navigator.userAgent) && bowser.mac && ['OS X', 'macOS'].contains(platform.os.family),
        sailfish: bowser.sailfish,
        tizen: bowser.tizen,
        windows: bowser.windows && ['Windows', 'Windows Server 2008 R2 / 7', 'Windows Server 2008 / Vista', 'Windows XP'].contains(platform.os.family),
        windowsPhone: bowser.windowsphone && platform.os.family === 'Windows Phone',
      });
    } catch (e) {
      throw e;
    }

    return o;
  }

  getBrowser() {
    const b = {};

    try {
      b.inherit({
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
        chrome: bowser.chrome && platform.name.contains('Chrome'),
        chromeMobile: bowser.chrome && bowser.mobile && platform.name === 'Chrome Modile',
        cocoonJS: navigator.isCocoonJS,
        edge: bowser.msedge && platform.name === 'Microsoft Edge',
        ejecta: typeof window.ejecta !== 'undefined',
        electron: platform.name === 'Electron',
        epiphany: /Epiphany/.test(navigator.userAgent),
        firefox: bowser.firefox && platform.name.contains('Firefox'),
        firefoxMobile: bowser.firefox && ['Firefox for iOS', 'Firefox Mobile'].contains(platform.name),
        ie: bowser.msie && platform.name.contains('IE'),
        ieMobile: bowser.msie && bowser.mobile && platform.name === 'IE Mobile',
        midori: /Midori/.test(navigator.userAgent),
        opera: bowser.opera && platform.name.contains('Opera'),
        operaMobile: bowser.opera && bowser.mobile && ['Opera Mini', 'Opera Mobile'].contains(platform.name),
        phantom: bowser.phantom && platform.name === 'PhantomJS',
        safari: bowser.safari && platform.name.contains('Safari'),
        safariMobile: /Mobile Safari/.test(navigator.userAgent) && bowser.safari && bowser.ios && bowser.mobile && platform.name.contains('Safari'),
        sailfish: bowser.sailfish,
        seamonkey: bowser.seamonkey && platform.name === 'SeaMonkey',
        samsung: bowser.samsungBrowser, // native samsung browser
        silk: bowser.silk && platform.name === 'Silk', // native amazon kindle browser
        tizen: bowser.tizen, //- native browser
        webOS: bowser.webos, //- native browser
      });
    } catch (e) {
      throw e;
    }

    return b;
  }

  getAudio() {
    const a = {
      audioData: !!(window.Audio),
      webAudio: !!(window.webkitAudioContext || window.AudioContext),
    };

    try {
      const audioElement = document.createElement('audio');

      if (!!audioElement.canPlayType) {
        a.inherit({
          ogg: audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
          opus: audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
          mp3: audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''),
          // Mimetypes accepted:
          //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
          //   bit.ly/iphoneoscodecs
          wav: audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
          m4a: audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''),
          webm: audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        });
      }
    } catch (e) {
      throw e;
    }

    return a;
  }

  checkFeature(f) {
    let el = null;

    try {
      if (f === 'css3d') {
        el = document.createElement('p');
        let hasCSS3D = false;

        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);

        ['-webkit-transform', '-o-transform', '-ms-transform', '-moz-transform', 'transform'].each((t) => {
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

  getFeatures() {
    const f = {};

    try {
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

      f.inherit({
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
    } catch (e) {
      throw e;
    }

    return f;
  }
}
