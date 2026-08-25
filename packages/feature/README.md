# @detector-js/feature

The capability detector: Feature (90+ WebAPI flags), AudioFeature and VideoFeature (codec formats).

Part of the [DetectorJS](https://github.com/pixu1980/detector-js) vanillaJS monorepo. **Zero external runtime dependencies.**

## Install

```sh
npm i @detector-js/feature
```

## Usage

```js
import { Feature,AudioFeature,VideoFeature } from '@detector-js/feature';
```

```js
const { Detector } = require('@detector-js/detector');
const d = new Detector();
console.log(d.toFlags());
```

## Full docs
See [Getting started](../../docs/getting-started.md), [API reference](../../docs/api.md) and the root [README](../../README.md).
