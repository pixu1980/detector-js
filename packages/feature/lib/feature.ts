import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class Feature
 * @extends {CssFlagsClass}
 */
export class Feature extends CssFlagsClass {
  #cssPrefixes: string[];
  #script: HTMLScriptElement;
  #canvas: HTMLCanvasElement;
  #div: HTMLDivElement;
  #input: HTMLInputElement;
  #img: HTMLImageElement;
  #xmlHttpRequest: XMLHttpRequest;

  addEventListener: boolean;
  asyncScript: boolean;
  battery: boolean;
  cors: boolean;
  deferScript: boolean;
  file: boolean;
  fileSystem: boolean;
  fullscreen: boolean;
  fullscreenKeyboard: boolean;
  geolocation: boolean;
  historyAPI: boolean;
  littleEndian: boolean;
  localStorage: boolean;
  matchMedia: boolean;
  querySelector: boolean;
  querySelectorAll: boolean;
  serviceWorker: boolean;
  typedArray: boolean;
  userMedia: boolean;
  vibration: boolean;
  worker: boolean;

  /**
   * Creates an instance of Feature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='feature']
   *
   * @memberOf Feature
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'feature') {
    super(ua, flags, cssFlagsPrefix);

    this.#createTestElements();

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
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this.#cssPrefixes]
   * @returns {string}
   *
   * @memberOf Feature
   */
  #getCssPrefixedProp(prop, prefixes = this.#cssPrefixes) {
    prop = prop.toCamelCase();

    const prefixedProps = prefixes.map((item) => {
      return (item === 'spec' ? '' : '-' + item + '-') + prop;
    });

    // if ('CSS' in this.root && 'supports' in this.root.CSS) {
    //   return this.root.CSS.supports(prefixedProps.map(item => '(' + item + ': inherit)').join(' or '));
    // }

    const prefixedPropsFound = prefixedProps.filter((item) => {
      return item in this.#div.style;
    });

    if (prefixedPropsFound.length > 0) {
      return prefixedPropsFound[0];
    }

