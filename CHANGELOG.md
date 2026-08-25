

## [Version 3.0.0](https://github.com/pixu1980/detector-js/releases/tag/v3.0.0) (2025-8-25)

### Toolchain (esbuild)
- **esbuild** replaces rollup + babel + plugins (see ADR `docs/adr/001`)
- builds: per-package CJS/ESM (workspace deps external), root CJS/ESM, self-contained browser bundles
- **fixed global export**: `dist/detector.browser(.min).js` now assigns the `Detector` **class** to the
  global — `new Detector()` works with a plain `<script>` tag (previously `window.Detector` was a namespace object)
- `__VERSION__` injected at build time via esbuild `define`
- build targets `es2016` + bundled conditional polyfills → old-platform friendly; runtime-agnostic
  roots (`self`/`window`/`globalThis`/`global` with `typeof` guards — Node-safe), fixed bare-`window`
  usages (`Brave`, `MSStream`) that crashed under Node
- **fix: Chromium-based Edge mis-detected as Chrome** — UA token is `Edg/` (regex now `(?:edge|edg)`)
- fix: desktop Opera mis-detected as `OperaMobile` (OPR token now requires a mobile marker)
- **real OS version via User-Agent Client Hints**: modern macOS always sends the legacy-compat UA
  `"Mac OS X 10_15_7"` (→ Catalina) even on Sonoma/Sequoia/Tahoe; `OS.upgrade()` /
  `detector.upgrade()` resolve the high-entropy `platformVersion` and report the real version
  and name (e.g. `26.6.2 · Tahoe`, Windows 11) — auto-started in the constructor, safe no-op when
  hints are unavailable (Safari/Firefox) or denied (Permissions-Policy `ch-ua-high-entropy-values`)
- macOS version names extended to **Tahoe (26)** — versions 16–25 do not exist (Apple jumped
  15 → 26 in 2025); Darwin→marketing mapping (20→11 … 26→26)
- **Safari/WebKit fallback**: no Client Hints there, and the UA keeps the legacy
  `"Mac OS X 10_15_7"`; since Safari 26 is 1:1 with macOS 26, the `Version/26.x` token now
  reveals the real version synchronously (e.g. `26.5 · Tahoe`); pre-26 Safari stays UA-based
- Android current majors (10–17) parse correctly (numerical naming since Android 10)
- **CPU architecture fixed for Apple Silicon**: `navigator.platform "MacIntel"` is a legacy
  compat string shown on ARM Macs too — it no longer forces `x64`/`intel`; the `arm64` UA token
  is no longer mapped to `x64` (upstream bug). Real architecture from Client Hints
  (`architecture`/`bitness`, via `CPU.upgrade()`/`detector.upgrade()`) or from **GPU evidence**
  (WebGL "Apple M1…" → `arm64 · apple`), refined synchronously at construction — MacBook Pro
  M1 now reports `{ architecture: 'arm64', vendor: 'apple' }` instead of `x64/intel`

### Monorepo & release readiness
- npm-workspaces monorepo mirroring v2 layout (`@detector-js/{core,feature,software,hardware,detector}`, **3.0.0** each)
- `exports` map (import/require/types), `types` (`.d.ts`), `sideEffects`, `engines`, `publishConfig`, `unpkg`/`jsdelivr`
- zero external runtime dependencies; `workspace:*` internally (resolved at publish)
- `Platform` decoupled from `software` (injected `flags` object, like v2)

### Tests & quality
- unit tests per package (`node:test`) + shared suite `test/unit` (UA table, WebAPI flags, platform, parity)
- integration smoke `test/smoke.js`; **e2e with Playwright** (`test/e2e`) in real Chromium
- **e2e privacy contract**: a page embedding the bundle performs ZERO network requests; output contains no endpoints/telemetry
- 0 lint errors (eslint airbnb tuned); CI workflow `.github/workflows/ci.yml` (Node 18/20/22)

