import './polyfills/index';

export { Asserts } from './asserts';
export { FlagsClass } from './flagsClass';
export { CssFlagsClass } from './cssFlagsClass';

//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Core Module v' + (typeof __VERSION__ !== 'undefined' ? __VERSION__ : '0.0.0') + ' initialized');
}
