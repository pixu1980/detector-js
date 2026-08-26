var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// packages/software/lib/browser.js
import { Asserts, CssFlagsClass } from "@detector-js/core";
var Browser = class extends CssFlagsClass {
  /**
   * Creates an instance of Browser.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='browser']
   *
   * @memberOf Browser
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "browser") {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.setVersion();
  }
  /**
   *
   *
   *
   * @memberOf Browser
   */
  _createTestElements() {
    this._reStrVerNum = "(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?";
    this._reStrVer = "(?:version)" + this._reStrVerNum;
    this._reVer = new RegExp(this._reStrVer, "i");
    this._ua.match(this._reVer);
  }
  // /**
  //  *
  //  *
  //  *
  //  * @memberOf Browser
  //  */
  // _destroyTestElements() {
  //   this._reStrVerNum = null;
  //   this._reStrVer = null;
  //   this._reVer = null;
  //   delete this._reStrVerNum;
  //   delete this._reStrVer;
  //   delete this._reVer;
  // }
  _reTest(reStr = this._reStrVer) {
    return new RegExp(reStr, "i").test(this._ua);
  }
  //#region Un-Common/Rare/Mythic Browsers
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Amaya() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:amaya)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Arora() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:arora)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Avant() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:avant(?:sbrowser))" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Baidu() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Basilisk() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:basilisk)" + this._reStrVer)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get BlackBerry() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:blackberry|bb.*;.*\\)\\s)" + this._reStrVer)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Blazer() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:blazer)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Bolt() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:bolt)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Brave() {
    return this._checkAssertsResult(Asserts.one([
      !!this._navigator.brave || !!this._navigator.Brave,
      this._reTest("(?:brave)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Camino() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:camino)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chimera() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:chimera)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get ComodoDragon() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:comodo(?:\\_|\\s)dragon)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Conkeror() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:conkeror)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dillo() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:dillo)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dolphin() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:dolfin)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dorado() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:dorado.+ser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Doris() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:doris)" + this._reStrVerNum)
    ]));
  }
  _getElectronVersion() {
    try {
      return this._process.versions.electron;
    } catch (e) {
      return "n/a";
    }
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Electron() {
    return this._checkAssertsResult(Asserts.one([
      () => {
        var _a;
        return ((_a = this._process) == null ? void 0 : _a.type) === "renderer";
      },
      // Renderer process
      () => {
        var _a, _b;
        return !!((_b = (_a = this._process) == null ? void 0 : _a.versions) == null ? void 0 : _b.electron);
      },
      // Main process
      () => !!this._navigator && this._reTest("electron")
      // Detect the user agent when the `nodeIntegration` option is set to true
    ], true), false, this._getElectronVersion());
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Epiphany() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:epiphany)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Falkon() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:falkon)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Fennec() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:fennec)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Firebird() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:firebird)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Flock() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:flock)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get GoBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:gobrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get GoogleBot() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:googlebot)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get iCab() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:icab)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceApe() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:iceape)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:ices?browser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceCat() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:icecat)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceDragon() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:icedragon)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iridium() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:iridium)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iron() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:iron)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Jasmine() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:jasmine)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Konqueror() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:konqueror)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get KMeleon() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:k-meleon)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Links() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:links)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Linx() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:lynx)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Lunascape() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:lunascape)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Maemo() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:maemosbrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MaxthonMobile() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:mxios)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Maxthon() {
    return this._checkAssertsResult(Asserts.all([
      !this.MaxthonMobile,
      this._reTest("(?:maxthon|mxnitro)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Midori() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:midori)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Minimo() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:minimo)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MIUIBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:xiaomi\\/miuibrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Mosaic() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:mosaic)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MZBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:MZBrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Netfront() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:netfront)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Netscape() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:navigator|netscape)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get NetSurf() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:netsurf)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get NokiaBrowser() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:nokias?browser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OmniWeb() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:omniweb)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OviBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:ovibrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Palemoon() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:palemoon)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Phoenix() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:phoenix)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get PhantomJS() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:phantomjs)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Polaris() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:polaris)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Puffin() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:puffin)" + this._reStrVerNum)
    ]), true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowserMobile() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:mqq(?:browser)?)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowser() {
    return this._checkAssertsResult(Asserts.all([
      !this.QQBrowserMobile,
      this._reTest("(?:qq(?:browser)?(?:lite)?)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Quark() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:quark)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QupZilla() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:qupzilla)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Reconq() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:rekonq)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get RockMelt() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:rockmelt)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Sailfish() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:sailfish(?:s?browser))" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SamsungBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:samsungbrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SeaMonkey() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:seamonkey)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Silk() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:silk)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Skyfire() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:skyfire)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Sleipnir() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:sleipnir)" + this._reStrVerNum)
    ]), true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Slim() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:slim(?:browser)?)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SlimerJS() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:slimerjs)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Swing() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:swing)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get TizenBrowser() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:tizen(?:browser)?)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get UCBrowser() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:uc(?:mini|browser))" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Vivaldi() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:vivaldi)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get w3m() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:w3m)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Waterfox() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:waterfox)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get WebOSBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:w(?:eb)?osbrowser)" + this._reStrVerNum)
    ]), true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get WeChat() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:micromessenger)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Whale() {
    return this._checkAssertsResult(Asserts.all([
      this._reTest("(?:whale)" + this._reStrVerNum)
    ]), true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Yandex() {
    return Asserts.one([
      this._reTest("(?:ya(?:browser|ndex))" + this._reStrVerNum)
    ]);
  }
  //#endregion
  //#region Common Browsers
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get AndroidBrowser() {
    return this._checkAssertsResult(Asserts.all([
      !this._reTest("like android"),
      this._reTest("(?:android.*)" + this._reStrVer)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get ChromeMobile() {
    return this._checkAssertsResult(Asserts.all([
      !this._reTest("like chrome"),
      this._reTest("((?:android.+)crmo|crios)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chrome() {
    return this._checkAssertsResult(Asserts.all([
      !this.Brave,
      !this.Electron,
      !this.SamsungBrowser,
      !this.ChromeMobile,
      !this.AndroidBrowser,
      !this._reTest("like chrome"),
      this._reTest("(?:(?:headless)?chrome)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chromium() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:chromium)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get EdgeMobile() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:edg(?:ios|a))" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Edge() {
    return this._checkAssertsResult(Asserts.all([
      !this.IE,
      this._reTest("(?:^(?:(?!mobile|android|ios).)*)(?:edge|edg)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get FirefoxFocus() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:focus)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get FirefoxMobile() {
    return this._checkAssertsResult(Asserts.one([
      this.FirefoxFocus,
      this._reTest("(?:fxios)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Firefox() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:firefox|iceweasel)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IEMobile() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:iemobile)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IE() {
    return this._checkAssertsResult(Asserts.all([
      !this.IEMobile,
      /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMini() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:operasmini)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaTouch() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:opt)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaCoast() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:coast)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMobile() {
    return this._checkAssertsResult(Asserts.one([
      !!this._root.opera,
      !!this._root.opr,
      this.OperaMini,
      // UA-only, e.g. Opera Mini (no window.opera on every build)
      this.OperaCoast,
      // UA-only: Coast/ token
      this.OperaTouch
      // UA-only: OPT/ token — Opera for iOS is a WKWebView wrapper, it never sets window.opera/opr
    ]) && Asserts.one([
      this.OperaMini,
      this.OperaCoast,
      this.OperaTouch,
      this._reTest("(?:op(?:r|ios))" + this._reStrVerNum) && /(?:mobile|mobi|iphone|ipad|ipod|android|tablet)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Opera() {
    return this._checkAssertsResult(Asserts.one([
      !!this._root.opera,
      !!this._root.opr
    ]) && Asserts.all([
      !this.OperaMobile
    ]) && Asserts.one([
      this._reTest("(?:op(?:era|r)|mms)" + this._reStrVerNum)
    ]), true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SafariMobile() {
    return this._checkAssertsResult(Asserts.all([
      /iphone|ipad|ipod/i.test(this._ua),
      !this.AndroidBrowser,
      !this.Chrome,
      !this.PhantomJS,
      !this.OperaMobile
      // Opera for iOS (OPT/) must not fall back to SafariMobile
    ]) && Asserts.one([
      /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this._ua),
      /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this._ua),
      /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this._ua),
      /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Safari() {
    return this._checkAssertsResult(Asserts.all([
      /safari|applewebkit/i.test(this._ua),
      !this.AndroidBrowser,
      !this.SafariMobile,
      !this.OperaMobile,
      !this.Chrome,
      !this.PhantomJS
    ]) && Asserts.one([
      /(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this._ua)
    ]));
  }
  //#region Modern WebView & Embedded Browsers
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get DuckDuckGo() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:duckduckgo)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Facebook() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:fban|fbav)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Instagram() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:instagram)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get TikTok() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:tiktok)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Kiwi() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:kiwi)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get HuaweiBrowser() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:huaweibrowser)" + this._reStrVerNum)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Line() {
    return this._checkAssertsResult(Asserts.one([
      this._reTest("(?:line)" + this._reStrVerNum)
    ]));
  }
  //#endregion
  //#endregion
  /**
   *
   *
   * @param {boolean} [assertsResult=false]
   * @param {boolean} [inverted=false]
   * @param {any} [version=null]
   * @returns boolean
   *
   * @memberOf Browser
   */
  _checkAssertsResult(assertsResult = false, inverted = false, version = null) {
    if (assertsResult) {
      this.setVersion(version, inverted);
      return true;
    }
    return false;
  }
  /**
   *
   *
   * @param {any} [version=null]
   * @param {boolean} [inverted=false]
   *
   * @memberOf Browser
   */
  setVersion(version = null, inverted = false) {
    if (inverted) {
      version = version || this.version || RegExp.$1 || "n/a";
    } else {
      version = version || RegExp.$1 || this.version || "n/a";
    }
    this.version = version.replace(/_/gi, ".");
  }
};

// packages/software/lib/engine.js
import { Asserts as Asserts2, CssFlagsClass as CssFlagsClass2 } from "@detector-js/core";
var Engine = class extends CssFlagsClass2 {
  /**
   * Creates an instance of Engine.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='engine']
   *
   * @memberOf Engine
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "engine") {
    super(ua, flags, cssFlagsPrefix);
    this.version = "n/a";
  }
  //#region Un-Common/Rare/Mythic Engines
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Amaya() {
    return this._checkAssertsResult(Asserts2.all([
      /(amaya)\/([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Goanna() {
    return this._checkAssertsResult(Asserts2.all([
      /(goanna)\/([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get iCab() {
    return this._checkAssertsResult(Asserts2.all([
      /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get KHTML() {
    return this._checkAssertsResult(Asserts2.all([
      /(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Links() {
    return this._checkAssertsResult(Asserts2.all([
      /(links)[\/\s]\(?([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Linx() {
    return this._checkAssertsResult(Asserts2.all([
      /(lynx)\/([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get NetFront() {
    return this._checkAssertsResult(Asserts2.all([
      /(netfront)\/([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get NetSurf() {
    return this._checkAssertsResult(Asserts2.all([
      /(netsurf)\/([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Presto() {
    return this._checkAssertsResult(Asserts2.one([
      /(presto)\/([\w\.]+)/i.test(this._ua),
      /presto\/(\d+(\.?_?\d+)+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Tasman() {
    return this._checkAssertsResult(Asserts2.all([
      /(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get w3m() {
    return this._checkAssertsResult(Asserts2.all([
      /w3m[\/\s]([\w\.]+)/i.test(this._ua)
    ]));
  }
  //#endregion
  //#region Common Engines
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Trident() {
    var _a;
    return this._checkAssertsResult(Asserts2.all([
      !!((_a = this._document) == null ? void 0 : _a.documentMode)
    ]) && Asserts2.one([
      /trident[\/\s](\d+(\.?_?\d+)+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Blink() {
    return this._checkAssertsResult(Asserts2.all([
      () => "Intl" in this._root && "v8BreakIterator" in this._root.Intl,
      "CSS" in this._root,
      /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua)
    ], true));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get EdgeHTML() {
    return this._checkAssertsResult(Asserts2.all([
      "StyleMedia" in this._root,
      !this.Trident
    ]) && Asserts2.one([
      /edge\/(\d+(\.?_?\d+)+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get Gecko() {
    return this._checkAssertsResult(Asserts2.all([
      "InstallTrigger" in this._root,
      !/like gecko/i.test(this._ua)
    ]) && Asserts2.one([
      /rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua),
      /gecko\/(\d+(\.?_?\d+)+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */
  get WebKit() {
    return this._checkAssertsResult(Asserts2.all([
      "webkitConvertPointFromNodeToPage" in this._root
    ]) && Asserts2.one([
      /(?:(?:apple)?webkit)\/(\d+(\.?_?\d+)+)/i.test(this._ua)
    ]));
  }
  //#endregion
  /**
   *
   *
   * @param {boolean} [assertsResult=false]
   * @param {any} [version=null]
   * @returns boolean
   *
   * @memberOf Engine
   */
  _checkAssertsResult(assertsResult = false, version = null) {
    if (assertsResult) {
      this.setVersion(version);
      return true;
    }
    return false;
  }
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
  setVersion(version = null) {
    this.version = version || RegExp.$1 || "n/a";
  }
};

// packages/software/lib/os.js
import { Asserts as Asserts3, CssFlagsClass as CssFlagsClass3 } from "@detector-js/core";
var OS = class extends CssFlagsClass3 {
  /**
   * Creates an instance of OS.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='os']
   *
   * @memberOf OS
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "os") {
    super(ua, flags, cssFlagsPrefix);
    this.version = "n/a";
    this.versionName = "n/a";
  }
  /**
   *
   *
   * @param {any} [versionNames={}]
   * @param {any} [version=null]
   * @returns string
   *
   * @memberOf OS
   */
  _getVersionNames(versionNames = {}, version = null) {
    if (!!version) {
      version = version.replace(/_/ig, ".");
      return Object.getOwnPropertyNames(versionNames).filter((versionName) => {
        return !!versionNames[versionName];
      })[0] || "n/a";
    }
    return "n/a";
  }
  //! Desktop OSs
  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getWindowsVersionName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      "CE": /CE/i.test(version),
      "95": /95/i.test(version),
      "98": /98/i.test(version),
      "ME": /ME/i.test(version),
      "2000": /NT(\s)?5\.0/i.test(version),
      "XP": /NT(\s)?5\.1/i.test(version) || /XP/i.test(version),
      "2003": /NT(\s)?5\.2/i.test(version),
      "Vista": /NT(\s)?6\.0/i.test(version),
      "7": /NT(\s)?6\.1/i.test(version),
      "8": /NT(\s)?6\.2/i.test(version),
      "8.1": /NT(\s)?6\.3/i.test(version),
      "10": /NT(\s)?6\.4/i.test(version) || /NT(\s)?10\.0/i.test(version),
      "RT": /ARM/.test(version)
    }, version);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Windows() {
    return this._checkAssertsResult(Asserts3.all([
      /Win/i.test(this._ua)
    ]) && Asserts3.one([
      /Windows ((NT|XP)( \d\d?.\d)?)/i.test(this._ua)
      //       /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
      // // ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
      // /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i,
      // // ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
    ]), null, this._getWindowsVersionName);
  }
  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getMacOSVersionName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      // source https://en.wikipedia.org/wiki/Mac_OS_8
      "Tempo": /^8\.0(\.+\d)?$/i.test(version),
      "Bride of Buster": /^8\.1(\.+\d)?$/i.test(version),
      "Allegro": /^8\.5(\.+\d)?$/i.test(version),
      "Veronica": /^8\.6(\.+\d)?$/i.test(version),
      // source https://en.wikipedia.org/wiki/Mac_OS_9
      "Sonata": /^9\.0(\.+[012356789])?$/i.test(version),
      "Minuet": /^9\.0\.4$/i.test(version),
      "Fortissimo": /^9\.1(\.+\d)?$/i.test(version),
      "Moonlight": /^9\.2(\.+[023456789])?$/i.test(version),
      "Limelight": /^9\.2\.1$/i.test(version),
      // source https://en.wikipedia.org/wiki/List_of_Apple_operating_systems
      "Cheetah": /^10\.0(\.+\d)?$/i.test(version),
      "Puma": /^10\.1(\.+\d)?$/i.test(version),
      "Jaguar": /^10\.2(\.+\d)?$/i.test(version),
      "Panther": /^10\.3(\.+\d)?$/i.test(version),
      "Tiger": /^10\.4(\.+\d)?$/i.test(version),
      "Leopard": /^10\.5(\.+\d)?$/i.test(version),
      "Snow Leopard": /^10\.6(\.+\d)?$/i.test(version),
      "Lion": /^10\.7(\.+\d)?$/i.test(version),
      "Mountain Lion": /^10\.8(\.+\d)?$/i.test(version),
      "Mavericks": /^10\.9(\.+\d)?$/i.test(version),
      "Yosemite": /^10\.10(\.+\d)?$/i.test(version),
      "El Capitan": /^10\.11(\.+\d)?$/i.test(version),
      "Sierra": /^10\.12(\.+\d)?$/i.test(version),
      "High Sierra": /^10\.13(\.+\d)?$/i.test(version),
      "Mojave": /^10\.14(\.+\d)?$/i.test(version),
      "Catalina": /^10\.15(\.+\d)?$/i.test(version),
      "Big Sur": /^11(\.+\d)(\.+\d)?$/i.test(version),
      "Monterey": /^12(\.+\d)(\.+\d)?$/i.test(version),
      "Ventura": /^13(\.+\d)(\.+\d)?$/i.test(version),
      "Sonoma": /^14(\.+\d)(\.+\d)?$/i.test(version),
      "Sequoia": /^15(\.+\d)(\.+\d)?$/i.test(version),
      "Tahoe": /^26(\.+\d)(\.+\d)?$/i.test(version)
    }, version);
  }
  //! Client Hints (User-Agent Client Hints) — real OS version when the UA legacy-compat
  //! string hides it (modern macOS always reports "Mac OS X 10_15_7" while the real
  //! version is, e.g., 26.6.2 "Tahoe"). platformVersion is high-entropy: only available
  //! through the async getHighEntropyValues() and can be denied (Permissions-Policy).
  /**
   *
   *
   * @param {any} [hints=null]
   * @returns {string|null}
   *
   * @memberOf OS
   */
  _getClientHintsPlatformVersion(hints = null) {
    const pv = hints && hints.platformVersion != null ? String(hints.platformVersion) : null;
    if (!pv) return null;
    const version = pv.replace(/_/g, ".");
    return /^\d+(\.\d+){0,2}$/.test(version) ? version : null;
  }
  /**
   * Maps a client-hints platform version to the marketing macOS version.
   * Handles both marketing-style values (11..15, 26) and Darwin-style values
   * (20..26, e.g. Chrome on macOS reports 24.4.0 for Sequoia 15).
   *
   * @param {string} clientHintsVersion
   * @returns {string|null}
   *
   * @memberOf OS
   */
  _mapMacOSVersion(clientHintsVersion) {
    const major = parseInt(clientHintsVersion.split(".")[0], 10);
    if (Number.isNaN(major)) return null;
    if (major >= 20) {
      const darwinToMarketing = {
        19: "10.15",
        20: "11",
        21: "12",
        22: "13",
        23: "14",
        24: "15",
        25: "26",
        26: "26"
      }[major];
      if (!darwinToMarketing) return null;
      const rest = clientHintsVersion.split(".").slice(1).join(".");
      return rest ? `${darwinToMarketing}.${rest}` : darwinToMarketing;
    }
    if (major >= 11) {
      return clientHintsVersion;
    }
    return null;
  }
  /**
   * Best-effort Windows version name from client hints
   * (Chromium reports 15.0.0 for Windows 11, 10.0.0/1.0.0 for Windows 10).
   *
   * @param {string} clientHintsVersion
   * @returns {string|null}
   *
   * @memberOf OS
   */
  _getWindowsVersionNameFromHints(clientHintsVersion) {
    if (clientHintsVersion.startsWith("15.")) return "11";
    if (clientHintsVersion.startsWith("10.") || clientHintsVersion.startsWith("1.")) return "10";
    return null;
  }
  /**
   * Safari has no User-Agent Client Hints, and its UA keeps the legacy-compat
   * string ("Mac OS X 10_15_7"). Since Safari 26 (bundled with macOS 26,
   * September 2025) Apple aligned Safari and macOS version numbers 1:1, so the
   * "Version/" token reveals the real macOS version (e.g. Version/26.6.2 →
   * macOS 26.6.2 'Tahoe'). Older Safari majors were back-ported across several
   * macOS releases, so only the post-renumbering era is unambiguous.
   *
   * @param {string} ua
   * @returns {string|null}
   *
   * @memberOf OS
   */
  _getSafariMacOSVersion(ua) {
    if (!/safari/i.test(ua)) return null;
    const m = /Version\/(\d+(\.\d+){0,2})/i.exec(ua);
    if (!m) return null;
    const major = parseInt(m[1], 10);
    if (major < 26) return null;
    return m[1].replace(/_/gi, ".");
  }
  /**
   * Resolves the real OS version through User-Agent Client Hints and refreshes
   * the values (used by Detector.upgrade()). Falls back to the UA-based result
   * when hints are unavailable or denied.
   *
   * @returns {Promise<object>}
   *
   * @memberOf OS
   */
  upgrade() {
    return __async(this, null, function* () {
      const uaData = this._navigator.userAgentData;
      if (!uaData || typeof uaData.getHighEntropyValues !== "function") {
        return this.toValues();
      }
      try {
        const hints = yield uaData.getHighEntropyValues(["platformVersion"]);
        const pv = this._getClientHintsPlatformVersion(hints);
        if (!pv) {
          return this.toValues();
        }
        const values = this.toValues();
        if (this.macOS) {
          const macVersion = this._mapMacOSVersion(pv);
          if (macVersion && macVersion !== values.version) {
            const version = macVersion.replace(/_/gi, ".");
            return __spreadProps(__spreadValues({}, values), {
              version,
              versionName: this._getMacOSVersionName(version)
            });
          }
        }
        if (this.Windows) {
          const windowsName = this._getWindowsVersionNameFromHints(pv);
          if (windowsName && windowsName !== values.versionName) {
            return __spreadProps(__spreadValues({}, values), { versionName: windowsName });
          }
        }
      } catch (e) {
      }
      return this.toValues();
    });
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get macOS() {
    const ch = this._getClientHintsPlatformVersion(this._navigator.userAgentData);
    const chMac = ch ? this._mapMacOSVersion(ch) : this._getSafariMacOSVersion(this._ua);
    return this._checkAssertsResult(Asserts3.all([
      !this.iOS,
      !/mobile\//i.test(this._ua),
      /mac/i.test(this._ua),
      !/like mac/i.test(this._ua)
    ]) && Asserts3.one([
      /(macintosh|mac(?=_powerpc)\s)/i.test(this._ua),
      /(mac\sos\sx)\s?([\w\s\.]*)/i.test(this._ua)
    ]) && Asserts3.one([
      /Mac[ +]OS[ +]X(?:[ /](?:Version )?(\d+(?:[_\.]\d+)+))?/i.test(this._ua),
      /Mac (\d+(?:[_\.]\d+)+)/i.test(this._ua),
      /mac os x (\d+(\.?_?\d+)+)/i.test(this._ua)
    ]), chMac, this._getMacOSVersionName);
  }
  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getUnixDistroName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      "FreeBSD": /\s(freebsd)\s?([\w\.]*)/i.test(version),
      "NetBSD": /\s(netbsd|dragonfly)\s?([\w\.]*)/i.test(version),
      "OpenBSD": /\s(openbsd|dragonfly)\s?([\w\.]*)/i.test(version),
      "PC-BSD": /\s(pc-bsd|dragonfly)\s?([\w\.]*)/i.test(version),
      "DragonFly": /\s(dragonfly)\s?([\w\.]*)/i.test(version)
    }, version);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Unix() {
    return this._checkAssertsResult(Asserts3.all([
      /X11/i.test(this._ua)
    ]) && Asserts3.one([
      /(unix)\s?([\w\.]*)/i.test(this._ua)
    ]), null, this._getUnixDistroName);
  }
  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getLinuxDistroName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      "Mint": /(mint)[\/\s\(]?(\w*)/i.test(version),
      "Mageia": /(mageia)[;\s]/i.test(version),
      "VectorLinux": /(vectorlinux)[;\s]/i.test(version),
      "Joli": /(joli)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Ubuntu": /([kxln]?ubuntu)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Debian": /(debian)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "SuSE": /(suse|opensuse)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Gentoo": /(gentoo)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Arch": /((?=\s)arch)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Slackware": /(slackware)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Fedora": /(fedora)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Mandriva": /(mandriva)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "CentOS": /(centos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "PCLinuxOS": /(pclinuxos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "RedHat": /(redhat)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Zenwalk": /(zenwalk)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      "Linpus": /(linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version)
    }, version);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Linux() {
    return this._checkAssertsResult(Asserts3.all([
      !this.Android,
      /Linux/i.test(this._ua)
    ]), null, this._getLinuxDistroName);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get ChromiumOS() {
    return this._checkAssertsResult(Asserts3.one([
      /(cros)\s[\w]+\s([\w\.]+\w)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Solaris() {
    return this._checkAssertsResult(Asserts3.one([
      /(sunos)\s?([\w\.\d]*)/i.test(this._ua),
      /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Plan9() {
    return this._checkAssertsResult(Asserts3.one([
      /(plan\s9)/i.test(this._ua)
    ]));
  }
  get Minix() {
    return this._checkAssertsResult(Asserts3.one([
      /(minix)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get BeOS() {
    return this._checkAssertsResult(Asserts3.one([
      /(beos)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get OS2() {
    return this._checkAssertsResult(Asserts3.one([
      /(os\/2)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get AmigaOS() {
    return this._checkAssertsResult(Asserts3.one([
      /(amigaos)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get MorphOS() {
    return this._checkAssertsResult(Asserts3.one([
      /(morphos)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get RISCOS() {
    return this._checkAssertsResult(Asserts3.one([
      /(risc\sos)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get OpenVMS() {
    return this._checkAssertsResult(Asserts3.one([
      /(openvms)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Fuchsia() {
    return this._checkAssertsResult(Asserts3.one([
      /(fuchsia)/i.test(this._ua)
    ]));
  }
  //! Mobile OSs
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get WindowsPhone() {
    return this._checkAssertsResult(Asserts3.one([
      /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this._ua),
      /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this._ua),
      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get iOS() {
    return this._checkAssertsResult(Asserts3.all([
      !this._root.MSStream,
      /iP(?:ad|hone|od)/.test(this._ua)
    ]) && Asserts3.one([
      /os\s((\d+([_\s]\d+)*)|(\d+(?:[_\.]\d+)*)) like mac os x/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */
  _getAndroidVersionName(version = RegExp.$1 || null) {
    return this._getVersionNames({
      "1.0": /^1\.[01234]$/i.test(version),
      "Cupcake": /^1\.5(\.+\d)?$/i.test(version),
      "Donut": /^1\.6(\.+\d)?$/i.test(version),
      "Eclair": /^2\.[01](\.+\d)?$/i.test(version),
      "Froyo": /^2\.2(\.+\d)?$/i.test(version),
      "Gingerbread": /^2\.3(\.+\d)?$/i.test(version),
      "Honeycomb": /^3(\.+\d)(\.+\d)?$/i.test(version),
      "Ice Cream Sandwich": /^4\.[01](\.+\d)?$/i.test(version),
      "Jelly Bean": /^4\.[23](\.+\d)?$/i.test(version),
      "KitKat": /^4\.[456789](\.+\d)?$/i.test(version),
      "Lollipop": /^5(\.\d)(\.+\d)?$/i.test(version),
      "Marshmallow": /^6(\.\d)(\.+\d)?$/i.test(version),
      "Nougat": /^7(\.\d)(\.+\d)?$/i.test(version),
      "Oreo": /^8(\.\d)(\.+\d)?$/i.test(version),
      "Pie": /^9(\.\d)(\.+\d)?$/i.test(version)
    }, version);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Android() {
    return this._checkAssertsResult(Asserts3.one([
      /android[\s/-](\d+(\.\d+)*)/i.test(this._ua)
    ]), null, this._getAndroidVersionName);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Bada() {
    return this._checkAssertsResult(Asserts3.one([
      /(bada)[\/\s-]?([\w\.]*)/i.test(this._ua),
      /bada\/(\d+(\.\d+)*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Blackberry() {
    return this._checkAssertsResult(Asserts3.one([
      /blackberry|\bbb\d+/i.test(this._ua),
      /rim\stablet/i.test(this._ua)
    ]) && Asserts3.one([
      /rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this._ua),
      /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this._ua),
      /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(blackberry)\w*\/?([\w\.]*)/i.test(this._ua),
      /\bbb(\d+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Contiki() {
    return this._checkAssertsResult(Asserts3.one([
      /(contiki)[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get MeeGo() {
    return this._checkAssertsResult(Asserts3.one([
      /(meego)[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get RIM() {
    return this._checkAssertsResult(Asserts3.one([
      /(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get QNX() {
    return this._checkAssertsResult(Asserts3.one([
      /(qnx)[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Palm() {
    return this._checkAssertsResult(Asserts3.one([
      /(palm\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Symbian() {
    return this._checkAssertsResult(Asserts3.one([
      /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this._ua)
    ]));
  }
  //! TV OSs
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get WebOS() {
    return this._checkAssertsResult(Asserts3.one([
      /(?:web0s|webos)[\/\s-]?([\w\.]*)/i.test(this._ua),
      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this._ua),
      /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua)
    ]));
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Tizen() {
    return this._checkAssertsResult(Asserts3.one([
      /(tizen)[/\s](\d+(\.\d+)*)/i.test(this._ua)
    ]));
  }
  //! Other OSs
  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get Raspbian() {
    return this._checkAssertsResult(Asserts3.one([
      /raspbian[/\s](\d+(\.\d+)*)/i.test(this._ua)
    ]));
  }
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
  _checkAssertsResult(assertsResult = false, version = null, versionNameFn = null) {
    if (assertsResult) {
      this.setVersion(version);
      this.setVersionName(versionNameFn);
      return true;
    }
    return false;
  }
  /**
   *
   *
   * @param {any} [version=null]
   *
   * @memberOf OS
   */
  setVersion(version = null) {
    this.version = (version || RegExp.$1 || "n/a").replace(/_/gi, ".");
  }
  /**
   *
   *
   * @param {any} [versionNameFn=null]
   *
   * @memberOf OS
   */
  setVersionName(versionNameFn = null) {
    if (versionNameFn instanceof Function) {
      this.versionName = versionNameFn.call(this, this.version);
    }
  }
};

// packages/software/lib/software.js
if (typeof process !== "undefined" && process.env && true) {
  console.log("DetectorJS Software Module v" + (true ? "2.0.11" : "0.0.0") + " initialized");
}
export {
  Browser,
  Engine,
  OS
};
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//# sourceMappingURL=software.mjs.map
