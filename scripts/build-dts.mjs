// Generates TypeScript declaration files (.d.ts) from the JSDoc comments in the
// vanillaJS sources. Run as part of pnpm build; validated by `pnpm types:check` (tsc).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const JSDOC_TYPE = {
  boolean: 'boolean',
  bool: 'boolean',
  number: 'number',
  string: 'string',
  object: 'object',
  array: 'any[]',
  any: 'any',
  '*': 'any',
  void: 'void',
  undefined: 'undefined',
  null: 'null',
  function: 'Function',
};
function tsType(jsType) {
  if (!jsType) return 'any';
  const t = String(jsType).trim();
  if (t === '*') return 'any';
  if (/^Array\.<(.+)>$/i.test(t)) {
    const inner = t.match(/^Array\.<(.+)>$/i)[1];
    return `${tsType(inner)}[]`;
  }
  if (/^Promise<(.+)>$/i.test(t)) {
    const inner = t.match(/^Promise<(.+)>$/i)[1];
    return `Promise<${tsType(inner)}>`;
  }
  if (/^[a-zA-Z][\w.]*\|/.test(t)) {
    return t.split('|').map((x) => tsType(x)).join(' | ');
  }
  if (/\|/.test(t)) {
    return t.split('|').map((x) => tsType(x)).join(' | ');
  }
  return JSDOC_TYPE[t] || 'any';
}

