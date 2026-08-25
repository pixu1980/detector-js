'use strict';

const assert = require('assert').strict;
const detector = require('..');

assert.strictEqual(typeof detector.Detector, 'function', 'Detector export missing');
assert.strictEqual(typeof detector.Detector.prototype.toFlags, 'function', 'Detector.toFlags missing');
assert.strictEqual(typeof detector.Detector.prototype.toValues, 'function', 'Detector.toValues missing');

console.info('detector tests passed');