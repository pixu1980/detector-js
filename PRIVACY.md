# Privacy & Legal Notes - DetectorJS

> **Short version:** DetectorJS is a **client-side only** library. It **does not register, collect, store, transmit or share anything**.
> All computed attributes live in the memory of the process that runs the library, and **stay in the hands of whoever executes it**.
> If **you** run DetectorJS about your own users, general data-protection law starts to apply - this document walks you through it.

---

## 1. What the library does (and does not do)

DetectorJS inspects the runtime environment available to the page that loads it:

- parses the `navigator.userAgent` string and exposes the detected **browser / engine / OS / platform**;
- probes the environment for **hardware info** (CPU vendor, GPU via WebGL, device memory…) and for **support of ~90 WebAPIs**;
- returns plain JavaScript objects (`detector.toFlags()`, `detector.toValues()`).

By design the library:

| Aspect | DetectorJS |
| --- | --- |
| ❌ Make network requests | No. Zero `fetch`/`XMLHttpRequest`/beacon/pixel calls. |
| ❌ Store anything (cookies, localStorage, IndexedDB) | No persistence APIs are touched for storage (a localStorage *capability probe* writes a throwaway key and removes it - see §3). |
| ❌ Send data anywhere | No endpoints, no analytics, no telemetry, no third-party code. |
| ❌ Use third-party resources | No external scripts/fonts/styles are loaded by the library (the site itself is also self-contained). |
| ✅ Run fully locally | All computation happens in the browser/process that executes it. |

The **output belongs to the code that runs it**: if you open the demo page, the data is yours and only yours - it never leaves your device. If you integrate the library into your product, the output is available to *your* code, and *your* data-handling rules apply from that point on.

## 2. Why fingerprint-grade attributes can be regulated data

Environment detection produces a set of attributes ("user agent", screen/platform characteristics, API availability, GPU strings, device memory…) that, **combined**, can uniquely or near-uniquely identify a device - this is colloquially known as **browser fingerprinting**.

Key academic background:

- **Peter Eckersley, *How Unique Is Your Web Browser?* (EFF, 2010)** - the landmark study showing ~94% of tested browsers were uniquely identifiable by fingerprints (panopticlick.eff.org).
- **Gunes Acar et al., *The Cookieless Monster: Exploring the Ecosystem of Web-Based Device Fingerprinting* (WPES/ACM, 2013)** - documented the scale and stealth of fingerprinting in the wild and its user-tracking risks.
- **Nick Nikiforakis et al., *Cookieless Monster* follow-ups and *On the Privacy Risks of Browser Fingerprinting* (2015-2016)** - continued analysis of trackability and evasions.

These are *ability* papers: they show what is technically possible. They are also the reason regulators treat fingerprinting as a **privacy-relevant technique** even when it is not used for tracking.

## 3. Capability probes that touch the environment

Most checks are read-only (`'xxx' in navigator` and friends). A few execute real probes with **no lasting effect**:

- **Canvas/WebGL** - creates throwaway canvas/WebGL contexts to read capabilities (and, in the GPU module, vendor/renderer strings). Nothing is serialized or transmitted.
- **localStorage / storage** - the *capability* check writes a dummy key `x` and immediately removes it, only to verify the API exists (existing behavior ported from upstream; nothing is persisted).
- **CSS flags** (optional, off by default since v2/v3) - when enabled via `new Detector(ua, values, cssFlags=true)`, adds `djs--…` classes on `<html>`. This is a DOM change only.
- **Audio/video codec probes** - call `canPlayType()` on in-memory elements; no media is played or fetched.

None of these probes create network activity, storage, or cross-site linkage.

## 4. The legal landscape (international overview)

This list is informative, not legal advice. Applicability depends on your context, audience, jurisdiction and how you use the output.

### 4.1 European Union
- **GDPR - Regulation (EU) 2016/679**
  - Art. 4(1): *personal data* = any information relating to an identified or identifiable natural person; an identifier online (device ID, cookie, fingerprint) can make a person identifiable.
  - Recital 26: identifiers processed about a person (incl. device fingerprints) fall under the GDPR when used to single out.
  - Recital 30: online identifiers (incl. device identifiers) and location data are matters of the GDPR.
  - Art. 5: lawfulness, fairness, transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity & confidentiality.
  - Art. 6/9: lawful bases (consent, legitimate interest, contract, legal obligation…; special categories need Art. 9 grounds).
  - Art. 25: data protection by design and by default.
  - Art. 32: security of processing.
  - Accountability: maintain records (Art. 30), DPIAs for high-risk processing (Art. 35), DPO if required (Art. 37).
