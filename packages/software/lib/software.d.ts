import { Asserts, CssFlagsClass, Flags } from '../../types/flags';

export declare class Browser extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  name?: string;
  version?: string;
  [browser: string]: any;
  Electron: boolean;
  SamsungBrowser: boolean;
  DuckDuckGo: boolean;
  Chrome: boolean;
  Firefox: boolean;
  Safari: boolean;
}

export declare class Engine extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  name?: string;
  version?: string;
  [engine: string]: any;
  Blink: boolean;
  Gecko: boolean;
  WebKit: boolean;
  Trident: boolean;
}

export declare class OS extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  name?: string;
  version?: string;
  versionName?: string;
  [os: string]: any;
  Windows: boolean;
  macOS: boolean;
  iOS: boolean;
  Android: boolean;
  Linux: boolean;
}
