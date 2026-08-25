# API Reference

All classes are plain ES6 classes with **getters** for detections. Two base classes provide the serialization:

## FlagsClass
- `get ua` → the UA string in use
- `get root` / `process` / `navigator` / `document` → the relevant environment roots (kept available after construction)
- `toFlags()` → flattened object of every truthy getter + own data properties
- `toValues()` → compact object: booleans collapse into the class "name" key (`{ name: 'Chrome' }`), other values kept

## CssFlagsClass
- `get flags`, `get cssFlagsPrefix`
- `toCssFlags()` → `['<prefix>--<flag>--<value>']` strings (used only when `cssFlags` is enabled)

## Asserts
- `Asserts.checkAssert(assert, safe?)` — runs a value or function (try/catch when `safe`)
- `Asserts.all(list, safe?)` — every element truthy
- `Asserts.one(list, safe?)` — at least one element truthy

## @detector-js/software
- **Browser** — getters for 60+ browsers (Chrome, Firefox, Safari, Edge, Opera, Brave, Vivaldi, Samsung Internet, DuckDuckGo, Facebook, Instagram, TikTok, Kiwi, HuaweiBrowser, Line, Electron, …) + mobile variants (`ChromeMobile`, `SafariMobile`, …); `name`/`version` after `toValues()`.
- **Engine** — `Blink`, `Gecko`, `WebKit`, `Trident`, `EdgeHTML`, `Presto`, `KHTML`, `Goanna`, …
- **OS** — `Windows`, `macOS` (+ version names Tempo→Sequoia), `iOS`, `Android` (+ Cupcake→Pie), `Linux` (+ distro names), `Unix`, `ChromiumOS`, plus legacy/mobile/TV OSs; `versionName` from `toValues()`.

## @detector-js/hardware
- **Platform** — `desktop`, `smartphone`, `tablet`, `tv`, `console`, `bot`, `mobile`
- **CPU** — `platform`, `cores`, `architecture`, `vendor` (intel/amd/arm/…), vendor flags
- **GPU** — `webGLVendor`, `webGLRenderer`, `vendor`, `model`, `renderer` (WebGL-based, safe-mode)
- **Device** — placeholder base for vendor-specific device flags

## @detector-js/feature
Constructor-computed flags (instance properties): `addEventListener`, `asyncScript`, `battery`, `bluetooth`, `broadcastChannel`, `caches`, `clipboard`, `cors`, `credentials`, `deferScript`, `fetch`, `file`, `fileSystem`, `fullscreen`, `fullscreenKeyboard`, `gamepad`, `geolocation`, `historyAPI`, `indexedDB`, `intersectionObserver`, `littleEndian`, `localStorage`, `matchMedia`, `mediaCapabilities`, `mediaRecorder`, `mediaSession`, `nfc`, `notifications`, `offscreenCanvas`, `online`, `paymentRequest`, `permissions`, `querySelector`, `querySelectorAll`, `resizeObserver`, `serial`, `serviceWorker`, `speechSynthesis`, `storage`, `structuredClone`, `typedArray`, `usb`, `userMedia`, `vibration`, `visualViewport`, `wakeLock`, `webAssembly`, `webAuthn`, `webCrypto`, `webLocks`, `webRTC`, `webShare`, `webSocket`, `webXr`, `worker`.

Read-only getters: `pointerEnabled`, `pixelRatio`, `pointerLock`, `quirksMode`, `css3D`, `cssTransform`, `cssTransition`, `deviceMotion`, `deviceOrientation`, `contextMenu`, `classList`, `placeholder`, `viewportUnit`, `remUnit`, `canvas`, `svg`, `webp`, `webGL`, `webGL2`, `webGPU`, `webVR`, `touch`, `forceTouch`, `pointerEvents`, `srcset`, `sizes`, `pictureElement`, `dialogElement`, `deviceMemory` (value), `touchPoints` (value).

**AudioFeature** — `supported`, `context`, `formats.{mp3,webm,ogg,opus,wav,m4a}`.
**VideoFeature** — `supported`, `formats.{mp4,ogv,webm}`.

## @detector-js/detector
`Detector extends FlagsClass` — composes everything:

| property | source |
| --- | --- |
| `feature` | `Feature` + `AudioFeature` + `VideoFeature` merged |
| `browser` | `Browser.toValues()/toFlags()` |
| `engine` | `Engine…` |
| `os` | `OS…` |
| `cpu` | `CPU…` |
| `gpu` | `GPU.toFlags()` |
| `platform` | `Platform…` |

Methods: `toFlags()`, `toValues()`, `setCssFlags()`. Getters: `ua`, `root`, `process`, `navigator`, `document`, `booleanFlagsValuePropertyName`.

## Versioning & release
SemVer; latest release **3.x**; current dev version **3.0.0**. See [GOVERNANCE.md](../GOVERNANCE.md).