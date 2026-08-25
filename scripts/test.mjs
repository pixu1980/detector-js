// Test orchestrator: unit (per-package + shared) → integration smoke → e2e (playwright).
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT, ...opts });
  if (r.status !== 0) {
    console.error(`\n❌ failed: ${cmd} ${args.join(' ')}`);
    process.exit(r.status ?? 1);
  }
}

console.log('\n── 1/4 per-package unit tests (node:test) ──');
run('pnpm', ['-r', 'test']);

console.log('\n── 2/4 shared unit tests (node:test) ──');
const unitFiles = fs.readdirSync(path.join(ROOT, 'test/unit'))
  .filter((f) => f.endsWith('.test.cjs'))
  .map((f) => path.join('test/unit', f));
run('node', ['--test', ...unitFiles]);

console.log('\n── 3/4 integration smoke (real bundles) ──');
run('node', ['test/smoke.js']);

console.log('\n── 4/4 e2e (playwright chromium) ──');
const e2eDir = path.join(ROOT, 'test/e2e');
if (fs.existsSync(e2eDir)) {
  run('pnpm', ['exec', 'playwright', 'test']);
} else {
  console.log('no e2e dir');
}

console.log('\n✅ all tests passed');