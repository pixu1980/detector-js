// Per-package esbuild wrapper: builds the package in CWD (cjs + esm).
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pkgRoot = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(pkgRoot, 'package.json'), 'utf8'));
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const external = Object.keys(pkg.dependencies || {});
const watch = process.argv.includes('--watch');

const common = {
  bundle: true,
  target: 'es2016',
  sourcemap: true,
  logLevel: 'info',
  charset: 'utf8',
  entryPoints: [path.join(pkgRoot, pkg.source)],
  external,
  define: { __VERSION__: JSON.stringify(pkg.version) },
  outbase: path.join(pkgRoot, 'lib'),
  outdir: path.join(pkgRoot, 'dist'),
};

const configs = [
  { ...common, format: 'cjs', outExtension: { '.js': '.js' } },
  { ...common, format: 'esm', outExtension: { '.js': '.mjs' } },
];

async function main() {
  if (watch) {
    const ctx = await build({ ...configs[0], watch: true });
    await ctx.rebuild();
    console.info('watching', pkg.name);
  } else {
    for (const cfg of configs) await build(cfg);
    console.info(`✓ built ${pkg.name}`);
  }
}

main();
