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
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='feature']
   *
   * @memberOf Feature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'feature') {
    super(ua, flags, cssFlagsPrefix);

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

  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this._cssPrefixes]
   * @returns
   *
   * @memberOf Feature
   */
  _getCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    prop = prop.toCamelCase();

    const prefixedProps = prefixes.map(item => (item === 'spec' ? '' : '-' + item + '-') + prop);

    // if ('CSS' in this._root && 'supports' in this._root.CSS) {
    //   return this._root.CSS.supports(prefixedProps.map(item => '(' + item + ': inherit)').join(' or '));
    // }

    const prefixedPropsFound = prefixedProps.filter(item => item in this._div.style);

    if (prefixedPropsFound.length > 0) {
      return prefixedPropsFound[0];
    }

    return null;
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this._cssPrefixes]
   * @returns
   *
   * @memberOf Feature
   */
  _checkCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    return !!this._getCssPrefixedProp(prop, prefixes);
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} value
   * @returns
   *
   * @memberOf Feature
   */
  _getCssPrefixedPropValue(prop, value) {
    const prefixedProp = this._getCssPrefixedProp(prop);

    if (prefixedProp) {
      this._document.body.insertBefore(this._div, null);

      this._div.style[prefixedProp] = value;

      const computedStylePropValue = this._root.getComputedStyle(this._div).getPropertyValue(prefixedProp);

      this._document.body.removeChild(this._div);

      if (!!computedStylePropValue && typeof computedStylePropValue === 'string') {
        return computedStylePropValue;
      }

      return null;
    }

    return null;
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} value
   * @returns
   *
   * @memberOf Feature
   */
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
    this._cssPrefixes = ['spec', 'webkit', 'moz', 'ms', 'o'];

    this._script = this._document.createElement('script');
    this._canvas = this._document.createElement('canvas');
    this._div = this._document.createElement('div');
    this._input = this._document.createElement('input');
    this._img = this._document.createElement('img');
    this._xmlHttpRequest = new this._root.XMLHttpRequest();
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
   * @returns boolean
   *
   * @memberOf Feature
   */
  getAddEventListener() {
    return 'addEventListener' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getAsyncScript() {
    return 'async' in this._script;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getBattery() {
    return 'battery' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getCors() {
    return 'XMLHttpRequest' in this._root && 'withCredentials' in this._xmlHttpRequest;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getDeferScript() {
    return 'defer' in this._script;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFile() {
    return Asserts.all([
      'File' in this._root,
      'FileReader' in this._root,
      'FileList' in this._root,
      'Blob' in this._root,
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFileSystem() {
    return 'requestFileSystem' in this._root;
  }

  /**
   *
   *
   * @returns boolean
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
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFullscreenKeyboard() {
    return Asserts.all([
      () => 'Element' in this._root && 'ALLOW_KEYBOARD_INPUT' in this._root.Element,
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getGeolocation() {
    return 'geolocation' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getHistoryAPI() {
    return Asserts.all([
      () => 'history' in this._root && 'pushState' in this._root.history,
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLittleEndian() {
    return Asserts.all([
      this.getTypedArray,
      () => new this._root.Int8Array(new this._root.Int16Array([1]).buffer)[0] > 0,
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLocalStorage() {
    return Asserts.one([
      () => 'localStorage' in this._root,
    ], true) && Asserts.one([
      () => {
        const test = 'x';
        this._root.localStorage.setItem(test, test);
        this._root.localStorage.removeItem(test);

        return true;
      },
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMatchMedia() {
    return 'matchMedia' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getQuerySelector() {
    return 'querySelector' in this._document;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getQuerySelectorAll() {
    return 'querySelectorAll' in this._document;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getServiceWorker() {
    return 'serviceWorker' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getTypedArray() {
    return Asserts.all([
      () => 'Int8Array' in this._root && typeof this._root.Int8Array !== 'undefined',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getUserMedia() {
    return Asserts.one([
      'getUserMedia' in this._navigator,
      'webkitGetUserMedia' in this._navigator,
      'mozGetUserMedia' in this._navigator,
      'msGetUserMedia' in this._navigator,
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getVibration() {
    return Asserts.one([
      'vibrate' in this._navigator,
      'webkitVibrate' in this._navigator,
      'mozVibrate' in this._navigator,
      'msVibrate' in this._navigator,
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWorker() {
    return 'Worker' in this._root;
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
      'pointerEnabled' in this._navigator,
      'msPointerEnabled' in this._navigator,
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
    return this._root.devicePixelRatio || 1;
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
      'pointerLockElement' in this._document,
      'webkitPointerLockElement' in this._document,
      'mozPointerLockElement' in this._document,
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
    return this._document.compatMode !== 'CSS1Compat';
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
    return 'DeviceMotionEvent' in this._root;
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
    return 'DeviceOrientationEvent' in this._root;
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
      'contextMenu' in this._document,
      'HTMLMenuItemElement' in this._root,
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
    return 'classList' in this._document;
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
      () => 'createElementNS' in this._document && 'createSVGRect' in this._document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
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
      () => this.canvas && 'WebGL2RenderingContext' in this._root && this._canvas.getContext('webgl2'),
      () => this.canvas && 'WebGLRenderingContext' in this._root && (this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl')),
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
      'getVRDisplays' in this._navigator,
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
      'ontouchstart' in this._root,
      'ontouchstart' in this._document.documentElement,
    ]) && Asserts.one([
      () => 'DocumentTouch' in this._root && this._document instanceof this._root.DocumentTouch,
      () => this.pointerEnabled() && 'MSGesture' in this._root,
      () => 'maxTouchPoints' in this._navigator && this._navigator.maxTouchPoints > 1,
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
      () => 'MouseEvent' in this._root && 'WEBKIT_FORCE_AT_MOUSE_DOWN' in this._root.MouseEvent && 'WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN' in this._root.MouseEvent,
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
    return 'HTMLPictureElement' in this._root;
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
    return 'HTMLDialogElement' in this._root;
  }
}
