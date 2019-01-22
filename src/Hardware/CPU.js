import FlagsClass from '../Core/FlagsClass';

export default class CPU extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'cpu') {
    super(ua, cssFlagsPrefix);

    this.platform = this.getPlatform();
    this.cores = this.getCores();
    this.architecture = this.getArchitecture();

    this.vendor = {
      sparc: this.getSparc(),
      irix: this.getIrix(),
      mips: this.getMips(),
      risc: this.getRisc(),
      avr: this.getAvr(),
      arm: this.getArm(),
      powerPC: this.getPowerPC(),
      amd: this.getAmd(),
      intel: this.getIntel(),
    };
  }

  getCores() {
    return window.navigator.hardwareConcurrency || 1;
  }

  getPlatform() {
    return window.navigator.platform || 'Win32';
  }

  getArchitecture() {
    window.navigator.cpuClass = window.navigator.cpuClass || 'x86';

    const asserts64 = [
      window.navigator.cpuClass === 'x64',
      ['Win64', 'MacIntel', 'Linux x86_64', 'Linux i686'].includes(window.navigator.platform),
      /(?:x86_64|x86-64|win64|wow64|x64;|amd64|arm64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|ppc64|powerpc64)/i.test(this._ua),
    ];

    if(asserts64.some(assert => !!assert)) {
      window.navigator.cpuClass = 'x64';
    }

    return window.navigator.cpuClass;
  }

  getSparc() {
    const asserts = [
      /(sun4\w)[;\)]/i.test(this._ua),
      /sparc(?:64)?(?=;);/i.test(this._ua),
    ];

    return asserts.some(assert => !!assert);
  }

  getIrix() {
    return /irix(?:64)?(?=;);/i.test(this._ua);
  }

  getMips() {
    return /mips(?:64)?(?=;);/i.test(this._ua);
  }

  getRisc() {
    return /pa-risc(?:64)?(?=;);/i.test(this._ua);
  }

  getAvr() {
    return /(?=atmel\s)avr/i.test(this._ua);
  }

  getArm() {
    const asserts = [
      /windows\s(ce|mobile);\sppc;/i.test(this._ua),
      /arm(?:64|(?=v\d+[;l]))/i.test(this._ua),
    ];

    return asserts.some(assert => !!assert);
  }

  getPowerPC() {
    const asserts = [
      /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua),
      window.navigator.platform === 'MacPPC',
    ];

    return asserts.some(assert => !!assert);
  }

  getAmd() {
    const asserts64 = [
      /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      window.navigator.cpuClass === 'x64' || window.navigator.platform === 'Linux x86_64',
    ];

    const asserts32 = [
      /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      window.navigator.cpuClass === 'x86',
    ];

    return asserts64.every(assert => !!assert) || asserts32.some(assert => !!assert);
  }

  getIntel() {
    const asserts64 = [
      /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua),
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      window.navigator.cpuClass === 'x64' || window.navigator.platform === 'MacIntel' || window.navigator.platform === 'Linux x86_64',
    ];

    const asserts32 = [
      /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /(ia32(?=;))/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      window.navigator.cpuClass === 'x86',
    ];

    return asserts64.some(assert => !!assert) || asserts32.some(assert => !!assert);
  }
}
