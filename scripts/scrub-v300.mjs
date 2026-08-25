// Scrub the library version "3.0.0" → baseline "2.0.11" across the tree.
// Idempotent, rule-based, safe on arbitrary tree snapshots (used during
// history rewrite edit-stops and on the final working tree).
// Dist banners, package.json versions, CDN pins, docs/changelog entries.
// Leaves dependency semver strings (e.g. "123.0.0.0" UA tokens) untouched.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', '.tokensave', 'test-results']);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    if (ent.name === 'scrub-v300.mjs') continue; // never scrub the scrubber
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const isJsonPkg = (p) => path.basename(p) === 'package.json';

function scrubJson(content) {
  const obj = JSON.parse(content);
  let changed = false;
  if (obj.version === '3.0.0') {
    obj.version = '2.0.11';
    changed = true;
  }
  for (const key of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    const deps = obj[key];
    if (deps && deps['detector-js'] === '3.0.0') {
      deps['detector-js'] = '2.0.11';
      changed = true;
    }
  }
  return changed ? JSON.stringify(obj, null, 2) + '\n' : null;
}

// ordered rules — keep order stable so results are deterministic
const RULES = [
  ['@3.0.0', '@2.0.11'],                                   // CDN pins
  ['v3.0.0', 'v2.0.11'],                                   // README title line / prose labels
  ['next major 3.0.0, baseline 2.0.11', 'next major, baseline 2.0.11'], // ADR 002
  ['Current next major target: **3.0.0**', 'Current next major target: **monorepo restructure**'], // CONTRIBUTING
  ['baseline 2.0.11 + breaking commits → 3.0.0', 'baseline 2.0.11 + breaking commits → next major'], // release.mjs comment
  ['baseline 2.0.11, next 3.0.0', 'baseline 2.0.11, next major'], // changelog bullets
  ['(v3.0.0+)', '(baseline 2.0.11+)'],                       // publish.yml comment
  ['placeholder: e.g. 3.0.0', 'placeholder: e.g. 2.0.11'],   // bug report template
  ['the release script bumps examples to 3.0.0', 'the release script bumps examples to the next version'], // examples README
  ['v1 / v2 → v3 (3.0.0)', 'v1 / v2 → v3 monorepo'],         // migration title
  ['The next release is **3.0.0**', 'The next release is **a new major**'], // migration body
  ['(e.g. 3.0.0)', '(e.g. 2.0.11)'],                         // migration table
  ['__VERSION__: "3.0.0"', '__VERSION__: "2.0.11"'],                     // historic build.mjs hardcoded define
  ["pkg.version, '3.0.0'", "pkg.version, '2.0.11'"],                       // test/unit/parity.test.cjs
  ['being on "3.0.0"', 'being on the next major'],           // migration prose (if any)
  ['all **same version** (e.g. 3.0.0)', 'all **same version** (e.g. 2.0.11)'], // migration table
];

function dropChangelogMd(content) {
  // drop "## [Version 3.0.0](...)" heading + body until next "## [Version"/"## [Unreleased" heading or EOF
  const out = [];
  let inBlock = false;
  for (const line of content.split('\n')) {
    if (/^## \[Version 3\.0\.0\]/.test(line)) {
      inBlock = true;
      continue;
    }
    if (inBlock && /^## \[(Version|Unreleased)/.test(line)) inBlock = false;
    if (!inBlock) out.push(line);
    if (!inBlock && /^## \[Version 3\.0\.0\]/.test(line)) inBlock = false; // no-op guard
  }
  return out.join('\n');
}

function dropChangelogHtml(content) {
  const out = [];
  let inBlock = false;
  for (const line of content.split('\n')) {
    if (/<h2>.*Version 3\.0\.0.*<\/h2>/.test(line)) {
      inBlock = true;
      continue;
    }
    if (inBlock && /^\s*<h2>/.test(line)) inBlock = false;
    if (inBlock && /^\s*<\/main>/.test(line)) inBlock = false;
    if (!inBlock) out.push(line);
  }
  return out.join('\n');
}

function scrubText(content, p) {
  let c = content;
  for (const [from, to] of RULES) c = c.split(from).join(to); // global, safe
  const base = path.basename(p);
  if (base === 'CHANGELOG.md') c = dropChangelogMd(c);
  if (base === 'CHANGELOG.html') c = dropChangelogHtml(c);
  if (/(^|\/)dist\//.test(p) && /\.(js|mjs|map)$/.test(p)) {
    c = c.split('(true ? "3.0.0" : "0.0.0")').join('(true ? "2.0.11" : "0.0.0")');
  }
  return c === content ? null : c;
}

let changed = 0;
let leftovers = [];
for (const p of walk(ROOT)) {
  const rel = path.relative(ROOT, p);
  if (rel.startsWith('docs/')) {
    // skip jsdoc-generated API pages? keep scrubbing them too — they shouldn't carry the lib version
  }
  if (isJsonPkg(p)) {
    const orig = fs.readFileSync(p, 'utf8');
    const next = scrubJson(orig);
    if (next) {
      fs.writeFileSync(p, next);
      changed++;
    }
    continue;
  }
  const content = fs.readFileSync(p, 'utf8');
  // avoid binary blobs (images)
  if (/[\x00-\x08\x0e-\x1f]/.test(content.slice(0, 4096))) continue;
  const next = scrubText(content, p);
  if (next) {
    fs.writeFileSync(p, next);
    changed++;
  }
}

// leftover report (excluding UA strings like 123.0.0.0)
for (const p of walk(ROOT)) {
  const rel = path.relative(ROOT, p);
  if (rel.startsWith('.git') || rel.startsWith('node_modules') || rel.startsWith('.tokensave')) continue;
  const content = fs.readFileSync(p, 'utf8');
  if (/[\x00-\x08\x0e-\x1f]/.test(content.slice(0, 4096))) continue;
  if (/3\.0\.0/.test(content)) {
    const lines = content.split('\n');
    lines.forEach((ln, i) => {
      if (/3\.0\.0/.test(ln) && !/\.0\.0\.0/.test(ln)) leftovers.push(`${rel}:${i + 1}: ${ln.trim().slice(0, 120)}`);
    });
  }
}

console.log(`scrub: ${changed} files rewritten`);
if (leftovers.length) {
  console.log('LEFT-OVER 3.0.0 matches (check manually):');
  for (const l of leftovers.slice(0, 40)) console.log('  ' + l);
} else {
  console.log('no 3.0.0 leftovers');
}