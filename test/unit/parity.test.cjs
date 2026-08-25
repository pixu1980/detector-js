// Unit tests: root bundle (CJS + ESM) parity + version injection.
'use strict';

const { describe, test, before } = require('node:test');
const assert = require('assert').strict;
const mock = require('../helpers/browser-mock.cjs');

before(() => mock.install());

describe('root bundle parity', () => {
  test('CJS bundle exposes the same Detector behavior', async () => {
    const { Detector } = require('../../dist/detector.js');
    const d = new Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', true, false);
    assert.equal(d.browser.name, 'Chrome');
    const pkg = require('../../package.json');
    assert.equal(pkg.version, '2.0.11');
  });

  test('ESM bundle exposes the same Detector behavior', async () => {
    const mod = await import('../../dist/detector.mjs');
    const d = new mod.Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', true, false);
    assert.equal(d.browser.name, 'Chrome');
  });
});