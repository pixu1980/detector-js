// Runs the shared unit suite with coverage and enforces a line-coverage threshold.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const THRESHOLD = Number(process.env.COVERAGE_MIN || 65); // % lines

const files = fs.readdirSync(path.join(ROOT, 'test/unit'))
  .filter((f) => f.endsWith('.test.cjs'))
  .map((f) => path.join('test/unit', f));

const r = spawnSync('node', ['--test', '--experimental-test-coverage', ...files], {
  cwd: ROOT,
  encoding: 'utf8',
});
process.stdout.write(r.stdout || '');

// node:test coverage ends with an "all files" row of percentages; take the last
// numeric column (% Lines; the exact column set varies across node versions)
const row = (r.stdout || '').split('\n').find((l) => /all files/i.test(l));
const nums = row ? row.match(/\d+\.\d+/g) : null;
const pct = nums && nums.length ? Number(nums[nums.length - 1]) : null;
console.log(`\nline coverage: ${pct == null ? 'n/a' : pct + '%'} (threshold ${THRESHOLD}%)`);
if (r.status !== 0) process.exit(r.status);
if (pct != null && pct < THRESHOLD) {
  console.error(`✗ coverage below threshold (${pct}% < ${THRESHOLD}%)`);
  process.exit(1);
}
