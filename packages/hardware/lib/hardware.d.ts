import { Asserts, CssFlagsClass, Flags } from '../../types/flags';

export declare class Platform extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  bot: boolean;
  console: boolean;
  tv: boolean;
  tablet: boolean;
  smartphone: boolean;
  mobile: boolean;
  desktop: boolean;
  toValues(): string | Flags;
}

export declare class Device extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  [device: string]: any;
}

export declare class CPU extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  platform: string;
  cores: number;
  architecture: string;
  vendor?: string;
  [cpu: string]: any;
  sparc: boolean;
  irix: boolean;
  mips: boolean;
  risc: boolean;
  avr: boolean;
  arm: boolean;
  powerPC: boolean;
  amd: boolean;
  intel: boolean;
  getCores(): number;
  getPlatform(): string;
  getArchitecture(): string;
  upgrade(): Promise<Flags>;
}

export declare class GPU extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  webGLVendor: string;
  webGLRenderer: string;
  vendor: string;
  model: string;
  renderer: string;
  getInfo(): Flags;
}
