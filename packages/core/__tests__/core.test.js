'use strict';

const { describe, test } = require('node:test');
const assert = require('assert').strict;
const core = require('..');

describe('@detector-js/core', () => {
  test('exports the public API', () => {
    assert.equal(typeof core.Asserts, 'function');
    assert.equal(typeof core.FlagsClass, 'function');
    assert.equal(typeof core.CssFlagsClass, 'function');
  });

  describe('Asserts', () => {
    test('checkAssert handles values and functions', () => {
      assert.equal(core.Asserts.checkAssert(true), true);
      assert.equal(core.Asserts.checkAssert(() => 42), 42);
      assert.equal(core.Asserts.checkAssert(false), false);
      assert.equal(core.Asserts.checkAssert(() => { throw new Error('x'); }, true), false);
    });

    test('all requires every assert to pass', () => {
      assert.equal(core.Asserts.all([true, 1, 'x']), true);
      assert.equal(core.Asserts.all([true, false]), false);
      assert.equal(core.Asserts.all([() => true, () => false], true), false);
    });

    test('one requires at least one assert to pass', () => {
      assert.equal(core.Asserts.one([false, 0, '']), false);
      assert.equal(core.Asserts.one([false, 'ok']), true);
    });
  });

  describe('FlagsClass', () => {
    test('resolves environment without a UA', () => {
      const f = new core.FlagsClass();
      assert.ok(f.ua.length > 0);
      assert.ok(f.root);
      assert.ok(f.navigator);
    });

    test('toValues/toFlags merge getters and own props', () => {
      class Mock extends core.FlagsClass {
        constructor() {
          super('mock ua');
          this.ownValue = 'own';
        }
        get lazy() { return true; }
      }
      const m = new Mock();
      assert.equal(m.toValues().name, 'lazy');
      assert.equal(m.toValues().ownValue, 'own');
      assert.equal(m.toFlags().lazy, true);
    });
  });

  describe('CssFlagsClass', () => {
    test('toCssFlags only includes true getters', () => {
      class Mock extends core.CssFlagsClass {
        get supported() { return true; }
        get version() { return '1.2.3'; }
        get missing() { return false; }
      }
      const m = new Mock('ua', {}, 'mock');
      const flags = m.toCssFlags();
      assert.ok(flags.includes('mock--supported'));
      assert.ok(flags.includes('mock--version--1.2.3'));
      assert.ok(!flags.includes('missing'));
    });
  });
});
