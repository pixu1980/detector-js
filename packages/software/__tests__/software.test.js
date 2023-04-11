'use strict';

const software = require('../lib/software');
const assert = require('assert').strict;

assert.strictEqual(software(), 'Hello from software');
console.info("software tests passed");
