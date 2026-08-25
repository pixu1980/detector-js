// Type-level smoke test: consumers can use the public API with declared types.
// Validated by `pnpm types:check` (tsc --noEmit).
import DetectorDefault, { Detector as NamedDetector } from 'detector-js';
import { Feature, AudioFeature, VideoFeature } from '@detector-js/feature';
import { Browser, Engine, OS } from '@detector-js/software';
import { Platform, Device, CPU, GPU } from '@detector-js/hardware';
import { Asserts, FlagsClass, CssFlagsClass } from '@detector-js/core';

const d: NamedDetector = new DetectorDefault('ua', true, false);
const name: string | undefined = d.browser.name;
const version: string | undefined = d.os.version;
const platform: string = d.platform;
const webGPU: boolean = d.feature.webGPU as boolean;
const keys: number = Object.keys(d.feature).length;

d.upgrade().then((v) => v); // Promise<object>

const f = new Feature();
const on: boolean = f.webAuthn as boolean;
const mem: number | string = f.deviceMemory;
const fmts: object = f.formats ? f.formats : {};

new AudioFeature();
new VideoFeature();

const b = new Browser();
b.toFlags();
const os = new OS();
os.upgrade().then((v) => (v as any).versionName);
const cpu = new CPU();
const cores: number = cpu.cores;
new GPU().getInfo();
new Platform('ua');
new Device();

const ok: boolean = Asserts.all([true, () => true], true);
Asserts.one([false]);
new FlagsClass();
new CssFlagsClass('ua', {}, 'x').toCssFlags();

const e = new Engine();
e.version;

export { name, version, platform, webGPU, keys, on, mem, fmts, cores, ok, e };
