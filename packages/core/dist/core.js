'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let root;
if (typeof window !== 'undefined') {
  root = window;
} else if (typeof globalThis !== 'undefined') {
  root = globalThis;
} else {
  root = {};
}
root.Reflect = root.Reflect || {};

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(search, start) {
      start = typeof start !== 'number' ? 0 : start;
      if (start + search.length > this.length) {
        return false;
      }
      return this.indexOf(search, start) !== -1;
    }
  });
}

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value(search, rawPos) {
      const pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    }
  });
}

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!String.prototype.toCamelCase) {
  Object.defineProperty(String.prototype, 'toCamelCase', {
    enumerable: false,
    configurable: true,
    writable: true,
    value() {
      const s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => {
        return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
      }).join('');
      return s.slice(0, 1).toLowerCase() + s.slice(1);
    }
  });
}

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!Array.prototype.map) {
  Object.defineProperty(Array.prototype, 'map', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(arr, iterator) {
      const result = [];
      for (let i = 0; i < arr.length; i += 1) {
        result.push(iterator(arr[i]));
      }
      return result;
    }
  });
}

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      const n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(target, firstSource) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }
      const to = Object(target);
      for (let i = 1; i < arguments.length; i++) {
        let nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          // eslint-disable-next-line no-continue
          continue;
        }
        nextSource = Object(nextSource);
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

/* eslint-disable */

