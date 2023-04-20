'use strict';

const detector = require('..');
const assert = require('assert').strict;

assert.strictEqual(detector(), 'Hello from detector');
console.info("detector tests passed");
