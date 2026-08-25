// E2E: the static site — links point to built HTML pages (no raw .md links).
const { test, expect } = require('@playwright/test');

test.describe('static site', () => {
  test('landing page has no raw .md links', async ({ page }) => {
    await page.goto('/index.html');
    const mdLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href$=".md"]')).map((a) => a.getAttribute('href'))
    );
    expect(mdLinks, `raw .md links: ${JSON.stringify(mdLinks)}`).toEqual([]);
  });

  test('docs pages are served as built HTML', async ({ page }) => {
    for (const pathname of ['/PRIVACY.html', '/docs/getting-started.html', '/docs/api.html', '/docs/toolchain.html', '/SECURITY.html']) {
      const res = await page.goto(pathname);
      expect(res.status(), pathname).toBe(200);
      const html = await page.evaluate(() => document.documentElement.outerHTML);
      expect(html).toContain('<html');
      expect(html).toContain('DetectorJS');
    }
  });

  test('docs pages rewire internal .md links to .html', async ({ page }) => {
    await page.goto('/PRIVACY.html');
    const mdInPrivacy = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href$=".md"]')).length
    );
    expect(mdInPrivacy).toBe(0);
    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll('main a')).map((a) => a.getAttribute('href'))
    );
    expect(links.some((h) => h === 'SECURITY.html' || h.endsWith('/SECURITY.html'))).toBe(true);
  });
});
