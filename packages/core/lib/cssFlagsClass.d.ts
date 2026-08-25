import { FlagsClass } from './flagsClass';

export declare class CssFlagsClass extends FlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);

  get flags(): any;
  get cssFlagsPrefix(): any;
  toCssFlags(): object;
}
