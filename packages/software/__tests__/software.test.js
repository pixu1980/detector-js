'use strict';

const { describe, test } = require('node:test');
const assert = require('assert').strict;
const software = require('..');

describe('@detector-js/software', () => {
  test('exposes Browser, Engine, OS', () => {
    assert.equal(typeof software.Browser, 'function');
    assert.equal(typeof software.Engine, 'function');
    assert.equal(typeof software.OS, 'function');
  });

  test('prototypes expose detection getters', () => {
    for (const name of ['Chrome', 'Firefox', 'Safari', 'SafariMobile', 'Edge', 'Opera', 'OperaMobile', 'OperaTouch', 'SamsungBrowser', 'DuckDuckGo', 'Electron']) {
      const desc = Object.getOwnPropertyDescriptor(software.Browser.prototype, name);
      assert.ok(desc && desc.get, `missing getter Browser.${name}`);
    }
    for (const name of ['Blink', 'Gecko', 'WebKit', 'Trident']) {
      const desc = Object.getOwnPropertyDescriptor(software.Engine.prototype, name);
      assert.ok(desc && desc.get, `missing getter Engine.${name}`);
    }
    for (const name of ['Windows', 'macOS', 'iOS', 'Android', 'Linux', 'ChromiumOS']) {
      const desc = Object.getOwnPropertyDescriptor(software.OS.prototype, name);
      assert.ok(desc && desc.get, `missing getter OS.${name}`);
    }
  });
});
