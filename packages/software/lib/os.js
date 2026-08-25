/* eslint-disable quote-props */
/* eslint-disable no-else-return */
/* eslint-disable radix */
/* eslint-disable indent */
import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class OS
 * @extends {CssFlagsClass}
 */
export class OS extends CssFlagsClass {
  /**
   * Creates an instance of OS.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='os']
   *
   * @memberOf OS
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'os') {
    super(ua, flags, cssFlagsPrefix);

    this.version = 'n/a';
    this.versionName = 'n/a';
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
      version = version.replace(/_/ig, '.');

      return Object.getOwnPropertyNames(versionNames).filter((versionName) => {
        return !!versionNames[versionName];
      })[0] || 'n/a';
    }

    return 'n/a';
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
      'CE': /CE/i.test(version),
      '95': /95/i.test(version),
      '98': /98/i.test(version),
      'ME': /ME/i.test(version),
      '2000': /NT(\s)?5\.0/i.test(version),
      'XP': /NT(\s)?5\.1/i.test(version) || /XP/i.test(version),
      '2003': /NT(\s)?5\.2/i.test(version),
      'Vista': /NT(\s)?6\.0/i.test(version),
      '7': /NT(\s)?6\.1/i.test(version),
      '8': /NT(\s)?6\.2/i.test(version),
      '8.1': /NT(\s)?6\.3/i.test(version),
      '10': /NT(\s)?6\.4/i.test(version) || /NT(\s)?10\.0/i.test(version),
      'RT': /ARM/.test(version),
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
    return this._checkAssertsResult(Asserts.all([
      /Win/i.test(this._ua),
    ]) && Asserts.one([
      /Windows ((NT|XP)( \d\d?.\d)?)/i.test(this._ua),
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
      'Tempo': /^8\.0(\.+\d)?$/i.test(version),
      'Bride of Buster': /^8\.1(\.+\d)?$/i.test(version),
      'Allegro': /^8\.5(\.+\d)?$/i.test(version),
      'Veronica': /^8\.6(\.+\d)?$/i.test(version),
      // source https://en.wikipedia.org/wiki/Mac_OS_9
      'Sonata': /^9\.0(\.+[012356789])?$/i.test(version),
      'Minuet': /^9\.0\.4$/i.test(version),
      'Fortissimo': /^9\.1(\.+\d)?$/i.test(version),
      'Moonlight': /^9\.2(\.+[023456789])?$/i.test(version),
      'Limelight': /^9\.2\.1$/i.test(version),
      // source https://en.wikipedia.org/wiki/List_of_Apple_operating_systems
      'Cheetah': /^10\.0(\.+\d)?$/i.test(version),
      'Puma': /^10\.1(\.+\d)?$/i.test(version),
      'Jaguar': /^10\.2(\.+\d)?$/i.test(version),
      'Panther': /^10\.3(\.+\d)?$/i.test(version),
      'Tiger': /^10\.4(\.+\d)?$/i.test(version),
      'Leopard': /^10\.5(\.+\d)?$/i.test(version),
      'Snow Leopard': /^10\.6(\.+\d)?$/i.test(version),
      'Lion': /^10\.7(\.+\d)?$/i.test(version),
      'Mountain Lion': /^10\.8(\.+\d)?$/i.test(version),
      'Mavericks': /^10\.9(\.+\d)?$/i.test(version),
      'Yosemite': /^10\.10(\.+\d)?$/i.test(version),
      'El Capitan': /^10\.11(\.+\d)?$/i.test(version),
      'Sierra': /^10\.12(\.+\d)?$/i.test(version),
      'High Sierra': /^10\.13(\.+\d)?$/i.test(version),
      'Mojave': /^10\.14(\.+\d)?$/i.test(version),
      'Catalina': /^10\.15(\.+\d)?$/i.test(version),
      'Big Sur': /^11(\.+\d)(\.+\d)?$/i.test(version),
      'Monterey': /^12(\.+\d)(\.+\d)?$/i.test(version),
      'Ventura': /^13(\.+\d)(\.+\d)?$/i.test(version),
      'Sonoma': /^14(\.+\d)(\.+\d)?$/i.test(version),
      'Sequoia': /^15(\.+\d)(\.+\d)?$/i.test(version),
      'Tahoe': /^26(\.+\d)(\.+\d)?$/i.test(version),
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
    const version = pv.replace(/_/g, '.');
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
    const major = parseInt(clientHintsVersion.split('.')[0], 10);
    if (Number.isNaN(major)) return null;
    if (major >= 20) {
      const darwinToMarketing = {
        19: '10.15',
        20: '11',
        21: '12',
        22: '13',
        23: '14',
        24: '15',
        25: '26',
        26: '26',
      }[major];
      if (!darwinToMarketing) return null;
      const rest = clientHintsVersion.split('.').slice(1).join('.');
      return rest ? `${darwinToMarketing}.${rest}` : darwinToMarketing;
    }
    if (major >= 11) {
      return clientHintsVersion; // marketing-style (11..15, 26...)
    }
    return null; // 10.x hints carry the same legacy value as the UA
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
    if (clientHintsVersion.startsWith('15.')) return '11';
    if (clientHintsVersion.startsWith('10.') || clientHintsVersion.startsWith('1.')) return '10';
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
    return m[1].replace(/_/gi, '.');
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
  async upgrade() {
    const uaData = this._navigator.userAgentData;
    if (!uaData || typeof uaData.getHighEntropyValues !== 'function') {
      return this.toValues();
    }

    try {
      const hints = await uaData.getHighEntropyValues(['platformVersion']);
      const pv = this._getClientHintsPlatformVersion(hints);
      if (!pv) {
        return this.toValues();
      }

      // NOTE: toValues() re-evaluates the getters, which re-derive version/versionName
      // from the UA, so we return a merged snapshot instead of mutating the instance.
      const values = this.toValues();

      if (this.macOS) {
        const macVersion = this._mapMacOSVersion(pv);
        if (macVersion && macVersion !== values.version) {
          const version = macVersion.replace(/_/gi, '.');
          return {
            ...values,
            version,
            versionName: this._getMacOSVersionName(version),
          };
        }
      }

      if (this.Windows) {
        const windowsName = this._getWindowsVersionNameFromHints(pv);
        if (windowsName && windowsName !== values.versionName) {
          return { ...values, versionName: windowsName };
        }
      }
    } catch (e) {
      // hint denied (Permissions-Policy ch-ua-high-entropy-values / user settings)
    }

    return this.toValues();
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf OS
   */
  get macOS() {
    // synchronous best-effort: environments exposing platformVersion directly,
    // plus the Safari "Version/" heuristic (no Client Hints in WebKit)
    const ch = this._getClientHintsPlatformVersion(this._navigator.userAgentData);
    const chMac = ch ? this._mapMacOSVersion(ch) : this._getSafariMacOSVersion(this._ua);
    return this._checkAssertsResult(Asserts.all([
      !this.iOS,
      !/mobile\//i.test(this._ua),
      /mac/i.test(this._ua),
      !/like mac/i.test(this._ua),
    ]) && Asserts.one([
      /(macintosh|mac(?=_powerpc)\s)/i.test(this._ua),
      /(mac\sos\sx)\s?([\w\s\.]*)/i.test(this._ua),
    ]) && Asserts.one([
      /Mac[ +]OS[ +]X(?:[ /](?:Version )?(\d+(?:[_\.]\d+)+))?/i.test(this._ua),
      /Mac (\d+(?:[_\.]\d+)+)/i.test(this._ua),
      /mac os x (\d+(\.?_?\d+)+)/i.test(this._ua),
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
      'FreeBSD': /\s(freebsd)\s?([\w\.]*)/i.test(version),
      'NetBSD': /\s(netbsd|dragonfly)\s?([\w\.]*)/i.test(version),
      'OpenBSD': /\s(openbsd|dragonfly)\s?([\w\.]*)/i.test(version),
      'PC-BSD': /\s(pc-bsd|dragonfly)\s?([\w\.]*)/i.test(version),
      'DragonFly': /\s(dragonfly)\s?([\w\.]*)/i.test(version),
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
    return this._checkAssertsResult(Asserts.all([
      /X11/i.test(this._ua),
    ]) && Asserts.one([
      /(unix)\s?([\w\.]*)/i.test(this._ua),
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
      'Mint': /(mint)[\/\s\(]?(\w*)/i.test(version),
      'Mageia': /(mageia)[;\s]/i.test(version),
      'VectorLinux': /(vectorlinux)[;\s]/i.test(version),
      'Joli': /(joli)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Ubuntu': /([kxln]?ubuntu)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Debian': /(debian)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'SuSE': /(suse|opensuse)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Gentoo': /(gentoo)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Arch': /((?=\s)arch)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Slackware': /(slackware)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Fedora': /(fedora)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Mandriva': /(mandriva)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'CentOS': /(centos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'PCLinuxOS': /(pclinuxos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'RedHat': /(redhat)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Zenwalk': /(zenwalk)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
      'Linpus': /(linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
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
    return this._checkAssertsResult(Asserts.all([
      !this.Android,
      /Linux/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(cros)\s[\w]+\s([\w\.]+\w)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(sunos)\s?([\w\.\d]*)/i.test(this._ua),
      /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(plan\s9)/i.test(this._ua),
    ]));
  }

  get Minix() {
    return this._checkAssertsResult(Asserts.one([
      /(minix)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(beos)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(os\/2)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(amigaos)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(morphos)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(risc\sos)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(openvms)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(fuchsia)/i.test(this._ua),
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
  get WindowsPhone() { // a.k.a. Windows Mobile
    return this._checkAssertsResult(Asserts.one([
      /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this._ua),
      /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this._ua),
      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this._ua),
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
   */
  get iOS() {
    return this._checkAssertsResult(Asserts.all([
      !this._root.MSStream,
      /iP(?:ad|hone|od)/.test(this._ua),
    ]) && Asserts.one([
      /os\s((\d+([_\s]\d+)*)|(\d+(?:[_\.]\d+)*)) like mac os x/i.test(this._ua),
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
      '1.0': /^1\.[01234]$/i.test(version),
      'Cupcake': /^1\.5(\.+\d)?$/i.test(version),
      'Donut': /^1\.6(\.+\d)?$/i.test(version),
      'Eclair': /^2\.[01](\.+\d)?$/i.test(version),
      'Froyo': /^2\.2(\.+\d)?$/i.test(version),
      'Gingerbread': /^2\.3(\.+\d)?$/i.test(version),
      'Honeycomb': /^3(\.+\d)(\.+\d)?$/i.test(version),
      'Ice Cream Sandwich': /^4\.[01](\.+\d)?$/i.test(version),
      'Jelly Bean': /^4\.[23](\.+\d)?$/i.test(version),
      'KitKat': /^4\.[456789](\.+\d)?$/i.test(version),
      'Lollipop': /^5(\.\d)(\.+\d)?$/i.test(version),
      'Marshmallow': /^6(\.\d)(\.+\d)?$/i.test(version),
      'Nougat': /^7(\.\d)(\.+\d)?$/i.test(version),
      'Oreo': /^8(\.\d)(\.+\d)?$/i.test(version),
      'Pie': /^9(\.\d)(\.+\d)?$/i.test(version),
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
    return this._checkAssertsResult(Asserts.one([
      /android[\s/-](\d+(\.\d+)*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(bada)[\/\s-]?([\w\.]*)/i.test(this._ua),
      /bada\/(\d+(\.\d+)*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /blackberry|\bbb\d+/i.test(this._ua),
      /rim\stablet/i.test(this._ua),
    ]) && Asserts.one([
      /rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this._ua),
      /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this._ua),
      /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua),
      /(blackberry)\w*\/?([\w\.]*)/i.test(this._ua),
      /\bbb(\d+)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(contiki)[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(meego)[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(qnx)[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(palm\sos)[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(?:web0s|webos)[\/\s-]?([\w\.]*)/i.test(this._ua),
      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this._ua),
      /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /(tizen)[/\s](\d+(\.\d+)*)/i.test(this._ua),
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
    return this._checkAssertsResult(Asserts.one([
      /raspbian[/\s](\d+(\.\d+)*)/i.test(this._ua),
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
    this.version = (version || RegExp.$1 || 'n/a').replace(/_/gi, '.');
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
}
