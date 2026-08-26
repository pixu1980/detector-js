# 003: README statico, card flex senza shrink, HTML semantico e convenzione no-em-dash

- **Date**: 2026-08-26
- **Status**: accepted
- **Tags**: frontend, documentation, accessibility, git-hygiene, css
- **Author**: pix-galaxy-mcp

## Context

detector-js v2.0.11: il README era generato da pkg-2-readme.template.md tramite scripts/build-readme.mjs, che esegue solo sostituzioni di variabili semplici; i blocchi handlebars ({{#badges}}, {{#depDetails}}...) restavano quindi letterali nell'output, con sezioni Documentation/Usage duplicate e link Codepen vuoto. La home page usava display:grid per le feature card e markup non semantico (div per coppie label/valore, span per chip, div per colonne footer). Inoltre em-dash ` — ` era diffuso in documentazione, commenti e messaggi di commit.

## Decision

Il template del README resta markdown statico senza blocchi handlebars non processati; le feature card della home page usano flex layout con flex-grow: 1 e flex-shrink: 0 (mai shrink); la home page adotta HTML semantico (dl/dt/dd per il pannello live, article per le card, ul/li per i chip, nav[aria-label] per le colonne footer); gli em-dash sono vietati in codice, documentazione e messaggi di commit (sostituiti con virgola o trattino).

## Consequences

Positivi: README pubblicato pulito, card che riempiono lo spazio senza collassare, pannello dati navigabile da screen reader, cronologia git coerente senza caratteri tipografici problematici. Negativi: hash dei commit cambiati (force push su main e tag), chi ha clonato deve re-allineare; i guardrail design-system di pix (data-part, adoptedStyleSheets) restano non applicati perché incompatibili con un sito statico multipagina.

## Alternatives Considered

1. Mantenere display:grid con auto-fit minmax
1. Riscrivere il sito secondo i guardrail design-system pix (adoptedStyleSheets, data-part, zero classi CSS)
1. Mantenere gli em-dash tipografici
