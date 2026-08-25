# 002: Conventional-commits driven in-house release script (pnpm release)

- **Date**: 2026-08-25
- **Status**: accepted
- **Tags**: release, tooling, versioning
- **Author**: pix-architect

## Context

After the v3 monorepo restructure we need a repeatable release flow: bump root detector-js AND the five @detector-js/* packages to the same version (next major 3.0.0, baseline 2.0.11), generate the changelog from git history, and tag releases. The maintainer runs releases manually, so the tool must prepare everything (bump, changelog, tag, SRI snippets) without publishing.

## Decision

Implement an in-house, zero-dependency release script (scripts/release.mjs) driven by Conventional Commits: it analyzes the commit range since the last ancestor tag, computes the next SemVer (any BREAKING → major, else feat → minor, else fix/others → patch), bumps package.json + all packages/*/package.json in sync, prepends a grouped CHANGELOG entry, updates examples deps, runs build+tests, and (with --publish) prints the CDN/SRI snippets. `pnpm release` (alias `release:dryrun`/`release:publish`).

## Consequences

Positive: zero new dependencies (fits the 0-dep ethos); single synced version for root + all @detector-js/* packages; version + changelog derived deterministically from conventional commits; dry-run mode; prints CDN/SRI snippets at release time. Negative: in-house parser is simpler than full conventional-commits spec (no footer parsing for 'BREAKING CHANGE' bodies yet); maintainers must follow Conventional Commits discipline; publishing itself stays manual (by design: the maintainer runs npm publish).

## Alternatives Considered

1. semantic-release (heavy, external bot, auth requirements)
1. changesets (per-package changelogs, more files to maintain)
1. Manual bump + manual CHANGELOG + manual tag
