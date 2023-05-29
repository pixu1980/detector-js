var s,t,e,a,c=require("@detector-js/core"),i=require("@detector-js/feature"),l=require("@detector-js/hardware"),h=require("@detector-js/software");s=module.exports,t="Detector",e=()=>o,Object.defineProperty(s,t,{get:e,set:a,enumerable:!0,configurable:!0});class o extends c.FlagsClass{#s;#t;#e;constructor(s=null,t=!0,e=!1,a="djs"){super(s),this.#s=t,this.#t=e?[]:null,this.#e=a+(a?"--":""),
//! Features
this.checkFeature(),
//! Software
this.checkEngine(),this.checkBrowser(),this.checkOS(),
//! Hardware
this.checkCPU(),this.checkGPU(),this.checkPlatform(),this.setCssFlags()}
//! Feature
checkFeature(){const s=new(0,i.Feature)(this.ua),t=new(0,i.AudioFeature)(this.ua),e=new(0,i.VideoFeature)(this.ua);this.feature=s.toFlags().merge({audio:t.toFlags(),video:e.toFlags()}),this.#t&&(this.#t=this.#t.concat(s.toCssFlags(),t.toCssFlags(),e.toCssFlags()))}
//! Software
checkEngine(){const s=new(0,h.Engine)(this.ua,this.toFlags());this.#s?this.engine=s.toValues():this.engine=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkBrowser(){const s=new(0,h.Browser)(this.ua,this.toFlags());this.#s?this.browser=s.toValues():this.browser=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkOS(){const s=new(0,h.OS)(this.ua,this.toFlags());this.#s?this.os=s.toValues():this.os=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}
//! Hardware
checkDevice(){const s=new(0,l.Device)(this.ua,this.toFlags());this.device=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkCPU(){const s=new(0,l.CPU)(this.ua,this.toFlags());this.#s?this.cpu=s.toValues():this.cpu=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkGPU(){const s=new(0,l.GPU)(this.ua,this.toFlags());this.gpu=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkPlatform(){const s=new(0,l.Platform)(this.ua,this.toFlags());this.#s?this.platform=s.toValues():this.platform=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}
//! CSS Flags
setCssFlags(){if(this.#t){const s=this.#t.map((s=>this.#e+s)),t=document.documentElement||document.querySelector("html");s.forEach((s=>t.className.replace(s,""))),t.className+=s.join(" ").trim()}}}
//# sourceMappingURL=detector.js.map
