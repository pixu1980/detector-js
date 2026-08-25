// Unit tests: browser / OS / engine / platform detection against the software & hardware packages.
'use strict';

const { describe, test, before } = require('node:test');
const assert = require('assert').strict;
const mock = require('../helpers/browser-mock.cjs');

const { Browser, Engine, OS } = require('../../packages/software/dist/software.js');

before(() => mock.install());
const { Platform, CPU } = require('../../packages/hardware/dist/hardware.js');

const UA_TABLE = [
  ['chrome-mac', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Chrome', 'macOS', 'desktop', 'Blink'],
  ['safari-ios', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1', 'SafariMobile', 'iOS', 'smartphone', 'WebKit'],
  ['ff-win', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0', 'Firefox', 'Windows', 'desktop', 'Gecko'],
  ['edge-win', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0', 'Edge', 'Windows', 'desktop', 'Blink'],
  ['samsung', 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36', 'SamsungBrowser', 'Android', 'smartphone', 'Blink'],
  ['ddg-ios', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 DuckDuckGo/7 Safari/605.1.15', 'DuckDuckGo', 'iOS', 'smartphone', 'WebKit'],
  ['kiwi-android', 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36 Kiwi/91.0.4472.101', 'Kiwi', 'Android', 'smartphone', 'Blink'],
  ['fb-ios', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 FBAN/FBIOS', 'Facebook', 'iOS', 'smartphone', 'WebKit'],
  ['electron', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/117.0.0.0 Electron/28.0.0 Safari/537.36', 'Electron', 'macOS', 'desktop', 'Blink'],
  ['opera', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0', 'Opera', 'Windows', 'desktop', 'Blink'],
  ['linux-firefox', 'Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0', 'Firefox', 'Linux', 'desktop', 'Gecko'],
  ['ipad-safari', 'Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1', 'SafariMobile', 'iOS', 'tablet', 'WebKit'],
];

const flagsFor = (ua, isMobile) => ({
  feature: {
    deviceMotion: true,
    deviceOrientation: true,
    pixelRatio: 2,
    touch: !!isMobile,
    forceTouch: false,
    pointerEvents: false,
    file: true,
    fullscreenKeyboard: true,
  },
  browser: { name: new Browser(ua, {}, 'browser').toValues().name },
  os: { name: new OS(ua, {}, 'os').toValues().name },
});

describe('software detection (UA table)', () => {
  for (const [name, ua] of UA_TABLE) {
    test(`${name} → browser`, () => {
      assert.equal(new Browser(ua, {}, 'browser').toValues().name, UA_TABLE.find((r) => r[0] === name)[2]);
    });
    test(`${name} → os`, () => {
      assert.equal(new OS(ua, {}, 'os').toValues().name, UA_TABLE.find((r) => r[0] === name)[3]);
    });
  }

  test('macOS version names (UA-based)', () => {
    const names = {
      '10_15_7': 'Catalina',
      '11_5': 'Big Sur',
      '12_6': 'Monterey',
      '13_5_1': 'Ventura',
      '14_6': 'Sonoma',
      '15_3': 'Sequoia',
      '26_6_2': 'Tahoe',
    };
    for (const [maj, expected] of Object.entries(names)) {
      const os = new OS(`Mozilla/5.0 (Macintosh; Intel Mac OS X ${maj}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15`, {}, 'os');
      assert.equal(os.toValues().versionName, expected, `macOS ${maj}`);
    }
    // macOS 16–25 do not exist (Apple jumped 15 → 26 in 2025): nothing to map
  });

  test('Safari infers the real macOS version from the Version token (no Client Hints)', () => {
    // modern Safari keeps the legacy-compat UA but Version/26.x == macOS 26.x
    const safari = new OS('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.6.2 Safari/605.1.15', {}, 'os');
    assert.equal(safari.toValues().version, '26.6.2');
    assert.equal(safari.toValues().versionName, 'Tahoe');
    // pre-26 Safari majors were back-ported across macOS releases: stay UA-based
    const legacy = new OS('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15', {}, 'os');
    assert.equal(legacy.toValues().version, '10.15.7');
    assert.equal(legacy.toValues().versionName, 'Catalina');
  });

  test('Android parses current major versions', () => {
    assert.equal(new OS('Mozilla/5.0 (Linux; Android 17; Pixel 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36', {}, 'os').toValues().version, '17');
    assert.equal(new OS('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36', {}, 'os').toValues().version, '14');
  });

  test('client-hints mapping (marketing + Darwin style)', () => {
    const os = new OS('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', {}, 'os');
    assert.equal(os._mapMacOSVersion('26.6.2'), '26.6.2'); // macOS 26 Tahoe (26 == Darwin 26)
    assert.equal(os._mapMacOSVersion('24.4.0'), '15.4.0'); // Darwin 24 → Sequoia 15
    assert.equal(os._mapMacOSVersion('23.4.0'), '14.4.0'); // Darwin 23 → Sonoma 14
    assert.equal(os._mapMacOSVersion('15.1'), '15.1'); // marketing-style
    assert.equal(os._mapMacOSVersion('10.15.7'), null); // same legacy as UA — ignore
  });

  test('client hints upgrade reveals the real macOS version (Tahoe)', async () => {
    const os = new OS('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', {}, 'os');
    assert.equal(os.toValues().versionName, 'Catalina'); // UA fallback first
    const upgraded = await os.upgrade();
    assert.equal(upgraded.version, '26.6.2');
    assert.equal(upgraded.versionName, 'Tahoe');
  });

  test('engine detection', () => {
    const engine = new Engine('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', {}, 'engine');
    assert.equal(engine.toValues().name, 'Blink');
  });
});

describe('platform detection', () => {
  test('desktop / smartphone / tablet', () => {
    const desktop = new Platform(UA_TABLE[0][1], flagsFor(UA_TABLE[0][1], false), 'platform');
    assert.equal(desktop.toValues(), 'desktop');

    const phone = new Platform(UA_TABLE[4][1], flagsFor(UA_TABLE[4][1], true), 'platform');
    assert.equal(phone.smartphone, true);

    const tablet = new Platform(UA_TABLE[11][1], flagsFor(UA_TABLE[11][1], true), 'platform');
    assert.equal(tablet.tablet, true);
  });
});

describe('cpu detection', () => {
  test('reads navigator data safely', () => {
    const cpu = new CPU(null, {}, 'cpu');
    assert.ok(cpu.cores >= 1);
    assert.ok(cpu.platform.length > 0);
    assert.ok(['x86', 'x64', 'arm', 'arm64'].includes(cpu.architecture));
  });
});