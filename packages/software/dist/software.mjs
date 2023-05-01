import {Asserts as $7wVXk$Asserts, CssFlagsClass as $7wVXk$CssFlagsClass} from "@detector-js/core";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2627ae31ee4eaf7f$exports = {};

$parcel$export($2627ae31ee4eaf7f$exports, "Browser", () => $2627ae31ee4eaf7f$export$5fefc2586e00a689);

class $2627ae31ee4eaf7f$export$5fefc2586e00a689 extends (0, $7wVXk$CssFlagsClass) {
    #reStrVerNum;
    #reStrVer;
    #reVer;
    /**
   * Creates an instance of Browser.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='browser']
   *
   * @memberOf Browser
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "browser"){
        super(ua, flags, cssFlagsPrefix);
        this.#createTestElements();
        this.setVersion();
    }
    /**
   *
   *
   *
   * @memberOf Browser
   */ #createTestElements() {
        this.#reStrVerNum = "(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?";
        this.#reStrVer = "(?:version)" + this.#reStrVerNum;
        this.#reVer = new RegExp(this.#reStrVer, "i");
        this.ua.match(this.#reVer);
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
    #reTest(reStr = this.#reStrVer) {
        return new RegExp(reStr, "i").test(this.ua);
    }
    //#region Un-Common/Rare/Mythic Browsers
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Amaya() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:amaya)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Arora() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:arora)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Avant() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:avant(?:sbrowser))" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Baidu() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Basilisk() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:basilisk)" + this.#reStrVer)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get BlackBerry() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:blackberry|bb.*;.*\\)\\s)" + this.#reStrVer)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Blazer() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:blazer)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Bolt() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:bolt)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Brave() {
        return this.#checkAssertsResult(// @ts-ignore
        (0, $7wVXk$Asserts).one([
            !!window.navigator.brave || !!window.navigator.Brave,
            this.#reTest("(?:brave)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Camino() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:camino)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Chimera() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:chimera)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get ComodoDragon() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:comodo(?:\\_|\\s)dragon)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Conkeror() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:conkeror)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Dillo() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:dillo)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Dolphin() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:dolfin)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Dorado() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:dorado.+ser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Doris() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:doris)" + this.#reStrVerNum)
        ]));
    }
    #getElectronVersion() {
        return this.process?.versions?.electron ?? "n/a";
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Electron() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            // @ts-ignore
            ()=>this.process.type === "renderer",
            ()=>!!this.process.versions.electron,
            ()=>!!this.navigator && this.#reTest("electron") // Detect the user agent when the `nodeIntegration` option is set to true
        ], true), false, this.#getElectronVersion());
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Epiphany() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:epiphany)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Falkon() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:falkon)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Fennec() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:fennec)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Firebird() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:firebird)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Flock() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:flock)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get GoBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:gobrowser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get GoogleBot() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:googlebot)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get iCab() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:icab)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get IceApe() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:iceape)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get IceBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:ices?browser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get IceCat() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:icecat)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get IceDragon() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:icedragon)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Iridium() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:iridium)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Iron() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:iron)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Jasmine() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:jasmine)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Konqueror() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:konqueror)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get KMeleon() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:k-meleon)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Links() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:links)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Linx() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:lynx)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Lunascape() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:lunascape)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Maemo() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:maemosbrowser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get MaxthonMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:mxios)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Maxthon() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.MaxthonMobile,
            this.#reTest("(?:maxthon|mxnitro)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Midori() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:midori)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Minimo() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:minimo)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get MIUIBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:xiaomi\\/miuibrowser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Mosaic() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:mosaic)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get MZBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:MZBrowser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Netfront() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:netfront)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Netscape() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:navigator|netscape)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get NetSurf() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:netsurf)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get NokiaBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:nokias?browser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get OmniWeb() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:omniweb)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get OviBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:ovibrowser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Palemoon() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:palemoon)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Phoenix() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:phoenix)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get PhantomJS() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:phantomjs)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Polaris() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:polaris)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Puffin() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:puffin)" + this.#reStrVerNum)
        ]), true);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get QQBrowserMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:mqq(?:browser)?)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get QQBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.QQBrowserMobile,
            this.#reTest("(?:qq(?:browser)?(?:lite)?)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Quark() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:quark)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get QupZilla() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:qupzilla)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Reconq() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:rekonq)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get RockMelt() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:rockmelt)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Sailfish() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:sailfish(?:s?browser))" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get SamsungBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:samsungbrowser)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get SeaMonkey() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:seamonkey)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Silk() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:silk)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Skyfire() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:skyfire)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Sleipnir() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:sleipnir)" + this.#reStrVerNum)
        ]), true);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Slim() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:slim(?:browser)?)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get SlimerJS() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:slimerjs)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Swing() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:swing)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get TizenBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:tizen(?:browser)?)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get UCBrowser() {
        // a.k.a. UCBrowserMobile || UCBrowserMini
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:uc(?:mini|browser))" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Vivaldi() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:vivaldi)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get w3m() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:w3m)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Waterfox() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:waterfox)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get WebOSBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:w(?:eb)?osbrowser)" + this.#reStrVerNum)
        ]), true);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get WeChat() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:micromessenger)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Whale() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            this.#reTest("(?:whale)" + this.#reStrVerNum)
        ]), true);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Yandex() {
        return (0, $7wVXk$Asserts).one([
            this.#reTest("(?:ya(?:browser|ndex))" + this.#reStrVerNum)
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
   */ get AndroidBrowser() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.#reTest("like android"),
            this.#reTest("(?:android.*)" + this.#reStrVer)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get ChromeMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.#reTest("like chrome"),
            this.#reTest("((?:android.+)crmo|crios)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Chrome() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.Brave,
            !this.ChromeMobile,
            !this.AndroidBrowser,
            !this.#reTest("like chrome"),
            this.#reTest("(?:(?:headless)?chrome)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Chromium() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:chromium)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get EdgeMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:edg(?:ios|a))" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Edge() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.IE,
            this.#reTest("(?:^(?:(?!mobile|android|ios).)*)(?:edge)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get FirefoxFocus() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:focus)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get FirefoxMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.FirefoxFocus,
            this.#reTest("(?:fxios)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Firefox() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:firefox|iceweasel)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get IEMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:iemobile)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get IE() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.IEMobile,
            /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get OperaMini() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:operasmini)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get OperaTouch() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:opt)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get OperaCoast() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).one([
            this.#reTest("(?:coast)" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get OperaMobile() {
        // a.k.a. Opera Mobile || Opera Coast || Opera Mini || Opera Touch || Opera iOS
        return this.#checkAssertsResult(// @ts-ignore
        (0, $7wVXk$Asserts).one([
            !!this.root.opera,
            !!this.root.opr
        ]) && (0, $7wVXk$Asserts).one([
            this.OperaMini,
            this.OperaCoast,
            this.OperaTouch,
            this.#reTest("(?:op(?:r|ios))" + this.#reStrVerNum)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Opera() {
        return this.#checkAssertsResult(// @ts-ignore
        (0, $7wVXk$Asserts).one([
            !!this.root.opera,
            !!this.root.opr
        ]) && (0, $7wVXk$Asserts).all([
            !this.OperaMobile
        ]) && (0, $7wVXk$Asserts).one([
            this.#reTest("(?:op(?:era|r)|mms)" + this.#reStrVerNum)
        ]), true);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get SafariMobile() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            /iphone|ipad|ipod/i.test(this.ua),
            !this.AndroidBrowser,
            !this.Chrome,
            !this.PhantomJS
        ]) && (0, $7wVXk$Asserts).one([
            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this.ua),
            /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this.ua),
            /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this.ua),
            /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */ get Safari() {
        return this.#checkAssertsResult((0, $7wVXk$Asserts).all([
            /safari|applewebkit/i.test(this.ua),
            !this.AndroidBrowser,
            !this.SafariMobile,
            !this.Chrome,
            !this.PhantomJS
        ]) && (0, $7wVXk$Asserts).one([
            /(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this.ua)
        ]));
    }
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
   */ #checkAssertsResult(assertsResult = false, inverted = false, version = null) {
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
   */ setVersion(version = null, inverted = false) {
        if (inverted) version = version || this.version || RegExp.$1 || "n/a";
        else version = version || RegExp.$1 || this.version || "n/a";
        this.version = version.replace(/_/gi, ".");
    }
}


