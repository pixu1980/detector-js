# Browser Support & Legacy Platforms

The goal: **detection that is correct and crash-free on as many platforms as possible**, from evergreen browsers back to decade-old webviews — while still only requiring a single vanilla JS file.

## Build targets

- The browser bundle is compiled by **esbuild with `--target=es2016`** and includes the library's own polyfills (guarded, spec-shaped).
- Every environment-probe runs in **safe mode** (`Asserts.one/all(..., true)`), so a hostile or unusual environment can't crash the host page.
- Capability checks are **read-only or self-cleaning**: no network, no persistent storage (see [PRIVACY.md](../PRIVACY.md)).

## Compatibility matrix (practical)

| Environment | Status |
| --- | --- |
| Modern browsers (Chrome/Edge 80+, Firefox 78+, Safari 14+) | ✅ full |
| Chrome 52+, Firefox 54+, Safari 10.1+, Edge 14+ (ES2016 feature set) | ✅ full (target) |
| Older iOS Safari / Android WebView (ES2015) | ✅ dedicated legacy bundle `dist/detector.browser.es2015(.min).js` + polyfills (`Reflect`, `Array#includes/map`, `Object.getOwnPropertyDescriptors`, `String#startsWith`, Object `assign/merge`) |
| IE11-era (ES5) | ⚠️ not provided: esbuild cannot transpile ES6 classes/const/default-args down to ES5 ("not supported yet"). A legacy ES2015 bundle is shipped; a true ES5 pass would need Babel — tracked in docs/roadmap, open an issue if it matters |

## Legacy bundle
```html
<script src="dist/detector.browser.es2015.min.js"></script>
```
Same global API (`new Detector()`), same polyfills — intended for older iOS Safari/Android WebViews. Modern browsers should use the standard `detector.browser.min.js` (ES2016).
| Node.js (CJS/ESM), Deno, Bun | ✅ (UA injectable; see examples) |
| Web Workers | ✅ (`self`-first global root) |

## How we keep old platforms "correct"
1. **UA-first detection** — browser/OS/engine rules follow the classic `useragent`-parsing patterns; version parsing is regex-captured and falls back to `'n/a'`.
2. **Feature probes never throw** — `safe` mode everywhere; every probe that creates a DOM node cleans up after itself.
3. **Polyfills are conditional** — only installed when missing, matching standard semantics.
4. **No modern-API dependence for detection** — new WebAPIs are *detected*, not required: e.g. `webGPU` is `'gpu' in navigator`, not used as `navigator.gpu.requestAdapter()`.

## Note on "oldest" vs "largest"
Supporting truly ancient engines (IE10/11) means transpiling classes and `?.` — doable with an ES5 target, but it grows the bundle. If you need that, we recommend the standalone global bundle (polyfills included) and we accept contributions/ADRs for an ES5 build variant.