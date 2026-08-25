'use strict';

const { describe, test } = require('node:test');
const assert = require('assert').strict;
const hardware = require('..');

describe('@detector-js/hardware', () => {
  test('exposes Platform, Device, CPU, GPU', () => {
    assert.equal(typeof hardware.Platform, 'function');
    assert.equal(typeof hardware.Device, 'function');
    assert.equal(typeof hardware.CPU, 'function');
    assert.equal(typeof hardware.GPU, 'function');
  });

  test('Platform exposes read-only getters', () => {
    for (const name of ['bot', 'console', 'tv', 'tablet', 'smartphone', 'mobile', 'desktop']) {
      const desc = Object.getOwnPropertyDescriptor(hardware.Platform.prototype, name);
      assert.ok(desc && desc.get, `missing getter Platform.${name}`);
    }
  });

  test('CPU exposes detection methods', () => {
    for (const name of ['getCores', 'getPlatform', 'getArchitecture', 'getIntel', 'getAmd', 'getArm']) {
      assert.equal(typeof hardware.CPU.prototype[name], 'function', `missing CPU.${name}`);
    }
  });
});
