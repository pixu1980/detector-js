import FlagsClass from '../Core/FlagsClass';

export default class Features extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'feature') {
    super(ua, cssFlagsPrefix);

    this.file = this.getFile();
    this.fileSystem = this.getFileSystem();

    // var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

    // for (var value in performance) {
    //   console.log(value);
    // }
  }

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

  getFile() {
    return !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob;
  }

  getFileSystem() {
    return !!window.requestFileSystem;
  }

  get getUserMedia() {
    window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia || window.navigator.msGetUserMedia;

    return !!window.navigator.getUserMedia;
  }

  get littleEndian() {
    return (typeof Int8Array !== 'undefined') && new Int8Array(new Int16Array([1]).buffer)[0] > 0;
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

  get typedArray() {
    return (typeof Int8Array !== 'undefined');
  }

  get vibration() {
    window.navigator.vibrate = window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || window.navigator.msVibrate || false;

    return window.navigator.vibrate;
  }

  get worker() {
    return !!window.Worker;
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

  // Test if addEventListener is supported
  get addEventListener() {
    return !!window.addEventListener;
  }

  // Test if querySelectorAll is supported
  get querySelectorAll() {
    return !!document.querySelectorAll;
  }

  // Test if matchMedia is supported
  get matchMedia() {
    return !!window.matchMedia;
  }

  get battery() {
    return !!window.navigator.battery;
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

  // Test if localStorage is supported
  get localStorage() {
    const test = 'x';

    try {
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (err) {
      return false;
    }
  }

  // Test if History API is supported
  get historyAPI() {
    return (window.history && 'pushState' in window.history);
  }

  // Test if ServiceWorkers are supported
  get serviceWorker() {
    return ('serviceWorker' in window.navigator);
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
    const el = document.createElement('canvas');

    return !!(el.getContext && el.getContext('2d'));
  }

  // Test if SVG is supported
  get svg() {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
  }

  // Test if WebGL is supported
  get webGL() {
    const el = document.createElement('canvas');

    try {
      return !!(window.WebGLRenderingContext && (el.getContext('webgl') || el.getContext('experimental-webgl')));
    } catch (err) {
      return false;
    }
  }

  // Test if WebVR is supported
  get webVR() {
    return !!('getVRDisplays' in window.navigator);
  }

  // Test if cors is supported
  get cors() {
    return ('XMLHttpRequest' in window && 'withCredentials' in new window.XMLHttpRequest());
  }

  // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
  get touch() {
    return ('ontouchstart' in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1)) && (!!(('ontouchstart' in window) || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof window.DocumentTouch)) || false;
  }

  // Test if async attribute is supported
  get async() {
    return ('async' in document.createElement('script'));
  }

  // Test if defer attribute is supported
  get defer() {
    return ('defer' in document.createElement('script'));
  }

  // Test if Geolocation is supported
  get geolocation() {
    return ('geolocation' in window.navigator);
  }

  // Test if img srcset attribute is supported
  get srcset() {
    return ('srcset' in document.createElement('img'));
  }

  // Test if img sizes attribute is supported
  get sizes() {
    return ('sizes' in document.createElement('img'));
  }

  // Test if Picture element is supported
  get pictureElement() {
    return 'HTMLPictureElement' in window;
  }

  // Test if Picture element is supported
  get dialogElement() {
    return 'HTMLDialogElement' in window;
  }

  get fullscreen() {
    const el = document.createElement('canvas');
    return !!el.requestFullscreen || !!el.webkitRequestFullscreen || !!el.msRequestFullscreen || !!el.mozRequestFullScreen;
  }

  get fullscreenKeyboard() {
    return window.Element && 'ALLOW_KEYBOARD_INPUT' in window.Element;
  }
}
