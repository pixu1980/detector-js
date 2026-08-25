'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@detector-js/core');

/**
 *
 *
 * @export
 * @class AudioFeature
 * @extends {CssFlagsClass}
 */
class AudioFeature extends core.CssFlagsClass {
  /**
   * Creates an instance of AudioFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='audio']
   *
   * @memberOf AudioFeature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'audio') {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.context = this.getContext();
    this.formats = {
      mp3: this.getMp3(),
      webm: this.getWebm(),
      ogg: this.getOgg(),
      opus: this.getOpus(),
      wav: this.getWav(),
      m4a: this.getM4a()
    };
  }

  /**
   *
   *
   * @memberof AudioFeature
   */
  _createTestElements() {
    this._audioElement = this._document.createElement('audio');
  }

  // /**
  //  *
  //  *
  //  * @memberof AudioFeature
  //  */
  // _destroyTestElements() {
  //   this._audioElement = null;

  //   delete this._audioElement;
  // }

  /**
   *
   *
   * @readonly
   *
   * @memberOf AudioFeature
   */
  get supported() {
    return core.Asserts.all(['Audio' in this._root, 'HTMLAudioElement' in this._root, 'HTMLMediaElement' in this._root, () => !!this._audioElement && 'canPlayType' in this._audioElement && this._audioElement instanceof this._root.HTMLAudioElement && this._audioElement instanceof this._root.HTMLMediaElement], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getContext() {
    return core.Asserts.one(['AudioContext' in this._root, 'webkitAudioContext' in this._root]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getMp3() {
    return core.Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWebm() {
    return core.Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOgg() {
    return core.Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOpus() {
    return core.Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWav() {
    return core.Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getM4a() {
    return core.Asserts.all([() => this.supported && (this._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || this._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== ''], true);
  }
}

/**
 *
 *
 * @export
 * @class VideoFeature
 * @extends {CssFlagsClass}
 */
class VideoFeature extends core.CssFlagsClass {
  /**
   * Creates an instance of VideoFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='video']
   *
   * @memberOf VideoFeature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'video') {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm()
    };
  }

  /**
   *
   *
   * @memberof VideoFeature
   */
  _createTestElements() {
    this._videoElement = this._document.createElement('video');
  }

  // /**
  //  *
  //  *
  //  * @memberof VideoFeature
  //  */
  // _destroyTestElements() {
  //   this._viewElement = null;

  //   delete this._videoElement;
  // }

  /**
   *
   *
   * @readonly
   *
   * @memberOf VideoFeature
   */
  get supported() {
    return core.Asserts.all(['HTMLVideoElement' in this._root, 'HTMLMediaElement' in this._root, () => !!this._videoElement && 'canPlayType' in this._videoElement && this._videoElement instanceof this._root.HTMLVideoElement && this._videoElement instanceof this._root.HTMLMediaElement], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getMp4() {
    return core.Asserts.all([() => this.supported && this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getOgv() {
    return core.Asserts.all([() => this.supported && this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== ''], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getWebm() {
    return core.Asserts.all([() => this.supported && this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== ''], true);
  }
}

/* eslint-disable no-return-assign */

/**
 *
 *
 * @export
 * @class Feature
 * @extends {CssFlagsClass}
 */
class Feature extends core.CssFlagsClass {
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
    this.bluetooth = this.getBluetooth();
    this.broadcastChannel = this.getBroadcastChannel();
    this.caches = this.getCaches();
    this.clipboard = this.getClipboard();
    this.cors = this.getCors();
    this.credentials = this.getCredentials();
    this.deferScript = this.getDeferScript();
    this.fetch = this.getFetch();
    this.file = this.getFile();
    this.fileSystem = this.getFileSystem();
    this.fullscreen = this.getFullscreen();
    this.fullscreenKeyboard = this.getFullscreenKeyboard();
    this.gamepad = this.getGamepad();
    this.geolocation = this.getGeolocation();
    this.historyAPI = this.getHistoryAPI();
    this.indexedDB = this.getIndexedDB();
    this.intersectionObserver = this.getIntersectionObserver();
    this.littleEndian = this.getLittleEndian();
    this.localStorage = this.getLocalStorage();
    this.matchMedia = this.getMatchMedia();
    this.mediaCapabilities = this.getMediaCapabilities();
    this.mediaRecorder = this.getMediaRecorder();
    this.mediaSession = this.getMediaSession();
    this.nfc = this.getNFC();
    this.notifications = this.getNotifications();
    this.offscreenCanvas = this.getOffscreenCanvas();
    this.online = this.getOnline();
    this.paymentRequest = this.getPaymentRequest();
    this.permissions = this.getPermissions();
    this.querySelector = this.getQuerySelector();
    this.querySelectorAll = this.getQuerySelectorAll();
    this.resizeObserver = this.getResizeObserver();
    this.serial = this.getSerial();
    this.serviceWorker = this.getServiceWorker();
    this.speechSynthesis = this.getSpeechSynthesis();
    this.storage = this.getStorage();
    this.structuredClone = this.getStructuredClone();
    this.typedArray = this.getTypedArray();
    this.usb = this.getUSB();
    this.userMedia = this.getUserMedia();
    this.vibration = this.getVibration();
    this.visualViewport = this.getVisualViewport();
    this.wakeLock = this.getWakeLock();
    this.webAssembly = this.getWebAssembly();
    this.webAuthn = this.getWebAuthn();
    this.webCrypto = this.getWebCrypto();
    this.webLocks = this.getWebLocks();
    this.webRTC = this.getWebRTC();
    this.webShare = this.getWebShare();
    this.webSocket = this.getWebSocket();
    this.webXr = this.getWebXr();
    this.worker = this.getWorker();
  }

  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this._cssPrefixes]
   * @returns {string}
   *
   * @memberOf Feature
   */
  _getCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    prop = prop.toCamelCase();
    const prefixedProps = prefixes.map(item => {
      return (item === 'spec' ? '' : '-' + item + '-') + prop;
    });

    // if ('CSS' in this._root && 'supports' in this._root.CSS) {
    //   return this._root.CSS.supports(prefixedProps.map(item => '(' + item + ': inherit)').join(' or '));
    // }

    const prefixedPropsFound = prefixedProps.filter(item => {
      return item in this._div.style;
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
   * @param {any} [prefixes=this._cssPrefixes]
   * @returns {string}
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
   * @returns {any}
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
  _createTestElements() {
    this._cssPrefixes = ['spec', 'webkit', 'moz', 'ms', 'o'];
    this._script = this._document.createElement('script');
    this._canvas = this._document.createElement('canvas');
    this._div = this._document.createElement('div');
    this._input = this._document.createElement('input');
    this._img = this._document.createElement('img');
    this._xmlHttpRequest = new this._root.XMLHttpRequest();
  }

  // /**
  //  *
  //  *
  //  * @memberof Feature
  //  */
  // _destroyTestElements() {
  //   this._cssPrefixes = null;

  //   this._script = null;
  //   this._canvas = null;
  //   this._div = null;
  //   this._input = null;
  //   this._img = null;
  //   this._xmlHttpRequest = null;

  //   delete this._cssPrefixes;

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
  getBluetooth() {
    return 'bluetooth' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getBroadcastChannel() {
    return 'BroadcastChannel' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getCaches() {
    return 'caches' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getClipboard() {
    return 'clipboard' in this._navigator;
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
  getCredentials() {
    return 'credentials' in this._navigator;
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
    return core.Asserts.all(['File' in this._root, 'FileReader' in this._root, 'FileList' in this._root, 'Blob' in this._root]);
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
  getFetch() {
    return 'fetch' in this._root && typeof this._root.fetch === 'function';
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFullscreen() {
    return core.Asserts.one(['requestFullscreen' in this._canvas, 'webkitRequestFullscreen' in this._canvas, 'msRequestFullscreen' in this._canvas, 'mozRequestFullScreen' in this._canvas]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFullscreenKeyboard() {
    return core.Asserts.all([() => 'Element' in this._root && 'ALLOW_KEYBOARD_INPUT' in this._root.Element], true);
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
  getGamepad() {
    return 'getGamepads' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getHistoryAPI() {
    return core.Asserts.all([() => 'history' in this._root && 'pushState' in this._root.history], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getIndexedDB() {
    return 'indexedDB' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getIntersectionObserver() {
    return 'IntersectionObserver' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLittleEndian() {
    return core.Asserts.all([this.getTypedArray.bind(this), () => new this._root.Int8Array(new this._root.Int16Array([1]).buffer)[0] > 0], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLocalStorage() {
    return core.Asserts.one([() => 'localStorage' in this._root], true) && core.Asserts.one([() => {
      const test = 'x';
      this._root.localStorage.setItem(test, test);
      this._root.localStorage.removeItem(test);
      return true;
    }], true);
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
  getMediaCapabilities() {
    return 'mediaCapabilities' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMediaRecorder() {
    return 'MediaRecorder' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMediaSession() {
    return 'mediaSession' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getNFC() {
    return 'nfc' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getNotifications() {
    return 'Notification' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getOffscreenCanvas() {
    return 'OffscreenCanvas' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getOnline() {
    return 'onLine' in this._navigator && !!this._navigator.onLine;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getPaymentRequest() {
    return 'PaymentRequest' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getPermissions() {
    return 'permissions' in this._navigator;
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
  getResizeObserver() {
    return 'ResizeObserver' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getSerial() {
    return 'serial' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getSpeechSynthesis() {
    return 'speechSynthesis' in this._navigator && 'SpeechSynthesisUtterance' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getStorage() {
    return 'storage' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getStructuredClone() {
    return 'structuredClone' in this._root && typeof this._root.structuredClone === 'function';
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
    return core.Asserts.all([() => 'Int8Array' in this._root && typeof this._root.Int8Array !== 'undefined'], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getUSB() {
    return 'usb' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getUserMedia() {
    return core.Asserts.one(['getUserMedia' in this._navigator, 'webkitGetUserMedia' in this._navigator, 'mozGetUserMedia' in this._navigator, 'msGetUserMedia' in this._navigator]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getVibration() {
    return core.Asserts.one(['vibrate' in this._navigator, 'webkitVibrate' in this._navigator, 'mozVibrate' in this._navigator, 'msVibrate' in this._navigator]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getVisualViewport() {
    return 'visualViewport' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWakeLock() {
    return 'wakeLock' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebAssembly() {
    return 'WebAssembly' in this._root && 'compile' in this._root.WebAssembly;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebAuthn() {
    return 'PublicKeyCredential' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebCrypto() {
    return core.Asserts.all(['crypto' in this._root, () => 'subtle' in this._root.crypto], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebLocks() {
    return 'locks' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebRTC() {
    return 'RTCPeerConnection' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebShare() {
    return 'share' in this._navigator;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebSocket() {
    return 'WebSocket' in this._root;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebXr() {
    return 'xr' in this._navigator;
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
    return core.Asserts.one(['pointerEnabled' in this._navigator, 'msPointerEnabled' in this._navigator]);
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
    return core.Asserts.one(['pointerLockElement' in this._document, 'webkitPointerLockElement' in this._document, 'mozPointerLockElement' in this._document]);
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
    return core.Asserts.all([this._checkCssPrefixedPropValue.bind(this, 'transform', 'translate3d(1px,1px,1px)'), this._checkCssPrefixedProp.bind(this, 'perspective')], true);
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
    return core.Asserts.one([this._checkCssPrefixedProp.bind(this, 'transform-origin')], true);
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
    return core.Asserts.one([this._checkCssPrefixedProp.bind(this, 'transition')], true);
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
    return core.Asserts.all(['contextMenu' in this._document, 'HTMLMenuItemElement' in this._root]);
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
    return core.Asserts.all([() => this._img.style.width = this._img.style.width !== ''], true);
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
    return core.Asserts.all([() => this._img.style.width = this._img.style.width !== ''], true);
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
    return core.Asserts.all([() => 'getContext' in this._canvas && !!this._canvas.getContext('2d')], true);
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
    return core.Asserts.all([() => 'createElementNS' in this._document && 'createSVGRect' in this._document.createElementNS('http://www.w3.org/2000/svg', 'svg')], true);
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
    return core.Asserts.all([() => {
      const elem = document.createElement('canvas');
      if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    }], true);
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
    return core.Asserts.one([() => this.canvas && 'WebGLRenderingContext' in this._root && (this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl')), () => this.canvas && 'WebGL2RenderingContext' in this._root && this._canvas.getContext('webgl2')], true);
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
    return core.Asserts.all(['getVRDisplays' in this._navigator]);
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
    return core.Asserts.one([() => 'ontouchstart' in this._root, () => 'ontouchstart' in this._document.documentElement], true) && core.Asserts.one([() => 'DocumentTouch' in this._root && this._document instanceof this._root.DocumentTouch, () => this.pointerEnabled && 'MSGesture' in this._root, () => 'maxTouchPoints' in this._navigator && this._navigator.maxTouchPoints > 1], true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get forceTouch() {
    return core.Asserts.all([() => 'MouseEvent' in this._root && 'WEBKIT_FORCE_AT_MOUSE_DOWN' in this._root.MouseEvent && 'WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN' in this._root.MouseEvent], true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerEvents() {
    return core.Asserts.all([!!this._root.PointerEvent], true);
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

  // Test if WebGL2 is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webGL2() {
    return core.Asserts.one([() => this.canvas && 'WebGL2RenderingContext' in this._root && !!this._canvas.getContext('webgl2')], true);
  }

  // Test if WebGPU is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webGPU() {
    return core.Asserts.one([() => 'gpu' in this._navigator && !!this._navigator.gpu && typeof this._navigator.gpu.requestAdapter === 'function'], true);
  }

  // Test if the Device Memory API reports a value (in GB)
  /**
   *
   *
   * @readonly
   * @returns {number|string}
   *
   * @memberOf Feature
   */
  get deviceMemory() {
    return this._navigator.deviceMemory || 'n/a';
  }

  // Test the maximum number of simultaneous touch contact points
  /**
   *
   *
   * @readonly
   * @returns {number}
   *
   * @memberOf Feature
   */
  get touchPoints() {
    return this._navigator.maxTouchPoints || 0;
  }
}

//! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Feature Module v' + ("3.0.0" ) + ' initialized');
}

exports.AudioFeature = AudioFeature;
exports.Feature = Feature;
exports.VideoFeature = VideoFeature;
//# sourceMappingURL=feature.js.map
