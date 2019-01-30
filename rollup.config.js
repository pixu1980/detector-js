// import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

const createRollupFormat = function (bundle, format) {
  return {
    input: 'src/index.js',
    output: {
      name: 'Detector',
      file: pkg[bundle],
      format: format,
    },
    plugins: [
      eslint({
        exclude: [
          'src/styles/**',
        ]
      }),
      // autoExternal(),
      resolve({
        // pass custom options to the resolve plugin
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }), // so Rollup can find dependencies
      commonjs({
        include: 'node_modules/**'
      }), // so Rollup can convert dependencies to an ES module
      babel({
        exclude: 'node_modules/**',
      }),
      replace({
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
      (process.env.NODE_ENV === 'production' && uglify({
        compress: {
          // compress options
          keep_classnames: true,
          keep_fnames: true,
        },
        mangle: false,
        ecma: 5, // specify one of: 5, 6, 7 or 8
        keep_classnames: true,
        keep_fnames: true,
        ie8: true,
        nameCache: null, // or specify a name cache object
        safari10: true,
        toplevel: false,
        warnings: false,
      })),
      filesize(),
    ],
  };
};

export default [
  createRollupFormat('main', 'umd'),
  // createRollupFormat('browser', 'iife'),
  // createRollupFormat('module', 'cjs'),
];
