// Regenerates README.md from pkg-2-readme.template.md + package.json
// (drop-in for the `pkg-2-readme` CLI that is not installed).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
let tpl = fs.readFileSync(path.join(ROOT, 'pkg-2-readme.template.md'), 'utf8');

const vars = {
  '{{name}}': pkg.name,
  '{{version}}': pkg.version,
  '{{description}}': pkg.description,
  '{{author_name}}': pkg.author,
  '{{license}}': pkg.license,
  '{{repository}}': (pkg.repository && pkg.repository.url || '').replace(/^git\+/, '').replace(/\.git$/, ''),
  '{{documentation}}': pkg.documentation || '',
  '{{example}}': pkg.example || '',
  '{{author}}': 'pixu1980',
};
for (const [k, v] of Object.entries(vars)) tpl = tpl.split(k).join(v);
fs.writeFileSync(path.join(ROOT, 'README.md'), tpl);
console.log(`README.md regenerated for v${pkg.version}`);