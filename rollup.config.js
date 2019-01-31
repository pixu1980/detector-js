// import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default [{
  // normal builds
  input: 'src/index.js',
  output: [{
    name: 'Detector',
    file: pkg.main.replace(/\.min\.js/ig, '.js'),
    format: 'umd',
  }, {
    name: 'default',
    file: pkg.browser.replace(/\.min\.js/ig, '.js'),
    format: 'iife',
    extend: true,
  }, {
    name: 'Detector',
    file: pkg.module.replace(/\.min\.js/ig, '.js'),
    format: 'cjs',
  }],
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
    filesize(),
  ],
}, {
  // main minified build
  input: 'src/index.js',
  output: [{
    name: 'Detector',
    file: pkg.main,
    format: 'umd',
  }],
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
    filesize(),
  ],
}, {
  // browser minified build
  input: 'src/index.js',
  output: [{
    name: 'default',
    file: pkg.browser,
    format: 'iife',
    extend: true,
  }],
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
    filesize(),
  ],
}, {
  // module minified build
  input: 'src/index.js',
  output: [{
    name: 'Detector',
    file: pkg.module,
    format: 'cjs',
  }],
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
    filesize(),
  ],
}];
