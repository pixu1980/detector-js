import { CssFlagsClass } from '@detector-js/core';

export declare class Platform extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  get bot(): any;
  get console(): any;
  get tv(): any;
  get tablet(): any;
  get smartphone(): any;
  get mobile(): any;
  get desktop(): any;
}