- **ePrivacy Directive - 2002/58/EC** (as amended by 2009/136/EC)
  - Art. 5(3): storing or accessing information on a user's equipment ("terminal equipment") - the operative article for cookie-like mechanisms, **which is the legal hook most EU DPAs use for fingerprinting** - requires informed consent (with `legitimate_interest` generally not being available for the storage/access act under national rules implementing it).

### 4.2 Italy
- **D.Lgs. 196/2003** (Codice in materia di protezione dei dati personali), notably Part II on the processing by private parties.
- **D.Lgs. 101/2018** - brought the Codice in line with the GDPR.
- **Garante per la protezione dei dati personali** - guidelines and provvedimenti on cookies & tracking (e.g., the "cookie banner" enforcement line and clarifications that **fingerprinting techniques require user consent**); the Garante has repeatedly stressed that device fingerprinting is covered by the cookie-consent regime.

### 4.3 United States
- **CCPA/CPRA (California Civil Code §1798.100 et seq.)** - obligations for personal information of California residents; CPRA added "sensitive personal information" and tightened retention/use limits.
- Other state privacy laws (Virginia CDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Iowa ICDPA, Texas TDPSA, Oregon, Montana, Delaware…).
- **FTC Act §5** - unfair/deceptive practices; disclosures about tracking and data use must be truthful.
- No single federal omnibus privacy law exists; sectoral laws (e.g., COPPA for children) apply in specific cases.

### 4.4 Other jurisdictions (non-exhaustive)
- **Canada** - PIPEDA (OPC guidance on online tracking: consent required).
- **Brazil** - LGPD (Lei 13.709/2018; data subject rights + legal bases).
- **UK** - UK GDPR + PECR (the UK's ePrivacy instrument, same Art. 5(3) lineage).
- **Korea** - PIPA; **Japan** - APPI; **Australia** - Privacy Act (and the 2023–2025 amendments trajectory); **India** - DPDP Act 2023 (consent-based, personal data breach framework).

## 5. Practical checklists

### 5.1 If you run DetectorJS **for yourself / in dev / on your own page **
- Nothing to do: the data stays local.
- Optional good practice: add a comment in your code that DetectorJS makes no network calls, so future maintainers don't "wire it up" innocently.

### 5.2 If you run DetectorJS about **your users** (web product)
- [ ] **Transparency:** privacy policy / cookie notice explicitly states you perform client-side environment detection, why, and how long output is kept.
- [ ] **Consent for storage/access:** where required (EU/ePrivacy lineage, and EU/Italian practice on fingerprinting), obtain consent **before** running detection that could be used to single out, with a real consent-management flow (not just a banner) unless another lawful basis clearly applies.
- [ ] **Purpose limitation & minimality:** only compute the flags you need; don't conflate detection with tracking.
- [ ] **No linkage/persistence:** prefer not to persist or join fingerprint output to profiles; use it (e.g.) for A/B/CSS it is intended (CSS feature flags) or in-memory sessions.
- [ ] **Retention & security:** delete or pseudonymize what you store; apply technical/organisational measures (Art. 32 GDPR).
- [ ] **DPIA:** consider a Data Protection Impact Assessment if you combine detection with other identifiers at scale (Art. 35 + national lists).
- [ ] **Data transfers:** if output crosses borders, check transfer mechanisms (Chapter V GDPR).
- [ ] **Processing records:** document the processing (Art. 30).
- [ ] **DPO/representatives:** appoint if thresholds are met.

### 5.3 If you publish/pass the output to third parties
- You are the controller (or joint controller); third parties (analytics, fraud, adtech) process it under your instructions - have DPAs/contracts in place, don't hand fingerprints to parties without a lawful basis.

## 6. Statements & guarantees in this repo
- The demo site (`index.html`, `demo.html`) loads **no external resources** - provable by opening DevTools → Network while using it: zero requests besides the page itself and the local bundle.
- The library's source contains **no network APIs** (`fetch`, `XMLHttpRequest`, `WebSocket`, `EventSource`, `navigator.sendBeacon`, `<img>`/pixels…). Automated tests include an e2e assertion that a page embedding DetectorJS performs **zero network requests**.
- The **CSS-flags feature is off by default** since v3 - opt-in per instance.

## 7. Legal disclaimer
This document is provided for general information and is **not legal advice**. Laws and regulators' positions evolve; consult qualified counsel in the jurisdictions where you operate. The authors of DetectorJS are not responsible for how third parties use the library.

---

*Keep reading: [SECURITY.md](SECURITY.md) · [GOVERNANCE.md](GOVERNANCE.md) · [CONTRIBUTING.md](CONTRIBUTING.md)*