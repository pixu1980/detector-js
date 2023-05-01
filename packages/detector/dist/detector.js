var $fCGpa$detectorjscore = require("@detector-js/core");
var $fCGpa$detectorjsfeature = require("@detector-js/feature");
var $fCGpa$detectorjshardware = require("@detector-js/hardware");
var $fCGpa$detectorjssoftware = require("@detector-js/software");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Detector", () => $8759a583cb8914ae$export$e695250628cde35);
/*jshint expr: true */ 



class $8759a583cb8914ae$export$e695250628cde35 extends (0, $fCGpa$detectorjscore.FlagsClass) {
    #values;
    #cssFlags;
    #cssFlagsPrefix;
    /**
   * Creates an instance of Detector.
   * @param {boolean} [cssFlags=false]
   * @param {string} [cssFlagsPrefix='djs']
   * @param {any} [ua=null]
   *
   * @memberOf Detector
   */ constructor(ua = null, values = true, cssFlags = false, cssFlagsPrefix = "djs"){
        super(ua);
        this.#values = values;
        this.#cssFlags = !!cssFlags ? [] : null;
        this.#cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? "--" : "");
        //! Features
        this.checkFeature();
        //! Software
        this.checkEngine();
        this.checkBrowser();
        this.checkOS();
        //! Hardware
        // this.checkDevice();
        this.checkCPU();
        this.checkGPU();
        this.checkPlatform();
        this.setCssFlags();
    // remove unnecessary memory usage
    // delete this.booleanFlagsValuePropertyName;
    // delete this._values;
    // delete this._cssFlags;
    // delete this._cssFlagsPrefix;
    // delete this.root;
    // delete this.process;
    // delete this.navigator;
    // delete this.document;
    // delete this.ua;
    // console.warn('DetectorJS initialized', this.toFlags());
    }
    //! Feature
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkFeature() {
        const feature = new (0, $fCGpa$detectorjsfeature.Feature)(this.ua);
        const audio = new (0, $fCGpa$detectorjsfeature.AudioFeature)(this.ua);
        const video = new (0, $fCGpa$detectorjsfeature.VideoFeature)(this.ua);
        this.feature = feature.toFlags().merge({
            audio: audio.toFlags(),
            video: video.toFlags()
        });
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
    }
    //! Software
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkEngine() {
        const engine = new (0, $fCGpa$detectorjssoftware.Engine)(this.ua, this.toFlags());
        if (this.#values) this.engine = engine.toValues();
        else this.engine = engine.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(engine.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkBrowser() {
        const browser = new (0, $fCGpa$detectorjssoftware.Browser)(this.ua, this.toFlags());
        if (this.#values) this.browser = browser.toValues();
        else this.browser = browser.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(browser.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkOS() {
        const os = new (0, $fCGpa$detectorjssoftware.OS)(this.ua, this.toFlags());
        if (this.#values) this.os = os.toValues();
        else this.os = os.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(os.toCssFlags());
    }
    //! Hardware
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkDevice() {
        const device = new (0, $fCGpa$detectorjshardware.Device)(this.ua, this.toFlags());
        this.device = device.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(device.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkCPU() {
        const cpu = new (0, $fCGpa$detectorjshardware.CPU)(this.ua, this.toFlags());
        if (this.#values) this.cpu = cpu.toValues();
        else this.cpu = cpu.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(cpu.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkGPU() {
        const gpu = new (0, $fCGpa$detectorjshardware.GPU)(this.ua, this.toFlags());
        this.gpu = gpu.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(gpu.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkPlatform() {
        const platform = new (0, $fCGpa$detectorjshardware.Platform)(this.ua, this.toFlags());
        if (this.#values) this.platform = platform.toValues();
        else this.platform = platform.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(platform.toCssFlags());
    }
    //! CSS Flags
    /**
   *
   *
   *
   * @memberOf Detector
   */ setCssFlags() {
        if (!!this.#cssFlags) {
            const cssFlagsPrefixed = this.#cssFlags.map((cssFlag)=>{
                return this.#cssFlagsPrefix + cssFlag;
            });
            const htmlElement = document.documentElement || document.querySelector("html");
            cssFlagsPrefixed.forEach((cssFlag)=>{
                return htmlElement.className.replace(cssFlag, "");
            });
            htmlElement.className += cssFlagsPrefixed.join(" ").trim();
        }
    }
}


//# sourceMappingURL=detector.js.map
