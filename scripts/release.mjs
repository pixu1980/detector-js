// Release manager — conventional-commits driven, single synced version for the whole monorepo.
//
//   pnpm release            → analyze, bump root+packages in sync, generate CHANGELOG, tag vX.Y.Z
//   pnpm release --dry-run  → print the plan without changing anything
//   pnpm release --publish  → same as release, then runs `pnpm pack` validation + prints publish commands
//
// Version calculus (from the current version in package.json, i.e. the last published one):
//   any BREAKING CHANGE (subject "!" or "BREAKING CHANGE:" footer)      → MAJOR
//   else any feat / feature                                              → MINOR
//   else any fix|perf|refactor|build|test|docs|chore|style (or fallback) → PATCH
//
//   e.g. baseline 2.0.11 + breaking commits → 3.0.0 (all packages stay in sync).
// Changelog entries are grouped from conventional commits in the analyzed range.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry-run');
const PUBLISH = process.argv.includes('--publish');

function run(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
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
const BREAKING_FOOTER = /BREAKING[ -]CHANGE:\s*/i;

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

function computeBumpRange(fromTag) {
  return fromTag ? `${fromTag}..HEAD` : 'HEAD';
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

    const key = p.type === 'unknown' ? 'other' : p.type;
    byType[key] = byType[key] || [];
    byType[key].push({ desc: p.desc, scope: p.scope, breaking: p.breaking, hash: c.hash });
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

function renderChangelog(version, date, byType, rangeInfo) {
  const lines = ['', `## [Version ${version}](${rangeInfo}) (${date})`, ''];
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
  lines.push(`...full changes: ${rangeInfo}`, '');
  return lines.join('\n');
}

// ---- main -------------------------------------------------------------------
async function main() {
  const rootPkg = readJson('package.json');
  const current = rootPkg.version;
  const fromTag = lastAncestorTag();
  const range = computeBumpRange(fromTag);
  const commits = commitLines(range);
  const { bump, byType, breaking, feat, fix } = analyze(commits);

  console.log(`\n== release plan ==`);
  console.log(`current version : ${current} (${fromTag ? `tag ${fromTag}` : 'no tag'})`);
  console.log(`analysed range  : ${range} (${commits.length} commits)`);
  console.log(`signals         : breaking=${breaking} feat=${feat} fix=${fix}`);
  console.log(`next version    : ${bump ? `${bump} → ${bumpVersion(current, bump)}` : 'NO VERSION CHANGE (nothing conventional found)'}`);

  if (!bump) {
    console.log('\nnothing to release.');
    return;
  }

  const next = bumpVersion(current, bump);
  const date = new Date().toISOString().slice(0, 10);

  if (DRY) {
    console.log('\n[dry-run] would:');
    console.log(`  - set version ${next} in package.json + packages/*/package.json`);
    console.log(`  - prepend CHANGELOG.md entry`);
    console.log(`  - create tag v${next}`);
    console.log(`  - update examples deps to ${next}`);
    return;
  }

  // sync versions everywhere
  writeJson('package.json', { ...rootPkg, version: next });
  for (const dir of fs.readdirSync(path.join(ROOT, 'packages'))) {
    const p = path.join('packages', dir, 'package.json');
    if (!fs.existsSync(path.join(ROOT, p))) continue;
    const pkg = readJson(p);
    writeJson(p, { ...pkg, version: next });
  }
  // examples consume the published version
  for (const ex of ['node-cjs', 'node-esm', 'bundler']) {
    const p = path.join('examples', ex, 'package.json');
    const pkg = readJson(p);
    if (pkg.dependencies && pkg.dependencies['detector-js']) {
      writeJson(p, { ...pkg, dependencies: { ...pkg.dependencies, 'detector-js': next } });
    }
  }

  // changelog
  const entry = renderChangelog(next, date, byType, `https://github.com/pixu1980/detector-js/releases/tag/v${next}`);
  const changelog = fs.readFileSync(path.join(ROOT, 'CHANGELOG.md'), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'CHANGELOG.md'), entry + '\n' + changelog);

  // rebuild (version defines) + validate package
  run('pnpm build');
  run('pnpm test');

  console.log('\n📦 version bumped to', next, '— rebuild + tests OK');
  if (PUBLISH) {
    run('pnpm pack --dry-run'); // sanity
    console.log('\npublish (run as maintainer):');
    console.log('  pnpm -r publish --filter ./packages --publish-branch=main  # or per-package');
    console.log('  pnpm publish');
    console.log('\ncdn / SRI snippets for this version:');
    run('node scripts/sri.mjs');
  }
  console.log('create tag:');
  console.log(`  git add -A && git commit -m "chore(release): ${next}" && git tag v${next}`);
}

main();