import{FlagsClass as s}from"@detector-js/core";import{Feature as t,AudioFeature as a,VideoFeature as c}from"@detector-js/feature";import{Device as e,CPU as i,GPU as h,Platform as l}from"@detector-js/hardware";import{Engine as o,Browser as g,OS as F}from"@detector-js/software";class r extends s{#s;#t;#a;constructor(s=null,t=!0,a=!1,c="djs"){super(s),this.#s=t,this.#t=a?[]:null,this.#a=c+(c?"--":""),
//! Features
this.checkFeature(),
//! Software
this.checkEngine(),this.checkBrowser(),this.checkOS(),
//! Hardware
this.checkCPU(),this.checkGPU(),this.checkPlatform(),this.setCssFlags()}
//! Feature
checkFeature(){const s=new t(this.ua),e=new a(this.ua),i=new c(this.ua);this.feature=s.toFlags().merge({audio:e.toFlags(),video:i.toFlags()}),this.#t&&(this.#t=this.#t.concat(s.toCssFlags(),e.toCssFlags(),i.toCssFlags()))}
//! Software
checkEngine(){const s=new o(this.ua,this.toFlags());this.#s?this.engine=s.toValues():this.engine=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkBrowser(){const s=new g(this.ua,this.toFlags());this.#s?this.browser=s.toValues():this.browser=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkOS(){const s=new F(this.ua,this.toFlags());this.#s?this.os=s.toValues():this.os=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}
//! Hardware
checkDevice(){const s=new e(this.ua,this.toFlags());this.device=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkCPU(){const s=new i(this.ua,this.toFlags());this.#s?this.cpu=s.toValues():this.cpu=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkGPU(){const s=new h(this.ua,this.toFlags());this.gpu=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}checkPlatform(){const s=new l(this.ua,this.toFlags());this.#s?this.platform=s.toValues():this.platform=s.toFlags(),this.#t&&(this.#t=this.#t.concat(s.toCssFlags()))}
//! CSS Flags
setCssFlags(){if(this.#t){const s=this.#t.map((s=>this.#a+s)),t=document.documentElement||document.querySelector("html");s.forEach((s=>t.className.replace(s,""))),t.className+=s.join(" ").trim()}}}export{r as Detector};
//# sourceMappingURL=detector.mjs.map
