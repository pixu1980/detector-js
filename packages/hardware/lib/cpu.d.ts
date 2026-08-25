import { CssFlagsClass } from '@detector-js/core';

export declare class CPU extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  platform: string;
  cores: number;
  architecture: string;
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
  getSparc(): boolean;
  getIrix(): boolean;
  getMips(): boolean;
  getRisc(): boolean;
  getAvr(): boolean;
  getArm(): boolean;
  getPowerPC(): boolean;
  getAmd(): boolean;
  getIntel(): boolean;
  upgrade(): Promise<object>;
}
