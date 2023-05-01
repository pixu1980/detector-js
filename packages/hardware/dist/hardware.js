var $kGCNT$detectorjscore = require("@detector-js/core");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5c2278ac07d05d78$exports = {};

$parcel$export($5c2278ac07d05d78$exports, "Platform", () => $5c2278ac07d05d78$export$2dffd0b5373a4389);

class $5c2278ac07d05d78$export$2dffd0b5373a4389 extends (0, $kGCNT$detectorjscore.CssFlagsClass) {
    /**
   * Creates an instance of Platform.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='platform']
   *
   * @memberOf Platform
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "platform"){
        super(ua, flags, cssFlagsPrefix);
    }
    /**
   *
   *
   * @readonly
   * @memberOf Platform
   */ get bot() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /googlebot/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @readonly
   * @memberof Platform
   */ get console() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            /(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this.ua),
            !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @readonly
   * @memberof Platform
   */ get tv() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this.ua),
            /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this.ua)
        ]) && (0, $kGCNT$detectorjscore.Asserts).one([
            !this.mobile,
            !this.bot,
            this.flags.feature.fullscreenKeyboard
        ]) && (0, $kGCNT$detectorjscore.Asserts).one([
            this.flags.os.Android,
            this.flags.os.Tizen,
            this.flags.os.WebOS
        ]);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */ get tablet() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            this.mobile,
            /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */ get smartphone() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            this.mobile,
            !this.tablet
        ]);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Platform
   */ get mobile() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            this.flags.feature.deviceMotion,
            this.flags.feature.deviceOrientation,
            this.flags.feature.pixelRatio > 1
        ]) && (0, $kGCNT$detectorjscore.Asserts).one([
            this.flags.feature.touch,
            this.flags.feature.forceTouch,
            [
                "ChromeMobile",
                "EdgeMobile",
                "IEMobile",
                "FirefoxMobile",
                "MaxthonMobile",
                "OperaMobile",
                "SafariMobile"
            ].includes(this.flags.browser.name)
        ]) && (0, $kGCNT$detectorjscore.Asserts).all([
            !this.flags.feature.pointerEvents,
            this.flags.feature.file
        ]) || (0, $kGCNT$detectorjscore.Asserts).all([
            [
                "Android",
                "iOS",
                "WindowsPhone",
                "Bada",
                "Blackberry",
                "Contiki",
                "MeeGo",
                "RIM",
                "QNX",
                "Palm",
                "Symbian",
                "WebOS"
            ].includes(this.flags.os.name),
            [
                "ChromeMobile",
                "EdgeMobile",
                "IEMobile",
                "FirefoxMobile",
                "MaxthonMobile",
                "OperaMobile",
                "SafariMobile"
            ].includes(this.flags.browser.name)
        ]);
    }
    /**
   *
   *
   * @readonly
   * @memberOf Platform
   */ get desktop() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            !this.bot,
            !this.console,
            !this.mobile,
            !this.tv
        ]);
    }
    toValues() {
        const proto = Object.getPrototypeOf(this);
        const protoProperties = Object.getOwnPropertyNames(proto).filter((prop)=>{
            return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
        });
        return protoProperties[0] || "n/a";
    }
}


var $8fbb520c1e8c0144$exports = {};

$parcel$export($8fbb520c1e8c0144$exports, "Device", () => $8fbb520c1e8c0144$export$8215d14a63d9fb10);

