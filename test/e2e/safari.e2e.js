// E2E (webkit engine): real Safari-like UA has no Client Hints and keeps the
// legacy-compat "Mac OS X 10_15_7" — the real version is inferred from the
// Safari Version token (1:1 with macOS since Safari 26 / macOS 26).
const { test, expect } = require('@playwright/test');

test.describe('safari (webkit) platform version', () => {
  test('infers the real macOS version and name', async ({ page }) => {
    await page.goto('/demo.html');
    const info = await page.evaluate(() => {
      const d = new Detector();
      const os = d.os || {};
      return {
        ua: navigator.userAgent,
        os: { name: os.name, version: os.version, versionName: os.versionName },
      };
    });
    const isMacSafari = /mac/i.test(info.ua) && /safari/i.test(info.ua) && !/chrome|edg|opr/i.test(info.ua);
    test.skip(!isMacSafari, 'not macOS Safari (webkit)');
    const m = info.ua.match(/Version\/(\d+(?:\.\d+){0,2})/i);
    const major = m ? parseInt(m[1], 10) : 0;
    if (major >= 26) {
      expect(info.os.versionName).toBe('Tahoe');
      expect(String(info.os.version).split('.')[0]).toBe(String(major));
    } else {
      expect(typeof info.os.version).toBe('string');
    }
  });
});
