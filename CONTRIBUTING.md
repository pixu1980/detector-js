# Contributing to DetectorJS

Thanks for helping! This project values **zero external dependencies**, **privacy by design**, and **support for old platforms**.

## Quick start

```sh
pnpm install          # dev toolchain (esbuild, eslint, node:test, playwright)
pnpm build            # builds all packages + root bundles (dist/)
pnpm lint             # eslint on packages, test, browser, scripts
pnpm test             # unit tests (node:test) + e2e (playwright) + smoke
pnpm serve            # serves the site on the first free port
```

## Repo layout (monorepo)

```
packages/
  core/       @detector-js/core       Asserts, FlagsClass, CssFlagsClass, polyfills
  feature/    @detector-js/feature    Feature, AudioFeature, VideoFeature
  software/   @detector-js/software   Browser, Engine, OS
  hardware/   @detector-js/hardware   Platform, Device, CPU, GPU
  detector/   @detector-js/detector   Detector (composer)
browser/      esbuild entry for the UMD/global bundle (window.Detector)
scripts/      build & test orchestration (esbuild, no rollup/babel)
test/         integration smoke + e2e (playwright)
docs/         governance, getting-started, API, privacy, security docs
```

## Rules

1. **No new runtime dependencies — ever.** If you think one is needed, open an issue first (it will likely be closed: we polyfill or implement in-house).
2. **No network, no storage, no telemetry.** The privacy contract in [PRIVACY.md](PRIVACY.md) is a test: `test/e2e/privacy.e2e.js` asserts a page embedding the bundle makes zero requests. Any new capability probe must be read-only or self-cleaning, and added to that test.
3. **Keep it vanilla & old-platform friendly.** Source is ES2016+ with optional chaining used sparingly; the build targets `es2016` (polyfills cover the rest). Avoid APIs like `Map`/`Set` in hot paths without need; keep `assists` in safe mode (`Asserts.one/all(..., true)`).
4. **Style:** run `pnpm lint`. Follow existing patterns (getters + `_checkAssertsResult`, `toFlags`/`toValues`, `get`-prefixed factory methods in `Feature`).

## Adding a new detection

- **Browser/Engine/OS:** add a getter in `packages/software/lib/*.js` following the `Asserts.one/all([...])` + `_reTest` pattern, with a UA-based sanity check in the unit tests table.
- **WebAPI flag:** add a `get*()` method + constructor assignment in `packages/feature/lib/feature.js`, follow alphabetical placement, and add a unit-test assertion. Verify support with MDN Browser Compatibility Data before merging.
- **Values:** add read-only getters (like `pixelRatio`, `deviceMemory`, `touchPoints`).

## Testing

```sh
pnpm test                       # everything
pnpm --filter @detector-js/core test
pnpm exec playwright install chromium   # once, for e2e
```

- Unit tests: `node:test` per package (`packages/*/__tests__/*.test.js`).
- Integration smoke: `test/smoke.js` — real UA table against built bundles.
- E2E: `test/e2e/*.e2e.js` — real Chromium, real `navigator`, privacy (zero requests).

## Pull requests

1. Branch from `vanilla` (default working branch) or `master` (mirror of remote v2).
2. Keep PRs small; one logical change each.
3. PR checklist: lint ✅, unit ✅, e2e ✅, privacy review ✅, changelog entry (if user-facing), ADR for breaking changes.

## Commit style
Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `test:`, `build:`, with `!` for breaking).

## Releasing (maintainers)
See [GOVERNANCE.md](GOVERNANCE.md): semantic versioning, tagged release, `dist/` rebuilt and verified in CI before tagging. Current next major target: **3.0.0**.

## License
By contributing you agree your contributions are licensed under the MIT License (see [LICENSE](LICENSE)).