import FlagsClass from '../Core/FlagsClass';

export default class Platform extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'platform') {
    super(ua, cssFlagsPrefix);

  }


  get x64() {
    //navigator.platform==="MacIntel"
    const asserts = [
      /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua),
      /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x64' || this._navigator.platform === 'MacIntel' || this._navigator.platform === 'Linux x86_64',
    ];

    return asserts.every(assert => !!assert);
  }

  get x86() {
    //navigator.platform==="MacIntel"

    const asserts = [
      /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
      /(ia32(?=;))/i.test(this._ua),
      /((?:i[346]|x)86)[;\)]/i.test(this._ua),
      this._navigator.cpuClass === 'x86',
      !this.x64 && !this.ia32 && !this.ia64 && !this.arm32 && !this.arm64,
    ];

    return asserts.every(assert => !!assert);
  }


  get arm64() {
    const asserts = [
      /windows\s(ce|mobile);\sppc;/i.test(this._ua),
      /arm(?:64|(?=v\d+[;l]))/i.test(this._ua),
    ];

    return asserts.every(assert => !!assert);
  }


}






// var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

// document.write("<br>");
// for (var value in performance) {
//   document.write(value + "<br>");
// }

// document.write("<br><br><br>");

// var canvas;
// canvas = document.getElementById("glcanvas");
// var gl = canvas.getContext("experimental-webgl");

// document.write(gl.getParameter(gl.RENDERER) + "<br>");
// document.write(gl.getParameter(gl.VENDOR) + "<br>");
// document.write(getUnmaskedInfo(gl).vendor + "<br>");
// document.write(getUnmaskedInfo(gl).renderer + "<br>");


// function getUnmaskedInfo(gl) {
//   var unMaskedInfo = {
//     renderer: '',
//     vendor: ''
//   };

//   var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
//   if (dbgRenderInfo != null) {
//     unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
//     unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
//   }

//   return unMaskedInfo;
// }
