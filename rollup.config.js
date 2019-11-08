import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import fs from 'fs';

import pkg from './package.json';

const cacheFileName = ".uglifyjs-cache.json";
const uglifyOptions = {
  mangle: false,
  nameCache: JSON.parse(fs.readFileSync(cacheFileName, "utf8")),
  sourcemap: false,
};
export default [{
  //#region normal builds
  input: 'src/index.es.js',
  output: [{
    name: 'Detector',
    file: pkg.main.replace(/\.min\.js/ig, '.js'),
    format: 'umd',
    sourcemap: true,
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    filesize(),
  ],
}, {
  input: 'src/index.js',
  output: [{
    name: 'default',
    file: pkg.module.replace(/\.min\.js/ig, '.js'),
    format: 'iife',
    extend: true,
    sourcemap: true,
  }, {
    name: 'Detector',
    file: pkg.browser.replace(/\.min\.js/ig, '.js'),
    format: 'cjs',
    sourcemap: true,
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    filesize(),
  ],
  //#endregion
}, {
  //#region minified builds
  input: 'src/index.es.js',
  output: [{
    name: 'Detector',
    file: pkg.main,
    format: 'umd',
    sourcemap: false,
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
}, {
  input: 'src/index.js',
  output: [{
    name: 'default',
    file: pkg.module,
    format: 'iife',
    extend: true,
    sourcemap: false,
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
}, {
  input: 'src/index.js',
  output: [{
    name: 'Detector',
    file: pkg.browser,
    format: 'cjs',
    sourcemap: false,
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
  //#endregion
}];
