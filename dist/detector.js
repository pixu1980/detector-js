var $5lkKU$detectorjscore = require("@detector-js/core");
var $5lkKU$detectorjsfeature = require("@detector-js/feature");
var $5lkKU$detectorjshardware = require("@detector-js/hardware");
var $5lkKU$detectorjssoftware = require("@detector-js/software");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $60ed293a319c8885$export$2e2bcd8739ae039);
var $1572597be94ce13f$exports = {};
$1572597be94ce13f$exports = JSON.parse('{"name":"detector-js","version":"1.3.2","description":"DetectorJS, zero-dependency platform/environment detector written in ES6","keywords":["detector","detector-js","detection","feature-detection","platform-detection","cpu-detection","gpu-detection","browser-detection","layout-engine-detection","engine-detection","os-detection","useragent-parser","zero-dependency","es6","javascript"],"source":"src/detector.ts","main":"dist/detector.js","module":"dist/detector.mjs","types":"dist/detector.types.d.ts","repository":{"type":"git","url":"git+https://github.com/pixu1980/detector-js.git"},"author":"Emiliano \'Pixu\' Pisu <pisuemiliano.1980@gmail.com>","contributors":["Emiliano \'Pixu\' Pisu <pisuemiliano.1980@gmail.com>"],"license":"MIT","private":true,"scripts":{"docs":"rm -rf docs && jsdoc -R ./README.md -r -c ./jsdoc.json && echo \'Documentation built in ./docs folder\'","readme":"pkg-2-readme package.json > README.md -t \\"./pkg-2-readme.template.md\\" && echo \'README.md file built\' || echo \'README.md building error\'","changelog":"changelog && echo \'CHANGELOG.md file built\'","lerna":"lerna bootstrap && lerna link","cache:clear":"rm -rf .parcel-cache dist","deps:clear":"rm -rf packages/**/dist node_modules yarn.lock","clear":"yarn cache:clear && yarn deps:clear","reset":"yarn clear && yarn lerna && yarn serve","restart":"yarn cache:clear && yarn serve","serve":"parcel ./src/index.html","watch:all":"lerna exec --parallel yarn watch","prewatch":"yarn watch:all","watch":"parcel watch","build:all":"lerna run build","prebuild":"yarn build:all","build":"parcel build","prerelease":"yarn build:all && yarn build && yarn changelog && yarn readme && yarn docs","release":"lerna publish && yarn publish"},"bugs":{"url":"https://github.com/pixu1980/detector-js/issues"},"homepage":"https://github.com/pixu1980/detector-js#readme","documentation":"https://pixu1980.github.io/detector-js/docs/index.html","todo":"https://github.com/pixu1980/detector-js#todo","files":["dist"],"workspaces":["packages/*"],"dependencies":{"@detector-js/core":"^0.0.1","@detector-js/feature":"^0.0.1","@detector-js/hardware":"^0.0.1","@detector-js/software":"^0.0.1"},"peerDependencies":{"changelog":"^1.4.2","docdash":"^2.0.1","ink-docstrap":"^1.3.2","jsdoc":"^4.0.2","pkg-2-readme":"^0.0.6"},"devDependencies":{"@parcel/packager-ts":"2.8.3","@parcel/transformer-typescript-types":"2.8.3","@types/node":"18.15.11","lerna":"^6.6.1","parcel":"2.8.3","typescript":"5.0.4"}}');






class $60ed293a319c8885$export$2e2bcd8739ae039 extends (0, $5lkKU$detectorjscore.FlagsClass) {
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
        const feature = new (0, $5lkKU$detectorjsfeature.Feature)(this.ua);
        const audio = new (0, $5lkKU$detectorjsfeature.AudioFeature)(this.ua);
        const video = new (0, $5lkKU$detectorjsfeature.VideoFeature)(this.ua);
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
        const engine = new (0, $5lkKU$detectorjssoftware.Engine)(this.ua, this.toFlags());
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
        const browser = new (0, $5lkKU$detectorjssoftware.Browser)(this.ua, this.toFlags());
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
        const os = new (0, $5lkKU$detectorjssoftware.OS)(this.ua, this.toFlags());
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
        const device = new (0, $5lkKU$detectorjshardware.Device)(this.ua, this.toFlags());
        this.device = device.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(device.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkCPU() {
        const cpu = new (0, $5lkKU$detectorjshardware.CPU)(this.ua, this.toFlags());
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
        const gpu = new (0, $5lkKU$detectorjshardware.GPU)(this.ua, this.toFlags());
        this.gpu = gpu.toFlags();
        if (!!this.#cssFlags) this.#cssFlags = this.#cssFlags.concat(gpu.toCssFlags());
    }
    /**
   *
   *
   *
   * @memberOf Detector
   */ checkPlatform() {
        const platform = new (0, $5lkKU$detectorjshardware.Platform)(this.ua, this.toFlags());
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
console.log(`DetectorJS v${(0, (/*@__PURE__*/$parcel$interopDefault($1572597be94ce13f$exports))).version} initialized`);


//# sourceMappingURL=detector.js.map
