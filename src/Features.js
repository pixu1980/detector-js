import FlagsClass from './FlagsClass';

export default class Features extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'feature') {
    super(ua, cssFlagsPrefix);
  }

  isOldBrowser() {
    return !!(/(Android\s(1.|2.))|(Silk\/1.)/i.test(this._ua));
  }

  prefixes(prop) {
    const { style } = this._document.createElement('dummy');
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

  get file() {
    return !!this._window.File && !!this._window.FileReader && !!this._window.FileList && !!this._window.Blob;
  }

  get fileSystem() {
    return !!this._window.requestFileSystem;
  }

  get getUserMedia() {
    this._navigator.getUserMedia = this._navigator.getUserMedia || this._navigator.webkitGetUserMedia || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia;

    return !!this._navigator.getUserMedia;
  }

  get littleEndian() {
    return (typeof Int8Array !== 'undefined') && new Int8Array(new Int16Array([1]).buffer)[0] > 0;
  }

  get mspointer() {
    return this._navigator.msPointerEnabled || this._navigator.pointerEnabled;
  }

  get pixelRatio() {
    return this._window.devicePixelRatio || 1;
  }

  get pointerLock() {
    return 'pointerLockElement' in this._document || 'mozPointerLockElement' in this._document || 'webkitPointerLockElement' in this._document;
  }

  get quirksMode() {
    return this._document.compatMode !== 'CSS1Compat';
  }

  get typedArray() {
    return (typeof Int8Array !== 'undefined');
  }

  get vibration() {
    this._navigator.vibrate = this._navigator.vibrate || this._navigator.webkitVibrate || this._navigator.mozVibrate || this._navigator.msVibrate;

    return this._navigator.vibrate;
  }

  get worker() {
    return !!this._window.Worker;
  }

  get css3D() {
    const el = this._document.createElement('p');
    let hasCSS3D = false;

    // Add it to the body to get the computed style.
    this._document.body.insertBefore(el, null);

    ['-webkit-transform', '-o-transform', '-ms-transform', '-moz-transform', 'transform'].forEach((t) => {
      if (!!el.style[t]) {
        el.style[t] = 'translate3d(1px,1px,1px)';
        hasCSS3D = this._window.getComputedStyle(el).getPropertyValue(t);
      }
    });

    this._document.body.removeChild(el);

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
    return !!this._window.addEventListener;
  }

  // Test if querySelectorAll is supported
  get querySelectorAll() {
    return !!this._document.querySelectorAll;
  }

  // Test if matchMedia is supported
  get matchMedia() {
    return !!this._window.matchMedia;
  }

  get battery() {
    return !!this._navigator.battery;
  }

  // Test if Device Motion is supported
  get deviceMotion() {
    return ('DeviceMotionEvent' in this._window);
  }

  // Test if Device Orientation is supported
  get deviceOrientation() {
    return ('DeviceOrientationEvent' in this._window);
  }

  // Test if Context Menu is supported
  get contextMenu() {
    return ('contextMenu' in this._document && 'HTMLMenuItemElement' in this._window);
  }

  // Test if classList API is supported
  get classList() {
    return ('classList' in this._document);
  }

  // Test if placeholder attribute is supported
  get placeholder() {
    return ('placeholder' in this._document.createElement('input'));
  }

  // Test if localStorage is supported
  get localStorage() {
    const test = 'x';

    try {
      this._window.localStorage.setItem(test, test);
      this._window.localStorage.removeItem(test);
      return true;
    } catch (err) {
      return false;
    }
  }

  // Test if History API is supported
  get historyAPI() {
    return (this._window.history && 'pushState' in this._window.history);
  }

  // Test if ServiceWorkers are supported
  get serviceWorker() {
    return ('serviceWorker' in this._navigator);
  }

  // Test if viewport units are supported
  get viewportUnit() {
    const el = this._document.createElement('dummy');
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
    const el = this._document.createElement('dummy');

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
    const el = this._document.createElement('canvas');

    return !!(el.getContext && el.getContext('2d'));
  }

  // Test if SVG is supported
  get svg() {
    return !!this._document.createElementNS && !!this._document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
  }

  // Test if WebGL is supported
  get webGL() {
    const el = this._document.createElement('canvas');

    try {
      return !!(this._window.WebGLRenderingContext && (el.getContext('webgl') || el.getContext('experimental-webgl')));
    } catch (err) {
      return false;
    }
  }

  // Test if WebVR is supported
  get webVR() {
    return !!('getVRDisplays' in this._navigator);
  }

  // Test if cors is supported
  get cors() {
    return ('XMLHttpRequest' in this._window && 'withCredentials' in new this._window.XMLHttpRequest());
  }

  // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
  get touch() {
    return ('ontouchstart' in this._document.documentElement || (this._navigator.maxTouchPoints && this._navigator.maxTouchPoints > 1)) && (!!(('ontouchstart' in this._window) || this._navigator && this._navigator.msPointerEnabled && this._window.MSGesture || this._window.DocumentTouch && this._document instanceof this._window.DocumentTouch));
  }

  // Test if async attribute is supported
  get async() {
    return ('async' in this._document.createElement('script'));
  }

  // Test if defer attribute is supported
  get defer() {
    return ('defer' in this._document.createElement('script'));
  }

  // Test if Geolocation is supported
  get geolocation() {
    return ('geolocation' in this._navigator);
  }

  // Test if img srcset attribute is supported
  get srcset() {
    return ('srcset' in this._document.createElement('img'));
  }

  // Test if img sizes attribute is supported
  get sizes() {
    return ('sizes' in this._document.createElement('img'));
  }

  // Test if Picture element is supported
  get pictureElement() {
    return ('HTMLPictureElement' in this._window);
  }

  get fullscreen() {
    const el = this._document.createElement('canvas');
    return !!el.requestFullscreen || !!el.webkitRequestFullscreen || !!el.msRequestFullscreen || !!el.mozRequestFullScreen;
  }

  get fullscreenKeyboard() {
    return this._window.Element && 'ALLOW_KEYBOARD_INPUT' in this._window.Element;
  }
}
