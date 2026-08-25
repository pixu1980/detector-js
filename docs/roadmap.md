# Roadmap

Priorities captured from the maintainer interview (3.0.0 release-prep cycle).

## Next (post-3.0.0)

- **[DONE] Full MDN Web API coverage** — `Feature` now probes the complete MDN `/docs/Web/API`
  interface index (1021 globals, camelCase flags, never shadowing curated ones); regenerable via
  `scripts/update-webapis.mjs`. See CHANGELOG "Unreleased".
- **[P1] More platforms / browsers / OSs** — expand the UA detection tables (browsers, engines,
  OSs), verified against MDN Browser Compatibility Data before merging
  (see `CONTRIBUTING.md → Adding a new detection`).
- **[P1] GPU / vendor parsing** — normalize GPU identities: Apple M-series (M1…M5,
  Pro/Max/Ultra), NVIDIA GeForce, AMD Radeon, Intel Iris/Arc; expose structured
  `gpu.family`/`gpu.generation` in addition to the raw WebGL strings.
- **[P1] Types generated from JSDoc** — `scripts/build-dts.mjs` already emits `.d.ts` from the
  JSDoc comments at build time; harden it (richer `@typedef`, generics, `@memberof` mapping)
  and keep `pnpm types:check` (tsc) green.
- **[P2] Maintenance & hardening** — bugfixes, compat, coverage ↑ (currently ~89% lines),
  size budget is enforced in CI (`pnpm check:size`).

## Backlog / ideas

- **True ES5 bundle**: esbuild cannot transpile ES6 classes/const/default-args to ES5
  ("not supported yet"); a Babel-based legacy pass would be the only way — weigh size vs
  IE11-era value. Open an issue if needed.
- **jsdoc HTML docs**: the committed `docs/*.html` (jsdoc 1.3.2-era) are stale; regenerate
  with modern jsdoc tooling or retire in favor of the marked static pages.
- **Browser scope**: formalize a browser-support matrix per flag (MDN-driven JSON table).
- **Benchmarks**: startup/perf micro-benchmark (esbuild metafile + CI chart).
- **CSP guide**: document `connect-src`/`script-src` recommendations when embedding
  the bundle (the library makes zero network calls by design).

## Non-goals

- No runtime dependencies, ever (external network/storage/telemetry = rejected).
- No server-side components; no data collection (see `PRIVACY.md`).