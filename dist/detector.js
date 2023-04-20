require("@detector-js/detector");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $1572597be94ce13f$exports = {};
$1572597be94ce13f$exports = JSON.parse('{"name":"detector-js","version":"1.3.2","description":"DetectorJS, zero-dependency platform/environment detector written in TypeScript","keywords":["detector","detector-js","detection","feature-detection","platform-detection","cpu-detection","gpu-detection","browser-detection","layout-engine-detection","engine-detection","os-detection","useragent-parser","zero-dependency","es6","javascript"],"source":"src/detector.ts","main":"dist/detector.js","module":"dist/detector.mjs","types":"dist/detector.types.d.ts","repository":{"type":"git","url":"git+https://github.com/pixu1980/detector-js.git"},"author":"Emiliano \'Pixu\' Pisu <pisuemiliano.1980@gmail.com>","contributors":["Emiliano \'Pixu\' Pisu <pisuemiliano.1980@gmail.com>"],"license":"MIT","private":true,"scripts":{"docs":"rm -rf docs && typedoc --tsconfig ./jsconfig.json && echo \'Documentation built in ./docs folder\'","readme":"pkg-2-readme package.json > README.md -t \\"./pkg-2-readme.template.md\\" && echo \'README.md file built\' || echo \'README.md building error\'","changelog":"changelog && echo \'CHANGELOG.md file built\'","lerna":"lerna bootstrap && lerna link","cache:clear":"rm -rf .parcel-cache dist","deps:clear":"rm -rf packages/**/dist node_modules yarn.lock","clear":"yarn cache:clear && yarn deps:clear","reset":"yarn clear && yarn lerna && yarn serve","restart":"yarn cache:clear && yarn serve","serve":"parcel ./src/index.html","watch:all":"lerna exec --parallel yarn watch","prewatch":"yarn watch:all","watch":"parcel watch","build:all":"lerna run build","prebuild":"yarn build:all","build":"parcel build","prerelease":"yarn build:all && yarn build && yarn changelog && yarn readme && yarn docs","release":"lerna publish && yarn publish"},"bugs":{"url":"https://github.com/pixu1980/detector-js/issues"},"homepage":"https://github.com/pixu1980/detector-js#readme","documentation":"https://pixu1980.github.io/detector-js/docs/index.html","todo":"https://github.com/pixu1980/detector-js#todo","files":["dist"],"workspaces":["packages/*"],"dependencies":{"@detector-js/core":"^0.0.1","@detector-js/feature":"^0.0.1","@detector-js/hardware":"^0.0.1","@detector-js/software":"^0.0.1","@detector-js/detector":"^0.0.1"},"devDependencies":{"@parcel/packager-ts":"2.8.3","@parcel/transformer-typescript-types":"2.8.3","@types/node":"18.15.12","changelog":"1.4.2","lerna":"6.6.1","parcel":"2.8.3","pkg-2-readme":"0.0.6","typedoc":"^0.24.4","typescript":"5.0.4"}}');



console.log(`DetectorJS v${(0, (/*@__PURE__*/$parcel$interopDefault($1572597be94ce13f$exports))).version} initialized`);


//# sourceMappingURL=detector.js.map