(function (Object, GOPS) {

  // (C) Andrea Giammarchi - Mit Style
  // @see https://github.com/es-shims/get-own-property-symbols
  if (GOPS in Object) {
    return;
  }
  var setDescriptor,
    G = typeof global === typeof G ? window : global,
    id = 0,
    random = String(Math.random()),
    prefix = '__\x01symbol:',
    prefixLength = prefix.length,
    internalSymbol = '__\x01symbol@@' + random,
    DP = 'defineProperty',
    DPies = 'defineProperties',
    GOPN = 'getOwnPropertyNames',
    GOPD = 'getOwnPropertyDescriptor',
    PIE = 'propertyIsEnumerable',
    gOPN = Object[GOPN],
    gOPD = Object[GOPD],
    create = Object.create,
    keys = Object.keys,
    freeze = Object.freeze || Object,
    defineProperty = Object[DP],
    $defineProperties = Object[DPies],
    descriptor = gOPD(Object, GOPN),
    ObjectProto = Object.prototype,
    hOP = ObjectProto.hasOwnProperty,
    pIE = ObjectProto[PIE],
    toString = ObjectProto.toString,
    addInternalIfNeeded = function (o, uid, enumerable) {
      if (!hOP.call(o, internalSymbol)) {
        defineProperty(o, internalSymbol, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: {}
        });
      }
      o[internalSymbol]['@@' + uid] = enumerable; // eslint-disable-line no-param-reassign
    },
    createWithSymbols = function (proto, descriptors) {
      var self = create(proto);
      gOPN(descriptors).forEach(function (key) {
        if (propertyIsEnumerable.call(descriptors, key)) {
          $defineProperty(self, key, descriptors[key]);
        }
      });
      return self;
    },
    copyAsNonEnumerable = function (descriptor) {
      var newDescriptor = create(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    },
    get = function get() {},
    onlyNonSymbols = function (name) {
      // eslint-disable-next-line eqeqeq
      return name != internalSymbol && !hOP.call(source, name);
    },
    onlySymbols = function (name) {
      // eslint-disable-next-line eqeqeq
      return name != internalSymbol && hOP.call(source, name);
    },
    propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = String(key);
      return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
    },
    setAndGetSymbol = function (uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function (value) {
          setDescriptor(this, uid, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
          });
          addInternalIfNeeded(this, uid, true);
        }
      };
      defineProperty(ObjectProto, uid, descriptor);
      source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
      return freeze(source[uid]);
    },
    Symbol = function Symbol(description) {
      if (this instanceof Symbol) {
        throw new TypeError('Symbol is not a constructor');
      }
      return setAndGetSymbol(prefix.concat(description || '', random, ++id));
    },
    source = create(null),
    sourceConstructor = {
      value: Symbol
    },
    sourceMap = function (uid) {
      return source[uid];
    },
    $defineProperty = function defineProp(o, key, descriptor) {
      var uid = String(key);
      if (onlySymbols(uid)) {
        setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
        addInternalIfNeeded(o, uid, !!descriptor.enumerable);
      } else {
        defineProperty(o, key, descriptor);
      }
      return o;
    },
    $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
      return gOPN(o).filter(onlySymbols).map(sourceMap);
    };
  descriptor.value = $defineProperty;
  defineProperty(Object, DP, descriptor);
  descriptor.value = $getOwnPropertySymbols;
  defineProperty(Object, GOPS, descriptor);
  descriptor.value = function getOwnPropertyNames(o) {
    return gOPN(o).filter(onlyNonSymbols);
  };
  defineProperty(Object, GOPN, descriptor);
  descriptor.value = function defineProperties(o, descriptors) {
    var symbols = $getOwnPropertySymbols(descriptors);
    if (symbols.length) {
      keys(descriptors).concat(symbols).forEach(function (uid) {
        if (propertyIsEnumerable.call(descriptors, uid)) {
          $defineProperty(o, uid, descriptors[uid]);
        }
      });
    } else {
      $defineProperties(o, descriptors);
    }
    return o;
  };
  defineProperty(Object, DPies, descriptor);
  descriptor.value = propertyIsEnumerable;
  defineProperty(ObjectProto, PIE, descriptor);
  descriptor.value = Symbol;
  defineProperty(G, 'Symbol', descriptor);

  // defining `Symbol.for(key)`
  descriptor.value = function (key) {
    var uid = prefix.concat(prefix, key, random);
    return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
  };
  defineProperty(Symbol, 'for', descriptor);

  // defining `Symbol.keyFor(symbol)`
  descriptor.value = function (symbol) {
    if (onlyNonSymbols(symbol)) {
      throw new TypeError(symbol + ' is not a symbol');
    }
    if (!hOP.call(source, symbol)) {
      return void 0;
    }
    var label = symbol.slice(prefixLength);
    if (label.slice(0, prefixLength) !== prefix) {
      return void 0;
    }
    label = label.slice(prefixLength);
    if (label === random) {
      return void 0;
    }
    label = label.slice(0, label.length - random.length);
    return label.length > 0 ? label : void 0;
  };
  defineProperty(Symbol, 'keyFor', descriptor);
  descriptor.value = function getOwnPropertyDescriptor(o, key) {
    var descriptor = gOPD(o, key);
    if (descriptor && onlySymbols(key)) {
      descriptor.enumerable = propertyIsEnumerable.call(o, key);
    }
    return descriptor;
  };
  defineProperty(Object, GOPD, descriptor);
  descriptor.value = function (proto, descriptors) {
    return arguments.length === 1 || typeof descriptors === 'undefined' ? create(proto) : createWithSymbols(proto, descriptors);
  };
  defineProperty(Object, 'create', descriptor);
  descriptor.value = function () {
    var str = toString.call(this);
    return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
  };
  defineProperty(ObjectProto, 'toString', descriptor);
  try {
    // fails in few pre ES 5.1 engines
    if (create(defineProperty({}, prefix, {
      get: function () {
        return defineProperty(this, prefix, {
          value: true
        })[prefix];
      }
    }))[prefix] === true) {
      setDescriptor = defineProperty;
    } else {
      throw 'IE11'; // eslint-disable-line no-throw-literal
    }
  } catch (o_O) {
    // eslint-disable-line camelcase
    setDescriptor = function (o, key, descriptor) {
      var protoDescriptor = gOPD(ObjectProto, key);
      delete ObjectProto[key];
      defineProperty(o, key, descriptor);
      defineProperty(ObjectProto, key, protoDescriptor);
    };
  }
})(Object, 'getOwnPropertySymbols');
(function (O, Symbol) {

  var dP = O.defineProperty,
    ObjectProto = O.prototype,
    toString = ObjectProto.toString,
    toStringTag = 'toStringTag',
    descriptor;
  ['iterator',
  // A method returning the default iterator for an object. Used by for...of.
  'match',
  // A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by String.prototype.match().
  'replace',
  // A method that replaces matched substrings of a string. Used by String.prototype.replace().
  'search',
  // A method that returns the index within a string that matches the regular expression. Used by String.prototype.search().
  'split',
  // A method that splits a string at the indices that match a regular expression. Used by String.prototype.split().
  'hasInstance',
  // A method determining if a constructor object recognizes an object as its instance. Used by instanceof.
  'isConcatSpreadable',
  // A Boolean value indicating if an object should be flattened to its array elements. Used by Array.prototype.concat().
  'unscopables',
  // An Array of string values that are property values. These are excluded from the with environment bindings of the associated objects.
  'species',
  // A constructor function that is used to create derived objects.
  'toPrimitive',
  // A method converting an object to a primitive value.
  toStringTag // A string value used for the default description of an object. Used by Object.prototype.toString().
  ].forEach(function (name) {
    if (!(name in Symbol)) {
      dP(Symbol, name, {
        value: Symbol(name)
      });
      if (name === toStringTag) {
        descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
        descriptor.value = function () {
          var str = toString.call(this);
          var tst = this == null ? this : this[Symbol.toStringTag];
          return tst == null ? str : '[object ' + tst + ']';
        };
        dP(ObjectProto, 'toString', descriptor);
      }
    }
  });
})(Object, Symbol);
(function (Si, AP, SP) {
  function returnThis() {
    return this;
  }

  /*
   * make Arrays usable as iterators
   * so that other iterables can copy same logic
   */
  if (!AP[Si]) {
    // eslint-disable-next-line no-param-reassign
    AP[Si] = function () {
      var i = 0,
        self = this,
        iterator = {
          next: function next() {
            var done = self.length <= i;
            return done ? {
              done: done
            } : {
              done: done,
              value: self[i++]
            };
          }
        };
      iterator[Si] = returnThis;
      return iterator;
    };
  }

  /*
   * make Strings usable as iterators
   * to simplify Array.from and for/of like loops
   */
  if (!SP[Si]) {
    // eslint-disable-next-line no-param-reassign
    SP[Si] = function () {
      var fromCodePoint = String.fromCodePoint,
        self = this,
        i = 0,
        length = self.length,
        iterator = {
          next: function next() {
            var done = length <= i,
              c = done ? '' : fromCodePoint(self.codePointAt(i));
            i += c.length;
            return done ? {
              done: done
            } : {
              done: done,
              value: c
            };
          }
        };
      iterator[Si] = returnThis;
      return iterator;
    };
  }
})(Symbol.iterator, Array.prototype, String.prototype);

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!Object.hasOwnProperty('getOwnPropertyDescriptors')) {
  Object.defineProperty(Object, 'getOwnPropertyDescriptors', {
    configurable: true,
    enumerable: true,
    writable: true,
    value(object) {
      const keys = !!Reflect && !!Reflect.ownKeys ? Reflect.ownKeys(object) : Object.getOwnPropertyNames(object).concat(Object.getOwnPropertySymbols(object));
      return keys.reduce((descriptors, key) => {
        return Object.defineProperty(descriptors, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: Object.getOwnPropertyDescriptor(object, key)
        });
      }, {});
    }
  });
}

