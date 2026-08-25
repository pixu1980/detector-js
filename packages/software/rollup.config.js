// per-package rollup build: cjs + esm, workspace deps kept external
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default [{
  input: pkg.source,
  external: Object.keys(pkg.dependencies || {}),
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
    filesize(),
  ],
}];
