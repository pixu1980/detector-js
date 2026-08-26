# Governance

DetectorJS is an open-source project with a light, transparent governance model.

## Project owner & maintainers

- **Owner / lead maintainer:** Emiliano "Pixu" Pisu - <pisuemiliano.1980@gmail.com>
- Maintainers are listed in `package.json` (`author`, `contributors`) and on the GitHub team.

## Decision-making

- **Day-to-day changes:** via pull request, reviewed and merged by at least one maintainer.
- **API / breaking changes, new majors:** require discussion (issue + proposal), and are recorded in `docs/adr/` (Architecture Decision Records) where useful.
- **Any maintainer may veto a change** with a stated technical/privacy reason; a second maintainer can override.
- **Privacy-relevant changes** (anything that touches network, storage, or globals) require an explicit review against [PRIVACY.md](PRIVACY.md) and a note in the PR description.

## Releases & versioning

- **Semantic Versioning (SemVer 2.0.0).** Current major: **3.x**.
- Releases are cut from the default branch; tagged (`vX.Y.Z`), changelog updated (`CHANGELOG.md`), `dist/` rebuilt and verified by CI tests before tagging.
- Zero external runtime dependencies is a **hard contract** - new majors justify exceptions via ADR.

## Contribution flow

1. Open an issue for anything non-trivial (or find one to fix).
2. Fork, branch (`feat/`, `fix/`, `docs/`, `chore/`), and open a PR.
3. PR must pass: lint, unit tests, e2e, and the privacy checklist.
4. A maintainer reviews and merges. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Code of conduct
All maintainers and contributors are bound by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Funding
This project is maintained on a best-effort basis. Sponsoring/funding can be discussed with the owner.

## Amending this document
Changes to governance are proposed as PRs touching this file, require a majority of maintainers, and are recorded in the changelog.