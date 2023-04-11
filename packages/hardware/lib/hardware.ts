'use strict';

import packageJSON from '../package.json';

export * from './platform';
export * from './device';
export * from './cpu';
export * from './gpu';

export const DetectorHardware = {
  version: packageJSON.version
};

console.log(`${packageJSON.description} v${packageJSON.version} initialized`);
