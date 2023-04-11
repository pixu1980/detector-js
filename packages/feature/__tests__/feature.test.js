'use strict';

const feature = require('..');
const assert = require('assert').strict;

assert.strictEqual(feature(), 'Hello from feature');
console.info("feature tests passed");
