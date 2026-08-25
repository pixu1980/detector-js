# 001: Use esbuild as the build toolchain (replace rollup + babel)

- **Date**: 2026-08-25
- **Status**: accepted
- **Tags**: toolchain, build, esbuild
- **Author**: pix-architect

## Context

The mono-repo was restored to a vanillaJS zero-dependency codebase but the build still used the historical rollup 2 + rollup-plugin-babel + babel preset-env + rollup-plugin-replace + rollup-plugin-uglify stack. The UMD browser bundle exposed window.Detector as a namespace object ({ Detector }) instead of the class, forcing consumers to call new D() wrappers; the stack was deprecated and unmaintained, and it could not inject __VERSION__ cleanly without plugin hacks.

## Decision

Adopt esbuild (JS API in scripts/build.mjs and per-package scripts) as the single bundler/transpiler. Remove rollup, its plugins and babel from devDependencies. Builds: per-package CJS+ESM (workspace deps external, target es2016), root CJS+ESM node builds, and a self-contained IIFE browser bundle (browser/index.js) that assigns the Detector class directly to the global, so new Detector() works with a plain script tag. __VERSION__ is injected at build time via esbuild define.

## Consequences

Positive: one fast binary instead of 8 deprecated packages; deterministic define-based version injection; correct global export (new Detector()); simpler scripts; esbuild target es2016 + bundled polyfills keeps legacy support. Negative: esbuild does not emit .d.ts (types are hand-written and maintained per package); iife output replaces UMD (AMD/CommonJS-in-browser consumers should use the CJS/ESM exports or the global). CI must run pnpm approve-builds for esbuild/playwright postinstall.

## Alternatives Considered

1. Keep rollup 2 + plugins (deprecated, namespace-object UMD bug, slow, growing config)
1. Switch to Vite library mode (pulls in heavier tooling and node-version constraints)
1. Parcel (used by v2, but heavier install and less deterministic define injection)
