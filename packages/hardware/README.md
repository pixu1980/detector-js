# @detector-js/hardware

The hardware detector: Platform (desktop/smartphone/tablet/tv/console/bot), Device, CPU and GPU.

Part of the [DetectorJS](https://github.com/pixu1980/detector-js) vanillaJS monorepo. **Zero external runtime dependencies.**

## Install

```sh
npm i @detector-js/hardware
```

## Usage

```js
import { Platform,Device,CPU,GPU } from '@detector-js/hardware';
```

```js
const { Detector } = require('@detector-js/detector');
const d = new Detector();
console.log(d.toFlags());
```

## Full docs
See [Getting started](../../docs/getting-started.md), [API reference](../../docs/api.md) and the root [README](../../README.md).
