import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      dir: 'dist',
      name: 'Detector',
      file: pkg.browser,
      format: 'umd',
      globals: {
        'bowser': 'bowser',
        'feature-js': 'feature',
        'lodash': '_',
        'platform': 'platform'
      },
    },
    plugins: [
      autoExternal(),
      resolve(), // so Rollup can find dependencies
      commonjs({
        include: 'node_modules/**'
      }), // so Rollup can convert dependencies to an ES module
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
      (process.env.NODE_ENV === 'production' && uglify()),
    ]
  },
];
