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
    // package version must be in sync with the built bundle (__VERSION__ define)
    const fs = require('node:fs');
    const path = require('node:path');
    const pkg = require('../../package.json');
    assert.ok(/^\d+\.\d+\.\d+/.test(pkg.version), `semver: ${pkg.version}`);
    const bundle = fs.readFileSync(path.join(__dirname, '../../dist/detector.js'), 'utf8');
    // the bundle embeds __VERSION__ (esbuild define) among the dev-log concatenation
    assert.ok(bundle.includes(`Detector Module v`), 'dev log present');
    assert.ok(bundle.includes(pkg.version), `bundle embeds v${pkg.version}`);
  });

  test('ESM bundle exposes the same Detector behavior', async () => {
    const mod = await import('../../dist/detector.mjs');
    const d = new mod.Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', true, false);
    assert.equal(d.browser.name, 'Chrome');
  });
});