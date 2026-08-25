# Migration Guide — v1 / v2 → v3 (3.0.0)

This guide walks every breaking change between the published 1.x/2.x packages and
**detector-js v3** (monorepo, vanillaJS, esbuild). Each section has a *before/after*.

> The next release is **3.0.0** (baseline 2.0.11 + breaking commits — run `pnpm release`).
> Types, docs and bundles are built by `pnpm build` (esbuild + marked).

## 1. Structure & packages

| v1 / v2 | v3 |
| --- | --- |
| single `detector-js` (flat, or TS monorepo with `@detector-js/*` 0.0.x) | vanillaJS monorepo: `@detector-js/{core,feature,software,hardware,detector}` all **same version** (e.g. 3.0.0) |
| build: rollup + babel / parcel | **esbuild** (`scripts/build.mjs`) — `pnpm build` |

There is **no more TS source**: the implementation is zero-dependency ES6; types are
**generated from the JSDoc comments** (`scripts/build-dts.mjs`, wired in `pnpm build`).

## 2. Exports — named everywhere

Browser global (dist `detector.browser.min.js`):
```html
<!-- v2 (broken namespace) --> <script src="..."></script><script>new Detector.Detector() /* or new D() wrapper */</script>
<!-- v3 --> <script src="dist/detector.browser.min.js"></script><script>const d = new Detector()</script>
```
CommonJS / ESM:
```js
// v1: const Detector = require('detector-js')
// v3:
const { Detector } = require('detector-js');        // CJS
import { Detector } from 'detector-js';             // ESM
import { Feature } from '@detector-js/feature';     // scoped packages
```
Scoped-package exports are named: `software.Browser/Engine/OS`, `feature.Feature/AudioFeature/VideoFeature`,
`hardware.Platform/Device/CPU/GPU`, `core.Asserts/FlagsClass/CssFlagsClass`, `detector.Detector`.

## 3. `cssFlags` defaults to `false` (privacy by default)

```js
// v1: new Detector() added djs--* classes on <html> automatically
// v3: opt-in
const d = new Detector(null, true, true, 'djs');  // (ua, values, cssFlags, cssFlagsPrefix)
```

## 4. Real OS & CPU versions (async upgrade)

Modern macOS sends the legacy-compat UA `"Mac OS X 10_15_7"`, so the sync result used to say
`Catalina` on Sonoma/Sequoia/Tahoe, and Apple Silicon reported `x64/intel`.

```js
// v3
const d = new Detector();
await d.upgrade();          // client hints (chromium) + GPU evidence (safari/webkit)
d.os   // { name: 'macOS', version: '26.6.2', versionName: 'Tahoe' }
d.cpu  // { platform: 'MacIntel', cores: 10, architecture: 'arm64', vendor: 'apple' }
```
- `upgrade()` is auto-started by the constructor (non-blocking); safe no-op when hints are
  unavailable (Safari/Firefox) or denied (`Permissions-Policy: ch-ua-high-entropy-values`).
- macOS version names run **Tempo → Tahoe (26)** (11 Big Sur, 12 Monterey, 13 Ventura,
  14 Sonoma, 15 Sequoia — **16–25 do not exist**, Apple renumbered 15→26 in 2025).
- Apple Silicon: detected from Client Hints `architecture` or the WebGL GPU identity
  ("Apple M1 …" / "Apple GPU").

## 5. Detection fixes that change results

| Case | v1/v2 | v3 |
| --- | --- | --- |
| Chromium-based Edge (UA `Edg/`) | `Chrome` | `Edge` |
| desktop Opera (token `OPR/`) | `OperaMobile` | `Opera` |
| Samsung Internet | sometimes `Chrome` | `SamsungBrowser` |
| Electron app | sometimes `Chrome` | `Electron` |
| arm64 UA token | `x64` | `arm64` |
| `navigator.platform 'MacIntel'` | proof of Intel | ignored (legacy compat) |

New browsers added in v3: DuckDuckGo, Facebook, Instagram, TikTok, Kiwi, HuaweiBrowser, Line,
plus ~90 feature flags (WebGPU, WebAuthn, Wake Lock, Web Share, Web Locks, WebXR, …).

## 6. Public API changes

- `Asserts._checkAssert` → **`Asserts.checkAssert`** (now public, upstream v2 naming).
- Environment roots (`ua`, `root`, `process`, `navigator`, `document`, `flags`, `cssFlagsPrefix`)
  are **getters kept after construction** (v2 parity).
- `Platform` no longer imports `OS`/`Browser` — it reads the injected `flags` object
  (call it with the Detector output as before — no consumer change).
- `Device` remains a base placeholder.
- `index.d.ts` / per-package `.d.ts`: generated from JSDoc — run `pnpm build` to refresh;
  `tsc`-checked via `pnpm types:check`.

## 7. Build & contribution toolchain

```sh
# v1: yarn + rollup / v2: parcel + lerna
# v3 (pnpm):
pnpm install
pnpm build        # bundles (es2016 + es2015 legacy), docs pages (marked), types (JSDoc)
pnpm test         # unit (node:test) + smoke + e2e (playwright chromium + webkit)
pnpm release      # conventional-commits: bumps all packages in sync + changelog + tag
pnpm sri          # CDN integrity snippets
```

## 8. Browser support

| Bundle | Target | Use |
| --- | --- | --- |
| `dist/detector.browser.min.js` | ES2016 + polyfills | modern evergreen |
| `dist/detector.browser.es2015.min.js` | ES2015 + polyfills | legacy iOS/Android WebViews |
| `dist/detector.js` / `detector.mjs` | ES2016 | Node / bundlers (CJS + ESM via `exports`) |

True ES5 (IE11) is not shipped (esbuild limitation) — see [docs/roadmap.md](roadmap.md).

## 9. Migration checklist

- [ ] replace `new Detector.Detector()` / `Detector.detector`-style globals with `new Detector()`
- [ ] update imports to named exports (`const { Detector } = require(...)`)
- [ ] pass `cssFlags: true` explicitly if you relied on auto CSS classes
- [ ] `await detector.upgrade()` when you need the real OS/CPU (else UA-based values are returned)
- [ ] re-check any hardcoded expectations for Edge/Opera/Samsung/Electron/cpu.architecture
- [ ] update `<script>` to the pinned CDN + SRI (`pnpm sri`)
- [ ] run `pnpm build && pnpm test && pnpm release`