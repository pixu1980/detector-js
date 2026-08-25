export declare class FlagsClass {
  constructor(ua?: string | null);

  get booleanFlagsValuePropertyName(): any;
  get root(): any;
  get process(): any;
  get navigator(): any;
  get document(): any;
  get ua(): any;
  toValues(): object;
  toFlags(): object;
}
