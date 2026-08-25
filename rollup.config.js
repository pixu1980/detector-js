// Root monorepo rollup build:
//  - dist/detector.js        -> CJS (workspace deps external)
//  - dist/detector.mjs       -> ESM (workspace deps external)
//  - dist/detector.browser.js/.min.js -> self-contained UMD global `Detector`
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import fs from 'fs';

import pkg from './package.json';

const cacheFileName = '.uglifyjs-cache.json';
const uglifyOptions = {
  mangle: false,
  nameCache: JSON.parse(fs.readFileSync(cacheFileName, 'utf8')),
  sourcemap: false,
};

const workspaceExternals = Object.keys(pkg.dependencies || {});

const basePlugins = () => [
  eslint({
    exclude: [
      'node_modules/**',
    ],
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  replace({
    ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
    __VERSION__: JSON.stringify(pkg.version),
  }),
];

export default [{
  //#region cjs + esm node builds (workspace deps external)
  input: 'packages/detector/lib/detector.js',
  external: workspaceExternals,
  output: [{
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  }, {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  }],
  plugins: [
    ...basePlugins(),
    filesize(),
  ],
  //#endregion
}, {
  //#region self-contained UMD browser builds (workspace deps bundled)
  input: 'packages/detector/lib/detector.js',
  plugins: [
    ...basePlugins(),
    resolve({
      extensions: ['.js', '.mjs'],
    }),
    filesize(),
  ],
  output: [{
    name: 'Detector',
    file: 'dist/detector.browser.js',
    format: 'umd',
    sourcemap: true,
  }],
  //#endregion
}, {
  input: 'packages/detector/lib/detector.js',
  plugins: [
    ...basePlugins(),
    resolve({
      extensions: ['.js', '.mjs'],
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
  output: [{
    name: 'Detector',
    file: 'dist/detector.browser.min.js',
    format: 'umd',
    sourcemap: false,
  }],
}];