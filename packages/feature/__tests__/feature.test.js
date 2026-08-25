'use strict';

const assert = require('assert').strict;
const feature = require('..');

assert.strictEqual(typeof feature.Feature, 'function', 'Feature export missing');
assert.strictEqual(typeof feature.AudioFeature, 'function', 'AudioFeature export missing');
assert.strictEqual(typeof feature.VideoFeature, 'function', 'VideoFeature export missing');

console.info('feature tests passed');