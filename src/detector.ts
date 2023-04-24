'use strict';

export * from '@detector-js/detector';

if (process.env.NODE_ENV === 'development') {
  const packageJSON = require('../package.json');

  console.log(`DetectorJS v${packageJSON.version} initialized`);
}