class $8fbb520c1e8c0144$export$8215d14a63d9fb10 extends (0, $kGCNT$detectorjscore.CssFlagsClass) {
    /**
   * Creates an instance of Device.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='device']
   *
   * @memberOf Device
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "device"){
        super(ua, flags, cssFlagsPrefix);
    }
}


var $9c2e00f29d58ee23$exports = {};

$parcel$export($9c2e00f29d58ee23$exports, "CPU", () => $9c2e00f29d58ee23$export$5ebf4cde340e6028);

class $9c2e00f29d58ee23$export$5ebf4cde340e6028 extends (0, $kGCNT$detectorjscore.CssFlagsClass) {
    constructor(ua = null, flags = {}, cssFlagsPrefix = "cpu"){
        super(ua, flags, cssFlagsPrefix);
        this.booleanFlagsValuePropertyName = "vendor";
        this.platform = this.getPlatform();
        this.cores = this.getCores();
        this.architecture = this.getArchitecture();
        this.sparc = this.getSparc();
        this.irix = this.getIrix();
        this.mips = this.getMips();
        this.risc = this.getRisc();
        this.avr = this.getAvr();
        this.arm = this.getArm();
        this.powerPC = this.getPowerPC();
        this.amd = this.getAmd();
        this.intel = this.getIntel();
    }
    /**
   *
   *
   * @returns number
   *
   * @memberOf CPU
   */ getCores() {
        return this.navigator.hardwareConcurrency || 1;
    }
    /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */ getPlatform() {
        return this.navigator.platform || "Win32";
    }
    /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */ getArchitecture() {
        // @ts-ignore
        let cpuClass = this.navigator.cpuClass || "x86";
        if ((0, $kGCNT$detectorjscore.Asserts).one([
            cpuClass === "x64",
            [
                "Win64",
                "MacIntel",
                "Linux x86_64",
                "Linux i686"
            ].includes(this.navigator.platform),
            /(?:x86_64|x86-64|win64|wow64|x64;|amd64|arm64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|ppc64|powerpc64)/i.test(this.ua)
        ])) cpuClass = "x64";
        return cpuClass;
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getSparc() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /(sun4\w)[;\)]/i.test(this.ua),
            /sparc(?:64)?(?=;);/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getIrix() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            /irix(?:64)?(?=;);/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getMips() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            /mips(?:64)?(?=;);/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getRisc() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            /pa-risc(?:64)?(?=;);/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getAvr() {
        return (0, $kGCNT$detectorjscore.Asserts).all([
            /(?=atmel\s)avr/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getArm() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /windows\s(ce|mobile);\sppc;/i.test(this.ua),
            /arm(?:64|(?=v\d+[;l]))/i.test(this.ua)
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getPowerPC() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this.ua),
            this.navigator.platform === "MacPPC"
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getAmd() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this.ua),
            // @ts-ignore
            this.navigator.cpuClass === "x64",
            this.navigator.platform === "Linux x86_64"
        ]) || (0, $kGCNT$detectorjscore.Asserts).one([
            /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this.ua),
            /((?:i[346]|x)86)[;\)]/i.test(this.ua),
            // @ts-ignore
            this.navigator.cpuClass === "x86"
        ]);
    }
    /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */ getIntel() {
        return (0, $kGCNT$detectorjscore.Asserts).one([
            /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this.ua),
            /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this.ua),
            // @ts-ignore
            this.navigator.cpuClass === "x64",
            this.navigator.platform === "MacIntel",
            this.navigator.platform === "Linux x86_64"
        ]) || (0, $kGCNT$detectorjscore.Asserts).one([
            /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this.ua),
            /(ia32(?=;))/i.test(this.ua),
            /((?:i[346]|x)86)[;\)]/i.test(this.ua),
            // @ts-ignore
            this.navigator.cpuClass === "x86"
        ]);
    }
}


var $3b0981556cb66547$exports = {};

$parcel$export($3b0981556cb66547$exports, "GPU", () => $3b0981556cb66547$export$f9febed8cec1c27c);

class $3b0981556cb66547$export$f9febed8cec1c27c extends (0, $kGCNT$detectorjscore.CssFlagsClass) {
    #canvas;
    #info;
    /**
   * Creates an instance of GPU.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='gpu']
   *
   * @memberOf GPU
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "gpu"){
        super(ua, flags, cssFlagsPrefix);
        this.#createTestElements();
        this.webGLVendor = this.#info.webGLVendor;
        this.webGLRenderer = this.#info.webGLRenderer;
        this.vendor = this.#info.vendor;
        this.model = this.#info.model;
        this.renderer = this.#info.renderer;
    }
    /**
   *
   *
   *
   * @memberOf GPU
   */ #createTestElements() {
        this.#canvas = this.document.createElement("canvas");
        this.#info = this.getInfo();
    }
    // /**
    //  *
    //  *
    //  *
    //  * @memberOf GPU
    //  */
    // _destroyTestElements() {
    //   this._canvas = null;
    //   this._info = null;
    //   delete this._canvas;
    //   delete this._info;
    // }
    /**
   *
   *
   * @returns object
   *
   * @memberOf GPU
   */ getInfo() {
        const info = {
            webGLVendor: "n/a",
            webGLRenderer: "n/a",
            vendor: "n/a",
            model: "n/a",
            renderer: "n/a"
        };
        try {
            const webGLContext = this.#canvas.getContext("webgl") ?? this.#canvas.getContext("experimental-webgl");
            if (webGLContext) {
                const dbgRenderInfo = webGLContext.getExtension("WEBGL_debug_renderer_info");
                if (dbgRenderInfo != null) // @ts-ignore
                info.merge({
                    vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
                    model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(" OpenGL Engine", ""),
                    renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
                });
                // @ts-ignore
                info.merge({
                    webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
                    webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER)
                });
            }
        } catch (e) {
            console.warn("webGL is not supported", e.message);
        }
        return info;
    }
}


"use strict";
$parcel$exportWildcard(module.exports, $5c2278ac07d05d78$exports);
$parcel$exportWildcard(module.exports, $8fbb520c1e8c0144$exports);
$parcel$exportWildcard(module.exports, $9c2e00f29d58ee23$exports);
$parcel$exportWildcard(module.exports, $3b0981556cb66547$exports);


//# sourceMappingURL=hardware.js.map
