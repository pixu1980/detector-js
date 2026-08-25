import { FlagsClass } from '@detector-js/core';

export declare class Detector extends FlagsClass {
  constructor(ua?: string | null, values?: boolean, cssFlags?: boolean, cssFlagsPrefix?: string);

  feature: any;
  engine: any;
  browser: any;
  os: any;
  cpu: object;
  device: any;
  gpu: any;
  platform: any;

  checkFeature(): void;
  checkEngine(): void;
  checkBrowser(): void;
  checkOS(): void;
  upgrade(): Promise<object>;
  checkDevice(): void;
  checkCPU(): void;
  checkGPU(): void;
  checkPlatform(): void;
  setCssFlags(): void;
}
