'use strict';

const assert = require('assert').strict;
const hardware = require('..');

assert.strictEqual(typeof hardware.Platform, 'function', 'Platform export missing');
assert.strictEqual(typeof hardware.Device, 'function', 'Device export missing');
assert.strictEqual(typeof hardware.CPU, 'function', 'CPU export missing');
assert.strictEqual(typeof hardware.GPU, 'function', 'GPU export missing');

console.info('hardware tests passed');