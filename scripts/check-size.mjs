// Bundle size budget check (CI). Reads built dist sizes; fails above limits.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// byte limits per artifact (min bundles + node builds)
const LIMITS = {
  'dist/detector.browser.min.js': 90000,
  'dist/detector.browser.es2015.min.js': 90500,
  'dist/detector.js': 12000,
  'dist/detector.mjs': 12000,
};

let failed = false;
for (const [file, limit] of Object.entries(LIMITS)) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) {
    console.error(`✗ missing ${file} — run pnpm build first`);
    failed = true;
    continue;
  }
  const { size } = fs.statSync(p);
  const ok = size <= limit;
  console.log(`${ok ? '✓' : '✗'} ${file.padEnd(38)} ${String(size).padStart(7)} bytes  (limit ${limit})`);
  if (!ok) failed = true;
}
process.exit(failed ? 1 : 0);
