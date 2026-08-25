'use strict';

const assert = require('assert').strict;
const core = require('..');

assert.strictEqual(typeof core.Asserts, 'function', 'Asserts export missing');
assert.strictEqual(typeof core.FlagsClass, 'function', 'FlagsClass export missing');
assert.strictEqual(typeof core.CssFlagsClass, 'function', 'CssFlagsClass export missing');
assert.strictEqual(typeof core.Asserts.checkAssert, 'function', 'Asserts.checkAssert missing');
assert.strictEqual(typeof core.Asserts.all, 'function', 'Asserts.all missing');
assert.strictEqual(typeof core.Asserts.one, 'function', 'Asserts.one missing');
assert.strictEqual(core.Asserts.all([true, 1, 'x']), true, 'Asserts.all failed');
assert.strictEqual(core.Asserts.one([false, 0, '']), false, 'Asserts.one failed');

console.info('core tests passed');