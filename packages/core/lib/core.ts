'use strict';

import './polyfills';

export * from './asserts';
export * from './flagsClass';
export * from './cssFlagsClass';

if (process.env.NODE_ENV === 'development') {
  const packageJSON = require('../package.json');

  console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
}