function parseFile(src) {
  const classM = src.match(/export\s+class\s+(\w+)(?:\s+extends\s+(\w+))?/);
  const jsdocBlocks = [];
  const re = /\/\*\*([\s\S]*?)\*\//g;
  let m;
  for (m = re.exec(src); m; m = re.exec(src)) {
    const start = re.lastIndex;
    const after = src.slice(start);
    const mem = /^\s*(?:(static)\s+)?(?:async\s+)?(?:get\s+)?(\w+)\s*(?:\(([^)]*)\))?\s*\{/.exec(after);
    const text = m[1];
    jsdocBlocks.push({
      text,
      isStatic: !!(mem && mem[1]),
      member: mem ? mem[2] : null,
      params: mem ? mem[3] : null,
      lineStart: start,
    });
  }

  const returnsOf = {};
  const paramMap = {};
  for (const b of jsdocBlocks) {
    const rm = b.text.match(/@returns?\s*\{?([^}@\n]+)\}?/);
    if (rm && b.member) returnsOf[b.member] = tsType(rm[1]);
    const pm = b.text.match(/@param\s*(?:\{([^}]*)\})?\s*([\w.]+)/);
    if (pm && b.member) {
      paramMap[b.member] = { type: pm[1] ? tsType(pm[1]) : 'any', name: pm[2] };
    }
  }

  // instance props assigned in the source (deduped; typed from the getter JSDoc)
  const props = [];
  const seenProps = new Set();
  if (classM) {
    const body = src.slice(src.indexOf('{', src.indexOf('class ')) + 1);
    const reThis = /this\.(\w+)\s*=\s*([^;]+);/g;
    let p;
    for (p = reThis.exec(body); p; p = reThis.exec(body)) {
      const lhs = p[1];
      const rhs = p[2].trim();
      if (lhs.startsWith('_') || seenProps.has(lhs)) continue;
      seenProps.add(lhs);
      let type = 'any';
      const call = rhs.match(/this\.(\w+)\(/);
      if (call && returnsOf[call[1]]) {
        type = returnsOf[call[1]];
      } else if (/^'/.test(rhs) || /^"[^"]*"$/.test(rhs)) {
        type = 'string';
      } else if (/^[\d.]+$/.test(rhs)) {
        type = 'number';
      } else if (/^\[\s*\]$/.test(rhs)) {
        type = 'any[]';
      } else if (/^\{/.test(rhs)) {
        type = 'object';
      } else if (/^(true|false)$/.test(rhs)) {
        type = 'boolean';
      } else if (/^new\s+/.test(rhs)) {
        type = 'object';
      }
      props.push({ name: lhs, type });
    }
  }

  return { className: classM ? classM[1] : null, base: classM ? classM[2] : null, returnsOf, paramMap, props, jsdocBlocks };
}

const ENTRY_REDECL = new Map([
  ['core.js', 'core'],
  ['software.js', 'software'],
  ['hardware.js', 'hardware'],
  ['feature.js', 'feature'],
  ['detector.js', 'detector'],
]);

function declarationFor(rel, src, entryName) {
  const { className, base, returnsOf, paramMap, props, jsdocBlocks } = parseFile(src);
  const staticOf = Object.fromEntries(jsdocBlocks.map((b) => [b.member, b.isStatic]).filter(([, v]) => v));
  const lines = [];

  if (!className) {
    // pure re-export entry (core/software/hardware re-exporters)
    const reexports = [...src.matchAll(/from '\.\/(\w+)'/g)].map((m) => m[1]);
    const out = reexports.map((f) => `export * from './${f}';`).join('\n');
    return out + '\n';
  }

  const imports = [];
  if (base) {
    const baseFile = base[0].toLowerCase() + base.slice(1);
    if (entryName === 'core') {
      imports.push(`import { ${base} } from './${baseFile}';`);
    } else {
      imports.push(`import { ${base} } from '@detector-js/core';`);
    }
  }
  if (imports.length) lines.push(imports.join('\n'), '');

  let ctorParams = 'ua?: string | null';
  if (base === 'CssFlagsClass' || className === 'CssFlagsClass') {
    ctorParams = 'ua?: string | null, flags?: object, cssFlagsPrefix?: string';
  } else if (entryName === 'detector') {
    ctorParams = 'ua?: string | null, values?: boolean, cssFlags?: boolean, cssFlagsPrefix?: string';
  }
  lines.push(`export declare class ${className}${base ? ` extends ${base}` : ''} {`);
  lines.push(`  constructor(${ctorParams});`);
  lines.push('');

  for (const p of props) {
    lines.push(`  ${p.name}: ${p.type};`);
  }
  if (props.length) lines.push('');

  // getters + methods from jsdoc members
  const seen = new Set();
  for (const b of jsdocBlocks) {
    const name = b.member;
    if (!name || name === 'constructor' || name.startsWith('_') || seen.has(name)) continue;
    const isGetter = new RegExp(`get\\s+${name}\\s*\\(`).test(src.slice(Math.max(0, b.lineStart - 40), b.lineStart + 60));
    const isStatic = staticOf[name];
    if (isGetter) {
      lines.push(`  ${isStatic ? 'static ' : ''}get ${name}(): ${returnsOf[name] || 'any'};`);
    } else {
      const ret = returnsOf[name] || 'void';
      const rawParams = b.params ? b.params.split(',').map((x) => x.trim()).filter(Boolean) : [];
      const params = rawParams.map((x) => {
        const nm = (x.match(/(?:^|\.)([\w$]+)\b/) || [null, 'arg'])[1];
        return `${nm}?: any`;
      });
      lines.push(`  ${isStatic ? 'static ' : ''}${name}(${params.join(', ')}): ${ret};`);
    }
    seen.add(name);
  }

  if (entryName === 'feature') lines.push(`  [flag: string]: any;`);
  lines.push('}');

  // feature entry re-exports audio/video
  if (entryName === 'feature') {
    lines.push('', `export * from './audioFeature';`, `export * from './videoFeature';`);
  }

  return lines.join('\n') + '\n';
}

const FILES = [
  ['packages/core/lib/asserts.js', 'core'],
  ['packages/core/lib/flagsClass.js', 'core'],
  ['packages/core/lib/cssFlagsClass.js', 'core'],
  ['packages/core/lib/core.js', 'core'],
  ['packages/software/lib/browser.js', 'software'],
  ['packages/software/lib/engine.js', 'software'],
  ['packages/software/lib/os.js', 'software'],
  ['packages/software/lib/software.js', 'software'],
  ['packages/hardware/lib/cpu.js', 'hardware'],
  ['packages/hardware/lib/device.js', 'hardware'],
  ['packages/hardware/lib/gpu.js', 'hardware'],
  ['packages/hardware/lib/platform.js', 'hardware'],
  ['packages/hardware/lib/hardware.js', 'hardware'],
  ['packages/feature/lib/audioFeature.js', 'feature'],
  ['packages/feature/lib/videoFeature.js', 'feature'],
  ['packages/feature/lib/feature.js', 'feature'],
  ['packages/detector/lib/detector.js', 'detector'],
];

function outPathFor(rel) {
  const m = rel.match(/(\w+)\.js$/);
  return rel.replace(/\.js$/, '.d.ts');
}

async function main() {
  for (const [rel, entry] of FILES) {
    const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const dts = declarationFor(rel, src, entry);
    fs.writeFileSync(path.join(ROOT, outPathFor(rel)), dts);
  }
  console.info('✓ generated .d.ts from JSDoc (17 files)');
}

main();