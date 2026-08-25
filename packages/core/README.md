# @detector-js/core

Core module of [DetectorJS](https://github.com/pixu1980/detector-js): the `Asserts` safety helpers, the `FlagsClass` / `CssFlagsClass` base classes, and the internal polyfills (baked into the dist bundle).

**Zero dependencies** — this package has no runtime dependencies at all.

## Install

```sh
npm i @detector-js/core
```

## Usage

```js
import { Asserts, FlagsClass, CssFlagsClass } from '@detector-js/core';

Asserts.all([true, () => 'feature' in window], true); // safe-mode probes
Asserts.one([false, 1]);                              // at least one truthy

class MyFlags extends CssFlagsClass {
  get webGPU() { return 'gpu' in this.navigator; }
}
const flags = new MyFlags();
flags.toFlags();     // { webGPU: false }
flags.toCssFlags();  // ['flags--webgpu'] style strings
```

## API
- `Asserts.checkAssert(value | fn, safe?)`, `Asserts.all(list, safe?)`, `Asserts.one(list, safe?)`
- `FlagsClass` — env roots (`ua`, `root`, `process`, `navigator`, `document` getters), `toFlags()`, `toValues()`
- `CssFlagsClass` — adds `flags`/`cssFlagsPrefix` getters + `toCssFlags()`

See [docs](../../docs/) in the monorepo root.
