import FlagsClass from '../Core/FlagsClass';

export default class CPUVendor extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'cpu-vendor') {
    super(ua, cssFlagsPrefix);

    this._navigator.cpuClass = this._navigator.cpuClass || 'x86';
    this._navigator.hardwareConcurrency = this._navigator.hardwareConcurrency || 1;
  }

  get sparc() {
    const asserts = [
      /(sun4\w)[;\)]/i.test(this._ua),
      /sparc(?:64)?(?=;);/i.test(this._ua),
    ];

    return asserts.some(assert => !!assert);
  }

  get irix() {
    return /irix(?:64)?(?=;);/i.test(this._ua);
  }

  get mips() {
    return /mips(?:64)?(?=;);/i.test(this._ua);
  }

  get risc() {
    return /pa-risc(?:64)?(?=;);/i.test(this._ua);
  }

  get avr() {
    return /(?=atmel\s)avr/i.test(this._ua);
  }

  get arm() {
    const asserts = [
      /windows\s(ce|mobile);\sppc;/i.test(this._ua),
      /arm(?:64|(?=v\d+[;l]))/i.test(this._ua),
    ];

    return asserts.some(assert => !!assert);
  }

  get powerPC() {
    const asserts = [
      /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua),
      this._navigator.platform === 'MacPPC',
    ];

    return asserts.some(assert => !!assert);
  }

  get intel() {
    const asserts64 = [
      /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua),
      /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x64' || this._navigator.platform === 'MacIntel' || this._navigator.platform === 'Linux x86_64',
    ];

    const asserts32 = [
      /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /(ia32(?=;))/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x86',
    ];

    return asserts64.some(assert => !!assert) || asserts32.some(assert => !!assert);
  }
}
