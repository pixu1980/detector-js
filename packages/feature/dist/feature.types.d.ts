import { CssFlagsClass } from "@detector-js/core";
/**
 *
 *
 * @export
 * @class AudioFeature
 * @extends {CssFlagsClass}
 */
export class AudioFeature extends CssFlagsClass {
    #private;
    context: boolean;
    formats: {
        mp3: boolean;
        webm: boolean;
        ogg: boolean;
        opus: boolean;
        wav: boolean;
        m4a: boolean;
    };
    /**
     * Creates an instance of AudioFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='audio']
     *
     * @memberOf AudioFeature
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @readonly
     *
     * @memberOf AudioFeature
     */
    get supported(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getContext(): boolean;
    /**
     *__
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getMp3(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getWebm(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getOgg(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getOpus(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getWav(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getM4a(): boolean;
}
/**
 *
 *
 * @export
 * @class VideoFeature
 * @extends {CssFlagsClass}
 */
export class VideoFeature extends CssFlagsClass {
    #private;
    formats: {
        mp4: boolean;
        ogv: boolean;
        webm: boolean;
    };
    /**
     * Creates an instance of VideoFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='video']
     *
     * @memberOf VideoFeature
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @memberof VideoFeature
     */
    _createTestElements(): void;
    /**
     *
     *
     * @readonly
     *
     * @memberOf VideoFeature
     */
    get supported(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getMp4(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getOgv(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getWebm(): boolean;
}
/**
 *
 *
 * @export
 * @class Feature
 * @extends {CssFlagsClass}
 */
export class Feature extends CssFlagsClass {
    #private;
    addEventListener: boolean;
    asyncScript: boolean;
    battery: boolean;
    cors: boolean;
    deferScript: boolean;
    file: boolean;
    fileSystem: boolean;
    fullscreen: boolean;
    fullscreenKeyboard: boolean;
    geolocation: boolean;
    historyAPI: boolean;
    littleEndian: boolean;
    localStorage: boolean;
    matchMedia: boolean;
    querySelector: boolean;
    querySelectorAll: boolean;
    serviceWorker: boolean;
    typedArray: boolean;
    userMedia: boolean;
    vibration: boolean;
    worker: boolean;
    /**
     * Creates an instance of Feature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='feature']
     *
     * @memberOf Feature
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @param {any} prop
     * @param {any} [prefixes=this.#cssPrefixes]
     * @returns {string}
     *
     * @memberOf Feature
     */
    _checkCssPrefixedProp(prop: any, prefixes?: string[]): boolean;
    /**
     *
     *
     * @param {any} prop
     * @param {any} value
     * @returns {any}
     *
     * @memberOf Feature
     */
    _getCssPrefixedPropValue(prop: any, value: any): string | null;
    /**
     *
     *
     * @param {any} prop
     * @param {any} value
     * @returns {any}
     *
     * @memberOf Feature
     */
    _checkCssPrefixedPropValue(prop: any, value: any): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getAddEventListener(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getAsyncScript(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBattery(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCors(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getDeferScript(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFile(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFileSystem(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFullscreen(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFullscreenKeyboard(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getGeolocation(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getHistoryAPI(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getLittleEndian(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getLocalStorage(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMatchMedia(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getQuerySelector(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getQuerySelectorAll(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getServiceWorker(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getTypedArray(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getUserMedia(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getVibration(): boolean;
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWorker(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerEnabled(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pixelRatio(): number;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerLock(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get quirksMode(): boolean;
    /**
     * Test if CSS 3D transforms are supported
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get css3D(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get cssTransform(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get cssTransition(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get deviceMotion(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get deviceOrientation(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get contextMenu(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get classList(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get placeholder(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get viewportUnit(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get remUnit(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get canvas(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get svg(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webp(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webGL(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webVR(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get touch(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get forceTouch(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerEvents(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get srcset(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get sizes(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pictureElement(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get dialogElement(): boolean;
}

//# sourceMappingURL=feature.types.d.ts.map
