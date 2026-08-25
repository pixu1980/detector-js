'use strict';

const assert = require('assert').strict;
const software = require('..');

assert.strictEqual(typeof software.Browser, 'function', 'Browser export missing');
assert.strictEqual(typeof software.Engine, 'function', 'Engine export missing');
assert.strictEqual(typeof software.OS, 'function', 'OS export missing');

console.info('software tests passed');