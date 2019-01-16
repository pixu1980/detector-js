// import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const createRollupFormat = function (format) {
  return {
    input: 'src/index.js',
    output: {
      name: 'Detector',
      file: pkg.main,
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
      (process.env.NODE_ENV === 'production' && uglify()),
    ],
  };
};

export default [
  // createRollupFormat('iife'),
  createRollupFormat('umd')
];
