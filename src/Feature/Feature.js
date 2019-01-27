/* eslint-disable no-return-assign */
import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class Feature
 * @extends {CssFlagsClass}
 */
export default class Feature extends CssFlagsClass {
  /**
   * Creates an instance of Feature.
   * @param {any} [ua=window.navigator.userAgent]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='feature']
   *
   * @memberOf Feature
   */
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'feature') {
    super(ua, flags, cssFlagsPrefix);

    this._cssPrefixes = ['spec', 'webkit', 'moz', 'ms', 'o'];

    this._performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

    console.log(this._performance);

    this._createTestElements();

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

    // remove unnecessary memory usage
    // this._destroyTestElements();

    // delete this._performance;
    // delete this._flags;
  }

  _getCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    prop = prop.toCamelCase();

    const prefixedProps = prefixes.map(item => (item === 'spec' ? '' : '-' + item + '-') + prop);

    // if ('CSS' in window && 'supports' in window.CSS) {
    //   return window.CSS.supports(prefixedProps.map(item => '(' + item + ': inherit)').join(' or '));
    // }

    const prefixedPropsFound = prefixedProps.filter(item => item in this._div.style);

    if (prefixedPropsFound.length > 0) {
      return prefixedPropsFound[0];
    }

    return null;
  }

  _checkCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    return !!this._getCssPrefixedProp(prop, prefixes);
  }

  _getCssPrefixedPropValue(prop, value) {
    const prefixedProp = this._getCssPrefixedProp(prop);

    if (prefixedProp) {
      document.body.insertBefore(this._div, null);

      this._div.style[prefixedProp] = value;

      const computedStylePropValue = window.getComputedStyle(this._div).getPropertyValue(prefixedProp);

      document.body.removeChild(this._div);

      if (!!computedStylePropValue && typeof computedStylePropValue === 'string') {
        return computedStylePropValue;
      }

      return null;
    }

    return null;
  }

  _checkCssPrefixedPropValue(prop, value) {
    const prefixedPropValue = this._getCssPrefixedPropValue(prop, value);

    return !!prefixedPropValue && prefixedPropValue !== 'none';
  }

  /**
   *
   *
   * @memberof Feature
   */
  _createTestElements() {
    this._script = document.createElement('script');
    this._canvas = document.createElement('canvas');
    this._div = document.createElement('div');
    this._input = document.createElement('input');
    this._img = document.createElement('img');
    this._xmlHttpRequest = new window.XMLHttpRequest();
  }

  /**
   *
   *
   * @memberof Feature
   */
  _destroyTestElements() {
    this._script = null;
    this._canvas = null;
    this._div = null;
    this._input = null;
    this._img = null;
    this._xmlHttpRequest = null;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getAddEventListener() {
    return 'addEventListener' in window;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getAsyncScript() {
    return 'async' in this._script;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getBattery() {
    return 'battery' in window.navigator;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getCors() {
    return 'XMLHttpRequest' in window && 'withCredentials' in this._xmlHttpRequest;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getDeferScript() {
    return 'defer' in this._script;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getFile() {
    return Asserts.all([
      'File' in window,
      'FileReader' in window,
      'FileList' in window,
      'Blob' in window,
    ]);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getFileSystem() {
    return 'requestFileSystem' in window;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getFullscreen() {
    return Asserts.one([
      'requestFullscreen' in this._canvas,
      'webkitRequestFullscreen' in this._canvas,
      'msRequestFullscreen' in this._canvas,
      'mozRequestFullScreen' in this._canvas,
    ]);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getFullscreenKeyboard() {
    return Asserts.all([
      () => 'Element' in window && 'ALLOW_KEYBOARD_INPUT' in window.Element,
    ]);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getGeolocation() {
    return 'geolocation' in window.navigator;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getHistoryAPI() {
    return Asserts.all([
      () => 'history' in window && 'pushState' in window.history,
    ]);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getLittleEndian() {
    return Asserts.all([
      this.getTypedArray,
      () => new Int8Array(new Int16Array([1]).buffer)[0] > 0,
    ], true);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getLocalStorage() {
    return Asserts.one([
      () => 'localStorage' in window,
    ], true) && Asserts.one([
      () => {
        const test = 'x';
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);

        return true;
      },
    ], true);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getMatchMedia() {
    return 'matchMedia' in window;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getQuerySelector() {
    return 'querySelector' in document;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getQuerySelectorAll() {
    return 'querySelectorAll' in document;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getServiceWorker() {
    return 'serviceWorker' in window.navigator;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getTypedArray() {
    return Asserts.all([
      () => 'Int8Array' in window && typeof Int8Array !== 'undefined',
    ], true);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getUserMedia() {
    return Asserts.one([
      'getUserMedia' in window.navigator,
      'webkitGetUserMedia' in window.navigator,
      'mozGetUserMedia' in window.navigator,
      'msGetUserMedia' in window.navigator,
    ]);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getVibration() {
    return Asserts.one([
      'vibrate' in window.navigator,
      'webkitVibrate' in window.navigator,
      'mozVibrate' in window.navigator,
      'msVibrate' in window.navigator,
    ]);
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Feature
   */
  getWorker() {
    return 'Worker' in window;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerEnabled() {
    return Asserts.one([
      'pointerEnabled' in window.navigator,
      'msPointerEnabled' in window.navigator,
    ]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pixelRatio() {
    return window.devicePixelRatio || 1;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerLock() {
    return Asserts.one([
      'pointerLockElement' in document,
      'webkitPointerLockElement' in document,
      'mozPointerLockElement' in document,
    ]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get quirksMode() {
    return document.compatMode !== 'CSS1Compat';
  }

  /**
   * Test if CSS 3D transforms are supported
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get css3D() {
    return Asserts.all([
      this._checkCssPrefixedPropValue.bind(this, 'transform', 'translate3d(1px,1px,1px)'),
      this._checkCssPrefixedProp.bind(this, 'perspective'),
    ], true);
  }

  // Test if CSS transforms are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get cssTransform() {
    return Asserts.one([
      this._checkCssPrefixedProp.bind(this, 'transform-origin'),
    ], true);
  }

  // Test if CSS transitions are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get cssTransition() {
    return Asserts.one([
      this._checkCssPrefixedProp.bind(this, 'transition'),
    ], true);
  }

  // Test if Device Motion is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get deviceMotion() {
    return 'DeviceMotionEvent' in window;
  }

  // Test if Device Orientation is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get deviceOrientation() {
    return 'DeviceOrientationEvent' in window;
  }

  // Test if Context Menu is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get contextMenu() {
    return Asserts.all([
      'contextMenu' in document,
      'HTMLMenuItemElement' in window,
    ]);
  }

  // Test if classList API is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get classList() {
    return 'classList' in document;
  }

  // Test if placeholder attribute is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get placeholder() {
    return 'placeholder' in this._input;
  }

  // Test if viewport units are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get viewportUnit() {
    return Asserts.all([
      () => this._img.style.width = '1vw' && this._img.style.width !== '',
    ]);
  }

  // Test if REM units are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get remUnit() {
    return Asserts.all([
      () => this._img.style.width = '1rem' && this._img.style.width !== '',
    ]);
  }

  // Test if Canvas is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get canvas() {
    return Asserts.all([
      () => 'getContext' in this._canvas && this._canvas.getContext('2d'),
    ]);
  }

  // Test if SVG is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get svg() {
    return Asserts.all([
      () => 'createElementNS' in document && 'createSVGRect' in document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
    ]);
  }

  // Test if WebGL is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webGL() {
    return Asserts.one([
      () => this.canvas && 'WebGL2RenderingContext' in window && this._canvas.getContext('webgl2'),
      () => this.canvas && 'WebGLRenderingContext' in window && (this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl')),
    ], true);
  }

  // Test if WebVR is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webVR() {
    return Asserts.all([
      'getVRDisplays' in window.navigator,
    ]);
  }

  // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get touch() {
    return Asserts.one([
      'ontouchstart' in window,
      'ontouchstart' in document.documentElement,
    ]) && Asserts.one([
      () => 'DocumentTouch' in window && document instanceof window.DocumentTouch,
      () => this.pointerEnabled() && 'MSGesture' in window,
      () => 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 1,
    ], true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get forceTouch() {
    return Asserts.all([
      () => 'MouseEvent' in window && 'WEBKIT_FORCE_AT_MOUSE_DOWN' in window.MouseEvent && 'WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN' in window.MouseEvent,
    ], true);
  }

  // Test if img srcset attribute is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get srcset() {
    return 'srcset' in this._img;
  }

  // Test if img sizes attribute is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get sizes() {
    return 'sizes' in this._img;
  }

  // Test if Picture element is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pictureElement() {
    return 'HTMLPictureElement' in window;
  }

  // Test if Picture element is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get dialogElement() {
    return 'HTMLDialogElement' in window;
  }
}
