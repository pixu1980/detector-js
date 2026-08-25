// A11y e2e (axe-core, per pix-styleguide a11y): landmarks, single h1, no skipped
// heading levels, lang attribute and zero auto-detected violations on the site pages.
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

const PAGES = ['/', '/demo.html', '/examples/devices/', '/docs/getting-started.html', '/PRIVACY.html'];

test.describe('a11y: basic page structure', () => {
  for (const pathname of PAGES) {
    test(`${pathname}: no axe violations`, async ({ page }) => {
      await page.goto(pathname);
      const results = await new AxeBuilder({ page }).analyze();
      const summary = results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.length} node(s)`).join(' · ');
      expect(results.violations, summary || 'no violations').toEqual([]);
    });

    test(`${pathname}: single h1, no skipped heading levels, main landmark, lang`, async ({ page }) => {
      await page.goto(pathname);
      const info = await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
        const levels = headings.map((h) => parseInt(h.tagName[1], 10));
        let skipped = false;
        for (let i = 1; i < levels.length; i++) {
          if (levels[i] - levels[i - 1] > 1) { skipped = true; break; }
        }
        return {
          h1: headings.filter((h) => h.tagName === 'H1').length,
          skipped,
          main: !!document.querySelector('main'),
          lang: document.documentElement.getAttribute('lang'),
        };
      });
      expect(info.h1).toBe(1);
      expect(info.skipped).toBe(false);
      expect(info.main).toBe(true);
      expect(info.lang).toBeTruthy();
    });
  }
});