import { CssFlagsClass } from '@detector-js/core';

export declare class Engine extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  version: string;

  get Amaya(): any;
  get Goanna(): any;
  get iCab(): any;
  get KHTML(): any;
  get Links(): any;
  get Linx(): any;
  get NetFront(): any;
  get NetSurf(): any;
  get Presto(): any;
  get Tasman(): any;
  get w3m(): any;
  get Trident(): any;
  get Blink(): any;
  get EdgeHTML(): any;
  get Gecko(): any;
  get WebKit(): any;
  setVersion(version?: any): void;
}
