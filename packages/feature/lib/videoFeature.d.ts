import { CssFlagsClass } from '@detector-js/core';

export declare class VideoFeature extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  formats: boolean;

  get supported(): any;
  getMp4(): boolean;
  getOgv(): boolean;
  getWebm(): boolean;
  [flag: string]: any;
}

export * from './audioFeature';
export * from './videoFeature';
