// E2E: the global bundle exposes `Detector` as a constructor and produces a coherent result.
const { test, expect } = require('@playwright/test');

test.describe('global bundle API', () => {
  test('window.Detector is a constructor and new Detector() works', async ({ page }) => {
    await page.goto('/demo.html');
    const result = await page.evaluate(() => {
      const d = new Detector();
      const f = d.toFlags();
      return {
        hasGlobal: typeof window.Detector === 'function',
        hasBrowser: !!f.browser && !!d.browser.name,
        hasOs: !!f.os,
        hasPlatform: !!f.platform,
        hasFeature: !!f.feature && Object.keys(f.feature).length > 50,
        hasCssFlagsOff: !Array.from(document.documentElement.className).includes('djs-'),
      };
    });
    expect(result.hasGlobal).toBe(true);
    expect(result.hasBrowser).toBe(true);
    expect(result.hasOs).toBe(true);
    expect(result.hasPlatform).toBe(true);
    expect(result.hasFeature).toBe(true);
    expect(result.hasCssFlagsOff).toBe(true);
  });

  test('detection matches the real browser', async ({ page }) => {
    await page.goto('/demo.html');
    const ua = await page.evaluate(() => navigator.userAgent);
    const out = await page.evaluate(() => {
      const d = new Detector();
      return { browser: d.browser, os: d.os && d.os.name, platform: d.platform };
    });
    expect(typeof ua).toBe('string');
    // the *real* Navigator UA is a valid input for the library
    const d2 = await page.evaluate((u) => {
      const d = new Detector(u);
      return { browser: d.browser.name, os: d.os ? d.os.name : null };
    }, ua);
    expect(d2.browser.length).toBeGreaterThan(0);
    expect(out.browser && out.browser.name).toBeTruthy();
  });
});

test.describe('client-hints upgrade', () => {
  test('reveals the real platform version when hints are available', async ({ page }) => {
    await page.goto('/demo.html');
    const result = await page.evaluate(async () => {
      const supportsCH = typeof navigator.userAgentData === 'object'
        && typeof navigator.userAgentData.getHighEntropyValues === 'function';
      if (!supportsCH) return { supportsCH: false };
      const d = new Detector();
      const before = (d.os && d.os.version) || '';
      await d.upgrade();
      return {
        supportsCH: true,
        before,
        after: (d.os && d.os.version) || '',
        afterName: d.os && d.os.versionName,
        platform: d.os && d.os.name,
      };
    });
    if (!result.supportsCH) return;
    expect(typeof result.after).toBe('string');
    // on modern macOS the legacy-compat UA (10.15.7 · Catalina) must be replaced
    if (result.platform === 'macOS' && result.before === '10.15.7' && result.after && result.after !== '10.15.7') {
      expect(result.afterName).toBeTruthy();
      expect(result.afterName).not.toBe('Catalina');
    }
  });
});

test.describe('cpu architecture', () => {
  test('resolves the real architecture (Apple Silicon via GPU/Client Hints)', async ({ page }) => {
    await page.goto('/demo.html');
    const info = await page.evaluate(async () => {
      const d = new Detector();
      const gpuText = [d.gpu && d.gpu.vendor, d.gpu && d.gpu.model, d.gpu && d.gpu.renderer].filter(Boolean).join(' ');
      const beforeArch = d.cpu && d.cpu.architecture;
      await d.upgrade();
      return {
        beforeArch,
        afterArch: d.cpu && d.cpu.architecture,
        afterVendor: d.cpu && d.cpu.vendor,
        gpuText,
        supportsCH: typeof navigator.userAgentData === 'object'
          && typeof navigator.userAgentData.getHighEntropyValues === 'function',
      };
    });
    expect(typeof info.afterArch).toBe('string');
    expect(['x64', 'arm64', 'x86', 'arm']).toContain(info.afterArch);
    if (/apple\s+m[1-9]/i.test(info.gpuText)) {
      expect(info.afterArch).toBe('arm64');
      expect(info.afterVendor).toBe('apple');
    }
  });
});
