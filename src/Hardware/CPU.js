import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

export default class CPU extends CssFlagsClass {
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
    this._navigator.cpuClass = this._navigator.cpuClass || 'x86';

    if (Asserts.one([
      this._navigator.cpuClass === 'x64',
      ['Win64', 'MacIntel', 'Linux x86_64', 'Linux i686'].includes(this._navigator.platform),
      /(?:x86_64|x86-64|win64|wow64|x64;|amd64|arm64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|ppc64|powerpc64)/i.test(this._ua),
    ])) {
      this._navigator.cpuClass = 'x64';
    }

    return this._navigator.cpuClass;
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
      /arm(?:64|(?=v\d+[;l]))/i.test(this._ua),
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
      this._navigator.platform === 'MacIntel',
      this._navigator.platform === 'Linux x86_64',
    ]) || Asserts.one([
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /(ia32(?=;))/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x86',
    ]);
  }
}