/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!Object.prototype.merge) {
  Object.defineProperty(Object.prototype, 'merge', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(...objs) {
      const mergeObj = [this, ...objs].reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
        if (acc.hasOwnProperty(k)) {
          if (acc[k] instanceof Array) {
            acc[k] = [].concat(acc[k], obj[k]);
          } else if (acc[k] instanceof Object && Object.keys(acc[k]).length > 0 && obj[k] instanceof Object && Object.keys(obj[k]).length > 0) {
            acc[k].merge(obj[k]);
          } else {
            acc[k] = obj[k];
          }
        } else {
          acc[k] = obj[k];
        }
        return acc;
      }, {}), {});
      return Object.assign(this, mergeObj);
    }
  });
}

/**
 *
 *
 * @export
 * @class Asserts
 */
class Asserts {
  static checkAssert(assert, safe = false) {
    if (!!assert) {
      if (assert instanceof Function) {
        if (!!safe) {
          try {
            return assert();
          } catch (e) {
            return false;
          }
        }
        return assert();
      }
      return assert;
    }
    return false;
  }

  /**
   * Check for every assert to be true
   *
   * @static
   * @param {any} [asserts=[]] - array of asserts (can be boolean, strings, functions, whatever you want ;-)
   * @param {boolean} [safe=false] - executes asserts in a safe mode (try/catch)
   * @returns boolean
   *
   * @memberOf Asserts
   */
  static all(asserts = [], safe = false) {
    return asserts.every(assert => {
      return Asserts.checkAssert(assert, safe);
    });
  }

