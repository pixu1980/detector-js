// import { merge } from '../Utils/Utils';

// export default class Platform {
//   constructor(ua = window.navigator.userAgent) { //, extensions = {}) {
//     this.ua = ua;
//     this.device = this.getDevice();
//     this.cpu = this.getCPU();
//     this.os = this.getOS();
//     this.browser = this.getBrowser();
//     this.engine = this.getEngine();
//   }

//   getDevice() {
//     return merge({
//       vendor: undefined,
//       model: undefined,
//       type: undefined,
//     }, PlatformMapper.regExMapper(this.ua, this.regexes.device));
//   }

//   getCPU() {
//     return merge({
//       architecture: undefined,
//     }, PlatformMapper.regExMapper(this.ua, this.regexes.cpu));
//   }

//   getOS() {
//     return merge({
//       name: undefined,
//       version: undefined,
//     }, PlatformMapper.regExMapper(this.ua, this.regexes.os));
//   }

//   getBrowser() {
//     return merge({
//       name: undefined,
//       version: undefined,
//     }, PlatformMapper.regExMapper(this.ua, this.regexes.browser));
//   }

//   getEngine() {
//     return merge({
//       name: undefined,
//       version: undefined,
//     }, PlatformMapper.regExMapper(this.ua, this.regexes.engine));
//   }
// }
