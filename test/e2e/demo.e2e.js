// E2E: live demo layout — two columns (cards + raw output),
// WebAPI cards open their MDN page in a new tab; every card has a description,
// full text (no ellipsis) and a generous width.
const { test, expect } = require('@playwright/test');

test.describe('live demo layout', () => {
  test('two columns, big cards with descriptions, MDN links on WebAPI cards', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto('/demo.html');

    const info = await page.evaluate(async () => {
      // default view: only supported; then flip to "all" (full MDN catalog)
      const supportedCards = Array.from(document.querySelectorAll('#cards-apis .flag-card'));
      document.getElementById('only-supported').checked = false;
      document.getElementById('only-supported').dispatchEvent(new Event('change'));
      await new Promise((r) => setTimeout(r, 50));
      const apiCards = Array.from(document.querySelectorAll('#cards-apis .flag-card'));
      const links = apiCards.filter((a) => a.tagName === 'A');
      const disabled = apiCards.filter((a) => a.tagName === 'DIV');

      const nameOverflow = apiCards.map((c) => getComputedStyle(c.querySelector('.name')).textOverflow);
      const widths = apiCards.map((c) => Math.round(c.getBoundingClientRect().width));
      const minWidth = Math.min.apply(null, widths);

      const descFor = (name) => {
        const c = apiCards.find((card) => card.querySelector('.name').textContent.trim() === name);
        return c ? (c.querySelector('.desc') || {}).textContent : null;
      };

      return {
        columns: document.querySelectorAll('.demo-grid > *').length,
        softwareCards: document.querySelectorAll('#cards-software .kv-card').length,
        hardwareCards: document.querySelectorAll('#cards-hardware .kv-card').length,
        supportedApiCards: supportedCards.length,
        apiCards: apiCards.length,
        linked: links.length,
        unmapped: disabled.length,
        allMdn: links.every((a) => a.getAttribute('href').startsWith('https://developer.mozilla.org/')),
        allBlank: links.every((a) => a.getAttribute('target') === '_blank' && a.getAttribute('rel') === 'noopener'),
        allStates: apiCards.every((c) => c.querySelector('.state.on') || c.querySelector('.state.off') || c.querySelector('.state.value')),
        allDescribed: apiCards.every((c) => {
          const d = c.querySelector('.desc');
          return d && d.textContent.trim().length > 15;
        }),
        noEllipsis: nameOverflow.every((o) => o !== 'ellipsis'),
        minWidth,
        onlineDesc: descFor('Online status'),
        quirksDesc: descFor('Quirks mode'),
        unmappedDescribed: disabled.every((c) => (c.querySelector('.desc') || {}).textContent.trim().length > 15),
        rawPre: !!document.querySelector('#out') && document.querySelector('#out').textContent.length > 200,
        rawTitleSticky: (() => {
          const t = document.querySelector('.raw-title');
          return t ? getComputedStyle(t).position === 'sticky' : false;
        })(),
        rawTitleCompact: (() => {
          const t = document.querySelector('.raw-title');
          return t ? getComputedStyle(t).fontSize.endsWith('13px') || getComputedStyle(t).fontSize.endsWith('14px') || parseFloat(getComputedStyle(t).fontSize) < 16 : false;
        })(),
      };
    });

    expect(errors, `page errors: ${JSON.stringify(errors)}`).toEqual([]);
    expect(info.columns).toBe(2);
    expect(info.softwareCards).toBeGreaterThanOrEqual(3);
    expect(info.hardwareCards).toBeGreaterThanOrEqual(3);
    expect(info.supportedApiCards).toBeGreaterThan(20); // supported-only view is usable
    expect(info.apiCards).toBeGreaterThan(1000); // full MDN catalog (all interfaces)
    expect(info.apiCards).toBeLessThan(1150);
    expect(info.linked).toBeGreaterThan(900); // every catalog interface links MDN
    expect(info.allMdn).toBe(true);
    expect(info.allBlank).toBe(true);
    expect(info.unmapped).toBeGreaterThan(0); // some flags have no single MDN page (plain card)
    expect(info.allStates).toBe(true);
    expect(info.allDescribed).toBe(true); // description on every API card
    expect(info.unmappedDescribed).toBe(true); // … also the ones without MDN links
    expect(info.noEllipsis).toBe(true); // full text, no ellipsis
    expect(info.minWidth).toBeGreaterThanOrEqual(220); // bigger cards
    expect(typeof info.onlineDesc).toBe('string');
    expect(info.onlineDesc.length).toBeGreaterThan(15);
    expect(info.quirksDesc.length).toBeGreaterThan(15);
    expect(info.rawPre).toBe(true);
    expect(info.rawTitleSticky).toBe(true);
    expect(info.rawTitleCompact).toBe(true);
  });
});