### Site & community
- marketing landing page `index.html` (live detection via `new Detector()`, feature grid, integrations, privacy section) + `demo.html`
- **PRIVACY.md** — full legal walkthrough: GDPR (arts. 4/5/25/30/32/35, recitals 26/30), ePrivacy 2002/58 art. 5(3),
  Italy D.Lgs. 196/2003 + 101/2018 & Garante practice, US CCPA/CPRA + other state laws + FTC, PIPEDA/LGPD/UK-GDPR & PECR,
  Eckersley (2010), Acar et al. (2013); developer checklists
- governance & community: `GOVERNANCE.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, issue/PR templates
- docs: getting-started, API reference, toolchain, browser-support, ADR
- examples: node-cjs, node-esm, browser-global, bundler
- per-package READMEs

[...full changes](https://github.com/pixu1980/detector-js/compare/v1.4.0...v3.0.0)
## [Version 3.0.0](https://github.com/pixu1980/detector-js/releases/tag/v3.0.0) (2025-8-25)

### Monorepo (BREAKING CHANGES)

- aligned versioning to the latest npm release (2.0.11) and prepared the next **major 3.0.0**
- restructured the flat vanillaJS codebase into an npm workspaces **monorepo** mirroring the v2 layout:
  - `@detector-js/core` (Asserts, FlagsClass, CssFlagsClass, polyfills)
  - `@detector-js/feature` (Feature, AudioFeature, VideoFeature + modern WebAPIs)
  - `@detector-js/software` (Browser, Engine, OS)
  - `@detector-js/hardware` (Platform, Device, CPU, GPU)
  - `@detector-js/detector` (Detector)
- all packages are now versioned **3.0.0** (root + scoped), zero external runtime dependencies
- named exports everywhere: `detector.Detector`, `software.Browser`, `feature.Feature`, ...
- `Platform` decoupled from `software` (uses the injected `flags` object, like v2)
- root builds: `dist/detector.js` (CJS), `dist/detector.mjs` (ESM), `dist/detector.browser.js`/`.min.js` (self-contained UMD `Detector`)
- per-package `dist/*.js` (CJS) + `dist/*.mjs` (ESM) builds with workspace deps external
- per-package `__tests__` + root `test/smoke.js` (full detection suite)

### Kept from v1.4.0

- vanillaJS (ES6) zero-dependency implementation and all v2.x behavior backports
- new WebAPI detections (webGPU, webAuthn, wakeLock, webShare, webLocks, ...)
- new browser detections (DuckDuckGo, Facebook, Instagram, TikTok, Kiwi, HuaweiBrowser, Line)
- macOS version names up to Sequoia; Electron/SamsungBrowser name-resolution fixes

[...full changes](https://github.com/pixu1980/detector-js/compare/v1.4.0...v3.0.0)

## [Version 1.4.0](https://github.com/pixu1980/detector-js/releases/tag/v1.4.0) (2025-8-25)

### Restored

- restored the historical vanillaJS zero-dependency codebase (v1.3.2) from git history/remote (branch `vanilla`)

### Behavior & fixes backported from upstream v2.x

- fixed Electron detection bug (`process?.type` / `process?.versions?.electron`): [`7fc0ce3`](https://github.com/pixu1980/detector-js/commit/7fc0ce3)
- fixed `getTypedArray` bug in `getLittleEndian` (`getTypedArray.bind(this)`): [`b2647a6`](https://github.com/pixu1980/detector-js/commit/b2647a6)
- fixed `pointerEvents` constructor error (`!!this._root.PointerEvent`): [`6a92328`](https://github.com/pixu1980/detector-js/commit/6a92328)
- fixed Trident detection (`this._document?.documentMode`): [`7fc0ce3`](https://github.com/pixu1980/detector-js/commit/7fc0ce3)
- reworked debug logging: startup `console.log` now only in development envs ([`a4e3ee6`](https://github.com/pixu1980/detector-js/commit/a4e3ee6))
- `FlagsClass.root` now also resolves from `self` (workers safe)
- kept `root` / `process` / `navigator` / `document` / `ua` / `flags` getters available after construction
- `Asserts._checkAssert` renamed to `Asserts.checkAssert` (public API, upstream v2 naming)
- `Detector` constructor: `cssFlags` now defaults to `false` (upstream v2 behavior)
- macOS version names: added Big Sur (11), Monterey (12), Ventura (13), Sonoma (14), Sequoia (15)
- Electron, Samsung Internet, DuckDuckGo, Facebook, Instagram, TikTok, Kiwi, HuaweiBrowser, Line now win the browser `name` resolution (fixed ordering vs Chrome/Safari)

### New features (WebAPIs)

- added 20+ new WebAPI detectors to `feature`: webAuthn, webGPU, webGL2, webAssembly, fetch, webSocket, webRTC, mediaRecorder, mediaSession, mediaCapabilities, notifications, paymentRequest, indexedDB, webCrypto, clipboard, intersectionObserver, resizeObserver, visualViewport, wakeLock, webShare, speechSynthesis, gamepad, permissions, storage, webLocks, webXr, bluetooth, usb, serial, nfc, credentials, structuredClone, caches, offscreenCanvas, broadcastChannel, online + value getters `deviceMemory`, `touchPoints`
- new browser detectors: DuckDuckGo, Facebook, Instagram, TikTok, Kiwi, HuaweiBrowser, Line

[...full changes](https://github.com/pixu1980/detector-js/compare/v1.3.2...v1.4.0)

## [Version 1.3.2](https://github.blackmirror1980/:blackmirror1980/detector-js/releases/tag/v1.3.2) (2021-3-10)

### Bug fixes

- updated license and package infos: [`35957e6`](https://github.blackmirror1980/:blackmirror1980/detector-js/commit/35957e6)

[...full changes](https://github.blackmirror1980/:blackmirror1980/detector-js/compare/v1.3.1...v1.3.2)

## [Version 1.3.1](https://github.pixu1980/:pixu1980/detector-js/releases/tag/v1.3.1) (2021-3-9)

### Bug fixes

- - dumped dependencies - fix Brave false positive wip: [`312d2e2`](https://github.pixu1980/:pixu1980/detector-js/commit/312d2e2)
- - added lock files to gitignore - fixing Brave false positive wip: [`310c049`](https://github.pixu1980/:pixu1980/detector-js/commit/310c049)

[...full changes](https://github.pixu1980/:pixu1980/detector-js/compare/v1.3.0...v1.3.1)

## [Version 1.3.0](https://github.com/:pixu1980/detector-js/releases/tag/v1.3.0) (2021-3-3)

### New features

- added webp and brave support: [`f4ac0e7`](https://github.com/:pixu1980/detector-js/commit/f4ac0e7)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.2.2...v1.3.0)

## [Version 1.2.2](https://github.com/:pixu1980/detector-js/releases/tag/v1.2.2) (2020-12-11)

### Bug fixes

- added Reflect polyfill to fix IE issues: [`de55e59`](https://github.com/:pixu1980/detector-js/commit/de55e59)
- bumped dev dependencies: [`2ed0df3`](https://github.com/:pixu1980/detector-js/commit/2ed0df3)
- build v1.2.2: [`1ff15a9`](https://github.com/:pixu1980/detector-js/commit/1ff15a9)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.2.1...v1.2.2)

## [Version 1.2.1](https://github.com/:pixu1980/detector-js/releases/tag/v1.2.1) (2020-9-7)

### Bug fixes

- - added prettierrc configuration - bumped devDependencies to latest versions - linting fixes: [`b0fffa2`](https://github.com/:pixu1980/detector-js/commit/b0fffa2)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.2.0...v1.2.1)

## [Version 1.2.0](https://github.com/:pixu1980/detector-js/releases/tag/v1.2.0) (2020-2-6)

### New features

- - bumped dependencies - reworked polyfills - fixed IE 9+ bug for Reflect.ownKeys: [`c39650e`](https://github.com/:pixu1980/detector-js/commit/c39650e)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.12...v1.2.0)

## [Version 1.1.12](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.12) (2019-11-8)

### Bug fixes

- fixed dependencies: [`c002042`](https://github.com/:pixu1980/detector-js/commit/c002042)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.11...v1.1.12)

## [Version 1.1.11](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.11) (2019-11-8)

### Bug fixes

- removed sourcemaps from min builds: [`6256341`](https://github.com/:pixu1980/detector-js/commit/6256341)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.10...v1.1.11)

## [Version 1.1.10](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.10) (2019-11-7)

### Bug fixes

- fix tablet platform: [`67093b9`](https://github.com/:pixu1980/detector-js/commit/67093b9)
- build v1.1.10: [`96c1985`](https://github.com/:pixu1980/detector-js/commit/96c1985)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.9...v1.1.10)

## [Version 1.1.9](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.9) (2019-11-7)

### Bug fixes

- fix tablet platform: [`a39f611`](https://github.com/:pixu1980/detector-js/commit/a39f611)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.8...v1.1.9)

## [Version 1.1.8](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.8) (2019-11-7)

### Bug fixes

- fix platform tablet: [`0e845ff`](https://github.com/:pixu1980/detector-js/commit/0e845ff)
- build v1.1.8: [`01afff1`](https://github.com/:pixu1980/detector-js/commit/01afff1)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.7...v1.1.8)

## [Version 1.1.7](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.7) (2019-11-7)

### Bug fixes

- implementing proper feedback ordering: [`ef959c5`](https://github.com/:pixu1980/detector-js/commit/ef959c5)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.6...v1.1.7)

## [Version 1.1.6](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.6) (2019-11-7)

### Bug fixes

- fix for platform detection: [`f2fe3f2`](https://github.com/:pixu1980/detector-js/commit/f2fe3f2)
- build v.1.1.6: [`2f1512d`](https://github.com/:pixu1980/detector-js/commit/2f1512d)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.5...v1.1.6)

## [Version 1.1.5](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.5) (2019-11-7)

### Bug fixes

- platform os and browser fix: [`62c13cb`](https://github.com/:pixu1980/detector-js/commit/62c13cb)
- build v1.1.5: [`19a24cc`](https://github.com/:pixu1980/detector-js/commit/19a24cc)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.4...v1.1.5)

## [Version 1.1.4](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.4) (2019-11-7)

### Bug fixes

- hotfix module export: [`7e573d0`](https://github.com/:pixu1980/detector-js/commit/7e573d0)
- build v1.1.4: [`afca080`](https://github.com/:pixu1980/detector-js/commit/afca080)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.3...v1.1.4)

## [Version 1.1.3](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.3) (2019-11-7)

### Bug fixes

- dumped dependencies: [`f4557bf`](https://github.com/:pixu1980/detector-js/commit/f4557bf)
- fix for no css flags: [`310441e`](https://github.com/:pixu1980/detector-js/commit/310441e)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.2...v1.1.3)

## [Version 1.1.2](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.2) (2019-8-28)

### Bug fixes

- dumped dependencies: [`d39ca93`](https://github.com/:pixu1980/detector-js/commit/d39ca93)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.1...v1.1.2)

## [Version 1.1.1](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.1) (2019-2-4)

### Bug fixes

- fixed html css flags on IE: [`8b81bd8`](https://github.com/:pixu1980/detector-js/commit/8b81bd8)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.1.0...v1.1.1)

## [Version 1.1.0](https://github.com/:pixu1980/detector-js/releases/tag/v1.1.0) (2019-2-4)

### New features

- fix IE regex: [`885ccd4`](https://github.com/:pixu1980/detector-js/commit/885ccd4)

### Bug fixes

- fix cpuClass on IE: [`106c03c`](https://github.com/:pixu1980/detector-js/commit/106c03c)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.9...v1.1.0)

## [Version 1.0.9](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.9) (2019-2-4)

### Bug fixes

- fixed polyfills and added polyfill for IE getOwnPropertyDescriptors: [`d44f484`](https://github.com/:pixu1980/detector-js/commit/d44f484)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.8...v1.0.9)

## [Version 1.0.8](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.8) (2019-2-4)

### Bug fixes

- fix polyfills object.prototype.merge: [`d2cf93e`](https://github.com/:pixu1980/detector-js/commit/d2cf93e)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.7...v1.0.8)

## [Version 1.0.7](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.7) (2019-2-4)

### Bug fixes

- - updated safe env Assert checking - fixed Electron detection bug on windows: [`bd2c025`](https://github.com/:pixu1980/detector-js/commit/bd2c025)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.6...v1.0.7)

## [Version 1.0.6](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.6) (2019-1-31)

### Bug fixes

- separated indexes per build mode: [`fcf591a`](https://github.com/:pixu1980/detector-js/commit/fcf591a)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.5...v1.0.6)

## [Version 1.0.5](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.5) (2019-1-31)

### Bug fixes

- builds with module check: [`f3815cb`](https://github.com/:pixu1980/detector-js/commit/f3815cb)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.4...v1.0.5)

## [Version 1.0.4](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.4) (2019-1-31)

### Bug fixes

- disabled minified mangling: [`924256d`](https://github.com/:pixu1980/detector-js/commit/924256d)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.3...v1.0.4)

## [Version 1.0.3](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.3) (2019-1-31)

### Bug fixes

- updated electron version detection with a safe try catch: [`0cf7161`](https://github.com/:pixu1980/detector-js/commit/0cf7161)
- testing uglify compression options: [`75bda1b`](https://github.com/:pixu1980/detector-js/commit/75bda1b)
- implemented main (UMD), browser (IIFE) and module (CJS) builds: [`37745a4`](https://github.com/:pixu1980/detector-js/commit/37745a4)
- implemented normal and minified builds: [`dc57920`](https://github.com/:pixu1980/detector-js/commit/dc57920)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.2...v1.0.3)

## [Version 1.0.2](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.2) (2019-1-30)

### Bug fixes

- fix electron detection: [`66ab6b8`](https://github.com/:pixu1980/detector-js/commit/66ab6b8)
- fix electron detection: [`3772d4f`](https://github.com/:pixu1980/detector-js/commit/3772d4f)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.1...v1.0.2)

## [Version 1.0.1](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.1) (2019-1-30)

### Bug fixes

- fix process variable: [`881a0d0`](https://github.com/:pixu1980/detector-js/commit/881a0d0)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v1.0.0...v1.0.1)

## [Version 1.0.0](https://github.com/:pixu1980/detector-js/releases/tag/v1.0.0) (2019-1-30)

### Bug fixes

- reworking regexes for browsers: [`640185a`](https://github.com/:pixu1980/detector-js/commit/640185a)
- added toValues support: [`2e4d851`](https://github.com/:pixu1980/detector-js/commit/2e4d851)
- preparing first release: [`4805f1f`](https://github.com/:pixu1980/detector-js/commit/4805f1f)
- optimizations & regex rewriting: [`ac053e7`](https://github.com/:pixu1980/detector-js/commit/ac053e7)
- fix asserts flags & all browsers regex failure: [`14d2dc2`](https://github.com/:pixu1980/detector-js/commit/14d2dc2)
- preparing release 1.0: [`5b64cde`](https://github.com/:pixu1980/detector-js/commit/5b64cde)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v0.2.1...v1.0.0)

## [Version 0.2.1](https://github.com/:pixu1980/detector-js/releases/tag/v0.2.1) (2019-1-28)

### Bug fixes

- fixed docs returns: [`4fabd3e`](https://github.com/:pixu1980/detector-js/commit/4fabd3e)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v0.2.0...v0.2.1)

## [Version 0.2.0](https://github.com/:pixu1980/detector-js/releases/tag/v0.2.0) (2019-1-28)

### Breaking changes

- refactoring: [`b851b66`](https://github.com/:pixu1980/detector-js/commit/b851b66)

### Bug fixes

- added asserts class: [`9f35718`](https://github.com/:pixu1980/detector-js/commit/9f35718)
- first refactoring completed: [`eb45021`](https://github.com/:pixu1980/detector-js/commit/eb45021)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v0.1.8...v0.2.0)

## [Version 0.1.8](https://github.com/:pixu1980/detector-js/releases/tag/v0.1.8) (2019-1-15)

### Bug fixes

- fixed output file: [`1655c34`](https://github.com/:pixu1980/detector-js/commit/1655c34)
- fixed release script: [`6dfb73a`](https://github.com/:pixu1980/detector-js/commit/6dfb73a)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v0.1.7...v0.1.8)

## [Version 0.1.7](https://github.com/:pixu1980/detector-js/releases/tag/v0.1.7) (2019-1-15)

### Bug fixes

- replaced webpack with rollup: [`2425bb6`](https://github.com/:pixu1980/detector-js/commit/2425bb6)

[...full changes](https://github.com/:pixu1980/detector-js/compare/v0.1.6...v0.1.7)

## [Version 0.1.6](https://github.com/pixu1980/detector-js/releases/tag/v0.1.6) (2018-5-17)

### Bug fixes

- pkg-2-readme template updated: [`cee6fe2`](https://github.com/pixu1980/detector-js/commit/cee6fe2)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.1.5...v0.1.6)

## [Version 0.1.5](https://github.com/pixu1980/detector-js/releases/tag/v0.1.5) (2018-5-17)

### New features

- added webVR detection flag bumped dependencies: [`626e7e8`](https://github.com/pixu1980/detector-js/commit/626e7e8)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.1.4...v0.1.5)

## [Version 0.1.4](https://github.com/pixu1980/detector-js/releases/tag/v0.1.4) (2018-3-20)

### Bug fixes

- fixed global detector export: [`bb06ac3`](https://github.com/pixu1980/detector-js/commit/bb06ac3)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.1.3...v0.1.4)

## [Version 0.1.3](https://github.com/pixu1980/detector-js/releases/tag/v0.1.3) (2018-3-20)

### Bug fixes

- added lodash dependency: [`fa38af3`](https://github.com/pixu1980/detector-js/commit/fa38af3)
- fixed engine css flags: [`445de93`](https://github.com/pixu1980/detector-js/commit/445de93)
- fixed detector export: [`6231490`](https://github.com/pixu1980/detector-js/commit/6231490)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.1.2...v0.1.3)

## [Version 0.1.2](https://github.com/pixu1980/detector-js/releases/tag/v0.1.2) (2018-3-20)

### Bug fixes

- remove flavor-js dependency in order to make it work with angular5 router: [`fe510d0`](https://github.com/pixu1980/detector-js/commit/fe510d0)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.1.1...v0.1.2)

## [Version 0.1.1](https://github.com/pixu1980/detector-js/releases/tag/v0.1.1) (2018-3-20)

### Bug fixes

- added css flags by default: [`07ffc88`](https://github.com/pixu1980/detector-js/commit/07ffc88)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.1.0...v0.1.1)

## [Version 0.1.0](https://github.com/pixu1980/detector-js/releases/tag/v0.1.0) (2018-3-20)

### Breaking changes

- updated version/build stuff added html css classes feature updated dependencies: [`9cc3932`](https://github.com/pixu1980/detector-js/commit/9cc3932)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.0.11...v0.1.0)

## [Version 0.0.11](https://github.com/pixu1980/detector-js/releases/tag/v0.0.11) (2018-3-8)

### Bug fixes

- v0.0.10: [`ce37a3f`](https://github.com/pixu1980/detector-js/commit/ce37a3f)
- bumped ssri to v5.2.4 in order to fix the security vulnerability issue: [`0db5264`](https://github.com/pixu1980/detector-js/commit/0db5264)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.0.10...v0.0.11)

## [Version 0.0.10](https://github.com/pixu1980/detector-js/releases/tag/v0.0.10) (2018-1-26)

### New features

- added battery feature detection: [`3f3afb1`](https://github.com/pixu1980/detector-js/commit/3f3afb1)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.0.9...v0.0.10)

## [Version 0.0.9](https://github.com/pixu1980/detector-js/releases/tag/v0.0.9) (2018-1-26)

### Bug fixes

- v0.0.8: [`73cc62c`](https://github.com/pixu1980/detector-js/commit/73cc62c)
- Set theme jekyll-theme-cayman: [`56a7a05`](https://github.com/pixu1980/detector-js/commit/56a7a05)
- Delete CNAME: [`ae04f85`](https://github.com/pixu1980/detector-js/commit/ae04f85)
- Create CNAME: [`068f782`](https://github.com/pixu1980/detector-js/commit/068f782)

[...full changes](https://github.com/pixu1980/detector-js/compare/v0.0.8...v0.0.9)


---

Generated by [changelog.md](https://github.com/egoist/changelog.md)