    return null;
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this.#cssPrefixes]
   * @returns {string}
   *
   * @memberOf Feature
   */
  _checkCssPrefixedProp(prop, prefixes = this.#cssPrefixes) {
    return !!this.#getCssPrefixedProp(prop, prefixes);
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} value
   * @returns {any}
   *
   * @memberOf Feature
   */
  _getCssPrefixedPropValue(prop, value) {
    const prefixedProp = this.#getCssPrefixedProp(prop);

    if (prefixedProp) {
      this.document.body.insertBefore(this.#div, null);

      this.#div.style[prefixedProp] = value;

      const computedStylePropValue = this.root.getComputedStyle(this.#div).getPropertyValue(prefixedProp);

      this.document.body.removeChild(this.#div);

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
   * @returns {any}
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
  #createTestElements() {
    this.#cssPrefixes = ['spec', 'webkit', 'moz', 'ms', 'o'];

    this.#script = this.document.createElement('script');
    this.#canvas = this.document.createElement('canvas');
    this.#div = this.document.createElement('div');
    this.#input = this.document.createElement('input');
    this.#img = this.document.createElement('img');
    this.#xmlHttpRequest = new this.root.XMLHttpRequest();
  }

  // /**
  //  *
  //  *
  //  * @memberof Feature
  //  */
  // _destroyTestElements() {
  //   this.#cssPrefixes = null;

  //   this._script = null;
  //   this._canvas = null;
  //   this._div = null;
  //   this._input = null;
  //   this._img = null;
  //   this._xmlHttpRequest = null;

  //   delete this.#cssPrefixes;

  //   delete this._script;
  //   delete this._canvas;
  //   delete this._div;
  //   delete this._input;
  //   delete this._img;
  //   delete this._xmlHttpRequest;
  // }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getAddEventListener() {
    return 'addEventListener' in this.root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getAsyncScript() {
    return 'async' in this.#script;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getBattery() {
    return 'battery' in this.navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getCors() {
    return 'XMLHttpRequest' in this.root && 'withCredentials' in this.#xmlHttpRequest;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getDeferScript() {
    return 'defer' in this.#script;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFile() {
    return Asserts.all(['File' in this.root, 'FileReader' in this.root, 'FileList' in this.root, 'Blob' in this.root]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFileSystem() {
    return 'requestFileSystem' in this.root;
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
      'requestFullscreen' in this.#canvas,
      'webkitRequestFullscreen' in this.#canvas,
      'msRequestFullscreen' in this.#canvas,
      'mozRequestFullScreen' in this.#canvas
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
    return Asserts.all([() => 'Element' in this.root && 'ALLOW_KEYBOARD_INPUT' in this.root.Element], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getGeolocation() {
    return 'geolocation' in this.navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getHistoryAPI() {
    return Asserts.all([() => 'history' in this.root && 'pushState' in this.root.history], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLittleEndian() {
    return Asserts.all(
      [this.getTypedArray, () => new this.root.Int8Array(new this.root.Int16Array([1]).buffer)[0] > 0],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLocalStorage() {
    return (
      Asserts.one([() => 'localStorage' in this.root], true) &&
      Asserts.one(
        [
          () => {
            const test = 'x';
            this.root.localStorage.setItem(test, test);
            this.root.localStorage.removeItem(test);

            return true;
          }
        ],
        true
      )
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMatchMedia() {
    return 'matchMedia' in this.root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getQuerySelector() {
    return 'querySelector' in this.document;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getQuerySelectorAll() {
    return 'querySelectorAll' in this.document;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getServiceWorker() {
    return 'serviceWorker' in this.navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getTypedArray() {
    return Asserts.all([() => 'Int8Array' in this.root && typeof this.root.Int8Array !== 'undefined'], true);
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
      'getUserMedia' in this.navigator,
      'webkitGetUserMedia' in this.navigator,
      'mozGetUserMedia' in this.navigator,
      'msGetUserMedia' in this.navigator
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
      'vibrate' in this.navigator,
      'webkitVibrate' in this.navigator,
      'mozVibrate' in this.navigator,
      'msVibrate' in this.navigator
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
    return 'Worker' in this.root;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerEnabled() {
    return Asserts.one(['pointerEnabled' in this.navigator, 'msPointerEnabled' in this.navigator]);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pixelRatio() {
    return this.root.devicePixelRatio || 1;
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
      'pointerLockElement' in this.document,
      'webkitPointerLockElement' in this.document,
      'mozPointerLockElement' in this.document
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
    return this.document.compatMode !== 'CSS1Compat';
  }

  /**
   * Test if CSS 3D transforms are supported
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get css3D() {
    return Asserts.all(
      [
        this._checkCssPrefixedPropValue.bind(this, 'transform', 'translate3d(1px,1px,1px)'),
        this._checkCssPrefixedProp.bind(this, 'perspective')
      ],
      true
    );
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
    return Asserts.one([this._checkCssPrefixedProp.bind(this, 'transform-origin')], true);
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
    return Asserts.one([this._checkCssPrefixedProp.bind(this, 'transition')], true);
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
    return 'DeviceMotionEvent' in this.root;
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
    return 'DeviceOrientationEvent' in this.root;
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
    return Asserts.all(['contextMenu' in this.document, 'HTMLMenuItemElement' in this.root]);
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
    return 'classList' in this.document;
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
    return 'placeholder' in this.#input;
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
    return Asserts.all([() => (this.#img.style.width = '1vw') && this.#img.style.width !== ''], true);
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
    return Asserts.all([() => (this.#img.style.width = '1rem') && this.#img.style.width !== ''], true);
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
    return Asserts.all([() => 'getContext' in this.#canvas && !!this.#canvas.getContext('2d')], true);
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
    return Asserts.all(
      [
        () =>
          'createElementNS' in this.document &&
          'createSVGRect' in this.document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      ],
      true
    );
  }

  // Test if WebP is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webp() {
    return Asserts.all(
      [
        () => {
          const elem = document.createElement('canvas');

          if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
          }

          return false;
        }
      ],
      true
    );
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
    return Asserts.one(
      [
        () =>
          this.canvas &&
          'WebGLRenderingContext' in this.root &&
          (this.#canvas.getContext('webgl') || this.#canvas.getContext('experimental-webgl')),
        () => this.canvas && 'WebGL2RenderingContext' in this.root && this.#canvas.getContext('webgl2')
      ],
      true
    );
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
    return Asserts.all(['getVRDisplays' in this.navigator]);
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
    return (
      Asserts.one([() => 'ontouchstart' in this.root, () => 'ontouchstart' in this.document.documentElement], true) &&
      Asserts.one(
        [
          () => 'DocumentTouch' in this.root,
          () => this.pointerEnabled && 'MSGesture' in this.root,
          () => 'maxTouchPoints' in this.navigator && this.navigator.maxTouchPoints > 1
        ],
        true
      )
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get forceTouch() {
    return Asserts.all(
      [
        () =>
          'MouseEvent' in this.root &&
          'WEBKIT_FORCE_AT_MOUSE_DOWN' in this.root.MouseEvent &&
          'WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN' in this.root.MouseEvent
      ],
      true
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerEvents() {
    return Asserts.all([this.root.PointerEvent], true);
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
    return 'srcset' in this.#img;
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
    return 'sizes' in this.#img;
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
    return 'HTMLPictureElement' in this.root;
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
    return 'HTMLDialogElement' in this.root;
  }
}

if (process.env.NODE_ENV === 'development') {
  const packageJSON = require('../package.json');

  console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
}

export * from './audioFeature';
export * from './videoFeature';
