import { Asserts, CssFlagsClass, Flags } from '../../types/flags';

export declare class Feature extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  // constructor-computed capability flags
  [flag: string]: any;
  webGPU: boolean;
  webGL2: boolean;
  deviceMemory: number | string;
  touchPoints: number;
  // detection factory methods
  getWebAuthn(): boolean;
  getWakeLock(): boolean;
  getWebShare(): boolean;
  getWebLocks(): boolean;
  getClipboard(): boolean;
  getIndexedDB(): boolean;
  getStructuredClone(): boolean;
}

export declare class AudioFeature extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  supported: boolean;
  context: boolean;
  formats: Flags;
}

export declare class VideoFeature extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  supported: boolean;
  formats: Flags;
}
