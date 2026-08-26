# Examples

Every integration mode DetectorJS supports - all zero-dependency, all 100% client-side.

| Example | Mode | Run |
| --- | --- | --- |
| [node-cjs](node-cjs) | CommonJS (`require`) | `cd node-cjs && npm i && node index.js` |
| [node-esm](node-esm) | ECMAScript modules (`import`) | `cd node-esm && npm i && node index.mjs` |
| [browser](browser) | `<script>` global → `new Detector()` | open `index.html` in a browser |
| [bundler](bundler) | Any bundler (esbuild shown) | `cd bundler && npm i && npm run build && npm start` |

> The `node-*` examples declare `"detector-js": "2.0.11"` (baseline; the release script bumps examples to the next version) - the package is published with
> an `exports` map, so both `import` and `require` resolve to the right build automatically.
> The nightly/CI examples also work against the workspace copy via `pnpm` (see root `pnpm-workspace.yaml`).

| [devices](devices) | Device gallery | open `examples/devices/index.html` in a browser |
