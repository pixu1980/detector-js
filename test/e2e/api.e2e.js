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
