// E2E: device gallery - real sample UAs parsed live, cards per device, own-UA analyzer.
const { test, expect } = require('@playwright/test');

test.describe('device gallery', () => {
  test('renders device cards with live detection and works with custom UAs', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto('/examples/devices/index.html');

    const info = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('#gallery .dev'));
      const summaries = cards.map((c) => c.textContent);
      return {
        count: cards.length,
        hasStats: summaries.filter((t) => t.includes('Browser') && t.includes('Platform') && t.includes('OS')).length,
        inDesktop: cards.some((c) => c.textContent.includes('MacBook') && c.textContent.includes('desktop')),
        inMobile: cards.some((c) => c.textContent.includes('iPhone 15 Pro') && c.textContent.includes('smartphone')),
        inTablet: cards.some((c) => c.textContent.includes('iPad Pro') && c.textContent.includes('tablet')),
        inTv: cards.some((c) => c.textContent.includes('webOS') && c.textContent.includes('tv')),
        inConsole: cards.some((c) => c.textContent.includes('PlayStation') && c.textContent.includes('console')),
        inBot: cards.some((c) => c.textContent.includes('Googlebot') && c.textContent.includes('bot')),
        tahoe: cards.some((c) => c.textContent.includes('Tahoe')),
        copies: document.querySelectorAll('button[data-copy]').length,
      };
    });

    expect(errors, `page errors: ${JSON.stringify(errors)}`).toEqual([]);
    expect(info.count).toBeGreaterThanOrEqual(20);
    expect(info.hasStats).toBeGreaterThanOrEqual(20);
    expect(info.inDesktop).toBe(true);
    expect(info.inMobile).toBe(true);
    expect(info.inTablet).toBe(true);
    expect(info.inTv).toBe(true);
    expect(info.inConsole).toBe(true);
    expect(info.inBot).toBe(true);
    expect(info.tahoe).toBe(true); // Safari Version-token heuristic on the M1 sample
    expect(info.copies).toBe(info.count);

    // own-UA analyzer
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
    await page.fill('#ua-input', ua);
    await page.click('#ua-analyze');
    const own = await page.evaluate(() => document.getElementById('own-result').textContent);
    expect(own).toContain('SafariMobile');
    expect(own).toContain('iOS');
    expect(own).toContain('smartphone');
  });
});