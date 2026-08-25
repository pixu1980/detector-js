export * from './platform';
export * from './device';
export * from './cpu';
export * from './gpu';

//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Hardware Module v' + (typeof __VERSION__ !== 'undefined' ? __VERSION__ : '0.0.0') + ' initialized');
}
