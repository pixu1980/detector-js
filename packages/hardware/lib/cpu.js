import { Asserts, CssFlagsClass } from '@detector-js/core';

export class CPU extends CssFlagsClass {
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'cpu') {
    super(ua, flags, cssFlagsPrefix);

    this._booleanFlagsValuePropertyName = 'vendor';

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
   */
  getCores() {
    return this._navigator.hardwareConcurrency || 1;
  }

  /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */
  getPlatform() {
    return this._navigator.platform || 'Win32';
  }

  /**
   *
   *
   * @returns string
   *
   * @memberOf CPU
   */
  getArchitecture() {
    let cpuClass = this._navigator.cpuClass || 'x86';

    // NOTE: navigator.platform 'MacIntel' is a legacy compatibility string and does
    // NOT prove an Intel CPU - Apple Silicon Macs report it too. ARM is checked first;
    // 'arm64' is no longer lumped into the generic 64-bit 'x64' bucket (upstream bug).
    if (Asserts.one([
      cpuClass === 'arm64',
      this._navigator.platform === 'MacARM',
      /(?:arm64|aarch64|armv\d|(?:^|[\/\s;(])arm(?=[\s;)\/]|$))/i.test(this._ua),
    ])) {
      cpuClass = 'arm64';
    } else if (Asserts.one([
      cpuClass === 'x64',
      ['Win64', 'Linux x86_64', 'Linux i686'].includes(this._navigator.platform),
      /(?:x86_64|x86-64|win64|wow64|x64;|amd64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|powerpc64)/i.test(this._ua),
    ])) {
      cpuClass = 'x64';
    }

    return cpuClass;
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getSparc() {
    return Asserts.one([
      /(sun4\w)[;\)]/i.test(this._ua),
      /sparc(?:64)?(?=;);/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getIrix() {
    return Asserts.all([
      /irix(?:64)?(?=;);/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getMips() {
    return Asserts.all([
      /mips(?:64)?(?=;);/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getRisc() {
    return Asserts.all([
      /pa-risc(?:64)?(?=;);/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getAvr() {
    return Asserts.all([
      /(?=atmel\s)avr/i.test(this._ua),
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getArm() {
    return Asserts.one([
      /windows\s(ce|mobile);\sppc;/i.test(this._ua),
      /(?:arm64|aarch64|armv\d|(?:^|[\/\s;(])arm(?=[\s;)\/]|$))/i.test(this._ua),
      this._navigator.platform === 'MacARM',
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getPowerPC() {
    return Asserts.one([
      /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua),
      this._navigator.platform === 'MacPPC',
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getAmd() {
    return Asserts.one([
      /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x64',
      this._navigator.platform === 'Linux x86_64',
    ]) || Asserts.one([
      /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x86',
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf CPU
   */
  getIntel() {
    return Asserts.one([
      /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua),
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x64',
      this._navigator.platform === 'Linux x86_64',
    ]) || Asserts.one([
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /(ia32(?=;))/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x86',
    ]);
  }

  /**
   * Resolves the true CPU architecture through User-Agent Client Hints
   * (navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness'])).
   * High-entropy: async, can be denied; falls back to the UA-based result.
   *
   * @returns {Promise<object>}
   *
   * @memberOf CPU
   */
  async upgrade() {
    const uaData = this._navigator.userAgentData;

    if (uaData && typeof uaData.getHighEntropyValues === 'function') {
      try {
        const hints = await uaData.getHighEntropyValues(['architecture', 'bitness']);
        const arch = hints && typeof hints.architecture === 'string' ? hints.architecture : null;

        if (arch === 'arm') {
          this.architecture = String(hints.bitness || '64') === '32' ? 'arm' : 'arm64';
          this.arm = true;
          this.intel = false;
          this.amd = false;
          this.powerPC = false;
        } else if (arch === 'x86') {
          this.architecture = String(hints.bitness || '64') === '32' ? 'x86' : 'x64';
          this.intel = true;
          this.amd = false;
          this.arm = false;
        }
      } catch (e) {
        // hint denied (Permissions-Policy ch-ua-high-entropy-values / user settings)
      }
    }

    return this.toValues();
  }
}
