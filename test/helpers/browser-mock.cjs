// Shared browser-like environment mock used by unit/integration tests.
// Mirrors the globals the library probes so it can run under Node.
'use strict';

function install(overrides = {}) {
  Object.defineProperty(global, 'self', { configurable: true, value: global });
  Object.defineProperty(global, 'window', { configurable: true, value: global });

  const element = () => ({ style: {}, getContext: () => null, canPlayType: () => 'maybe', toDataURL: () => 'data:image/png;base64,x', className: '', width: '', height: '' });

  Object.defineProperty(global, 'document', {
    configurable: true,
    value: {
      createElement: (t) => (
        t === 'script' ? { async: true, defer: true }
          : t === 'input' ? { placeholder: true }
            : t === 'img' ? { srcset: true, sizes: true, style: {} } : element()
      ),
      createElementNS: () => ({ createSVGRect: () => ({}) }),
      documentElement: { className: '' },
      body: { insertBefore: () => {}, removeChild: () => {} },
      compatMode: 'CSS1Compat',
      querySelector: () => null,
      querySelectorAll: () => [],
      classList: {},
      ...(overrides.document || {}),
    },
  });

  const navigatorBase = {
    userAgent: '',
    hardwareConcurrency: 8,
    platform: 'MacIntel',
    maxTouchPoints: 5,
    deviceMemory: 8,
    onLine: true,
    vibrate: () => true,
    geolocation: {},
    serviceWorker: {},
    mediaSession: {},
    mediaCapabilities: {},
    permissions: { query: () => {} },
    storage: { estimate: () => {} },
    locks: {},
    share: () => {},
    wakeLock: {},
    clipboard: { writeText: () => {} },
    bluetooth: {},
    usb: {},
    serial: {},
    credentials: {},
    xr: {},
    ...(overrides.navigator || {}),
  };
  Object.defineProperty(global, 'navigator', { configurable: true, writable: true, value: navigatorBase });

  function fn() {}
  Object.assign(global, {
    XMLHttpRequest: fn, PointerEvent: fn, DocumentTouch: fn, Audio: fn,
    HTMLAudioElement: fn, HTMLMediaElement: fn, HTMLVideoElement: fn,
    HTMLPictureElement: fn, HTMLDialogElement: fn, HTMLMenuItemElement: fn,
    WebGL2RenderingContext: fn, WebGLRenderingContext: fn,
    DeviceMotionEvent: fn, DeviceOrientationEvent: fn, MouseEvent: fn,
    Intl: { v8BreakIterator: fn }, CSS: {}, InstallTrigger: true,
    StyleMedia: fn, Worker: fn, WebAssembly: { compile: () => {} },
    PublicKeyCredential: fn, RTCPeerConnection: fn, WebSocket: fn,
    MediaRecorder: fn, Notification: fn, PaymentRequest: fn,
    BroadcastChannel: fn, OffscreenCanvas: fn, IntersectionObserver: fn,
    ResizeObserver: fn, structuredClone: (v) => v, caches: {},
    Element: { ALLOW_KEYBOARD_INPUT: true }, history: { pushState: () => {} },
    indexedDB: {}, MediaStream: fn, visualViewport: {}, opera: {}, opr: {},
    fetch: () => Promise.resolve(),
    getComputedStyle: () => ({ getPropertyValue: () => '1vw' }),
    devicePixelRatio: 2,
    localStorage: { setItem: () => {}, removeItem: () => {} },
    ...(overrides.globals || {}),
  });
  Object.defineProperty(global, 'crypto', { configurable: true, writable: true, value: { subtle: {} } });
}

function uninstall() {
  for (const key of ['self', 'window', 'document', 'navigator', 'crypto']) {
    const desc = Object.getOwnPropertyDescriptor(global, key);
    if (desc && desc.configurable) delete global[key];
  }
}

module.exports = { install, uninstall };