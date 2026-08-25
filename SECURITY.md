# Security Policy

## Supported Versions

| Version | Supported |
| --- | --- |
| 3.x (current major, monorepo) | ✅ actively maintained |
| 2.x (TypeScript monorepo) | ⚠️ legacy — fixes on request |
| 1.x (plain vanillaJS) | ❌ end-of-life |

## Reporting a vulnerability

Please **do not open a public issue** for security problems. Report privately:

- GitHub Security Advisories: `https://github.com/pixu1980/detector-js/security/advisories/new`
- or email the maintainers (see `package.json` `author` / `contributors`).

You can expect:

- an acknowledgement within **72 hours**;
- a triage/impact assessment within **5 business days**;
- coordinated disclosure — we prefer a fix to be ready before public details are shared.

If you responsibly disclose, we're happy to credit you (unless you prefer anonymity).

## Security model

DetectorJS runs **entirely client-side** and **never sends data anywhere** — see [PRIVACY.md](PRIVACY.md). Key guarantees:

- **Zero network APIs** in the library (no `fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, pixies). Tests assert this.
- **No persistence**: no cookies/localStorage writes (except a self-cleaning API probe), no IndexedDB usage.
- **No external resources**: the library, its demo site and docs load nothing from third-party hosts.
- **Graceful failures**: capability probes run in safe mode (`try/catch`) so a hostile/limited environment never crashes the host page.
- **No prototype pollution / no globals leak**: the only global written is the `Detector` export in the browser bundle; polyfills only add standard-missing methods guarded by existence checks.

### Running untrusted input
The main "input" is the User-Agent string (parsed with RegExp only). UA strings are attacker-influenced: the library treats unknown tokens as `'n/a'` and does not evaluate them. Report any unexpected behavior (e.g., regex ReDoS risk) as a vulnerability.

## Recommendations for consumers
- Pin versions (`"detector-js": "3.0.0"` or lockfiles) for production.
- Don't place detection output in DOM innerHTML without escaping; it is plain data, treat it as untrusted.
- Follow the [PRIVACY.md](PRIVACY.md) checklist before collecting these attributes about end users.

## Dependency & supply-chain
Zero runtime dependencies. Dev toolchain (esbuild, eslint, test/playwright) is pinned by `pnpm-lock.yaml`; we run pnpm's supply-chain checks in CI.