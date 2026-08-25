/**
 *
 *
 * @export
 * @class Asserts
 */
export class Asserts {
    static checkAssert(assert: any, safe?: boolean): any;
    /**
     * Check for every assert to be true
     *
     * @static
     * @param {any} [asserts=[]] - array of asserts (can be boolean, strings, functions, whatever you want ;-)
     * @param {boolean} [safe=false] - executes asserts in a safe mode (try/catch)
     * @returns boolean
     *
     * @memberOf Asserts
     */
    static all(asserts?: any[], safe?: boolean): boolean;
    /**
     * Check for at least one assert to be true
     *
     * @static
     * @param {any} [asserts=[]] - array of asserts (can be boolean, strings, functions, whatever you want ;-)
     * @param {boolean} [safe=false] - executes asserts in a safe mode (try/catch)
     * @returns boolean
     *
     * @memberOf Asserts
     */
    static one(asserts?: any[], safe?: boolean): boolean;
}
/**
 *
 *
 * @export
 * @class FlagsClass
 */
export class FlagsClass {
    #private;
    get booleanFlagsValuePropertyName(): string;
    set booleanFlagsValuePropertyName(booleanFlagsValuePropertyName: string);
    get root(): Window & typeof globalThis;
    get process(): any;
    get navigator(): Navigator;
    get document(): Document;
    get ua(): string;
    /**
     * Creates an instance of FlagsClass.
     * @param {any} [ua=null]
     *
     * @memberOf FlagsClass
     */
    constructor(ua?: string | null);
    /**
     *
     *
     * @returns {object}
     *
     * @memberOf FlagsClass
     */
    toValues(): {};
    /**
     *
     *
     * @returns {object}
     *
     * @memberOf FlagsClass
     */
    toFlags(): any;
}
/**
 *
 *
 * @export
 * @class CssFlagsClass
 * @extends {FlagsClass}
 */
export class CssFlagsClass extends FlagsClass {
    #private;
    get flags(): any;
    get cssFlagsPrefix(): string;
    /**
     * Creates an instance of CssFlagsClass.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='flags']
     *
     * @memberOf CssFlagsClass
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @returns object
     *
     * @memberOf CssFlagsClass
     */
    toCssFlags(): string[];
}

//# sourceMappingURL=core.types.d.ts.map
