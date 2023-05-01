import { FlagsClass } from "@detector-js/core";
/**
 *
 *
 * @export
 * @class Detector
 * @extends {FlagsClass}
 */
export class Detector extends FlagsClass {
    #private;
    feature: any;
    browser: {};
    engine: any;
    os: {};
    device: any;
    cpu: {};
    gpu: any;
    platform: string;
    /**
     * Creates an instance of Detector.
     * @param {boolean} [cssFlags=false]
     * @param {string} [cssFlagsPrefix='djs']
     * @param {any} [ua=null]
     *
     * @memberOf Detector
     */
    constructor(ua?: string | null, values?: boolean, cssFlags?: boolean, cssFlagsPrefix?: string);
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkFeature(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkEngine(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkBrowser(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkOS(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkDevice(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkCPU(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkGPU(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkPlatform(): void;
    /**
     *
     *
     *
     * @memberOf Detector
     */
    setCssFlags(): void;
}

//# sourceMappingURL=detector.types.d.ts.map
