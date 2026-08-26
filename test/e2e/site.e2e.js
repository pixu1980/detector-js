// E2E: the static site - links point to built HTML pages (no raw .md links)
// and every page shares the same chrome (site.css, header.site, footer.site).
const { test, expect } = require('@playwright/test');

const SITE_PAGES = ['/index.html', '/demo.html', '/PRIVACY.html', '/docs/getting-started.html', '/docs/api.html', '/docs/toolchain.html', '/SECURITY.html', '/packages/core/README.html'];

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

  test('link labels carry no extension (PRIVACY, GOVERNANCE, …)', async ({ page }) => {
    await page.goto('/index.html');
    const privacyLabel = await page.evaluate(() => {
      const a = document.querySelector('.privacy a[href$="PRIVACY.html"]');
      return a ? a.textContent.trim() : null;
    });
    expect(privacyLabel).toBe('PRIVACY');
    const anyExtLabel = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a')).some((a) => {
        const href = a.getAttribute('href') || '';
        const txt = a.textContent.trim();
        return /^[^:/]+(\.html|\.md)$/.test(href) && /\.(html|md)$/.test(txt);
      })
    );
    expect(anyExtLabel).toBe(false);
    await page.goto('/docs/api.html');
    const gov = await page.evaluate(() => {
      const a = Array.from(document.querySelectorAll('main a')).find((x) => (x.getAttribute('href') || '').includes('GOVERNANCE'));
      return a ? a.textContent.trim() : null;
    });
    expect(gov).toBe('GOVERNANCE');
  });

  test('landing page cards use flex layout: grow when needed, never shrink', async ({ page }) => {
    await page.goto('/index.html');
    const layout = await page.evaluate(() => {
      const grid = document.querySelector('#features .grid');
      const card = document.querySelector('#features .card');
      if (!grid || !card) return null;
      const gs = getComputedStyle(grid);
      const cs = getComputedStyle(card);
      return { display: gs.display, flexGrow: cs.flexGrow, flexShrink: cs.flexShrink };
    });
    expect(layout, 'features grid/card found').not.toBeNull();
    expect(layout.display, 'cards container is flex').toBe('flex');
    expect(layout.flexGrow, 'cards grow to fill space').not.toBe('0');
    expect(layout.flexShrink, 'cards never shrink').toBe('0');
  });

  test('landing page uses semantic HTML landmarks', async ({ page }) => {
    await page.goto('/index.html');
    const sem = await page.evaluate(() => {
      const kv = document.querySelector('.kv');
      const kvLabel = document.querySelector('.kv dt, .kv .label');
      const cards = document.querySelectorAll('#features .card');
      const chipList = document.querySelector('ul.integrations li.chip, ol.integrations li.chip');
      const footerNavs = document.querySelectorAll('footer.site nav[aria-label]');
      return {
        kvTag: kv ? kv.tagName.toLowerCase() : null,
        kvLabelIsDt: !!kvLabel && kvLabel.tagName.toLowerCase() === 'dt',
        cardTags: Array.from(cards).map((c) => c.tagName.toLowerCase()),
        chipListOk: !!chipList,
        footerNavCount: footerNavs.length,
      };
    });
    // live key/value panel is a definition list (dt/dd pairs)
    expect(sem.kvTag, 'live panel uses <dl>').toBe('dl');
    expect(sem.kvLabelIsDt, 'panel labels are <dt>').toBe(true);
    // feature cards are self-contained articles
    expect(sem.cardTags.length, 'feature cards exist').toBeGreaterThan(0);
    for (const t of sem.cardTags) expect(t === 'article', `card is <article>, got <${t}>`).toBe(true);
    // integration chips form a real list
    expect(sem.chipListOk, 'chips are a <ul>/<ol> list').toBe(true);
    // footer link columns are navigable regions
    expect(sem.footerNavCount, 'footer columns are <nav aria-label>').toBeGreaterThanOrEqual(3);
  });

  test('docs landing page redirects to getting-started', async ({ page }) => {
    const res = await page.goto('/docs/index.html');
    expect(res.status(), 'docs index responds').toBe(200);
    expect(page.url(), 'docs index redirects to getting-started').toContain('docs/getting-started.html');
  });

  test('every page shares the same chrome (site.css, header.site, footer.site)', async ({ page }) => {
    for (const pathname of SITE_PAGES) {
      await page.goto(pathname);
      const info = await page.evaluate(() => {
        const css = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((l) => l.getAttribute('href').split('/').pop());
        const headerH = document.querySelector('header.site') ? getComputedStyle(document.querySelector('header.site nav')).height : null;
        const cols = !!document.querySelector('footer.site .cols');
        return { css, headerH, cols };
      });
      expect(info.css.includes('site.css'), `${pathname}: site.css`).toBe(true);
      expect(info.headerH, `${pathname}: header height`).toBe('60px');
      expect(info.cols, `${pathname}: footer cols`).toBe(true);
      const mdHrefs = await page.evaluate(() => Array.from(document.querySelectorAll('a[href$=".md"]')).length);
      expect(mdHrefs, `${pathname}: no .md links`).toBe(0);
      // logo + favicon present on every page
      const brandLogo = await page.evaluate(() => {
        const img = document.querySelector('a.brand img.logo, header.site img.logo');
        return img && img.getAttribute('src');
      });
      expect(brandLogo, `${pathname}: brand logo`).toBeTruthy();
      const favicon = await page.evaluate(() => {
        const link = document.querySelector('link[rel="icon"][href$=".svg"]');
        return link ? link.getAttribute('href') : null;
      });
      expect(favicon, `${pathname}: svg favicon`).toBeTruthy();
    }
  });
});