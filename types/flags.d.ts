// Shared type helpers for DetectorJS packages.

export type Flags = Record<string, any>;

export declare class Asserts {
  static checkAssert(assert: any, safe?: boolean): any;
  static all(asserts: any[], safe?: boolean): boolean;
  static one(asserts: any[], safe?: boolean): boolean;
}

export declare class FlagsClass {
  constructor(ua?: string | null);
  get ua(): string;
  get root(): any;
  get process(): any;
  get navigator(): any;
  get document(): any;
  get booleanFlagsValuePropertyName(): string;
  toValues(): Flags;
  toFlags(): Flags;
}

export declare class CssFlagsClass extends FlagsClass {
  constructor(ua?: string | null, flags?: object, cssFlagsPrefix?: string);
  get flags(): object;
  get cssFlagsPrefix(): string;
  toCssFlags(): string[];
}
