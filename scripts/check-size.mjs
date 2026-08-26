// Bundle size report (min bytes + gzip + brotli). Reads dist/sizes.json (written by build).
// Usage:
//   pnpm analyze          → report only
//   pnpm analyze --check   → also enforce byte budgets (CI)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
// byte limits per artifact (raw minified bytes)
const LIMITS = {
  'dist/detector.browser.min.js': 90000,
  'dist/detector.browser.es2015.min.js': 90500,
  'dist/detector.js': 12000,
  'dist/detector.mjs': 12000,
};

const sizesPath = path.join(ROOT, 'dist/sizes.json');
if (!fs.existsSync(sizesPath)) {
  console.error('✗ dist/sizes.json missing — run pnpm build first');
  process.exit(1);
}
const sizes = JSON.parse(fs.readFileSync(sizesPath, 'utf8'));
const kb = (n) => (n / 1024).toFixed(1);

let failed = false;
const rows = Object.entries(LIMITS).map(([file, limit]) => {
  const s = sizes[file];
  if (!s) {
    console.error(`✗ missing sizes for ${file}`);
    failed = true;
    return null;
  }
  const ok = s.bytes <= limit;
  if (CHECK && !ok) failed = true;
  console.log(
    `${ok ? '✓' : '✗'} ${file.padEnd(38)} ${String(s.bytes).padStart(7)} B (${kb(s.bytes)} KB min · ${kb(s.gzip)} gz · ${kb(s.brotli)} br)${CHECK ? `  [limit ${limit}]` : ''}`
  );
  return s;
}).filter(Boolean);

const total = rows.reduce((a, r) => a + r.bytes, 0);
console.log(`\nΣ minified: ${(total / 1024).toFixed(1)} KB`);

process.exit(failed ? 1 : 0);