  /**
   * Check for at least one assert to be true
   *
   * @static
   * @param {any} [asserts=[]] - array of asserts (can be boolean, strings, functions, whatever you want ;-)
   * @param {boolean} [safe=false] - executes asserts in a safe mode (try/catch)
   * @returns boolean
   *
   * @memberOf Asserts
   */
  static one(asserts = [], safe = false) {
    return asserts.some(assert => {
      return Asserts.checkAssert(assert, safe);
    });
  }
}

/**
 *
 *
 * @export
 * @class FlagsClass
 */
class FlagsClass {
  /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=null]
   *
   * @memberOf FlagsClass
   */
  constructor(ua = null) {
    this._booleanFlagsValuePropertyName = 'name';
    this._root = self || window || global || {};
    this._process = this._root.process || {};
    this._navigator = this._root.navigator || {};
    this._document = this._root.document || null;
    this._ua = ua || this._navigator.userAgent || 'n/a';
  }

  //! Public getters (kept available after construction, like upstream v2)
  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get booleanFlagsValuePropertyName() {
    return this._booleanFlagsValuePropertyName;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get root() {
    return this._root;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get process() {
    return this._process;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get navigator() {
    return this._navigator;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get document() {
    return this._document;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf FlagsClass
   */
  get ua() {
    return this._ua;
  }

  /**
   *
   *
   * @returns {object}
   *
   * @memberOf FlagsClass
   */
  toValues() {
    const proto = Object.getPrototypeOf(this);
    const protoName = (this._booleanFlagsValuePropertyName || this.constructor.name).toLowerCase();
    const protoProperties = Object.getOwnPropertyNames(proto).filter(prop => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).concat(Object.getOwnPropertyNames(this).filter(prop => {
      return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(this, prop).get;
    }));
    const protoPropertiesReduced = protoProperties.reduce((acc, prop) => {
      if (!!this[prop]) {
        if (typeof this[prop] === 'boolean') {
          acc[protoName] = prop;
        } else {
          acc[prop] = this[prop];
        }
      }
      return acc;
    }, {});
    return protoPropertiesReduced;
  }

  /**
   *
   *
   * @returns {object}
   *
   * @memberOf FlagsClass
   */
  toFlags() {
    const proto = Object.getPrototypeOf(this);
    return Object.getOwnPropertyNames(proto).filter(prop => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, prop) => {
      acc[prop] = this[prop];
      return acc;
    }, {}).merge(Object.getOwnPropertyNames(this).filter(prop => {
      return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(this, prop).get;
    }).reduce((acc, prop) => {
      acc[prop] = this[prop];
      return acc;
    }, {}));
  }
}

/**
 *
 *
 * @export
 * @class CssFlagsClass
 * @extends {FlagsClass}
 */
class CssFlagsClass extends FlagsClass {
  /**
   * Creates an instance of CssFlagsClass.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='flags']
   *
   * @memberOf CssFlagsClass
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'flags') {
    super(ua);
    this._flags = flags;
    // NOTE: kept for parity with upstream v2 (`flags` is currently unused downstream)
    this._flags[1] = true;
    this._cssFlagsPrefix = cssFlagsPrefix;
  }

  //! Public getters (kept available after construction, like upstream v2)
  /**
   *
   *
   * @readonly
   *
   * @memberOf CssFlagsClass
   */
  get flags() {
    return this._flags;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf CssFlagsClass
   */
  get cssFlagsPrefix() {
    return this._cssFlagsPrefix;
  }

  /**
   *
   *
   * @returns object
   *
   * @memberOf CssFlagsClass
   */
  toCssFlags() {
    const proto = Object.getPrototypeOf(this);
    return Object.getOwnPropertyNames(proto).filter(prop => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, prop) => {
      if (!!this[prop]) {
        acc.push((this._cssFlagsPrefix + '--' + prop + (typeof this[prop] !== 'boolean' ? '--' + this[prop] : '')).toLowerCase());
      }
      return acc;
    }, []);
  }
}

//! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
//! placeholder is rewritten at build time by rollup-plugin-replace.
if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('DetectorJS Core Module v' + ("3.0.0" ) + ' initialized');
}

exports.Asserts = Asserts;
exports.CssFlagsClass = CssFlagsClass;
exports.FlagsClass = FlagsClass;
//# sourceMappingURL=core.js.map
