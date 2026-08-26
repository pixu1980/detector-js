# Toolchain & Build

DetectorJS is a **vanillaJS monorepo**: no runtime dependencies, and a deliberately small dev toolchain.

| Concern | Tool |
| --- | --- |
| Bundling | **esbuild** (replaces the old rollup + babel stack) |
| Linting | eslint 7 (airbnb config, tuned) |
| Unit tests | `node:test` (Node's built-in runner - zero deps) |
| Integration smoke | `node test/smoke.js` |
| E2E | Playwright + Chromium |
| Docs | jsdoc (optional) |

## Commands (root)

```sh
pnpm install        # install dev toolchain (workspace-aware)
pnpm build          # build all packages + root bundles via scripts/build.mjs
pnpm lint           # eslint on packages, test, browser, scripts
pnpm test           # unit (per-package + shared) → smoke → e2e (scripts/test.mjs)
pnpm serve          # static site on the first free port
pnpm readme         # regenerate README.md from pkg-2-readme.template.md
```

## Build matrix

`scripts/build.mjs` produces (esbuild, target `es2016`, sourcemaps, `__VERSION__` injected via `define`):

- **per package** (`packages/*`): `dist/<name>.js` (CJS) + `dist/<name>.mjs` (ESM), `@detector-js/*` kept **external** (resolved via node_modules/workspaces at runtime);
- **root node builds**: `dist/detector.js` (CJS) + `dist/detector.mjs` (ESM), externals external;
- **root browser builds**: `dist/detector.browser.js` + `.min.js` - **self-contained IIFE** (everything bundled) that assigns the `Detector` **class** to the global (entry: `browser/index.js`), so `new Detector()` works with a plain `<script>` tag.

`--target=es2016` + bundled polyfills (core package) keep the library usable on **legacy browsers** (see [browser-support.md](./browser-support.md)).

## Why esbuild?
- One fast, dependency-light binary replaces rollup + babel + several plugins.
- Deterministic `define` injection for `__VERSION__` (previously a rollup `replace` placeholder).
- IIFE/global output is first-class, which fixed the old UMD namespace problem (`window.Detector` was an object; now it's the class).
- Polyfills can be bundled for legacy targets trivially.

## Publishing
Packages are SemVer-pinned (`workspace:*` internally, resolved to the real version at publish). `package.json` exposes `exports` (import/require/types), `sideEffects`, `types`, `unpkg`/`jsdelivr` (root), and CI builds `dist/` before tagging.

*Recorded as ADR: [ADR-0001 - esbuild toolchain](../docs/adr/0001-esbuild-toolchain.md).*