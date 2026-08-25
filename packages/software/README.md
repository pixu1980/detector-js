# @detector-js/software

The software detector: Browser (60+ browsers), Engine (layout engines) and OS (with version names).

Part of the [DetectorJS](https://github.com/pixu1980/detector-js) vanillaJS monorepo. **Zero external runtime dependencies.**

## Install

```sh
npm i @detector-js/software
```

## Usage

```js
import { Browser,Engine,OS } from '@detector-js/software';
```

```js
const { Detector } = require('@detector-js/detector');
const d = new Detector();
console.log(d.toFlags());
```

## Full docs
See [Getting started](../../docs/getting-started.md), [API reference](../../docs/api.md) and the root [README](../../README.md).
