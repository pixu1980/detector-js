'use strict';

const { describe, test } = require('node:test');
const assert = require('assert').strict;
const feature = require('..');

describe('@detector-js/feature', () => {
  test('exposes Feature, AudioFeature, VideoFeature', () => {
    assert.equal(typeof feature.Feature, 'function');
    assert.equal(typeof feature.AudioFeature, 'function');
    assert.equal(typeof feature.VideoFeature, 'function');
  });

  test('Feature.prototype exposes lazy (read-only) getters', () => {
    for (const name of ['webGPU', 'webGL2', 'deviceMemory', 'touchPoints', 'pixelRatio', 'pointerEvents', 'webGL']) {
      const desc = Object.getOwnPropertyDescriptor(feature.Feature.prototype, name);
      assert.ok(desc && desc.get, `missing getter feature.${name}`);
    }
  });

  test('Feature.prototype exposes detection factories', () => {
    for (const name of ['getWebAuthn', 'getWakeLock', 'getWebShare', 'getWebLocks', 'getClipboard', 'getIndexedDB', 'getStructuredClone']) {
      assert.equal(typeof feature.Feature.prototype[name], 'function', `missing ${name}`);
    }
  });
});
