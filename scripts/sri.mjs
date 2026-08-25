// Prints SRI integrity hashes (sha384) for the built browser bundles + pinned CDN snippets.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const v = `v${pkg.version}`;

for (const file of ['dist/detector.browser.min.js', 'dist/detector.browser.es2015.min.js']) {
  const buf = fs.readFileSync(path.join(ROOT, file));
  const sha384 = crypto.createHash('sha384').update(buf).digest('base64');
  const url = `https://cdn.jsdelivr.net/npm/detector-js@${v}/${file.replace('dist/', '')}`;
  console.log(`\n// ${file} (${buf.length} bytes)\n<script src="${url}" integrity="sha384-${sha384}" crossorigin="anonymous"></script>`);
}
// unpkg (no SRI header support as friendly): plain pin
console.log(`\n// unpkg\n<script src="https://unpkg.com/detector-js@${v}/dist/detector.browser.min.js"></script>`);
