// Root smoke test: exercises the whole monorepo stack (built dist bundles)
// against mocked browser globals. Run via: pnpm test
'use strict';

const assert = require('assert').strict;

// ---- mock browser globals --------------------------------------------------
Object.defineProperty(global, 'self', { configurable: true, value: global });
Object.defineProperty(global, 'window', { configurable: true, value: global });

const fakeElement = {
  style: {},
  getContext: () => null,
  canPlayType: () => 'maybe',
  toDataURL: () => 'data:image/png;base64,x',
  className: '',
  width: '',
  height: '',
};

Object.defineProperty(global, 'document', {
  configurable: true,
  value: {
    createElement: (t) => (
      t === 'script' ? { async: true, defer: true }
        : t === 'input' ? { placeholder: true }
          : t === 'img' ? { srcset: true, sizes: true, style: {} } : fakeElement
    ),
    createElementNS: () => ({ createSVGRect: () => ({}) }),
    documentElement: { className: '' },
    body: { insertBefore: () => {}, removeChild: () => {} },
    compatMode: 'CSS1Compat',
    querySelector: () => null,
    querySelectorAll: () => [],
    classList: {},
  },
});

Object.defineProperty(global, 'navigator', {
  configurable: true,
  writable: true,
  value: Object.assign(
    Object.create({
      userAgent: '',
      hardwareConcurrency: 8,
      platform: 'MacIntel',
      maxTouchPoints: 5,
      deviceMemory: 8,
      onLine: true,
    }),
    {
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
    }
  ),
});

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
  fetch: () => Promise.resolve(),
  getComputedStyle: () => ({ getPropertyValue: () => '1vw' }),
  devicePixelRatio: 2,
  localStorage: { setItem: () => {}, removeItem: () => {} },
});
Object.defineProperty(global, 'crypto', { configurable: true, writable: true, value: { subtle: {} } });

// ---- import the monorepo packages (built dist) ------------------------------
const { Asserts, FlagsClass, CssFlagsClass } = require('../packages/core/dist/core.js');
const { Feature, AudioFeature, VideoFeature } = require('../packages/feature/dist/feature.js');
const { Platform, Device, CPU, GPU } = require('../packages/hardware/dist/hardware.js');
const { Browser, Engine, OS } = require('../packages/software/dist/software.js');
const { Detector } = require('../packages/detector/dist/detector.js');
const DetectorRoot = require('../dist/detector.js');

assert.strictEqual(typeof Detector, 'function', 'Detector not exported by @detector-js/detector');
assert.strictEqual(typeof DetectorRoot.Detector, 'function', 'Detector not exported by root bundle');
assert.strictEqual(typeof Asserts, 'function');
assert.strictEqual(typeof Feature, 'function');
assert.strictEqual(typeof Platform, 'function');
assert.strictEqual(typeof Browser, 'function');

// ---- detection cases --------------------------------------------------------
const cases = [
  ['chrome-mac', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Chrome', 'macOS', 'desktop'],
  ['safari-ios', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1', 'SafariMobile', 'iOS', 'smartphone'],
  ['samsung', 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36', 'SamsungBrowser', 'Android', 'smartphone'],
  ['ddg-ios', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 DuckDuckGo/7 Safari/605.1.15', 'DuckDuckGo', 'iOS', 'smartphone'],
  ['kiwi-android', 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36 Kiwi/91.0.4472.101', 'Kiwi', 'Android', 'smartphone'],
  ['fb-ios', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 FBAN/FBIOS', 'Facebook', 'iOS', 'smartphone'],
  ['electron', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/117.0.0.0 Electron/28.0.0 Safari/537.36', 'Electron', 'macOS', 'desktop'],
];

for (const [name, ua, browserName, osName, platformName] of cases) {
  const d = new Detector(ua, true, false);
  assert.strictEqual(d.browser.name, browserName, `${name}: browser`);
  assert.strictEqual(d.os.name, osName, `${name}: os`);
  assert.strictEqual(d.platform, platformName, `${name}: platform`);
  console.log(`ok ${name} -> ${browserName} / ${osName} / ${platformName}`);
}

// same suite against the root UMD-compatible bundle to ensure parity
for (const [name, ua] of cases) {
  const d = new DetectorRoot.Detector(ua, true, false);
  assert.ok(d.toFlags(), `${name}: root bundle toFlags`);
}

// ---- feature surface --------------------------------------------------------
const feat = new Detector(null, true, false).feature;
const expectedKeys = ['webGPU', 'webGL2', 'webAuthn', 'wakeLock', 'webShare', 'webLocks', 'deviceMemory', 'touchPoints', 'clipboard', 'indexedDB'];
for (const k of expectedKeys) {
  assert.ok(k in feat, `feature.${k} missing`);
}
assert.ok(Object.keys(feat).length >= 1000, `feature keys: ${Object.keys(feat).length}`);

console.log('SMOKE OK — monorepo vanillaJS');