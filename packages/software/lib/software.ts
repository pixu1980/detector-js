'use strict';

import packageJSON from '../package.json';

export * from './browser';
export * from './engine';
export * from './os';

console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
