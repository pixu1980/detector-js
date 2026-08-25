import { CssFlagsClass } from "@detector-js/core";
/**
 *
 *
 * @export
 * @class Platform
 * @extends {CssFlagsClass}
 */
export class Platform extends CssFlagsClass {
    /**
     * Creates an instance of Platform.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='platform']
     *
     * @memberOf Platform
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */
    get bot(): boolean;
    /**
     *
     *
     * @readonly
     * @memberof Platform
     */
    get console(): boolean;
    /**
     *
     *
     * @readonly
     * @memberof Platform
     */
    get tv(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get tablet(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get smartphone(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get mobile(): boolean;
    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */
    get desktop(): boolean;
    toValues(): string;
}
/**
 *
 *
 * @export
 * @class Device
 * @extends {CssFlagsClass}
 */
export class Device extends CssFlagsClass {
    /**
     * Creates an instance of Device.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='device']
     *
     * @memberOf Device
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
}
export class CPU extends CssFlagsClass {
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
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @returns number
     *
     * @memberOf CPU
     */
    getCores(): number;
    /**
     *
     *
     * @returns string
     *
     * @memberOf CPU
     */
    getPlatform(): string;
    /**
     *
     *
     * @returns string
     *
     * @memberOf CPU
     */
    getArchitecture(): any;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getSparc(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getIrix(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getMips(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getRisc(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getAvr(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getArm(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getPowerPC(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getAmd(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getIntel(): boolean;
}
/**
 *
 *
 * @export
 * @class GPU
 * @extends {CssFlagsClass}
 */
export class GPU extends CssFlagsClass {
    #private;
    webGLVendor: string;
    webGLRenderer: string;
    vendor: string;
    model: string;
    renderer: string;
    /**
     * Creates an instance of GPU.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='gpu']
     *
     * @memberOf GPU
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @returns object
     *
     * @memberOf GPU
     */
    getInfo(): {
        webGLVendor: string;
        webGLRenderer: string;
        vendor: string;
        model: string;
        renderer: string;
    };
}

//# sourceMappingURL=hardware.types.d.ts.map
