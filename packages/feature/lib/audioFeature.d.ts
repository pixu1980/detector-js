import { CssFlagsClass } from '@detector-js/core';

export declare class AudioFeature extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  context: boolean;
  formats: boolean;

  get supported(): any;
  getContext(): boolean;
  getMp3(): boolean;
  getWebm(): boolean;
  getOgg(): boolean;
  getOpus(): boolean;
  getWav(): boolean;
  getM4a(): boolean;
  [flag: string]: any;
}

export * from './audioFeature';
export * from './videoFeature';
