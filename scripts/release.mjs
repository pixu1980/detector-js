// Release manager — THE release command is just:  pnpm release
//   pnpm release             → full release: analyze → bump (root+packages in sync) →
//                              changelog → examples → build → test → commit+tag → npm publish
//   pnpm release --dry-run   → preview only (no changes, no publish)
//   pnpm release --skip-publish → prepare the release + tag, but do not upload to npm
//
// Version calculus (from the current version in package.json, i.e. the last published one):
//   any BREAKING CHANGE ("!" in the subject)        → MAJOR
//   else any feat / feature                         → MINOR
//   else any fix|perf|refactor|build|test|docs|...  → PATCH
// e.g. baseline 2.0.11 + breaking commits → 3.0.0 (all packages stay in sync).
// Changelog entries are grouped from conventional commits in the analyzed range.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry-run');
const SKIP_PUBLISH = process.argv.includes('--skip-publish');

function run(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function runSafe(cmd) {
  try {
    return run(cmd);
  } catch (e) {
    return null;
  }
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
}

function writeJson(p, obj) {
  fs.writeFileSync(path.join(ROOT, p), JSON.stringify(obj, null, 2) + '\n');
}

// ---- git helpers ------------------------------------------------------------
function lastAncestorTag() {
  try {
    return run('git describe --abbrev=0 --tags');
  } catch (e) {
    return null;
  }
}

function commitLines(range) {
  const r = run(`git log --pretty=format:'%s%x09%h' ${range}`);
  return r.split('\n').filter(Boolean).map((line) => {
    const [subject, hash] = line.split('\t');
    return { subject, hash };
  });
}

// ---- conventional commits ---------------------------------------------------
const COMMIT_RE = /^(?<type>[a-z]+)(?:\((?<scope>[^)]*)\))?(?<breaking>!)?:\s*(?<desc>.+)$/i;

function parseCommit({ subject }) {
  const m = subject.match(COMMIT_RE);
  if (!m) return { type: 'unknown', scope: null, breaking: false, desc: subject };
  return {
    type: m.groups.type.toLowerCase(),
    scope: m.groups.scope,
    breaking: !!m.groups.breaking,
    desc: m.groups.desc,
  };
}

function analyze(commits) {
  let breaking = false;
  let feat = false;
  let fix = false;
  const byType = {};

  for (const c of commits) {
    const p = parseCommit(c);
    if (p.breaking) breaking = true;
    if (p.type === 'feat') feat = true;
    if (['fix', 'perf', 'refactor', 'build', 'test', 'docs', 'chore', 'style'].includes(p.type)) fix = true;
    if (p.type === 'unknown') continue;
    byType[p.type] = byType[p.type] || [];
    byType[p.type].push({ desc: p.desc, scope: p.scope, breaking: p.breaking, hash: c.hash });
  }

  const bump = breaking ? 'major' : (feat ? 'minor' : (fix ? 'patch' : null));
  return { bump, breaking, feat, fix, byType };
}

// ---- semver -----------------------------------------------------------------
function semver(v) {
  const m = String(v).match(/^(\d+)\.(\d+)\.(\d+)/);
  return m ? { major: Number(m[1]), minor: Number(m[2]), patch: Number(m[3]) } : null;
}

function bumpVersion(current, bumpType) {
  const v = semver(current);
  if (!v) throw new Error(`cannot parse version "${current}"`);
  if (bumpType === 'major') return `${v.major + 1}.0.0`;
  if (bumpType === 'minor') return `${v.major}.${v.minor + 1}.0`;
  return `${v.major}.${v.minor}.${v.patch + 1}`;
}

// ---- changelog rendering ----------------------------------------------------
function groupTitle(type) {
  return {
    feat: '### New features',
    fix: '### Bug fixes',
    perf: '### Performance',
    refactor: '### Refactoring',
    docs: '### Documentation',
    build: '### Build & tooling',
    test: '### Tests',
    chore: '### Chores',
    style: '### Style',
  }[type] || '### Other';
}

function renderChangelog(version, date, byType) {
  const lines = ['', `## [Version ${version}](https://github.com/pixu1980/detector-js/releases/tag/v${version}) (${date})`, ''];
  const order = ['feat', 'fix', 'perf', 'refactor', 'build', 'test', 'docs', 'chore', 'style', 'other'];
  for (const type of order) {
    const items = byType[type];
    if (!items || items.length === 0) continue;
    lines.push(groupTitle(type), '');
    for (const it of items) {
      const breaking = it.breaking ? ' (BREAKING)' : '';
      lines.push(`- ${it.desc}${breaking}: [\`${it.hash}\`](https://github.com/pixu1980/detector-js/commit/${it.hash})`);
    }
    lines.push('');
  }
  if (!lines.some((l) => l.startsWith('- '))) {
    lines.push('- maintenance & minor updates', '');
  }
  lines.push('...full changes: ' + `https://github.com/pixu1980/detector-js/compare/v${version.substr(0, version.lastIndexOf('.'))}.x...v${version}`, '');
  return lines.join('\n');
}

