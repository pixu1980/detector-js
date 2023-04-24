'use strict';

export * from './platform';
export * from './device';
export * from './cpu';
export * from './gpu';

if (process.env.NODE_ENV === 'development') {
  const packageJSON = require('../package.json');

  console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
}
