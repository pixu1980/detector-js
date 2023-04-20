# {{name}}
v{{version}}

## Description
{{description}}

Please feel free to ask for modifications, fixes or do a PR to improve Detector behavior or add detection rules

{{#author}}
## Author
{{author_name}}
{{/author}}

{{#badges}}
## Badges
{{#add_nodeico}}[![NPM](https://nodei.co/npm/{{name}}.png)](https://nodei.co/npm/{{name}}/){{/add_nodeico}}

[![NPM downloads/month](https://img.shields.io/npm/dm/{{name}}.svg)](https://img.shields.io/npm/dm/{{name}}.svg){{#add_github_badges}} {{#add_github_stars}}[![GitHub stars](https://img.shields.io/github/stars/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/stargazers){{/add_github_stars}} {{#add_github_forks}}[![GitHub forks](https://img.shields.io/github/forks/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/network){{/add_github_forks}} {{#add_github_issues}}[![GitHub issues](https://img.shields.io/github/issues/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/issues){{/add_github_issues}} {{#add_github_license}}[![GitHub license](https://img.shields.io/github/license/{{author}}/{{name}}.svg?style=plastic)](https://github.com/{{author}}/{{name}}/blob/master/LICENSE){{/add_github_license}}{{/add_github_badges}} {{#add_travis}}[![Build Status](https://travis-ci.org/{{author}}/{{name}}.svg?branch=master)](https://travis-ci.org/{{author}}/{{name}}){{/add_travis}} {{#add_coverage}}[![Coverage Status](https://coveralls.io/repos/github/{{author}}/{{name}}/badge.svg?branch=master)](https://coveralls.io/github/{{author}}/{{name}}?branch=master){{/add_coverage}}
{{/badges}}

## Documentation
Check out the [Latest Documentation]({{documentation}}) here

{{#example}}
## Example
Check out this [Codepen]({{example}}) example
{{/example}}

## Installation
This is a [Node.js](https://nodejs.org/) module available through the [npm registry](https://www.npmjs.com/). 

It can be installed using either [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) package managers.

```sh
npm i {{name}}
```

```sh
yarn add {{name}}
```

## Usage
```js
import { Detector } from 'detector-js';

const detector = new Detector();

// It's possible to specify a custom userAgent if needed
// const detector = new Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.3 Safari/605.1.15');

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
{{#depDetails}}
- [{{name}}]({{repository}}): {{description}}
{{/depDetails}}
{{^depDetails}}
None
{{/depDetails}}

## Dev Dependencies
{{#devDepDetails}}
- [{{name}}]({{repository}}): {{description}}
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
{{license}}
{{/license}}

## Powered By
<a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="http://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
<!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->
