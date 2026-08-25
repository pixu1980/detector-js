import { CssFlagsClass } from '@detector-js/core';

export declare class OS extends CssFlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  version: string;
  versionName: string;

  get Windows(): any;
  upgrade(): Promise<object>;
  get macOS(): any;
  get Unix(): any;
  get Linux(): any;
  get ChromiumOS(): any;
  get Solaris(): any;
  get Plan9(): any;
  get BeOS(): any;
  get OS2(): any;
  get AmigaOS(): any;
  get MorphOS(): any;
  get RISCOS(): any;
  get OpenVMS(): any;
  get Fuchsia(): any;
  get WindowsPhone(): any;
  get iOS(): any;
  get Android(): any;
  get Bada(): any;
  get Blackberry(): any;
  get Contiki(): any;
  get MeeGo(): any;
  get RIM(): any;
  get QNX(): any;
  get Palm(): any;
  get Symbian(): any;
  get WebOS(): any;
  get Tizen(): any;
  get Raspbian(): any;
  setVersion(version?: any): void;
  setVersionName(versionNameFn?: any): void;
}
