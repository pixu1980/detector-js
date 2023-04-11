'use strict';
import packageJSON from '../package.json';

import './polyfills';

export * from './asserts';
export * from './flagsClass';
export * from './cssFlagsClass';

export const DetectorCore = {
  version: packageJSON.version
};

console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
