'use strict';

const { describe, test, before } = require('node:test');
const assert = require('assert').strict;
const detector = require('..');

// minimal browser-ish environment so Detector can run its probes in Node
const element = () => ({ style: {}, getContext: () => null, canPlayType: () => 'maybe', className: '' });

before(() => {
  Object.defineProperty(global, 'self', { configurable: true, value: global });
  Object.defineProperty(global, 'window', { configurable: true, value: global });
  Object.defineProperty(global, 'document', {
    configurable: true,
    value: {
      createElement: () => element(),
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
    value: Object.assign(Object.create({ userAgent: '', hardwareConcurrency: 4, platform: 'MacIntel', maxTouchPoints: 5, deviceMemory: 8, onLine: true }), {
      vibrate: () => true,
      geolocation: {},
      serviceWorker: {},
    }),
  });
  global.XMLHttpRequest = function XMLHttpRequest() {};
  global.Intl = { v8BreakIterator: function () {} };
  global.CSS = {};
  global.localStorage = { setItem: () => {}, removeItem: () => {} };
  global.devicePixelRatio = 2;
  global.getComputedStyle = () => ({ getPropertyValue: () => '1vw' });
});

describe('@detector-js/detector', () => {
  test('exposes the Detector class', () => {
    assert.equal(typeof detector.Detector, 'function');
    assert.equal(typeof detector.Detector.prototype.toFlags, 'function');
    assert.equal(typeof detector.Detector.prototype.toValues, 'function');
  });

  test('constructs and exposes the detection surface', () => {
    const d = new detector.Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    assert.ok(d.browser && d.browser.name === 'Chrome');
    assert.ok(d.os && d.os.name === 'macOS');
    assert.ok(d.platform === 'desktop');
    assert.ok(d.feature && Object.keys(d.feature).length >= 87);
    // privacy by default: cssFlags is off unless requested
    const flags = d.toFlags();
    assert.ok(flags && flags.browser, 'toFlags output');
    assert.ok(!(d.cssFlags), 'no cssFlags leak');
  });
});
