// Build-time static HTML site from the markdown docs (PRIVACY, SECURITY, docs/…, READMEs).
// Uses `marked`; every .md link inside the generated pages is rewritten to the .html twin.
// Each page is emitted next to its source (PRIVACY.md → PRIVACY.html, docs/x.md → docs/x.html).
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function rewriteHref(href) {
  if (!href) return href;
  if (/^(?:[a-z]+:|#|\/\/)/i.test(href)) return href;
  const [pathname, hash = ''] = href.split('#');
  let out = pathname;
  if (pathname.endsWith('.md')) {
    out = pathname.slice(0, -3) + '.html';
  } else if (pathname.endsWith('.html')) {
    out = pathname;
  } else {
    return href; // leave bare links untouched
  }
  return hash ? `${out}#${hash}` : out;
}

const renderer = {
  link({ href, title, tokens }) {
    let text = this.parser.parseInline(tokens);
    // display label without extension (PRIVACY.md -> PRIVACY) when linking a markdown twin
    if (/\.md(#.*)?$/i.test(href)) {
      text = text.replace(/\.md(<\/[^>]+>)?$/i, '$1');
    }
    const attrs = title ? ` title="${title}"` : '';
    return `<a href="${rewriteHref(href)}"${attrs}>${text}</a>`;
  },
};

function titleOf(src) {
  const m = src.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1] : null;
}

function layout() {
  return {
    header(rel) {
      return `
  <header class="site">
    <div class="wrap">
      <nav>
        <a class="brand" href="${rel}index.html">Detector<span>JS</span></a>
        <div class="links">
          <a href="${rel}index.html">Home</a>
          <a href="${rel}docs/getting-started.html">Docs</a>
          <a href="${rel}demo.html">Live demo</a>
          <a href="${rel}PRIVACY.html">Privacy</a>
          <a href="https://github.com/pixu1980/detector-js" target="_blank" rel="noopener">GitHub</a>
        </div>
      </nav>
    </div>
  </header>`;
    },
    footer(rel) {
      return `
  <footer class="site">
    <div class="wrap cols">
      <div>
        <a class="brand" href="${rel}index.html">Detector<span>JS</span></a>
        <p>Zero-dependency platform/environment detector.<br />VanillaJS · monorepo · MIT License.</p>
      </div>
      <div>
        <h4>Docs</h4>
        <ul>
          <li><a href="${rel}docs/getting-started.html">Getting started</a></li>
          <li><a href="${rel}docs/api.html">API reference</a></li>
          <li><a href="${rel}docs/toolchain.html">Toolchain</a></li>
          <li><a href="${rel}docs/browser-support.html">Browser support</a></li>
          <li><a href="${rel}docs/migration.html">Migrate v1/v2 → v3</a></li>
          <li><a href="${rel}docs/roadmap.html">Roadmap</a></li>
        </ul>
      </div>
      <div>
        <h4>Project</h4>
        <ul>
          <li><a href="${rel}PRIVACY.html">Privacy</a></li>
          <li><a href="${rel}SECURITY.html">Security</a></li>
          <li><a href="${rel}CONTRIBUTING.html">Contributing</a></li>
          <li><a href="${rel}docs/adr/README.html">ADR</a></li>
        </ul>
      </div>
      <div>
        <h4>Packages</h4>
        <ul>
          <li><a href="${rel}packages/detector/README.html">@detector-js/detector</a></li>
          <li><a href="${rel}packages/software/README.html">@detector-js/software</a></li>
          <li><a href="${rel}packages/core/README.html">@detector-js/core</a></li>
          <li><a href="${rel}packages/hardware/README.html">@detector-js/hardware</a></li>
          <li><a href="${rel}packages/feature/README.html">@detector-js/feature</a></li>
        </ul>
      </div>
    </div>
  </footer>`;
    },
  };
}

const shared = layout();

function wrapHtml({ title, body, rel }) {
  const rawTitle = String(title || 'Docs').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const safeTitle = rawTitle.includes('DetectorJS') ? rawTitle : `${rawTitle} — DetectorJS`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<meta name="theme-color" content="#0b1020" />
<title>${safeTitle}</title>
<link rel="stylesheet" href="${rel}site.css" />
</head>
<body>
${shared.header(rel)}
<main>${body}</main>
${shared.footer(rel)}
</body>
</html>
`;
}

function findMarkdown() {
  const files = [];
  const roots = [
    ['.', ['README.md', 'PRIVACY.md', 'SECURITY.md', 'GOVERNANCE.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', 'CHANGELOG.md']],
    ['docs', null],
    ['docs/adr', null],
  ];
  for (const [dir, names] of roots) {
    const abs = path.join(ROOT, dir);
    if (!fs.existsSync(abs)) {
      continue;
    }
    const md = (names || fs.readdirSync(abs).filter((f) => f.endsWith('.md')))
      .map((f) => path.join(dir, f))
      .filter((f) => fs.existsSync(path.join(ROOT, f)));
    files.push(...md);
  }
  for (const dir of ['packages', 'examples']) {
    for (const sub of fs.readdirSync(path.join(ROOT, dir))) {
      const p = path.join(dir, sub, 'README.md');
      if (fs.existsSync(path.join(ROOT, p))) files.push(p);
    }
  }
  // templates/scripts are not user-facing docs
  return files.filter((f) => !f.includes('pkg-2-readme.template'));
}

function relFrom(file) {
  const depth = file.split('/').length - 1;
  return depth === 0 ? './' : '../'.repeat(depth);
}

async function main() {
  marked.use({ renderer });
  const files = findMarkdown();
  let count = 0;
  for (const rel of files) {
    const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const body = marked.parse(src);
    const out = rel.replace(/\.md$/, '.html');
    const page = wrapHtml({ title: titleOf(src) || path.basename(rel, '.md'), body, rel: relFrom(out) });
    fs.writeFileSync(path.join(ROOT, out), page);
    count += 1;
  }
  console.log(`✓ built ${count} static pages from markdown`);
}

main();