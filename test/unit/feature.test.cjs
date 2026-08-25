// Unit tests: feature WebAPI flags + detector pipeline (built dist).
'use strict';

const { describe, test, before } = require('node:test');
const assert = require('assert').strict;
const mock = require('../helpers/browser-mock.cjs');

const { Detector } = require('../../packages/detector/dist/detector.js');

before(() => mock.install());

describe('feature WebAPI flags', () => {
  test('flags advertised by the mocked environment are true', () => {
    const d = new Detector(null, true, false);
    const f = d.feature;
    for (const flag of ['webAssembly', 'webCrypto', 'indexedDB', 'structuredClone', 'clipboard', 'wakeLock', 'webShare', 'webLocks', 'permissions', 'storage', 'visualViewport', 'broadcastChannel', 'caches', 'worker', 'webAuthn', 'mediaRecorder', 'notifications']) {
      assert.equal(f[flag], true, `feature.${flag} should be true under the mock`);
    }
    assert.equal(f.deviceMemory, 8);
    assert.equal(f.touchPoints, 5);
  });

  test('flags that need real support are false under the mock', () => {
    const d = new Detector(null, true, false);
    const f = d.feature;
    for (const flag of ['webGPU', 'nfc', 'gamepad', 'speechSynthesis']) {
      assert.equal(f[flag], false, `feature.${flag} should be false under the mock`);
    }
  });
});

describe('detector pipeline', () => {
  test('toFlags() returns the full surface', () => {
    const d = new Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', true, false);
    const flags = d.toFlags();
    for (const key of ['browser', 'engine', 'os', 'cpu', 'gpu', 'feature', 'platform']) {
      assert.ok(key in flags, `missing ${key}`);
    }
  });

  test('values mode returns compact objects', () => {
    const d = new Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', true, false);
    assert.equal(d.browser.name, 'Chrome');
    assert.equal(d.os.name, 'macOS');
    assert.equal(d.platform, 'desktop');
  });

  test('public getters survive construction (upstream v2 parity)', () => {
    const d = new Detector('n/a');
    assert.ok(d.ua && d.root && d.navigator);
  });
});