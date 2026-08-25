'use strict';

export * from './browser';
export * from './engine';
export * from './os';

if (process.env.NODE_ENV === 'development') {
  const packageJSON = require('../package.json');

  console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
}
