import { CssFlagsClass } from '@detector-js/core';

export declare class GPU extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  webGLVendor: any;
  webGLRenderer: any;
  vendor: any;
  model: any;
  renderer: any;

  getInfo(): object;
}
