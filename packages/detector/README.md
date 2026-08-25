# @detector-js/detector

The high-level Detector class that composes core, feature, software and hardware into one API.

Part of the [DetectorJS](https://github.com/pixu1980/detector-js) vanillaJS monorepo. **Zero external runtime dependencies.**

## Install

```sh
npm i @detector-js/detector
```

## Usage

```js
import { Detector } from '@detector-js/detector';
```

```js
const { Detector } = require('@detector-js/detector');
const d = new Detector();
console.log(d.toFlags());
```

## Full docs
See [Getting started](../../docs/getting-started.md), [API reference](../../docs/api.md) and the root [README](../../README.md).