var $213d9951548fc04c$exports = {};

$parcel$export($213d9951548fc04c$exports, "Engine", () => $213d9951548fc04c$export$2c3b404bf3a77a1f);

class $213d9951548fc04c$export$2c3b404bf3a77a1f extends (0, $7wVXk$CssFlagsClass) {
    /**
   * Creates an instance of Engine.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='engine']
   *
   * @memberOf Engine
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "engine"){
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
   */ get Amaya() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(amaya)\/([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Goanna() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(goanna)\/([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get iCab() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get KHTML() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(khtml)[\/\s]\(?([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Links() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(links)[\/\s]\(?([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Linx() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(lynx)\/([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get NetFront() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(netfront)\/([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get NetSurf() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(netsurf)\/([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Presto() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(presto)\/([\w\.]+)/i.test(this.ua),
            /presto\/(\d+(\.?_?\d+)+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Tasman() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /(tasman)[\/\s]\(?([\w\.]+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get w3m() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /w3m[\/\s]([\w\.]+)/i.test(this.ua)
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
   */ get Trident() {
        return this._checkAssertsResult(// @ts-ignore
        (0, $7wVXk$Asserts).all([
            !!this.document.documentMode
        ]) && (0, $7wVXk$Asserts).one([
            /trident[\/\s](\d+(\.?_?\d+)+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Blink() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            ()=>"Intl" in this.root && "v8BreakIterator" in this.root.Intl,
            "CSS" in this.root,
            /webkit\/537\.36.+chrome\/(?!27)/i.test(this.ua)
        ], true));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get EdgeHTML() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            "StyleMedia" in this.root,
            !this.Trident
        ]) && (0, $7wVXk$Asserts).one([
            /edge\/(\d+(\.?_?\d+)+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get Gecko() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            "InstallTrigger" in this.root,
            !/like gecko/i.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /rv\:([\w\.]{1,9}).+(gecko)/i.test(this.ua),
            /gecko\/(\d+(\.?_?\d+)+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf Engine
   */ get WebKit() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            "webkitConvertPointFromNodeToPage" in this.root
        ]) && (0, $7wVXk$Asserts).one([
            /(?:(?:apple)?webkit)\/(\d+(\.?_?\d+)+)/i.test(this.ua)
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
   */ _checkAssertsResult(assertsResult = false, version = null) {
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
   */ /**
   *
   *
   * @param {any} [version=null]
   *
   * @memberOf Engine
   */ setVersion(version = null) {
        this.version = version || RegExp.$1 || "n/a";
    }
}


var $562904da632f015c$exports = {};

$parcel$export($562904da632f015c$exports, "OS", () => $562904da632f015c$export$decc4a6e69bbf763);
/* eslint-disable quote-props */ /* eslint-disable no-else-return */ /* eslint-disable radix */ /* eslint-disable indent */ 
class $562904da632f015c$export$decc4a6e69bbf763 extends (0, $7wVXk$CssFlagsClass) {
    /**
   * Creates an instance of OS.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='os']
   *
   * @memberOf OS
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "os"){
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
   */ #getVersionNames(versionNames = {}, version = null) {
        if (!!version) {
            version = version.replace(/_/gi, ".");
            return Object.getOwnPropertyNames(versionNames).filter((versionName)=>{
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
   */ #getWindowsVersionName(version1 = RegExp.$1 || "") {
        return this.#getVersionNames({
            CE: /CE/i.test(version1),
            95: /95/i.test(version1),
            98: /98/i.test(version1),
            ME: /ME/i.test(version1),
            2000: /NT(\s)?5\.0/i.test(version1),
            XP: /NT(\s)?5\.1/i.test(version1) || /XP/i.test(version1),
            2003: /NT(\s)?5\.2/i.test(version1),
            Vista: /NT(\s)?6\.0/i.test(version1),
            7: /NT(\s)?6\.1/i.test(version1),
            8: /NT(\s)?6\.2/i.test(version1),
            8.1: /NT(\s)?6\.3/i.test(version1),
            10: /NT(\s)?6\.4/i.test(version1) || /NT(\s)?10\.0/i.test(version1),
            RT: /ARM/.test(version1)
        }, version1);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Windows() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /Win/i.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /Windows ((NT|XP)( \d\d?.\d)?)/i.test(this.ua)
        ]), null, this.#getWindowsVersionName);
    }
    /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */ #getMacOSVersionName(version2 = RegExp.$1 || "") {
        return this.#getVersionNames({
            // source https://en.wikipedia.org/wiki/Mac_OS_8
            Tempo: /^8\.0(\.+\d)?$/i.test(version2),
            "Bride of Buster": /^8\.1(\.+\d)?$/i.test(version2),
            Allegro: /^8\.5(\.+\d)?$/i.test(version2),
            Veronica: /^8\.6(\.+\d)?$/i.test(version2),
            // source https://en.wikipedia.org/wiki/Mac_OS_9
            Sonata: /^9\.0(\.+[012356789])?$/i.test(version2),
            Minuet: /^9\.0\.4$/i.test(version2),
            Fortissimo: /^9\.1(\.+\d)?$/i.test(version2),
            Moonlight: /^9\.2(\.+[023456789])?$/i.test(version2),
            Limelight: /^9\.2\.1$/i.test(version2),
            // source https://en.wikipedia.org/wiki/List_of_Apple_operating_systems
            Cheetah: /^10\.0(\.+\d)?$/i.test(version2),
            Puma: /^10\.1(\.+\d)?$/i.test(version2),
            Jaguar: /^10\.2(\.+\d)?$/i.test(version2),
            Panther: /^10\.3(\.+\d)?$/i.test(version2),
            Tiger: /^10\.4(\.+\d)?$/i.test(version2),
            Leopard: /^10\.5(\.+\d)?$/i.test(version2),
            "Snow Leopard": /^10\.6(\.+\d)?$/i.test(version2),
            Lion: /^10\.7(\.+\d)?$/i.test(version2),
            "Mountain Lion": /^10\.8(\.+\d)?$/i.test(version2),
            Mavericks: /^10\.9(\.+\d)?$/i.test(version2),
            Yosemite: /^10\.10(\.+\d)?$/i.test(version2),
            "El Capitan": /^10\.11(\.+\d)?$/i.test(version2),
            Sierra: /^10\.12(\.+\d)?$/i.test(version2),
            "High Sierra": /^10\.13(\.+\d)?$/i.test(version2),
            Mojave: /^10\.14(\.+\d)?$/i.test(version2),
            Catalina: /^10\.15(\.+\d)?$/i.test(version2),
            "Big Sur": /^11(\.+\d)(\.+\d)?$/i.test(version2),
            Monterey: /^12(\.+\d)(\.+\d)?$/i.test(version2),
            Ventura: /^13(\.+\d)(\.+\d)?$/i.test(version2)
        }, version2);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get macOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.iOS,
            !/mobile\//i.test(this.ua),
            /mac/i.test(this.ua),
            !/like mac/i.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /(macintosh|mac(?=_powerpc)\s)/i.test(this.ua),
            /(mac\sos\sx)\s?([\w\s\.]*)/i.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /Mac[ +]OS[ +]X(?:[ /](?:Version )?(\d+(?:[_\.]\d+)+))?/i.test(this.ua),
            /Mac (\d+(?:[_\.]\d+)+)/i.test(this.ua),
            /mac os x (\d+(\.?_?\d+)+)/i.test(this.ua)
        ]), null, this.#getMacOSVersionName);
    }
    /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */ _getUnixDistroName(version = RegExp.$1 || "") {
        return this.#getVersionNames({
            FreeBSD: /\s(freebsd)\s?([\w\.]*)/i.test(version),
            NetBSD: /\s(netbsd|dragonfly)\s?([\w\.]*)/i.test(version),
            OpenBSD: /\s(openbsd|dragonfly)\s?([\w\.]*)/i.test(version),
            "PC-BSD": /\s(pc-bsd|dragonfly)\s?([\w\.]*)/i.test(version),
            DragonFly: /\s(dragonfly)\s?([\w\.]*)/i.test(version)
        }, version);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Unix() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            /X11/i.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /(unix)\s?([\w\.]*)/i.test(this.ua)
        ]), null, this._getUnixDistroName);
    }
    /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */ _getLinuxDistroName(version = RegExp.$1 || "") {
        return this.#getVersionNames({
            Mint: /(mint)[\/\s\(]?(\w*)/i.test(version),
            Mageia: /(mageia)[;\s]/i.test(version),
            VectorLinux: /(vectorlinux)[;\s]/i.test(version),
            Joli: /(joli)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Ubuntu: /([kxln]?ubuntu)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Debian: /(debian)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            SuSE: /(suse|opensuse)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Gentoo: /(gentoo)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Arch: /((?=\s)arch)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Slackware: /(slackware)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Fedora: /(fedora)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Mandriva: /(mandriva)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            CentOS: /(centos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            PCLinuxOS: /(pclinuxos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            RedHat: /(redhat)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Zenwalk: /(zenwalk)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
            Linpus: /(linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version)
        }, version);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Linux() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).all([
            !this.Android,
            /Linux/i.test(this.ua)
        ]), null, this._getLinuxDistroName);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get ChromiumOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(cros)\s[\w]+\s([\w\.]+\w)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Solaris() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(sunos)\s?([\w\.\d]*)/i.test(this.ua),
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Plan9() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(plan\s9)/i.test(this.ua)
        ]));
    }
    get Minix() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(minix)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get BeOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(beos)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get OS2() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(os\/2)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get AmigaOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(amigaos)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get MorphOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(morphos)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get RISCOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(risc\sos)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get OpenVMS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(openvms)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Fuchsia() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(fuchsia)/i.test(this.ua)
        ]));
    }
    //! Mobile OSs
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get WindowsPhone() {
        // a.k.a. Windows Mobile
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this.ua),
            /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this.ua),
            /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this.ua)
        ]));
    // // Detect Windows Phone 7 desktop mode.
    // if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
    //   name += ' Mobile';
    //   os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
    //   description.unshift('desktop mode');
    // }
    // // Detect Windows Phone 8.x desktop mode.
    // if (/\bWPDesktop\b/i.test(ua)) {
    //   name = 'IE Mobile';
    //   os = 'Windows Phone 8.x';
    //   description.unshift('desktop mode');
    //   version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    // }
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get iOS() {
        return this._checkAssertsResult(// @ts-ignore
        (0, $7wVXk$Asserts).all([
            !window.MSStream,
            /iP(?:ad|hone|od)/.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /os\s((\d+([_\s]\d+)*)|(\d+(?:[_\.]\d+)*)) like mac os x/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @param {any} [version=RegExp.$1 || null]
   * @returns string
   *
   * @memberOf OS
   */ _getAndroidVersionName(version = RegExp.$1 || "") {
        return this.#getVersionNames({
            "1.0": /^1\.[01234]$/i.test(version),
            Cupcake: /^1\.5(\.+\d)?$/i.test(version),
            Donut: /^1\.6(\.+\d)?$/i.test(version),
            Eclair: /^2\.[01](\.+\d)?$/i.test(version),
            Froyo: /^2\.2(\.+\d)?$/i.test(version),
            Gingerbread: /^2\.3(\.+\d)?$/i.test(version),
            Honeycomb: /^3(\.+\d)(\.+\d)?$/i.test(version),
            "Ice Cream Sandwich": /^4\.[01](\.+\d)?$/i.test(version),
            "Jelly Bean": /^4\.[23](\.+\d)?$/i.test(version),
            KitKat: /^4\.[456789](\.+\d)?$/i.test(version),
            Lollipop: /^5(\.\d)(\.+\d)?$/i.test(version),
            Marshmallow: /^6(\.\d)(\.+\d)?$/i.test(version),
            Nougat: /^7(\.\d)(\.+\d)?$/i.test(version),
            Oreo: /^8(\.\d)(\.+\d)?$/i.test(version),
            Pie: /^9(\.\d)(\.+\d)?$/i.test(version)
        }, version);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Android() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /android[\s/-](\d+(\.\d+)*)/i.test(this.ua)
        ]), null, this._getAndroidVersionName);
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Bada() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(bada)[\/\s-]?([\w\.]*)/i.test(this.ua),
            /bada\/(\d+(\.\d+)*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Blackberry() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /blackberry|\bbb\d+/i.test(this.ua),
            /rim\stablet/i.test(this.ua)
        ]) && (0, $7wVXk$Asserts).one([
            /rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this.ua),
            /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this.ua),
            /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this.ua),
            /(blackberry)\w*\/?([\w\.]*)/i.test(this.ua),
            /\bbb(\d+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Contiki() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(contiki)[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get MeeGo() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(meego)[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get RIM() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get QNX() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(qnx)[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Palm() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(palm\sos)[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Symbian() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this.ua)
        ]));
    }
    //! TV OSs
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get WebOS() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(webos)[\/\s-]?([\w\.]*)/i.test(this.ua),
            /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this.ua),
            /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this.ua)
        ]));
    }
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Tizen() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /(tizen)[/\s](\d+(\.\d+)*)/i.test(this.ua)
        ]));
    }
    //! Other OSs
    /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */ get Raspbian() {
        return this._checkAssertsResult((0, $7wVXk$Asserts).one([
            /raspbian[/\s](\d+(\.\d+)*)/i.test(this.ua)
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
   */ _checkAssertsResult(assertsResult = false, version = null, versionNameFn = null) {
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
   */ setVersion(version = null) {
        this.version = (version || RegExp.$1 || "n/a").replace(/_/gi, ".");
    }
    /**
   *
   *
   * @param {any} [versionNameFn=null]
   *
   * @memberOf OS
   */ setVersionName(versionNameFn = null) {
        if (versionNameFn instanceof Function) this.versionName = versionNameFn.call(this, this.version);
    }
}


"use strict";


export {$2627ae31ee4eaf7f$export$5fefc2586e00a689 as Browser, $213d9951548fc04c$export$2c3b404bf3a77a1f as Engine, $562904da632f015c$export$decc4a6e69bbf763 as OS};
//# sourceMappingURL=software.mjs.map
