// E2E: live demo layout — two columns (cards + raw output),
// WebAPI cards open their MDN page in a new tab.
const { test, expect } = require('@playwright/test');

test.describe('live demo layout', () => {
  test('two columns, detection cards, MDN links on WebAPI cards', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto('/demo.html');

    const info = await page.evaluate(() => {
      const apiCards = Array.from(document.querySelectorAll('#cards-apis .flag-card'));
      const links = apiCards.filter((a) => a.tagName === 'A');
      const disabled = apiCards.filter((a) => a.tagName === 'DIV');
      return {
        columns: document.querySelectorAll('.demo-grid > *').length,
        softwareCards: document.querySelectorAll('#cards-software .kv-card').length,
        hardwareCards: document.querySelectorAll('#cards-hardware .kv-card').length,
        apiCards: apiCards.length,
        linked: links.length,
        unmapped: disabled.length,
        allMdn: links.every((a) => a.getAttribute('href').startsWith('https://developer.mozilla.org/')),
        allBlank: links.every((a) => a.getAttribute('target') === '_blank' && a.getAttribute('rel') === 'noopener'),
        rawPre: !!document.querySelector('#out') && document.querySelector('#out').textContent.length > 200,
        states: apiCards.filter((a) => a.querySelector('.state.on') || a.querySelector('.state.off') || a.querySelector('.state.value')).length,
      };
    });

    expect(errors, `page errors: ${JSON.stringify(errors)}`).toEqual([]);
    expect(info.columns).toBe(2);
    expect(info.softwareCards).toBeGreaterThanOrEqual(3);
    expect(info.hardwareCards).toBeGreaterThanOrEqual(3);
    expect(info.apiCards).toBeGreaterThan(50);
    expect(info.linked).toBeGreaterThan(40);
    expect(info.allMdn).toBe(true);
    expect(info.allBlank).toBe(true);
    expect(info.unmapped).toBeGreaterThan(0); // some flags have no single MDN page (stays a plain card)
    expect(info.states).toBe(info.apiCards);
    expect(info.rawPre).toBe(true);
  });
});