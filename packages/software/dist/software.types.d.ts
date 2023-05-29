import { CssFlagsClass } from "@detector-js/core";
/**
 *
 *
 * @export
 * @class Browser
 * @extends {CssFlagsClass}
 */
export class Browser extends CssFlagsClass {
    #private;
    version: any;
    /**
     * Creates an instance of Browser.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='browser']
     *
     * @memberOf Browser
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Amaya(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Arora(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Avant(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Baidu(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Basilisk(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get BlackBerry(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Blazer(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Bolt(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Brave(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Camino(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chimera(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get ComodoDragon(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Conkeror(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dillo(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dolphin(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dorado(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Doris(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Electron(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Epiphany(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Falkon(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Fennec(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Firebird(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Flock(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get GoBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get GoogleBot(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get iCab(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceApe(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceCat(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceDragon(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Iridium(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Iron(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Jasmine(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Konqueror(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get KMeleon(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Links(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Linx(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Lunascape(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Maemo(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MaxthonMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Maxthon(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Midori(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Minimo(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MIUIBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Mosaic(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MZBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Netfront(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Netscape(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get NetSurf(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get NokiaBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OmniWeb(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OviBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Palemoon(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Phoenix(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get PhantomJS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Polaris(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Puffin(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QQBrowserMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QQBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Quark(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QupZilla(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Reconq(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get RockMelt(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Sailfish(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SamsungBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SeaMonkey(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Silk(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Skyfire(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Sleipnir(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Slim(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SlimerJS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Swing(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get TizenBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get UCBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Vivaldi(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get w3m(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Waterfox(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get WebOSBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get WeChat(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Whale(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Yandex(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get AndroidBrowser(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get ChromeMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chrome(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chromium(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get EdgeMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Edge(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get FirefoxFocus(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get FirefoxMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Firefox(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IEMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IE(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaMini(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaTouch(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaCoast(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Opera(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SafariMobile(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Safari(): boolean;
    /**
     *
     *
     * @param {any} [version=null]
     * @param {boolean} [inverted=false]
     *
     * @memberOf Browser
     */
    setVersion(version?: string | null, inverted?: boolean): void;
}
/**
 *
 *
 * @export
 * @class Engine
 * @extends {CssFlagsClass}
 */
export class Engine extends CssFlagsClass {
    version: string;
    /**
     * Creates an instance of Engine.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='engine']
     *
     * @memberOf Engine
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Amaya(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Goanna(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get iCab(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get KHTML(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Links(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Linx(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get NetFront(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get NetSurf(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Presto(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Tasman(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get w3m(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Trident(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Blink(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get EdgeHTML(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Gecko(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get WebKit(): boolean;
    /**
     *
     *
     * @param {boolean} [assertsResult=false]
     * @param {any} [version=null]
     * @returns boolean
     *
     * @memberOf Engine
     */
    _checkAssertsResult(assertsResult?: boolean, version?: any): boolean;
    /**
     *
     *
     * @param {any} [version=null]
     *
     * @memberOf Engine
     */
    /**
     *
     *
     * @param {any} [version=null]
     *
     * @memberOf Engine
     */
    setVersion(version?: any): void;
}
/**
 *
 *
 * @export
 * @class OS
 * @extends {CssFlagsClass}
 */
export class OS extends CssFlagsClass {
    #private;
    version: string;
    versionName: string;
    /**
     * Creates an instance of OS.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='os']
     *
     * @memberOf OS
     */
    constructor(ua?: string | null, flags?: {}, cssFlagsPrefix?: string);
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Windows(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get macOS(): boolean;
    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getUnixDistroName(version?: string): string;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Unix(): boolean;
    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getLinuxDistroName(version?: string): string;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Linux(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get ChromiumOS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Solaris(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Plan9(): boolean;
    get Minix(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get BeOS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get OS2(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get AmigaOS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get MorphOS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get RISCOS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get OpenVMS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Fuchsia(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get WindowsPhone(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get iOS(): boolean;
    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getAndroidVersionName(version?: string): string;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Android(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Bada(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Blackberry(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Contiki(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get MeeGo(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get RIM(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get QNX(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Palm(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Symbian(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get WebOS(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Tizen(): boolean;
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Raspbian(): boolean;
    /**
     *
     *
     * @param {boolean} [assertsResult=false]
     * @param {any} [version=null]
     * @param {any} [versionNameFn=null]
     * @returns boolean
     *
     * @memberOf OS
     */
    _checkAssertsResult(assertsResult?: boolean, version?: string | null, versionNameFn?: Function | null): boolean;
    /**
     *
     *
     * @param {any} [version=null]
     *
     * @memberOf OS
     */
    setVersion(version?: string | null): void;
    /**
     *
     *
     * @param {any} [versionNameFn=null]
     *
     * @memberOf OS
     */
    setVersionName(versionNameFn?: Function | null): void;
}

//# sourceMappingURL=software.types.d.ts.map
