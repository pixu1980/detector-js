import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

export default class Feature extends CssFlagsClass {
  isOldBrowser() {
    return !!(/(Android\s(1.|2.))|(Silk\/1.)/i.test(this._ua));
  }

  prefixes(prop) {
    const { style } = document.createElement('dummy');
    const prefixes = ['Webkit', 'Moz', 'O', 'ms'];

    const ucProp = prop.charAt(0).toUpperCase() + prop.substr(1);
    const props = (prop + ' ' + prefixes.join(ucProp + ' ') + ucProp).split(' ');

    props.forEach((value, index) => {
      if (style[props[value]] !== undefined) {
        return props[value];
      }

      return null;
    });
  }

  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'feature') {
    super(ua, flags, cssFlagsPrefix);

    this._performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

    console.log(this._performance);

    this.addEventListener = this.getAddEventListener();
    this.asyncScript = this.getAsyncScript();
    this.battery = this.getBattery();
    this.cors = this.getCors();
    this.deferScript = this.getDeferScript();
    this.file = this.getFile();
    this.fileSystem = this.getFileSystem();
    this.fullscreen = this.getFullscreen();
    this.fullscreenKeyboard = this.getFullscreenKeyboard();
    this.geolocation = this.getGeolocation();
    this.historyAPI = this.getHistoryAPI();
    this.littleEndian = this.getLittleEndian();
    this.localStorage = this.getLocalStorage();
    this.matchMedia = this.getMatchMedia();
    this.querySelector = this.getQuerySelector();
    this.querySelectorAll = this.getQuerySelectorAll();
    this.serviceWorker = this.getServiceWorker();
    this.typedArray = this.getTypedArray();
    this.userMedia = this.getUserMedia();
    this.vibration = this.getVibration();
    this.worker = this.getWorker();

    // var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

    // for (var value in performance) {
    //   console.log(value);
    // }

    // remove unnecessary memory usage
    delete this._performance;
    delete this._flags;
  }

  getAddEventListener() {
    return !!window.addEventListener;
  }

  getAsyncScript() {
    return ('async' in document.createElement('script'));
  }

  getBattery() {
    return !!window.navigator.battery;
  }

  getCors() {
    return ('XMLHttpRequest' in window && 'withCredentials' in new window.XMLHttpRequest());
  }

  getDeferScript() {
    return ('defer' in document.createElement('script'));
  }

  getFile() {
    return !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob;
  }

  getFileSystem() {
    return !!window.requestFileSystem;
  }

  getFullscreen() {
    const el = document.createElement('canvas');
    return !!el.requestFullscreen || !!el.webkitRequestFullscreen || !!el.msRequestFullscreen || !!el.mozRequestFullScreen;
  }

  getFullscreenKeyboard() {
    return window.Element && 'ALLOW_KEYBOARD_INPUT' in window.Element;
  }

  getGeolocation() {
    return ('geolocation' in window.navigator);
  }

  getHistoryAPI() {
    return (window.history && 'pushState' in window.history);
  }

  getLittleEndian() {
    return (typeof Int8Array !== 'undefined') && new Int8Array(new Int16Array([1]).buffer)[0] > 0;
  }

  getLocalStorage() {
    const test = 'x';

    try {
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (err) {
      return false;
    }
  }

  getMatchMedia() {
    return !!window.matchMedia;
  }

  getQuerySelector() {
    return !!document.querySelector;
  }

  getQuerySelectorAll() {
    return !!document.querySelectorAll;
  }

  getServiceWorker() {
    return ('serviceWorker' in window.navigator);
  }

  getTypedArray() {
    return (typeof Int8Array !== 'undefined');
  }

  getUserMedia() {
    window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia || window.navigator.msGetUserMedia;

    return !!window.navigator.getUserMedia;
  }

  getVibration() {
    window.navigator.vibrate = window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || window.navigator.msVibrate || false;

    return window.navigator.vibrate;
  }

  getWorker() {
    return !!window.Worker;
  }

  get mspointer() {
    return window.navigator.msPointerEnabled || window.navigator.pointerEnabled || false;
  }

  get pixelRatio() {
    return window.devicePixelRatio || 1;
  }

  get pointerLock() {
    return 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
  }

  get quirksMode() {
    return document.compatMode !== 'CSS1Compat';
  }

  get css3D() {
    const el = document.createElement('p');
    let hasCSS3D = false;

    // Add it to the body to get the computed style.
    document.body.insertBefore(el, null);

    ['-webkit-transform', '-o-transform', '-ms-transform', '-moz-transform', 'transform'].forEach((t) => {
      if (!!el.style[t]) {
        el.style[t] = 'translate3d(1px,1px,1px)';
        hasCSS3D = window.getComputedStyle(el).getPropertyValue(t);
      }
    });

    document.body.removeChild(el);

    return (!!hasCSS3D && hasCSS3D.length > 0 && hasCSS3D !== 'none');
  }

  // Test if CSS 3D transforms are supported
  get css3Dtransform() {
    return (!this.isOldBrowser() && this.prefixes('perspective') !== null);
  }

  // Test if CSS transforms are supported
  get cssTransform() {
    return (!this.isOldBrowser() && this.prefixes('transformOrigin') !== null);
  }

  // Test if CSS transitions are supported
  get cssTransition() {
    return this.prefixes('transition') !== null;
  }

  // Test if Device Motion is supported
  get deviceMotion() {
    return ('DeviceMotionEvent' in window);
  }

  // Test if Device Orientation is supported
  get deviceOrientation() {
    return ('DeviceOrientationEvent' in window);
  }

  // Test if Context Menu is supported
  get contextMenu() {
    return ('contextMenu' in document && 'HTMLMenuItemElement' in window);
  }

  // Test if classList API is supported
  get classList() {
    return ('classList' in document);
  }

  // Test if placeholder attribute is supported
  get placeholder() {
    return ('placeholder' in document.createElement('input'));
  }

  // Test if viewport units are supported
  get viewportUnit() {
    const el = document.createElement('dummy');
    try {
      el.style.width = '1vw';
      const test = el.style.width !== '';
      return !!test;
    } catch (err) {
      return false;
    }
  }

  // Test if REM units are supported
  get remUnit() {
    const el = document.createElement('dummy');

    try {
      el.style.width = '1rem';
      const test = el.style.width !== '';
      return !!test;
    } catch (err) {
      return false;
    }
  }

  // Test if Canvas is supported
  get canvas() {
    const canvas = document.createElement('canvas');

    return !!(canvas.getContext && canvas.getContext('2d'));
  }

  // Test if SVG is supported
  get svg() {
    return Asserts.all([
      !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect,
    ]);
  }

  // Test if WebGL is supported
  get webGL() {
    try {
      const canvas = document.createElement('canvas');

      return Asserts.one([
        !!window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
        !!window.WebGL2RenderingContext && canvas.getContext('webgl2'),
      ]);
    } catch (err) {
      return false;
    }
  }

  // Test if WebVR is supported
  get webVR() {
    return Asserts.all([
      'getVRDisplays' in window.navigator,
    ]);
  }

  // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
  get touch() {
    return Asserts.one([
      'ontouchstart' in window,
      'ontouchstart' in document.documentElement,
      window.DocumentTouch && document instanceof window.DocumentTouch,
      window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
      window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1,
    ], true);
  }

  get forceTouch() {
    return Asserts.one([
      window.MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && window.MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN,
    ], true);
  }

  // Test if img srcset attribute is supported
  get srcset() {
    return Asserts.all([
      'srcset' in document.createElement('img'),
    ]);
  }

  // Test if img sizes attribute is supported
  get sizes() {
    return Asserts.all([
      'sizes' in document.createElement('img'),
    ]);
  }

  // Test if Picture element is supported
  get pictureElement() {
    return Asserts.all([
      'HTMLPictureElement' in window,
    ]);
  }

  // Test if Picture element is supported
  get dialogElement() {
    return Asserts.all([
      'HTMLDialogElement' in window,
    ]);
  }
}
