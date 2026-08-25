import { FlagsClass, Flags } from '../../types/flags';
import { Feature, AudioFeature, VideoFeature } from '@detector-js/feature';
import { Platform, Device, CPU, GPU } from '@detector-js/hardware';
import { Browser, Engine, OS } from '@detector-js/software';

export declare class Detector extends FlagsClass {
  /**
   * @param ua user-agent string (defaults to navigator.userAgent)
   * @param values values-mode: true → compact { name, version, ... } objects
   * @param cssFlags adds djs--* classes on <html> (off by default)
   * @param cssFlagsPrefix prefix for css flags (default 'djs')
   */
  constructor(ua?: string | null, values?: boolean, cssFlags?: boolean, cssFlagsPrefix?: string);
  feature: Flags & {
    audio?: Flags;
    video?: Flags;
  };
  browser: Flags;
  engine: Flags;
  os: Flags;
  cpu: Flags;
  gpu: Flags;
  platform: string;
  toValues(): Flags;
  toFlags(): Flags;
}
