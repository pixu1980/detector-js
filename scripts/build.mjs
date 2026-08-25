// Build orchestrator for the detector-js vanillaJS monorepo.
// Toolchain: esbuild (no rollup, no babel). Read more: docs/toolchain.md
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = 'es2016';

function pkgJson(dir) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, dir, 'package.json'), 'utf8'));
}

const common = {
  bundle: true,
  target: TARGET,
  sourcemap: true,
  logLevel: 'info',
  charset: 'utf8',
};

async function buildPackage(name) {
  const pkg = pkgJson(`packages/${name}`);
  const entry = path.join(ROOT, `packages/${name}`, pkg.source);
  const external = Object.keys(pkg.dependencies || {});
  const base = {
    ...common,
    entryPoints: [entry],
    external,
    define: { __VERSION__: JSON.stringify(pkg.version) },
    outdir: path.join(ROOT, `packages/${name}/dist`),
    outbase: path.join(ROOT, `packages/${name}/lib`),
    outExtension: { '.js': '.js' },
  };
  // CJS
  await build({ ...base, format: 'cjs', outExtension: { '.js': '.js' } });
  // ESM
  await build({
    ...base,
    format: 'esm',
    outExtension: { '.js': '.mjs' },
  });
  console.info(`✓ built @detector-js/${name} (cjs + esm)`);
}

async function buildRoot() {
  const rootPkg = pkgJson('.');
  const nodeEntry = path.join(ROOT, 'packages/detector/lib/detector.js');
  const externals = Object.keys(rootPkg.dependencies || {});
  const nodeBase = {
    ...common,
    entryPoints: [nodeEntry],
    external: externals,
    define: { __VERSION__: JSON.stringify(rootPkg.version) },
    outdir: path.join(ROOT, 'dist'),
    outbase: path.join(ROOT, 'packages/detector/lib'),
  };
  await build({ ...nodeBase, format: 'cjs', outExtension: { '.js': '.js' } });
  await build({ ...nodeBase, format: 'esm', outExtension: { '.js': '.mjs' } });
  console.info('✓ built root dist (cjs + esm)');

  // self-contained browser bundles: window.Detector = Detector class
  //  - detector.browser(.min).js        → target ES2016 (standard, polyfills bundled)
  //  - detector.browser.es2015(.min).js → lowest esbuild target (legacy webviews).
  //    NOTE: true ES5 (IE11) exceeds esbuild's transpiler — would need a Babel pass.
  const browserEntry = path.join(ROOT, 'browser/index.js');
  const browserBase = {
    ...common,
    entryPoints: [browserEntry],
    define: { __VERSION__: JSON.stringify(rootPkg.version) },
    format: 'iife',
  };
  for (const [target, suffix] of [['es2016', ''], ['es2015', '.es2015']]) {
    const base = { ...browserBase, target: [target] };
    await build({ ...base, outfile: path.join(ROOT, `dist/detector.browser${suffix}.js`), minify: false, sourcemap: true });
    await build({ ...base, outfile: path.join(ROOT, `dist/detector.browser${suffix}.min.js`), minify: true, sourcemap: true });
  }
  console.info('✓ built root browser bundles (es2016 + es5, global Detector)');
}

async function main() {
  const nameArg = process.argv.includes('--package')
    ? process.argv[process.argv.indexOf('--package') + 1]
    : null;

  if (nameArg) {
    await buildPackage(nameArg);
  } else {
    for (const dir of fs.readdirSync(path.join(ROOT, 'packages'))) {
      if (fs.existsSync(path.join(ROOT, 'packages', dir, 'package.json'))) {
        await buildPackage(dir);
      }
    }
    await buildRoot();
    console.info('✓ build complete');
  }
}

main();