// ---- main -------------------------------------------------------------------
async function main() {
  const rootPkg = readJson('package.json');
  const current = rootPkg.version;
  const fromTag = lastAncestorTag();
  const range = fromTag ? `${fromTag}..HEAD` : 'HEAD';
  const commits = commitLines(range);
  const { bump, byType, breaking, feat, fix } = analyze(commits);

  console.log(`\n== release: detector-js ==`);
  console.log(`current version : ${current} (${fromTag ? `tag ${fromTag}` : 'no tag'})`);
  console.log(`analysed range  : ${range} (${commits.length} commits)`);
  console.log(`signals         : breaking=${breaking} feat=${feat} fix=${fix}`);

  if (!bump) {
    console.log('\nnothing to release (no conventional commits found).');
    return;
  }

  const next = bumpVersion(current, bump);
  console.log(`next version    : ${bump} → ${next}`);

  if (DRY) {
    console.log('\n[dry-run] would:');
    console.log(`  - set ${next} in package.json + packages/*/package.json`);
    console.log('  - prepend a grouped CHANGELOG.md entry');
    console.log('  - update examples deps');
    console.log('  - build + run tests');
    console.log(`  - commit + tag v${next}`);
    console.log(`  - npm publish (root + @detector-js/*)${SKIP_PUBLISH ? ' [skipped]' : ''}`);
    return;
  }

  // 1) sync versions everywhere
  writeJson('package.json', { ...rootPkg, version: next });
  for (const dir of fs.readdirSync(path.join(ROOT, 'packages'))) {
    const p = path.join('packages', dir, 'package.json');
    if (!fs.existsSync(path.join(ROOT, p))) continue;
    const pkg = readJson(p);
    writeJson(p, { ...pkg, version: next });
  }

  // 2) examples consume the published version
  for (const ex of ['node-cjs', 'node-esm', 'bundler']) {
    const p = path.join('examples', ex, 'package.json');
    const pkg = readJson(p);
    if (pkg.dependencies && pkg.dependencies['detector-js']) {
      writeJson(p, { ...pkg, dependencies: { ...pkg.dependencies, 'detector-js': next } });
    }
  }

  // 3) changelog
  const entry = renderChangelog(next, new Date().toISOString().slice(0, 10), byType);
  fs.writeFileSync(path.join(ROOT, 'CHANGELOG.md'), entry + '\n' + fs.readFileSync(path.join(ROOT, 'CHANGELOG.md'), 'utf8'));

  // 4) build + test
  run('pnpm build');
  run('pnpm test');

  // 5) SRI snippets (integrity + CDN pins for this version)
  console.log('\ncdn / SRI snippets for this version:');
  run('node scripts/sri.mjs');

  // 6) commit + tag
  const msgFile = path.join(os.tmpdir(), `detectorjs-release-${next}.txt`);
  fs.writeFileSync(msgFile, `chore(release): ${next}\n`);
  run(`git add -A -- . ':!.tokensave'`);
  run(`git commit -q -F "${msgFile}"`);
  run(`git tag v${next}`);
  fs.rmSync(msgFile, { force: true });
  console.log(`\n✓ committed + tagged v${next}`);

  if (SKIP_PUBLISH) {
    console.log('\npublish skipped (--skip-publish). To publish manually:');
    console.log('  pnpm -r publish   # @detector-js/*');
    console.log('  pnpm publish      # detector-js');
    return;
  }

  // 7) npm publish (best-effort: on failure the release is already prepared/tagged)
  console.log('\npublishing @detector-js/* …');
  if (runSafe('pnpm -r publish') == null) {
    console.warn('  ⚠ scoped publish failed (auth/registry?). Packages are prepared & tagged — run `pnpm -r publish` when ready.');
  }
  console.log('publishing detector-js …');
  if (runSafe('pnpm publish') == null) {
    console.warn('  ⚠ root publish failed (auth/registry?). Run `pnpm publish` when ready.');
  }
  console.log('\n✅ ' + next + ' released. Remember to: git push && git push --tags');
}

main();
