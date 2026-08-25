# detector-js
v2.0.11

## Description
DetectorJS, zero-dependency platform/environment detector written in ES6

Please feel free to ask for modifications, fixes or do a PR to improve Detector behavior or add detection rules

{{#author}}
## Author
Emiliano 'Pixu' Pisu <pisuemiliano.1980@gmail.com>
{{/author}}

{{#badges}}
## Badges
{{#add_nodeico}}[![NPM](https://nodei.co/npm/detector-js.png)](https://nodei.co/npm/detector-js/){{/add_nodeico}}

[![NPM downloads/month](https://img.shields.io/npm/dm/detector-js.svg)](https://img.shields.io/npm/dm/detector-js.svg){{#add_github_badges}} {{#add_github_stars}}[![GitHub stars](https://img.shields.io/github/stars/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/stargazers){{/add_github_stars}} {{#add_github_forks}}[![GitHub forks](https://img.shields.io/github/forks/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/network){{/add_github_forks}} {{#add_github_issues}}[![GitHub issues](https://img.shields.io/github/issues/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/issues){{/add_github_issues}} {{#add_github_license}}[![GitHub license](https://img.shields.io/github/license/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/blob/master/LICENSE){{/add_github_license}}{{/add_github_badges}} {{#add_travis}}[![Build Status](https://travis-ci.org/pixu1980/detector-js.svg?branch=master)](https://travis-ci.org/pixu1980/detector-js){{/add_travis}} {{#add_coverage}}[![Coverage Status](https://coveralls.io/repos/github/pixu1980/detector-js/badge.svg?branch=master)](https://coveralls.io/github/pixu1980/detector-js?branch=master){{/add_coverage}}
{{/badges}}

## Documentation
Check out the [Latest Documentation](https://detector.js.org/docs/index.html) here

{{#example}}
## Example
Check out this [Codepen]() example
{{/example}}

## Installation
This is a [Node.js](https://nodejs.org/) module available through the [npm registry](https://www.npmjs.com/). 

It can be installed using either [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) package managers.

```sh
npm i detector-js
```

```sh
yarn add detector-js
```

## Usage

### Browser (script tag)

```html
<script src="dist/detector.browser.min.js"></script>
<script>
  const detector = new Detector();          // global class, no wrapper needed
  console.log(detector.toFlags());          // { browser, engine, os, cpu, gpu, feature, platform }
</script>
```

### npm (ESM / CJS)

```sh
npm i detector-js
```

```js
import { Detector } from 'detector-js';      // ESM
const { Detector } = require('detector-js'); // CJS
```

### TypeScript

Types ship with the package (`index.d.ts` + per-package `.d.ts`).

## Privacy
**100% client-side — zero network calls, zero storage, zero telemetry.**
DetectorJS never registers or sends anything anywhere; the data stays in the hands of whoever executes the library.
Read the full legal walkthrough (GDPR, ePrivacy, D.Lgs. 196/2003, CCPA, papers) in [PRIVACY.md](PRIVACY.md).

## Documentation
- [Getting started](docs/getting-started.md)
- [API reference](docs/api.md)
- [Toolchain (esbuild)](docs/toolchain.md)
- [Browser support](docs/browser-support.md)
- [Examples](examples/)

## Governance & community
[CONTRIBUTING.md](CONTRIBUTING.md) · [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) · [SECURITY.md](SECURITY.md) · [GOVERNANCE.md](GOVERNANCE.md)

## Monorepo structure
`detector-js` v3 is a zero-dependency vanillaJS monorepo:

```
packages/
  core/       @detector-js/core       asserts, FlagsClass, CssFlagsClass, polyfills
  feature/    @detector-js/feature    Feature, AudioFeature, VideoFeature (+ modern WebAPIs)
  software/   @detector-js/software   Browser, Engine, OS
  hardware/   @detector-js/hardware   Platform, Device, CPU, GPU
  detector/   @detector-js/detector   Detector (composes everything)
```

Runtime dependencies are limited to the internal workspaces: **zero external dependencies**.

The scoped packages can be consumed individually:

```js
import { Browser } from '@detector-js/software';
import { Detector } from '@detector-js/detector';
```

## Usage
```js
import Detector from 'detector-js';

const detector = new Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.3 Safari/605.1.15');

console.log(detector);
// {
//   engine:{
//     name:'WebKit',
//     version:'605.1.15'
//   },
//   browser:{
//     name:'Safari',
//     version:'12.0.3'
//   },
//   os:{
//     name:'macOS',
//     version:'10.14.3',
//     versionName:'Mojave'
//   },
//   cpu:{
//     platform:'MacIntel',
//     cores:1,
//     architecture:'x64',
//     vendor:'intel'
//   },
//   gpu:{
//     webGLVendor:'WebKit',
//     webGLRenderer:'WebKit WebGL',
//     vendor:'Intel Inc.',
//     model:'Intel Iris',
//     renderer:'Intel Iris OpenGL Engine'
//   },
//   platform:'desktop',
//     feature: {
//     pointerEnabled:false,
//     pixelRatio:1,
//     pointerLock:true,
//     quirksMode:false,
//     css3D:true,
//     cssTransform:true,
//     cssTransition:true,
//     deviceMotion:false,
//     deviceOrientation:false,
//     contextMenu:false,
//     classList:false,
//     placeholder:true,
//     viewportUnit:true,
//     remUnit:true,
//     canvas:true,
//     svg:true,
//     webGL:true,
//     webGL2:true,
//     webGPU:false,
//     webVR:false,
//     deviceMemory:8,
//     touchPoints:5,
//     touch:false,
//     forceTouch:true,
//     srcset:true,
//     sizes:true,
//     pictureElement:true,
//     dialogElement:false,
//     addEventListener:true,
//     asyncScript:true,
//     battery:false,
//     bluetooth:false,
//     broadcastChannel:false,
//     caches:false,
//     clipboard:false,
//     cors:true,
//     credentials:false,
//     deferScript:true,
//     fetch:true,
//     file:true,
//     fileSystem:false,
//     fullscreen:true,
//     fullscreenKeyboard:true,
//     gamepad:true,
//     geolocation:true,
//     historyAPI:true,
//     indexedDB:true,
//     intersectionObserver:true,
//     littleEndian:false,
//     localStorage:true,
//     matchMedia:true,
//     mediaCapabilities:true,
//     mediaRecorder:false,
//     mediaSession:false,
//     nfc:false,
//     notifications:false,
//     offscreenCanvas:false,
//     online:true,
//     paymentRequest:false,
//     permissions:true,
//     querySelector:true,
//     querySelectorAll:true,
//     resizeObserver:true,
//     serial:false,
//     serviceWorker:true,
//     speechSynthesis:false,
//     storage:true,
//     structuredClone:true,
//     typedArray:true,
//     usb:false,
//     userMedia:false,
//     vibration:false,
//     visualViewport:true,
//     wakeLock:true,
//     webAssembly:true,
//     webAuthn:false,
//     webCrypto:true,
//     webLocks:true,
//     webRTC:false,
//     webShare:true,
//     webSocket:true,
//     webXr:false,
//     worker:true,
//     audio:{
//       supported:true,
//       context:true,
//       formats:{
//         mp3:true,
//         webm:false,
//         ogg:false,
//         opus:false,
//         wav:true,
//         m4a:true
//       }
//     },
//     video:{
//       supported:true,
//       formats:{
//         mp4:true,
//         ogv:false,
//         webm:false
//       }
//     }
//   }
// }
```

## Todo
- refine browsers regexes
- refine documentation
- implement modular custom build feature
- decide to implement or not device infos detection

## Dependencies
{{#depDetails}}
- [detector-js](https://github.com/pixu1980/detector-js): DetectorJS, zero-dependency platform/environment detector written in ES6
{{/depDetails}}
{{^depDetails}}
None
{{/depDetails}}

## Dev Dependencies
{{#devDepDetails}}
- [detector-js](https://github.com/pixu1980/detector-js): DetectorJS, zero-dependency platform/environment detector written in ES6
{{/devDepDetails}}
{{^devDepDetails}}
None
{{/devDepDetails}}

{{#scripts.test}}
## Tests
```sh
npm install
npm test
```
{{/scripts.test}}

{{#testOutput}}
```
{{{testOutput}}}
```
{{/testOutput}}

{{#license}}
## License
MIT
{{/license}}

## Powered By
<a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="http://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
<!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->
