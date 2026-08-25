// Regenerates packages/feature/lib/webAPIs.js — the catalog of MDN Web API
// interfaces probed by Feature (global presence on the window/root).
//
// Sources (preferred order):
//   1. a local interface list file (one MDN slug per line):  node scripts/update-webapis.mjs --file /tmp/mdn_globals.txt
//   2. scraping MDN:                                          node scripts/update-webapis.mjs --scrape
//
// Coverage follows the MDN /docs/Web/API index; every interface whose name is a
// single uppercase token becomes a feature flag probed with `'X' in root`.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'packages/feature/lib/webAPIs.js');

// camelCase like the bundled String#toCamelCase polyfill (acronym-aware):
// RTCPeerConnection -> rtcPeerConnection
function toCamelCase(s) {
  const parts = String(s).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];
  const joined = parts.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
  return joined.slice(0, 1).toLowerCase() + joined.slice(1);
}

// existing explicit feature flags we must not shadow
const featureSrc = fs.readFileSync(path.join(ROOT, 'packages/feature/lib/feature.js'), 'utf8');
const existing = new Set([...featureSrc.matchAll(/this\.(\w+)\s*=\s*this\.get\w+\(\)/g)].map((m) => m[1]));

function fetchMdnIndex() {
  const html = execSync(
    'curl -s -m 60 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15" https://developer.mozilla.org/en-US/docs/Web/API',
    { encoding: 'utf8' }
  );
  const names = new Set();
  for (const m of html.matchAll(/href="\/en-US\/docs\/Web\/API\/([A-Za-z0-9_]+)"/g)) names.add(m[1]);
  return names;
}

async function main() {
  const fileArg = process.argv.indexOf('--file');
  const names = fileArg !== -1
    ? new Set(fs.readFileSync(process.argv[fileArg + 1], 'utf8').split('\n').map((l) => l.trim()).filter(Boolean))
    : fetchMdnIndex();

  const globals = [];
  for (const name of names) {
    if (!/^[A-Z][A-Za-z0-9]{1,39}$/.test(name)) continue; // single-token interface-ish names only
    const flag = toCamelCase(name);
    if (!flag || existing.has(flag)) continue;
    globals.push(name);
  }
  globals.sort();

  const lines = [];
  lines.push('// AUTO-GENERATED — do not edit. Regenerate with:  node scripts/update-webapis.mjs [--file <list> | --scrape]');
  lines.push('// Source: MDN /docs/Web/API index — the windowGlobal names probed by Feature on the global root.');
  lines.push('// featureFlag = globalName.toCamelCase(); mdn url = https://developer.mozilla.org/en-US/docs/Web/API/<globalName>');
  lines.push('');
  lines.push('export const WEB_API_GLOBALS = [');
  for (const name of globals) lines.push(`  '${name}',`);
  lines.push('];');
  lines.push('');

  fs.writeFileSync(OUT, lines.join('\n'));
  console.info(`✓ webAPIs.js regenerated: ${globals.length} globals (${names.size} names scanned)`);
}

main();