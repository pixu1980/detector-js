// E2E — privacy contract (PRIVACY.md): a page embedding DetectorJS makes ZERO network requests
// beyond the page itself and the local bundle.
const { test, expect } = require('@playwright/test');

test.describe('privacy contract', () => {
  test('loading the site performs zero external/telemetry requests', async ({ page }) => {
    const requests = [];
    const failed = [];
    page.on('request', (req) => requests.push(req.url()));
    page.on('requestfailed', (req) => failed.push({ url: req.url(), error: req.failure() && req.failure().errorText }));

    await page.goto('/index.html');

    // every request must stay on the site's own origin (page, bundle, site.css) —
    // anything pointing elsewhere (CDNs, analytics, telemetry, fonts…) is a violation
    const unexpected = requests.filter((u) => !u.startsWith('http://localhost:3222/'));
    expect(unexpected, `external requests: ${JSON.stringify(unexpected)}`).toEqual([]);
    expect(failed, `failed requests: ${JSON.stringify(failed)}`).toEqual([]);
  });

  test('library output contains no network-originated data', async ({ page }) => {
    await page.goto('/demo.html');
    const leaky = await page.evaluate(() => {
      const d = new Detector();
      return JSON.stringify(d.toFlags()).toLowerCase();
    });
    // no URLs/domains/external endpoints should appear in the output
    for (const needle of ['http://', 'https://', 'wss://', 'fetch(', 'sendbeacon', 'analytics', 'telemetry']) {
      expect(leaky).not.toContain(needle);
    }
  });
});
