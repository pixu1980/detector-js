# Getting Started

DetectorJS (next major **3.0.0**, published baseline **2.0.11**) detects the host environment: browser, engine, OS, CPU, GPU, platform and ~90 WebAPI capabilities — in pure vanillaJS, with zero runtime dependencies, and **without ever sending data anywhere** ([PRIVACY.md](../PRIVACY.md)).

## Install

```sh
npm install detector-js
# or
pnpm add detector-js
# or standalone via CDN (jsDelivr):
# <script src="https://cdn.jsdelivr.net/npm/detector-js@3.0.0/detector.browser.min.js"></script>
```

### CDN with SRI (pinned integrity)

```html
<script
  src="https://cdn.jsdelivr.net/npm/detector-js@<version>/detector.browser.min.js"
  integrity="sha384-<computed-at-release>"
  crossorigin="anonymous"></script>
```

Generate the exact SRI snippets for the built bundles with:

```sh
pnpm sri     # prints integrity + pinned jsDelivr/unpkg <script> tags
```

> The integrity hash changes with every version (the bundle embeds `__VERSION__`):
> run `pnpm sri` at release time (the release script prints it automatically) and pin
> the published version. Legacy webviews: use `dist/detector.browser.es2015.min.js`.

## Quick start

### Browser (script tag)

```html
<script src="dist/detector.browser.min.js"></script>
<script>
  const detector = new Detector();          // uses the real navigator.userAgent
  const flags   = detector.toFlags();       // full tree
  const values  = detector.toValues();      // compact summary
  document.body.dataset.platform = detector.platform;
</script>
```

### ESM

```js
import { Detector } from 'detector-js';

const detector = new Detector();
console.log(detector.browser, detector.os, detector.platform);
```

### CommonJS

```js
const { Detector } = require('detector-js');
const detector = new Detector(null, true, false);
```

## Constructor options

```js
new Detector(ua, values, cssFlags, cssFlagsPrefix)
```

| param | default | meaning |
| --- | --- | --- |
| `ua` | `navigator.userAgent` | UA string to parse (injectable for testing) |
| `values` | `true` | compact `{ name, version, … }` objects (vs full `toFlags()` tree) |
| `cssFlags` | `false` | add `djs--…` classes to `<html>` (intentionally **off** by default) |
| `cssFlagsPrefix` | `'djs'` | prefix used with `cssFlags` |

## Typical output

```js
detector.browser // { name: 'Chrome', version: '120.0.0.0' }
detector.os      // { name: 'macOS', version: '10.15.7', versionName: 'Catalina' }
detector.platform// 'desktop'
detector.cpu     // { platform: 'MacIntel', cores: 8, architecture: 'x64', vendor: 'intel' }
detector.gpu     // { webGLVendor: 'WebKit', vendor: 'Apple Inc.', model: 'Apple M1', ... }
detector.feature // 1100+ flags: the curated WebAPIs (webGPU, webAuthn, …) plus the full MDN /Web/API catalog (abortController, rtcPeerConnection, …)
```

## Using only a slice of the library

The monorepo ships scoped packages — use exactly what you need:

```js
import { Browser } from '@detector-js/software';
import { Feature } from '@detector-js/feature';
const browser = new Browser();
const feature = new Feature();
```

## TypeScript

Types are included (`detector-js` ships `index.d.ts`, each `@detector-js/*` package ships its own). You get typed `Detector`, `Browser`, `OS`, `CPU`, `GPU`, `Feature`… out of the box.

## Next steps
- [API reference](./api.md)
- [Toolchain & build](./toolchain.md)
- [Browser support & legacy platforms](./browser-support.md)
- [Privacy & legal notes](../PRIVACY.md)
- [Examples](../examples/)