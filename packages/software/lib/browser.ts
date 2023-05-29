import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class Browser
 * @extends {CssFlagsClass}
 */
export class Browser extends CssFlagsClass {
  #reStrVerNum: string;
  #reStrVer: string;
  #reVer: RegExp;
  version: any;
  /**
   * Creates an instance of Browser.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='browser']
   *
   * @memberOf Browser
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'browser') {
    super(ua, flags, cssFlagsPrefix);

    this.#createTestElements();

    this.setVersion();
  }

  /**
   *
   *
   *
   * @memberOf Browser
   */
  #createTestElements() {
    this.#reStrVerNum = '(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?';
    this.#reStrVer = '(?:version)' + this.#reStrVerNum;
    this.#reVer = new RegExp(this.#reStrVer, 'i');

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
    return new RegExp(reStr, 'i').test(this.ua);
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
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:amaya)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Arora() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:arora)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Avant() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:avant(?:sbrowser))' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Baidu() {
    return this.#checkAssertsResult(
      Asserts.one([this.#reTest('(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)' + this.#reStrVerNum)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Basilisk() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:basilisk)' + this.#reStrVer)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get BlackBerry() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:blackberry|bb.*;.*\\)\\s)' + this.#reStrVer)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Blazer() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:blazer)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Bolt() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:bolt)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Brave() {
    return this.#checkAssertsResult(
      // @ts-ignore
      Asserts.one([!!window.navigator.brave || !!window.navigator.Brave, this.#reTest('(?:brave)' + this.#reStrVerNum)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Camino() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:camino)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chimera() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:chimera)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get ComodoDragon() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:comodo(?:\\_|\\s)dragon)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Conkeror() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:conkeror)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dillo() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:dillo)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dolphin() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:dolfin)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Dorado() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:dorado.+ser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Doris() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:doris)' + this.#reStrVerNum)]));
  }

  #getElectronVersion() {
    return this.process?.versions?.electron ?? 'n/a';
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Electron() {
    return this.#checkAssertsResult(
      Asserts.one(
        [
          // @ts-ignore
          () => this.process?.type === 'renderer', // Renderer process
          () => !!this.process?.versions?.electron, // Main process
          () => !!this.navigator && this.#reTest('electron') // Detect the user agent when the `nodeIntegration` option is set to true
        ],
        true
      ),
      false,
      this.#getElectronVersion()
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Epiphany() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:epiphany)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Falkon() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:falkon)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Fennec() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:fennec)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Firebird() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:firebird)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Flock() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:flock)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get GoBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:gobrowser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get GoogleBot() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:googlebot)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get iCab() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:icab)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceApe() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:iceape)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:ices?browser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceCat() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:icecat)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IceDragon() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:icedragon)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iridium() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:iridium)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Iron() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:iron)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Jasmine() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:jasmine)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Konqueror() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:konqueror)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get KMeleon() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:k-meleon)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Links() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:links)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Linx() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:lynx)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Lunascape() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:lunascape)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Maemo() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:maemosbrowser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MaxthonMobile() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:mxios)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Maxthon() {
    return this.#checkAssertsResult(
      Asserts.all([!this.MaxthonMobile, this.#reTest('(?:maxthon|mxnitro)' + this.#reStrVerNum)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Midori() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:midori)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Minimo() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:minimo)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MIUIBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:xiaomi\\/miuibrowser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Mosaic() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:mosaic)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get MZBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:MZBrowser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Netfront() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:netfront)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Netscape() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:navigator|netscape)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get NetSurf() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:netsurf)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get NokiaBrowser() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:nokias?browser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OmniWeb() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:omniweb)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OviBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:ovibrowser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Palemoon() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:palemoon)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Phoenix() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:phoenix)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get PhantomJS() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:phantomjs)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Polaris() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:polaris)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Puffin() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:puffin)' + this.#reStrVerNum)]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowserMobile() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:mqq(?:browser)?)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QQBrowser() {
    return this.#checkAssertsResult(
      Asserts.all([!this.QQBrowserMobile, this.#reTest('(?:qq(?:browser)?(?:lite)?)' + this.#reStrVerNum)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Quark() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:quark)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get QupZilla() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:qupzilla)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Reconq() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:rekonq)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get RockMelt() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:rockmelt)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Sailfish() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:sailfish(?:s?browser))' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SamsungBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:samsungbrowser)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SeaMonkey() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:seamonkey)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Silk() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:silk)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Skyfire() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:skyfire)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Sleipnir() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:sleipnir)' + this.#reStrVerNum)]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Slim() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:slim(?:browser)?)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SlimerJS() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:slimerjs)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Swing() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:swing)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get TizenBrowser() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:tizen(?:browser)?)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get UCBrowser() {
    // a.k.a. UCBrowserMobile || UCBrowserMini
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:uc(?:mini|browser))' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Vivaldi() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:vivaldi)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get w3m() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:w3m)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Waterfox() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:waterfox)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get WebOSBrowser() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:w(?:eb)?osbrowser)' + this.#reStrVerNum)]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get WeChat() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:micromessenger)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Whale() {
    return this.#checkAssertsResult(Asserts.all([this.#reTest('(?:whale)' + this.#reStrVerNum)]), true);
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Yandex() {
    return Asserts.one([this.#reTest('(?:ya(?:browser|ndex))' + this.#reStrVerNum)]);
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
    return this.#checkAssertsResult(
      Asserts.all([!this.#reTest('like android'), this.#reTest('(?:android.*)' + this.#reStrVer)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get ChromeMobile() {
    return this.#checkAssertsResult(
      Asserts.all([!this.#reTest('like chrome'), this.#reTest('((?:android.+)crmo|crios)' + this.#reStrVerNum)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chrome() {
    return this.#checkAssertsResult(
      Asserts.all([
        !this.Brave,
        !this.ChromeMobile,
        !this.AndroidBrowser,
        !this.#reTest('like chrome'),
        this.#reTest('(?:(?:headless)?chrome)' + this.#reStrVerNum)
      ])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Chromium() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:chromium)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get EdgeMobile() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:edg(?:ios|a))' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Edge() {
    return this.#checkAssertsResult(
      Asserts.all([!this.IE, this.#reTest('(?:^(?:(?!mobile|android|ios).)*)(?:edge)' + this.#reStrVerNum)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get FirefoxFocus() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:focus)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get FirefoxMobile() {
    return this.#checkAssertsResult(Asserts.one([this.FirefoxFocus, this.#reTest('(?:fxios)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Firefox() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:firefox|iceweasel)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IEMobile() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:iemobile)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get IE() {
    return this.#checkAssertsResult(
      Asserts.all([!this.IEMobile, /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this.ua)])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMini() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:operasmini)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaTouch() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:opt)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaCoast() {
    return this.#checkAssertsResult(Asserts.one([this.#reTest('(?:coast)' + this.#reStrVerNum)]));
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get OperaMobile() {
    // a.k.a. Opera Mobile || Opera Coast || Opera Mini || Opera Touch || Opera iOS
    return this.#checkAssertsResult(
      // @ts-ignore
      Asserts.one([!!this.root.opera, !!this.root.opr]) &&
        Asserts.one([
          this.OperaMini,
          this.OperaCoast,
          this.OperaTouch,
          this.#reTest('(?:op(?:r|ios))' + this.#reStrVerNum)
        ])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Opera() {
    return this.#checkAssertsResult(
      // @ts-ignore
      Asserts.one([!!this.root.opera, !!this.root.opr]) &&
        Asserts.all([!this.OperaMobile]) &&
        Asserts.one([this.#reTest('(?:op(?:era|r)|mms)' + this.#reStrVerNum)]),
      true
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get SafariMobile() {
    return this.#checkAssertsResult(
      Asserts.all([/iphone|ipad|ipod/i.test(this.ua), !this.AndroidBrowser, !this.Chrome, !this.PhantomJS]) &&
        Asserts.one([
          /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this.ua),
          /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this.ua),
          /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this.ua),
          /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(
            this.ua
          )
        ])
    );
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf Browser
   */
  get Safari() {
    return this.#checkAssertsResult(
      Asserts.all([
        /safari|applewebkit/i.test(this.ua),
        !this.AndroidBrowser,
        !this.SafariMobile,
        !this.Chrome,
        !this.PhantomJS
      ]) &&
        Asserts.one([
          /(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this.ua)
        ])
    );
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
   */
  #checkAssertsResult(assertsResult: boolean = false, inverted: boolean = false, version: string | null = null) {
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
  setVersion(version: string | null = null, inverted = false) {
    if (inverted) {
      version = version || this.version || RegExp.$1 || 'n/a';
    } else {
      version = version || RegExp.$1 || this.version || 'n/a';
    }

    this.version = version!.replace(/_/gi, '.');
  }
}
