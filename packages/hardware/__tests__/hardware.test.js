'use strict';

const hardware = require('..');
const assert = require('assert').strict;

assert.strictEqual(hardware(), 'Hello from hardware');
console.info("hardware tests passed");
