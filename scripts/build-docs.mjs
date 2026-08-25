// Build-time static HTML site from the markdown docs (PRIVACY, SECURITY, docs/…, READMEs).
// Uses `marked`; every .md link inside the generated pages is rewritten to the .html twin.
// Each page is emitted next to its source (PRIVACY.md → PRIVACY.html, docs/x.md → docs/x.html).
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PAGE_CSS = `
  :root { --bg:#0b1020; --card:#101736; --text:#eef2ff; --muted:#98a2c3; --accent:#7c5cff; --accent2:#00e5c7; --border:rgba(255,255,255,.12); }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; background:var(--bg); color:var(--text); line-height:1.65; margin:0; }
  header.site { position:sticky; top:0; z-index:20; backdrop-filter:blur(12px); background:rgba(11,16,32,.8); border-bottom:1px solid var(--border); }
  nav { max-width:1000px; margin:0 auto; padding:0 1.25rem; height:56px; display:flex; align-items:center; gap:1.2rem; }
  nav .brand { font-weight:800; letter-spacing:-.02em; color:var(--text); text-decoration:none; }
  nav .brand span { color:var(--accent2); }
  nav .links { margin-left:auto; display:flex; gap:1rem; font-size:.9rem; }
  nav a { color:var(--muted); text-decoration:none; }
  nav a:hover { color:var(--text); }
  main { max-width:1000px; margin:0 auto; padding:2.5rem 1.25rem 4rem; }
  main h1 { font-size:2.1rem; font-weight:900; letter-spacing:-.03em; border-bottom:1px solid var(--border); padding-bottom:.6rem; }
  main h2 { font-size:1.45rem; margin-top:2.4rem; font-weight:800; }
  main h3 { font-size:1.15rem; margin-top:1.8rem; }
  main a { color:var(--accent2); }
  main p, main li { color:#d7dff7; }
  main blockquote { border-left:3px solid var(--accent); margin:1rem 0; padding:.2rem 1rem; color:var(--muted); background:rgba(124,92,255,.07); border-radius:0 8px 8px 0; }
  main code { font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:.86em; background:rgba(255,255,255,.07); padding:.15rem .4rem; border-radius:5px; color:var(--accent2); }
  main pre { background:#070b18; border:1px solid var(--border); border-radius:12px; padding:1rem 1.2rem; overflow:auto; font-size:.85rem; line-height:1.55; }
  main pre code { background:none; padding:0; color:#d7dff7; }
  main table { border-collapse:collapse; width:100%; margin:1.2rem 0; font-size:.9rem; }
  main th, main td { border:1px solid var(--border); padding:.5rem .8rem; text-align:left; }
  main th { background:rgba(255,255,255,.05); }
  main hr { border:none; border-top:1px solid var(--border); margin:2rem 0; }
  main img { max-width:100%; }
  footer { border-top:1px solid var(--border); padding:1.6rem 0 2.5rem; color:var(--muted); font-size:.85rem; text-align:center; }
  footer a { color:var(--muted); }
  .pill { display:inline-block; font-size:.72rem; font-weight:700; letter-spacing:.05em; text-transform:uppercase; background:rgba(0,229,199,.1); color:var(--accent2); border:1px solid rgba(0,229,199,.3); border-radius:999px; padding:.2rem .7rem; margin-right:.4rem; }
  @media (max-width:700px) { nav .links { display:none; } }
`;

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
    const text = this.parser.parseInline(tokens);
    const attrs = title ? ` title="${title}"` : '';
    return `<a href="${rewriteHref(href)}"${attrs}>${text}</a>`;
  },
};

function titleOf(src) {
  const m = src.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1] : null;
}

function layoutNav(rel) {
  return `
  <header class="site">
    <nav>
      <a class="brand" href="${rel}index.html">Detector<span>JS</span></a>
      <div class="links">
        <a href="${rel}index.html">Home</a>
        <a href="${rel}demo.html">Live demo</a>
        <a href="${rel}PRIVACY.html">Privacy</a>
        <a href="https://github.com/pixu1980/detector-js">GitHub</a>
      </div>
    </nav>
  </header>`;
}

function wrapHtml({ title, body, rel }) {
  const safeTitle = String(title || 'Docs').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>${safeTitle} — DetectorJS</title>
<style>${PAGE_CSS}</style>
</head>
<body>
${layoutNav(rel)}
<main>${body}</main>
<footer><a href="${rel}index.html">DetectorJS</a> · vanillaJS · zero dependencies · MIT · privacy-first</footer>
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
    if (!fs.existsSync(abs)) continue;
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