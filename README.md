# detector-js
v1.3.2

## Description
DetectorJS, zero-dependency platform/environment detector written in ES6

Please feel free to ask for modifications, fixes or do a PR to improve Detector behavior or add detection rules

## Author
Pixu

## Badges
[![NPM](https://nodei.co/npm/detector-js.png)](https://nodei.co/npm/detector-js/)

[![NPM downloads/month](https://img.shields.io/npm/dm/detector-js.svg)](https://img.shields.io/npm/dm/detector-js.svg) [![GitHub stars](https://img.shields.io/github/stars/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/stargazers) [![GitHub forks](https://img.shields.io/github/forks/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/network) [![GitHub issues](https://img.shields.io/github/issues/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/issues) [![GitHub license](https://img.shields.io/github/license/pixu1980/detector-js.svg?style=plastic)](https://github.com/pixu1980/detector-js/blob/master/LICENSE) [![Build Status](https://travis-ci.org/pixu1980/detector-js.svg?branch=master)](https://travis-ci.org/pixu1980/detector-js) [![Coverage Status](https://coveralls.io/repos/github/pixu1980/detector-js/badge.svg?branch=master)](https://coveralls.io/github/pixu1980/detector-js?branch=master)

## Documentation
Check out the [Latest Documentation](https://pixu1980.github.io/detector-js/docs/index.html) here


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
//     webVR:false,
//     touch:false,
//     forceTouch:true,
//     srcset:true,
//     sizes:true,
//     pictureElement:true,
//     dialogElement:false,
//     addEventListener:true,
//     asyncScript:true,
//     battery:false,
//     cors:true,
//     deferScript:true,
//     file:true,
//     fileSystem:false,
//     fullscreen:true,
//     fullscreenKeyboard:true,
//     geolocation:true,
//     historyAPI:true,
//     littleEndian:false,
//     localStorage:true,
//     matchMedia:true,
//     querySelector:true,
//     querySelectorAll:true,
//     serviceWorker:true,
//     typedArray:true,
//     userMedia:false,
//     vibration:false,
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
None

## Dev Dependencies
- [@babel/core](https://ghub.io/@babel/core): Babel compiler core.
- [@babel/preset-env](https://ghub.io/@babel/preset-env): A Babel preset for each environment.
- [docdash](https://ghub.io/docdash): A clean, responsive documentation template theme for JSDoc 3 inspired by lodash and minami
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-airbnb](https://ghub.io/eslint-config-airbnb): Airbnb&#39;s ESLint config, following our styleguide
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-jsx-a11y](https://ghub.io/eslint-plugin-jsx-a11y): Static AST checker for accessibility rules on JSX elements.
- [eslint-plugin-react](https://ghub.io/eslint-plugin-react): React specific linting rules for ESLint
- [ink-docstrap](https://ghub.io/ink-docstrap): DetectorJS, zero-dependency platform/environment detector written in ES6
- [install](https://ghub.io/install): Minimal JavaScript module loader
- [jsdoc](https://ghub.io/jsdoc): An API documentation generator for JavaScript.
- [jshint](https://ghub.io/jshint): Static analysis tool for JavaScript
- [rollup](https://ghub.io/rollup): Next-generation ES module bundler
- [rollup-plugin-babel](https://ghub.io/rollup-plugin-babel): Seamless integration between Rollup and Babel.
- [rollup-plugin-eslint](https://ghub.io/rollup-plugin-eslint): Verify entry point and all imported files with ESLint
- [rollup-plugin-filesize](https://ghub.io/rollup-plugin-filesize): A rollup plugin to show filesize in the cli
- [rollup-plugin-json](https://ghub.io/rollup-plugin-json): DetectorJS, zero-dependency platform/environment detector written in ES6
- [rollup-plugin-replace](https://ghub.io/rollup-plugin-replace): DetectorJS, zero-dependency platform/environment detector written in ES6
- [rollup-plugin-uglify](https://ghub.io/rollup-plugin-uglify): Rollup plugin to minify generated bundle

## Tests
```sh
npm install
npm test
```


## License
MIT

## Powered By
<a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="http://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
<!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->
