(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Detector = {}));
})(this, (function (exports) { 'use strict';

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
    console.log('DetectorJS Core Module v' + "3.0.0" + ' initialized');
  }

  /**
   *
   *
   * @export
   * @class AudioFeature
   * @extends {CssFlagsClass}
   */
  class AudioFeature extends CssFlagsClass {
    /**
     * Creates an instance of AudioFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='audio']
     *
     * @memberOf AudioFeature
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'audio') {
      super(ua, flags, cssFlagsPrefix);
      this._createTestElements();
      this.context = this.getContext();
      this.formats = {
        mp3: this.getMp3(),
        webm: this.getWebm(),
        ogg: this.getOgg(),
        opus: this.getOpus(),
        wav: this.getWav(),
        m4a: this.getM4a()
      };
    }

    /**
     *
     *
     * @memberof AudioFeature
     */
    _createTestElements() {
      this._audioElement = this._document.createElement('audio');
    }

    // /**
    //  *
    //  *
    //  * @memberof AudioFeature
    //  */
    // _destroyTestElements() {
    //   this._audioElement = null;

    //   delete this._audioElement;
    // }

    /**
     *
     *
     * @readonly
     *
     * @memberOf AudioFeature
     */
    get supported() {
      return Asserts.all(['Audio' in this._root, 'HTMLAudioElement' in this._root, 'HTMLMediaElement' in this._root, () => !!this._audioElement && 'canPlayType' in this._audioElement && this._audioElement instanceof this._root.HTMLAudioElement && this._audioElement instanceof this._root.HTMLMediaElement], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getContext() {
      return Asserts.one(['AudioContext' in this._root, 'webkitAudioContext' in this._root]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getMp3() {
      return Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getWebm() {
      return Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getOgg() {
      return Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getOpus() {
      return Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getWav() {
      return Asserts.all([() => this.supported && this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getM4a() {
      return Asserts.all([() => this.supported && (this._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || this._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== ''], true);
    }
  }

  /**
   *
   *
   * @export
   * @class VideoFeature
   * @extends {CssFlagsClass}
   */
  class VideoFeature extends CssFlagsClass {
    /**
     * Creates an instance of VideoFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='video']
     *
     * @memberOf VideoFeature
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'video') {
      super(ua, flags, cssFlagsPrefix);
      this._createTestElements();
      this.formats = {
        mp4: this.getMp4(),
        ogv: this.getOgv(),
        webm: this.getWebm()
      };
    }

    /**
     *
     *
     * @memberof VideoFeature
     */
    _createTestElements() {
      this._videoElement = this._document.createElement('video');
    }

    // /**
    //  *
    //  *
    //  * @memberof VideoFeature
    //  */
    // _destroyTestElements() {
    //   this._viewElement = null;

    //   delete this._videoElement;
    // }

    /**
     *
     *
     * @readonly
     *
     * @memberOf VideoFeature
     */
    get supported() {
      return Asserts.all(['HTMLVideoElement' in this._root, 'HTMLMediaElement' in this._root, () => !!this._videoElement && 'canPlayType' in this._videoElement && this._videoElement instanceof this._root.HTMLVideoElement && this._videoElement instanceof this._root.HTMLMediaElement], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getMp4() {
      return Asserts.all([() => this.supported && this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getOgv() {
      return Asserts.all([() => this.supported && this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== ''], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getWebm() {
      return Asserts.all([() => this.supported && this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== ''], true);
    }
  }

  /* eslint-disable no-return-assign */

  /**
   *
   *
   * @export
   * @class Feature
   * @extends {CssFlagsClass}
   */
  class Feature extends CssFlagsClass {
    /**
     * Creates an instance of Feature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='feature']
     *
     * @memberOf Feature
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'feature') {
      super(ua, flags, cssFlagsPrefix);
      this._createTestElements();
      this.addEventListener = this.getAddEventListener();
      this.asyncScript = this.getAsyncScript();
      this.battery = this.getBattery();
      this.bluetooth = this.getBluetooth();
      this.broadcastChannel = this.getBroadcastChannel();
      this.caches = this.getCaches();
      this.clipboard = this.getClipboard();
      this.cors = this.getCors();
      this.credentials = this.getCredentials();
      this.deferScript = this.getDeferScript();
      this.fetch = this.getFetch();
      this.file = this.getFile();
      this.fileSystem = this.getFileSystem();
      this.fullscreen = this.getFullscreen();
      this.fullscreenKeyboard = this.getFullscreenKeyboard();
      this.gamepad = this.getGamepad();
      this.geolocation = this.getGeolocation();
      this.historyAPI = this.getHistoryAPI();
      this.indexedDB = this.getIndexedDB();
      this.intersectionObserver = this.getIntersectionObserver();
      this.littleEndian = this.getLittleEndian();
      this.localStorage = this.getLocalStorage();
      this.matchMedia = this.getMatchMedia();
      this.mediaCapabilities = this.getMediaCapabilities();
      this.mediaRecorder = this.getMediaRecorder();
      this.mediaSession = this.getMediaSession();
      this.nfc = this.getNFC();
      this.notifications = this.getNotifications();
      this.offscreenCanvas = this.getOffscreenCanvas();
      this.online = this.getOnline();
      this.paymentRequest = this.getPaymentRequest();
      this.permissions = this.getPermissions();
      this.querySelector = this.getQuerySelector();
      this.querySelectorAll = this.getQuerySelectorAll();
      this.resizeObserver = this.getResizeObserver();
      this.serial = this.getSerial();
      this.serviceWorker = this.getServiceWorker();
      this.speechSynthesis = this.getSpeechSynthesis();
      this.storage = this.getStorage();
      this.structuredClone = this.getStructuredClone();
      this.typedArray = this.getTypedArray();
      this.usb = this.getUSB();
      this.userMedia = this.getUserMedia();
      this.vibration = this.getVibration();
      this.visualViewport = this.getVisualViewport();
      this.wakeLock = this.getWakeLock();
      this.webAssembly = this.getWebAssembly();
      this.webAuthn = this.getWebAuthn();
      this.webCrypto = this.getWebCrypto();
      this.webLocks = this.getWebLocks();
      this.webRTC = this.getWebRTC();
      this.webShare = this.getWebShare();
      this.webSocket = this.getWebSocket();
      this.webXr = this.getWebXr();
      this.worker = this.getWorker();
    }

    /**
     *
     *
     * @param {any} prop
     * @param {any} [prefixes=this._cssPrefixes]
     * @returns {string}
     *
     * @memberOf Feature
     */
    _getCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
      prop = prop.toCamelCase();
      const prefixedProps = prefixes.map(item => {
        return (item === 'spec' ? '' : '-' + item + '-') + prop;
      });

      // if ('CSS' in this._root && 'supports' in this._root.CSS) {
      //   return this._root.CSS.supports(prefixedProps.map(item => '(' + item + ': inherit)').join(' or '));
      // }

      const prefixedPropsFound = prefixedProps.filter(item => {
        return item in this._div.style;
      });
      if (prefixedPropsFound.length > 0) {
        return prefixedPropsFound[0];
      }
      return null;
    }

    /**
     *
     *
     * @param {any} prop
     * @param {any} [prefixes=this._cssPrefixes]
     * @returns {string}
     *
     * @memberOf Feature
     */
    _checkCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
      return !!this._getCssPrefixedProp(prop, prefixes);
    }

    /**
     *
     *
     * @param {any} prop
     * @param {any} value
     * @returns {any}
     *
     * @memberOf Feature
     */
    _getCssPrefixedPropValue(prop, value) {
      const prefixedProp = this._getCssPrefixedProp(prop);
      if (prefixedProp) {
        this._document.body.insertBefore(this._div, null);
        this._div.style[prefixedProp] = value;
        const computedStylePropValue = this._root.getComputedStyle(this._div).getPropertyValue(prefixedProp);
        this._document.body.removeChild(this._div);
        if (!!computedStylePropValue && typeof computedStylePropValue === 'string') {
          return computedStylePropValue;
        }
        return null;
      }
      return null;
    }

    /**
     *
     *
     * @param {any} prop
     * @param {any} value
     * @returns {any}
     *
     * @memberOf Feature
     */
    _checkCssPrefixedPropValue(prop, value) {
      const prefixedPropValue = this._getCssPrefixedPropValue(prop, value);
      return !!prefixedPropValue && prefixedPropValue !== 'none';
    }

    /**
     *
     *
     * @memberof Feature
     */
    _createTestElements() {
      this._cssPrefixes = ['spec', 'webkit', 'moz', 'ms', 'o'];
      this._script = this._document.createElement('script');
      this._canvas = this._document.createElement('canvas');
      this._div = this._document.createElement('div');
      this._input = this._document.createElement('input');
      this._img = this._document.createElement('img');
      this._xmlHttpRequest = new this._root.XMLHttpRequest();
    }

    // /**
    //  *
    //  *
    //  * @memberof Feature
    //  */
    // _destroyTestElements() {
    //   this._cssPrefixes = null;

    //   this._script = null;
    //   this._canvas = null;
    //   this._div = null;
    //   this._input = null;
    //   this._img = null;
    //   this._xmlHttpRequest = null;

    //   delete this._cssPrefixes;

    //   delete this._script;
    //   delete this._canvas;
    //   delete this._div;
    //   delete this._input;
    //   delete this._img;
    //   delete this._xmlHttpRequest;
    // }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getAddEventListener() {
      return 'addEventListener' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getAsyncScript() {
      return 'async' in this._script;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBattery() {
      return 'battery' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBluetooth() {
      return 'bluetooth' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBroadcastChannel() {
      return 'BroadcastChannel' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCaches() {
      return 'caches' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getClipboard() {
      return 'clipboard' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCors() {
      return 'XMLHttpRequest' in this._root && 'withCredentials' in this._xmlHttpRequest;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCredentials() {
      return 'credentials' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getDeferScript() {
      return 'defer' in this._script;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFile() {
      return Asserts.all(['File' in this._root, 'FileReader' in this._root, 'FileList' in this._root, 'Blob' in this._root]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFileSystem() {
      return 'requestFileSystem' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFetch() {
      return 'fetch' in this._root && typeof this._root.fetch === 'function';
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFullscreen() {
      return Asserts.one(['requestFullscreen' in this._canvas, 'webkitRequestFullscreen' in this._canvas, 'msRequestFullscreen' in this._canvas, 'mozRequestFullScreen' in this._canvas]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFullscreenKeyboard() {
      return Asserts.all([() => 'Element' in this._root && 'ALLOW_KEYBOARD_INPUT' in this._root.Element], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getGeolocation() {
      return 'geolocation' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getGamepad() {
      return 'getGamepads' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getHistoryAPI() {
      return Asserts.all([() => 'history' in this._root && 'pushState' in this._root.history], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getIndexedDB() {
      return 'indexedDB' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getIntersectionObserver() {
      return 'IntersectionObserver' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getLittleEndian() {
      return Asserts.all([this.getTypedArray.bind(this), () => new this._root.Int8Array(new this._root.Int16Array([1]).buffer)[0] > 0], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getLocalStorage() {
      return Asserts.one([() => 'localStorage' in this._root], true) && Asserts.one([() => {
        const test = 'x';
        this._root.localStorage.setItem(test, test);
        this._root.localStorage.removeItem(test);
        return true;
      }], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMatchMedia() {
      return 'matchMedia' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMediaCapabilities() {
      return 'mediaCapabilities' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMediaRecorder() {
      return 'MediaRecorder' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMediaSession() {
      return 'mediaSession' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getNFC() {
      return 'nfc' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getNotifications() {
      return 'Notification' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getOffscreenCanvas() {
      return 'OffscreenCanvas' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getOnline() {
      return 'onLine' in this._navigator && !!this._navigator.onLine;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getPaymentRequest() {
      return 'PaymentRequest' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getPermissions() {
      return 'permissions' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getQuerySelector() {
      return 'querySelector' in this._document;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getQuerySelectorAll() {
      return 'querySelectorAll' in this._document;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getResizeObserver() {
      return 'ResizeObserver' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getSerial() {
      return 'serial' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getSpeechSynthesis() {
      return 'speechSynthesis' in this._navigator && 'SpeechSynthesisUtterance' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getStorage() {
      return 'storage' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getStructuredClone() {
      return 'structuredClone' in this._root && typeof this._root.structuredClone === 'function';
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getServiceWorker() {
      return 'serviceWorker' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getTypedArray() {
      return Asserts.all([() => 'Int8Array' in this._root && typeof this._root.Int8Array !== 'undefined'], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getUSB() {
      return 'usb' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getUserMedia() {
      return Asserts.one(['getUserMedia' in this._navigator, 'webkitGetUserMedia' in this._navigator, 'mozGetUserMedia' in this._navigator, 'msGetUserMedia' in this._navigator]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getVibration() {
      return Asserts.one(['vibrate' in this._navigator, 'webkitVibrate' in this._navigator, 'mozVibrate' in this._navigator, 'msVibrate' in this._navigator]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getVisualViewport() {
      return 'visualViewport' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWakeLock() {
      return 'wakeLock' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebAssembly() {
      return 'WebAssembly' in this._root && 'compile' in this._root.WebAssembly;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebAuthn() {
      return 'PublicKeyCredential' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebCrypto() {
      return Asserts.all(['crypto' in this._root, () => 'subtle' in this._root.crypto], true);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebLocks() {
      return 'locks' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebRTC() {
      return 'RTCPeerConnection' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebShare() {
      return 'share' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebSocket() {
      return 'WebSocket' in this._root;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebXr() {
      return 'xr' in this._navigator;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWorker() {
      return 'Worker' in this._root;
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerEnabled() {
      return Asserts.one(['pointerEnabled' in this._navigator, 'msPointerEnabled' in this._navigator]);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pixelRatio() {
      return this._root.devicePixelRatio || 1;
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerLock() {
      return Asserts.one(['pointerLockElement' in this._document, 'webkitPointerLockElement' in this._document, 'mozPointerLockElement' in this._document]);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get quirksMode() {
      return this._document.compatMode !== 'CSS1Compat';
    }

    /**
     * Test if CSS 3D transforms are supported
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get css3D() {
      return Asserts.all([this._checkCssPrefixedPropValue.bind(this, 'transform', 'translate3d(1px,1px,1px)'), this._checkCssPrefixedProp.bind(this, 'perspective')], true);
    }

    // Test if CSS transforms are supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get cssTransform() {
      return Asserts.one([this._checkCssPrefixedProp.bind(this, 'transform-origin')], true);
    }

    // Test if CSS transitions are supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get cssTransition() {
      return Asserts.one([this._checkCssPrefixedProp.bind(this, 'transition')], true);
    }

    // Test if Device Motion is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get deviceMotion() {
      return 'DeviceMotionEvent' in this._root;
    }

    // Test if Device Orientation is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get deviceOrientation() {
      return 'DeviceOrientationEvent' in this._root;
    }

    // Test if Context Menu is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get contextMenu() {
      return Asserts.all(['contextMenu' in this._document, 'HTMLMenuItemElement' in this._root]);
    }

    // Test if classList API is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get classList() {
      return 'classList' in this._document;
    }

    // Test if placeholder attribute is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get placeholder() {
      return 'placeholder' in this._input;
    }

    // Test if viewport units are supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get viewportUnit() {
      return Asserts.all([() => this._img.style.width = this._img.style.width !== ''], true);
    }

    // Test if REM units are supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get remUnit() {
      return Asserts.all([() => this._img.style.width = this._img.style.width !== ''], true);
    }

    // Test if Canvas is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get canvas() {
      return Asserts.all([() => 'getContext' in this._canvas && !!this._canvas.getContext('2d')], true);
    }

    // Test if SVG is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get svg() {
      return Asserts.all([() => 'createElementNS' in this._document && 'createSVGRect' in this._document.createElementNS('http://www.w3.org/2000/svg', 'svg')], true);
    }

    // Test if WebP is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webp() {
      return Asserts.all([() => {
        const elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
          // was able or not to get WebP representation
          return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
        return false;
      }], true);
    }

    // Test if WebGL is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webGL() {
      return Asserts.one([() => this.canvas && 'WebGLRenderingContext' in this._root && (this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl')), () => this.canvas && 'WebGL2RenderingContext' in this._root && this._canvas.getContext('webgl2')], true);
    }

    // Test if WebVR is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webVR() {
      return Asserts.all(['getVRDisplays' in this._navigator]);
    }

    // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get touch() {
      return Asserts.one([() => 'ontouchstart' in this._root, () => 'ontouchstart' in this._document.documentElement], true) && Asserts.one([() => 'DocumentTouch' in this._root && this._document instanceof this._root.DocumentTouch, () => this.pointerEnabled && 'MSGesture' in this._root, () => 'maxTouchPoints' in this._navigator && this._navigator.maxTouchPoints > 1], true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get forceTouch() {
      return Asserts.all([() => 'MouseEvent' in this._root && 'WEBKIT_FORCE_AT_MOUSE_DOWN' in this._root.MouseEvent && 'WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN' in this._root.MouseEvent], true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerEvents() {
      return Asserts.all([!!this._root.PointerEvent], true);
    }

    // Test if img srcset attribute is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get srcset() {
      return 'srcset' in this._img;
    }

    // Test if img sizes attribute is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get sizes() {
      return 'sizes' in this._img;
    }

    // Test if Picture element is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pictureElement() {
      return 'HTMLPictureElement' in this._root;
    }

    // Test if Picture element is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get dialogElement() {
      return 'HTMLDialogElement' in this._root;
    }

    // Test if WebGL2 is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webGL2() {
      return Asserts.one([() => this.canvas && 'WebGL2RenderingContext' in this._root && !!this._canvas.getContext('webgl2')], true);
    }

    // Test if WebGPU is supported
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get webGPU() {
      return Asserts.one([() => 'gpu' in this._navigator && !!this._navigator.gpu && typeof this._navigator.gpu.requestAdapter === 'function'], true);
    }

    // Test if the Device Memory API reports a value (in GB)
    /**
     *
     *
     * @readonly
     * @returns {number|string}
     *
     * @memberOf Feature
     */
    get deviceMemory() {
      return this._navigator.deviceMemory || 'n/a';
    }

    // Test the maximum number of simultaneous touch contact points
    /**
     *
     *
     * @readonly
     * @returns {number}
     *
     * @memberOf Feature
     */
    get touchPoints() {
      return this._navigator.maxTouchPoints || 0;
    }
  }

  //! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
  //! placeholder is rewritten at build time by rollup-plugin-replace.
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('DetectorJS Feature Module v' + "3.0.0" + ' initialized');
  }

  /**
   *
   *
   * @export
   * @class Platform
   * @extends {CssFlagsClass}
   */
  class Platform extends CssFlagsClass {
    /**
     * Creates an instance of Platform.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='platform']
     *
     * @memberOf Platform
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'platform') {
      super(ua, flags, cssFlagsPrefix);
    }

    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */
    get bot() {
      return Asserts.one([/googlebot/i.test(this._ua)]);
    }

    /**
     *
     *
     * @readonly
     * @memberof Platform
     */
    get console() {
      return Asserts.all([/(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this._ua), !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this._ua)]);
    }

    /**
     *
     *
     * @readonly
     * @memberof Platform
     */
    get tv() {
      return Asserts.one([/(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this._ua), /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this._ua)]) && Asserts.one([!this.mobile, !this.bot, this._flags.feature.fullscreenKeyboard]) && Asserts.one([this._flags.os.Android, this._flags.os.Tizen, this._flags.os.WebOS]);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get tablet() {
      return Asserts.all([this.mobile, /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this._ua)]);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get smartphone() {
      return Asserts.all([this.mobile, !this.tablet]);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get mobile() {
      return Asserts.one([this._flags.feature.deviceMotion, this._flags.feature.deviceOrientation, this._flags.feature.pixelRatio > 1]) && Asserts.one([this._flags.feature.touch, this._flags.feature.forceTouch, ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile', 'SamsungBrowser', 'DuckDuckGo', 'Facebook', 'Instagram', 'TikTok', 'Kiwi', 'HuaweiBrowser', 'Line'].includes(this._flags.browser.name)]) && Asserts.all([!this._flags.feature.pointerEvents, this._flags.feature.file]) || Asserts.all([['Android', 'iOS', 'WindowsPhone', 'Bada', 'Blackberry', 'Contiki', 'MeeGo', 'RIM', 'QNX', 'Palm', 'Symbian', 'WebOS'].includes(this._flags.os.name), ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile', 'SamsungBrowser', 'DuckDuckGo', 'Facebook', 'Instagram', 'TikTok', 'Kiwi', 'HuaweiBrowser', 'Line'].includes(this._flags.browser.name)]);
    }

    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */
    get desktop() {
      return Asserts.all([!this.bot, !this.console, !this.mobile, !this.tv]);
    }
    toValues() {
      const proto = Object.getPrototypeOf(this);
      const protoProperties = Object.getOwnPropertyNames(proto).filter(prop => {
        return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
      });
      return protoProperties[0] || 'n/a';
    }
  }

  /**
   *
   *
   * @export
   * @class Device
   * @extends {CssFlagsClass}
   */
  class Device extends CssFlagsClass {
    /**
     * Creates an instance of Device.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='device']
     *
     * @memberOf Device
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'device') {
      super(ua, flags, cssFlagsPrefix);
    }
  }
  class CPU extends CssFlagsClass {
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'cpu') {
      super(ua, flags, cssFlagsPrefix);
      this._booleanFlagsValuePropertyName = 'vendor';
      this.platform = this.getPlatform();
      this.cores = this.getCores();
      this.architecture = this.getArchitecture();
      this.sparc = this.getSparc();
      this.irix = this.getIrix();
      this.mips = this.getMips();
      this.risc = this.getRisc();
      this.avr = this.getAvr();
      this.arm = this.getArm();
      this.powerPC = this.getPowerPC();
      this.amd = this.getAmd();
      this.intel = this.getIntel();
    }

    /**
     *
     *
     * @returns number
     *
     * @memberOf CPU
     */
    getCores() {
      return this._navigator.hardwareConcurrency || 1;
    }

    /**
     *
     *
     * @returns string
     *
     * @memberOf CPU
     */
    getPlatform() {
      return this._navigator.platform || 'Win32';
    }

    /**
     *
     *
     * @returns string
     *
     * @memberOf CPU
     */
    getArchitecture() {
      let cpuClass = this._navigator.cpuClass || 'x86';
      if (Asserts.one([cpuClass === 'x64', ['Win64', 'MacIntel', 'Linux x86_64', 'Linux i686'].includes(this._navigator.platform), /(?:x86_64|x86-64|win64|wow64|x64;|amd64|arm64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|ppc64|powerpc64)/i.test(this._ua)])) {
        cpuClass = 'x64';
      }
      return cpuClass;
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getSparc() {
      return Asserts.one([/(sun4\w)[;\)]/i.test(this._ua), /sparc(?:64)?(?=;);/i.test(this._ua)]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getIrix() {
      return Asserts.all([/irix(?:64)?(?=;);/i.test(this._ua)]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getMips() {
      return Asserts.all([/mips(?:64)?(?=;);/i.test(this._ua)]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getRisc() {
      return Asserts.all([/pa-risc(?:64)?(?=;);/i.test(this._ua)]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getAvr() {
      return Asserts.all([/(?=atmel\s)avr/i.test(this._ua)]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getArm() {
      return Asserts.one([/windows\s(ce|mobile);\sppc;/i.test(this._ua), /arm(?:64|(?=v\d+[;l]))/i.test(this._ua)]);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getPowerPC() {
      return Asserts.one([/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua), this._navigator.platform === 'MacPPC']);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getAmd() {
      return Asserts.one([/(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x64', this._navigator.platform === 'Linux x86_64']) || Asserts.one([/(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), /((?:i[346]|x)86)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x86']);
    }

    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getIntel() {
      return Asserts.one([/(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua), /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x64', this._navigator.platform === 'MacIntel', this._navigator.platform === 'Linux x86_64']) || Asserts.one([/(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), /(ia32(?=;))/i.test(this._ua), /((?:i[346]|x)86)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x86']);
    }
  }

  /**
   *
   *
   * @export
   * @class GPU
   * @extends {CssFlagsClass}
   */
  class GPU extends CssFlagsClass {
    /**
     * Creates an instance of GPU.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='gpu']
     *
     * @memberOf GPU
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'gpu') {
      super(ua, flags, cssFlagsPrefix);
      this._createTestElements();
      this.webGLVendor = this._info.webGLVendor;
      this.webGLRenderer = this._info.webGLRenderer;
      this.vendor = this._info.vendor;
      this.model = this._info.model;
      this.renderer = this._info.renderer;
    }

    /**
     *
     *
     *
     * @memberOf GPU
     */
    _createTestElements() {
      this._canvas = this._document.createElement('canvas');
      this._info = this.getInfo();
    }

    // /**
    //  *
    //  *
    //  *
    //  * @memberOf GPU
    //  */
    // _destroyTestElements() {
    //   this._canvas = null;
    //   this._info = null;

    //   delete this._canvas;
    //   delete this._info;
    // }

    /**
     *
     *
     * @returns object
     *
     * @memberOf GPU
     */
    getInfo() {
      const info = {
        webGLVendor: 'n/a',
        webGLRenderer: 'n/a',
        vendor: 'n/a',
        model: 'n/a',
        renderer: 'n/a'
      };
      try {
        const webGLContext = this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl');
        if (webGLContext) {
          const dbgRenderInfo = webGLContext.getExtension('WEBGL_debug_renderer_info');
          if (dbgRenderInfo != null) {
            info.merge({
              vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
              model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(' OpenGL Engine', ''),
              renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
            });
          }
          info.merge({
            webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
            webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER)
          });
        }
      } catch (e) {
        console.warn('webGL is not supported', e.message);
      }
      return info;
    }
  }

  //! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
  //! placeholder is rewritten at build time by rollup-plugin-replace.
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('DetectorJS Hardware Module v' + "3.0.0" + ' initialized');
  }

  /* eslint-disable prefer-destructuring */

  /**
   *
   *
   * @export
   * @class Browser
   * @extends {CssFlagsClass}
   */
  class Browser extends CssFlagsClass {
    /**
     * Creates an instance of Browser.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='browser']
     *
     * @memberOf Browser
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'browser') {
      super(ua, flags, cssFlagsPrefix);
      this._createTestElements();
      this.setVersion();
    }

    /**
     *
     *
     *
     * @memberOf Browser
     */
    _createTestElements() {
      this._reStrVerNum = '(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?';
      this._reStrVer = '(?:version)' + this._reStrVerNum;
      this._reVer = new RegExp(this._reStrVer, 'i');
      this._ua.match(this._reVer);
    }

    // /**
    //  *
    //  *
    //  *
    //  * @memberOf Browser
    //  */
    // _destroyTestElements() {
    //   this._reStrVerNum = null;
    //   this._reStrVer = null;
    //   this._reVer = null;

    //   delete this._reStrVerNum;
    //   delete this._reStrVer;
    //   delete this._reVer;
    // }

    _reTest(reStr = this._reStrVer) {
      return new RegExp(reStr, 'i').test(this._ua);
    }

    //#region Un-Common/Rare/Mythic Browsers
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Amaya() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:amaya)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Arora() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:arora)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Avant() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:avant(?:\sbrowser))' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Baidu() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Basilisk() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:basilisk)' + this._reStrVer)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get BlackBerry() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:blackberry|bb.*;.*\\)\\s)' + this._reStrVer)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Blazer() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:blazer)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Bolt() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:bolt)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Brave() {
      return this._checkAssertsResult(Asserts.one([!!window.navigator.brave || !!window.navigator.Brave, this._reTest('(?:brave)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Camino() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:camino)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chimera() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:chimera)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get ComodoDragon() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:comodo(?:\\_|\\s)dragon)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Conkeror() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:conkeror)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dillo() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:dillo)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dolphin() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:dolfin)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dorado() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:dorado.+ser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Doris() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:doris)' + this._reStrVerNum)]));
    }
    _getElectronVersion() {
      try {
        return this._process.versions.electron;
      } catch (e) {
        return 'n/a';
      }
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Electron() {
      return this._checkAssertsResult(Asserts.one([() => this._process?.type === 'renderer',
      // Renderer process
      () => !!this._process?.versions?.electron,
      // Main process
      () => !!this._navigator && this._reTest('electron') // Detect the user agent when the `nodeIntegration` option is set to true
      ], true), false, this._getElectronVersion());
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Epiphany() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:epiphany)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Falkon() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:falkon)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Fennec() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:fennec)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Firebird() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:firebird)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Flock() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:flock)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get GoBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:gobrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get GoogleBot() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:googlebot)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get iCab() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:icab)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceApe() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:iceape)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:ice\s?browser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceCat() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:icecat)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceDragon() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:icedragon)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Iridium() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:iridium)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Iron() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:iron)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Jasmine() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:jasmine)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Konqueror() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:konqueror)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get KMeleon() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:k-meleon)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Links() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:links)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Linx() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:lynx)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Lunascape() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:lunascape)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Maemo() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:maemo\sbrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MaxthonMobile() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:mxios)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Maxthon() {
      return this._checkAssertsResult(Asserts.all([!this.MaxthonMobile, this._reTest('(?:maxthon|mxnitro)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Midori() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:midori)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Minimo() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:minimo)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MIUIBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:xiaomi\\/miuibrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Mosaic() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:mosaic)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MZBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:MZBrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Netfront() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:netfront)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Netscape() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:navigator|netscape)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get NetSurf() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:netsurf)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get NokiaBrowser() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:nokia\s?browser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OmniWeb() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:omniweb)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OviBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:ovibrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Palemoon() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:palemoon)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Phoenix() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:phoenix)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get PhantomJS() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:phantomjs)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Polaris() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:polaris)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Puffin() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:puffin)' + this._reStrVerNum)]), true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QQBrowserMobile() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:mqq(?:browser)?)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QQBrowser() {
      return this._checkAssertsResult(Asserts.all([!this.QQBrowserMobile, this._reTest('(?:qq(?:browser)?(?:lite)?)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Quark() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:quark)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QupZilla() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:qupzilla)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Reconq() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:rekonq)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get RockMelt() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:rockmelt)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Sailfish() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:sailfish(?:\s?browser))' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SamsungBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:samsungbrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SeaMonkey() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:seamonkey)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Silk() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:silk)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Skyfire() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:skyfire)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Sleipnir() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:sleipnir)' + this._reStrVerNum)]), true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Slim() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:slim(?:browser)?)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SlimerJS() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:slimerjs)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Swing() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:swing)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get TizenBrowser() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:tizen(?:browser)?)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get UCBrowser() {
      // a.k.a. UCBrowserMobile || UCBrowserMini
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:uc(?:mini|browser))' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Vivaldi() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:vivaldi)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get w3m() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:w3m)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Waterfox() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:waterfox)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get WebOSBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:w(?:eb)?osbrowser)' + this._reStrVerNum)]), true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get WeChat() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:micromessenger)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Whale() {
      return this._checkAssertsResult(Asserts.all([this._reTest('(?:whale)' + this._reStrVerNum)]), true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Yandex() {
      return Asserts.one([this._reTest('(?:ya(?:browser|ndex))' + this._reStrVerNum)]);
    }
    //#endregion

    //#region Common Browsers
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get AndroidBrowser() {
      return this._checkAssertsResult(Asserts.all([!this._reTest('like android'), this._reTest('(?:android.*)' + this._reStrVer)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get ChromeMobile() {
      return this._checkAssertsResult(Asserts.all([!this._reTest('like chrome'), this._reTest('((?:android.+)crmo|crios)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chrome() {
      return this._checkAssertsResult(Asserts.all([!this.Brave, !this.Electron, !this.SamsungBrowser, !this.ChromeMobile, !this.AndroidBrowser, !this._reTest('like chrome'), this._reTest('(?:(?:headless)?chrome)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chromium() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:chromium)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get EdgeMobile() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:edg(?:ios|a))' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Edge() {
      return this._checkAssertsResult(Asserts.all([!this.IE, this._reTest('(?:^(?:(?!mobile|android|ios).)*)(?:edge)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get FirefoxFocus() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:focus)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get FirefoxMobile() {
      return this._checkAssertsResult(Asserts.one([this.FirefoxFocus, this._reTest('(?:fxios)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Firefox() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:firefox|iceweasel)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IEMobile() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:iemobile)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IE() {
      return this._checkAssertsResult(Asserts.all([!this.IEMobile, /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaMini() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:opera\smini)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaTouch() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:opt)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaCoast() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:coast)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaMobile() {
      // a.k.a. Opera Mobile || Opera Coast || Opera Mini || Opera Touch || Opera iOS
      return this._checkAssertsResult(Asserts.one([!!this._root.opera, !!this._root.opr]) && Asserts.one([this.OperaMini, this.OperaCoast, this.OperaTouch, this._reTest('(?:op(?:r|ios))' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Opera() {
      return this._checkAssertsResult(Asserts.one([!!this._root.opera, !!this._root.opr]) && Asserts.all([!this.OperaMobile]) && Asserts.one([this._reTest('(?:op(?:era|r)|mms)' + this._reStrVerNum)]), true);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SafariMobile() {
      return this._checkAssertsResult(Asserts.all([/iphone|ipad|ipod/i.test(this._ua), !this.AndroidBrowser, !this.Chrome, !this.PhantomJS]) && Asserts.one([/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this._ua), /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this._ua), /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this._ua), /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Safari() {
      return this._checkAssertsResult(Asserts.all([/safari|applewebkit/i.test(this._ua), !this.AndroidBrowser, !this.SafariMobile, !this.Chrome, !this.PhantomJS]) && Asserts.one([/(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this._ua)]));
    }

    //#region Modern WebView & Embedded Browsers
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get DuckDuckGo() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:duckduckgo)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Facebook() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:fban|fbav)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Instagram() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:instagram)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get TikTok() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:tiktok)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Kiwi() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:kiwi)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get HuaweiBrowser() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:huaweibrowser)' + this._reStrVerNum)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Line() {
      return this._checkAssertsResult(Asserts.one([this._reTest('(?:line)' + this._reStrVerNum)]));
    }
    //#endregion
    //#endregion

    /**
     *
     *
     * @param {boolean} [assertsResult=false]
     * @param {boolean} [inverted=false]
     * @param {any} [version=null]
     * @returns boolean
     *
     * @memberOf Browser
     */
    _checkAssertsResult(assertsResult = false, inverted = false, version = null) {
      if (assertsResult) {
        this.setVersion(version, inverted);
        return true;
      }
      return false;
    }

    /**
     *
     *
     * @param {any} [version=null]
     * @param {boolean} [inverted=false]
     *
     * @memberOf Browser
     */
    setVersion(version = null, inverted = false) {
      if (inverted) {
        version = version || this.version || RegExp.$1 || 'n/a';
      } else {
        version = version || RegExp.$1 || this.version || 'n/a';
      }
      this.version = version.replace(/_/gi, '.');
    }
  }

  /**
   *
   *
   * @export
   * @class Engine
   * @extends {CssFlagsClass}
   */
  class Engine extends CssFlagsClass {
    /**
     * Creates an instance of Engine.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='engine']
     *
     * @memberOf Engine
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'engine') {
      super(ua, flags, cssFlagsPrefix);
      this.version = 'n/a';
    }

    //#region Un-Common/Rare/Mythic Engines
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Amaya() {
      return this._checkAssertsResult(Asserts.all([/(amaya)\/([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Goanna() {
      return this._checkAssertsResult(Asserts.all([/(goanna)\/([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get iCab() {
      return this._checkAssertsResult(Asserts.all([/(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get KHTML() {
      return this._checkAssertsResult(Asserts.all([/(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Links() {
      return this._checkAssertsResult(Asserts.all([/(links)[\/\s]\(?([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Linx() {
      return this._checkAssertsResult(Asserts.all([/(lynx)\/([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get NetFront() {
      return this._checkAssertsResult(Asserts.all([/(netfront)\/([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get NetSurf() {
      return this._checkAssertsResult(Asserts.all([/(netsurf)\/([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Presto() {
      return this._checkAssertsResult(Asserts.one([/(presto)\/([\w\.]+)/i.test(this._ua), /presto\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Tasman() {
      return this._checkAssertsResult(Asserts.all([/(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get w3m() {
      return this._checkAssertsResult(Asserts.all([/w3m[\/\s]([\w\.]+)/i.test(this._ua)]));
    }
    //#endregion

    //#region Common Engines
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Trident() {
      return this._checkAssertsResult(Asserts.all([/*@cc_on!@*/!!this._document?.documentMode]) && Asserts.one([/trident[\/\s](\d+(\.?_?\d+)+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Blink() {
      return this._checkAssertsResult(Asserts.all([() => 'Intl' in this._root && 'v8BreakIterator' in this._root.Intl, 'CSS' in this._root, /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua)], true));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get EdgeHTML() {
      return this._checkAssertsResult(Asserts.all(['StyleMedia' in this._root, !this.Trident]) && Asserts.one([/edge\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Gecko() {
      return this._checkAssertsResult(Asserts.all(['InstallTrigger' in this._root, !/like gecko/i.test(this._ua)]) && Asserts.one([/rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua), /gecko\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get WebKit() {
      return this._checkAssertsResult(Asserts.all(['webkitConvertPointFromNodeToPage' in this._root]) && Asserts.one([/(?:(?:apple)?webkit)\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
    }
    //#endregion

    /**
     *
     *
     * @param {boolean} [assertsResult=false]
     * @param {any} [version=null]
     * @returns boolean
     *
     * @memberOf Engine
     */
    _checkAssertsResult(assertsResult = false, version = null) {
      if (assertsResult) {
        this.setVersion(version);
        return true;
      }
      return false;
    }

    /**
     *
     *
     * @param {any} [version=null]
     *
     * @memberOf Engine
     */
    /**
     *
     *
     * @param {any} [version=null]
     *
     * @memberOf Engine
     */
    setVersion(version = null) {
      this.version = version || RegExp.$1 || 'n/a';
    }
  }

  /* eslint-disable quote-props */

  /**
   *
   *
   * @export
   * @class OS
   * @extends {CssFlagsClass}
   */
  class OS extends CssFlagsClass {
    /**
     * Creates an instance of OS.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='os']
     *
     * @memberOf OS
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = 'os') {
      super(ua, flags, cssFlagsPrefix);
      this.version = 'n/a';
      this.versionName = 'n/a';
    }

    /**
     *
     *
     * @param {any} [versionNames={}]
     * @param {any} [version=null]
     * @returns string
     *
     * @memberOf OS
     */
    _getVersionNames(versionNames = {}, version = null) {
      if (!!version) {
        version = version.replace(/_/ig, '.');
        return Object.getOwnPropertyNames(versionNames).filter(versionName => {
          return !!versionNames[versionName];
        })[0] || 'n/a';
      }
      return 'n/a';
    }

    //! Desktop OSs
    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getWindowsVersionName(version = RegExp.$1 || null) {
      return this._getVersionNames({
        'CE': /CE/i.test(version),
        '95': /95/i.test(version),
        '98': /98/i.test(version),
        'ME': /ME/i.test(version),
        '2000': /NT(\s)?5\.0/i.test(version),
        'XP': /NT(\s)?5\.1/i.test(version) || /XP/i.test(version),
        '2003': /NT(\s)?5\.2/i.test(version),
        'Vista': /NT(\s)?6\.0/i.test(version),
        '7': /NT(\s)?6\.1/i.test(version),
        '8': /NT(\s)?6\.2/i.test(version),
        '8.1': /NT(\s)?6\.3/i.test(version),
        '10': /NT(\s)?6\.4/i.test(version) || /NT(\s)?10\.0/i.test(version),
        'RT': /ARM/.test(version)
      }, version);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Windows() {
      return this._checkAssertsResult(Asserts.all([/Win/i.test(this._ua)]) && Asserts.one([/Windows ((NT|XP)( \d\d?.\d)?)/i.test(this._ua)
      //       /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
      // // ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
      // /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i,
      // // ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
      ]), null, this._getWindowsVersionName);
    }

    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getMacOSVersionName(version = RegExp.$1 || null) {
      return this._getVersionNames({
        // source https://en.wikipedia.org/wiki/Mac_OS_8
        'Tempo': /^8\.0(\.+\d)?$/i.test(version),
        'Bride of Buster': /^8\.1(\.+\d)?$/i.test(version),
        'Allegro': /^8\.5(\.+\d)?$/i.test(version),
        'Veronica': /^8\.6(\.+\d)?$/i.test(version),
        // source https://en.wikipedia.org/wiki/Mac_OS_9
        'Sonata': /^9\.0(\.+[012356789])?$/i.test(version),
        'Minuet': /^9\.0\.4$/i.test(version),
        'Fortissimo': /^9\.1(\.+\d)?$/i.test(version),
        'Moonlight': /^9\.2(\.+[023456789])?$/i.test(version),
        'Limelight': /^9\.2\.1$/i.test(version),
        // source https://en.wikipedia.org/wiki/List_of_Apple_operating_systems
        'Cheetah': /^10\.0(\.+\d)?$/i.test(version),
        'Puma': /^10\.1(\.+\d)?$/i.test(version),
        'Jaguar': /^10\.2(\.+\d)?$/i.test(version),
        'Panther': /^10\.3(\.+\d)?$/i.test(version),
        'Tiger': /^10\.4(\.+\d)?$/i.test(version),
        'Leopard': /^10\.5(\.+\d)?$/i.test(version),
        'Snow Leopard': /^10\.6(\.+\d)?$/i.test(version),
        'Lion': /^10\.7(\.+\d)?$/i.test(version),
        'Mountain Lion': /^10\.8(\.+\d)?$/i.test(version),
        'Mavericks': /^10\.9(\.+\d)?$/i.test(version),
        'Yosemite': /^10\.10(\.+\d)?$/i.test(version),
        'El Capitan': /^10\.11(\.+\d)?$/i.test(version),
        'Sierra': /^10\.12(\.+\d)?$/i.test(version),
        'High Sierra': /^10\.13(\.+\d)?$/i.test(version),
        'Mojave': /^10\.14(\.+\d)?$/i.test(version),
        'Catalina': /^10\.15(\.+\d)?$/i.test(version),
        'Big Sur': /^11(\.+\d)(\.+\d)?$/i.test(version),
        'Monterey': /^12(\.+\d)(\.+\d)?$/i.test(version),
        'Ventura': /^13(\.+\d)(\.+\d)?$/i.test(version),
        'Sonoma': /^14(\.+\d)(\.+\d)?$/i.test(version),
        'Sequoia': /^15(\.+\d)(\.+\d)?$/i.test(version)
      }, version);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get macOS() {
      return this._checkAssertsResult(Asserts.all([!this.iOS, !/mobile\//i.test(this._ua), /mac/i.test(this._ua), !/like mac/i.test(this._ua)]) && Asserts.one([/(macintosh|mac(?=_powerpc)\s)/i.test(this._ua), /(mac\sos\sx)\s?([\w\s\.]*)/i.test(this._ua)]) && Asserts.one([/Mac[ +]OS[ +]X(?:[ /](?:Version )?(\d+(?:[_\.]\d+)+))?/i.test(this._ua), /Mac (\d+(?:[_\.]\d+)+)/i.test(this._ua), /mac os x (\d+(\.?_?\d+)+)/i.test(this._ua)]), null, this._getMacOSVersionName);
    }

    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getUnixDistroName(version = RegExp.$1 || null) {
      return this._getVersionNames({
        'FreeBSD': /\s(freebsd)\s?([\w\.]*)/i.test(version),
        'NetBSD': /\s(netbsd|dragonfly)\s?([\w\.]*)/i.test(version),
        'OpenBSD': /\s(openbsd|dragonfly)\s?([\w\.]*)/i.test(version),
        'PC-BSD': /\s(pc-bsd|dragonfly)\s?([\w\.]*)/i.test(version),
        'DragonFly': /\s(dragonfly)\s?([\w\.]*)/i.test(version)
      }, version);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Unix() {
      return this._checkAssertsResult(Asserts.all([/X11/i.test(this._ua)]) && Asserts.one([/(unix)\s?([\w\.]*)/i.test(this._ua)]), null, this._getUnixDistroName);
    }

    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getLinuxDistroName(version = RegExp.$1 || null) {
      return this._getVersionNames({
        'Mint': /(mint)[\/\s\(]?(\w*)/i.test(version),
        'Mageia': /(mageia)[;\s]/i.test(version),
        'VectorLinux': /(vectorlinux)[;\s]/i.test(version),
        'Joli': /(joli)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Ubuntu': /([kxln]?ubuntu)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Debian': /(debian)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'SuSE': /(suse|opensuse)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Gentoo': /(gentoo)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Arch': /((?=\s)arch)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Slackware': /(slackware)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Fedora': /(fedora)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Mandriva': /(mandriva)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'CentOS': /(centos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'PCLinuxOS': /(pclinuxos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'RedHat': /(redhat)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Zenwalk': /(zenwalk)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        'Linpus': /(linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version)
      }, version);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Linux() {
      return this._checkAssertsResult(Asserts.all([!this.Android, /Linux/i.test(this._ua)]), null, this._getLinuxDistroName);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get ChromiumOS() {
      return this._checkAssertsResult(Asserts.one([/(cros)\s[\w]+\s([\w\.]+\w)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Solaris() {
      return this._checkAssertsResult(Asserts.one([/(sunos)\s?([\w\.\d]*)/i.test(this._ua), /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Plan9() {
      return this._checkAssertsResult(Asserts.one([/(plan\s9)/i.test(this._ua)]));
    }
    get Minix() {
      return this._checkAssertsResult(Asserts.one([/(minix)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get BeOS() {
      return this._checkAssertsResult(Asserts.one([/(beos)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get OS2() {
      return this._checkAssertsResult(Asserts.one([/(os\/2)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get AmigaOS() {
      return this._checkAssertsResult(Asserts.one([/(amigaos)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get MorphOS() {
      return this._checkAssertsResult(Asserts.one([/(morphos)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get RISCOS() {
      return this._checkAssertsResult(Asserts.one([/(risc\sos)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get OpenVMS() {
      return this._checkAssertsResult(Asserts.one([/(openvms)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Fuchsia() {
      return this._checkAssertsResult(Asserts.one([/(fuchsia)/i.test(this._ua)]));
    }

    //! Mobile OSs
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get WindowsPhone() {
      // a.k.a. Windows Mobile
      return this._checkAssertsResult(Asserts.one([/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this._ua), /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this._ua), /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this._ua)]));

      // // Detect Windows Phone 7 desktop mode.
      // if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      //   name += ' Mobile';
      //   os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      //   description.unshift('desktop mode');
      // }

      // // Detect Windows Phone 8.x desktop mode.
      // if (/\bWPDesktop\b/i.test(ua)) {
      //   name = 'IE Mobile';
      //   os = 'Windows Phone 8.x';
      //   description.unshift('desktop mode');
      //   version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
      // }
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get iOS() {
      return this._checkAssertsResult(Asserts.all([!window.MSStream, /iP(?:ad|hone|od)/.test(this._ua)]) && Asserts.one([/os\s((\d+([_\s]\d+)*)|(\d+(?:[_\.]\d+)*)) like mac os x/i.test(this._ua)]));
    }

    /**
     *
     *
     * @param {any} [version=RegExp.$1 || null]
     * @returns string
     *
     * @memberOf OS
     */
    _getAndroidVersionName(version = RegExp.$1 || null) {
      return this._getVersionNames({
        '1.0': /^1\.[01234]$/i.test(version),
        'Cupcake': /^1\.5(\.+\d)?$/i.test(version),
        'Donut': /^1\.6(\.+\d)?$/i.test(version),
        'Eclair': /^2\.[01](\.+\d)?$/i.test(version),
        'Froyo': /^2\.2(\.+\d)?$/i.test(version),
        'Gingerbread': /^2\.3(\.+\d)?$/i.test(version),
        'Honeycomb': /^3(\.+\d)(\.+\d)?$/i.test(version),
        'Ice Cream Sandwich': /^4\.[01](\.+\d)?$/i.test(version),
        'Jelly Bean': /^4\.[23](\.+\d)?$/i.test(version),
        'KitKat': /^4\.[456789](\.+\d)?$/i.test(version),
        'Lollipop': /^5(\.\d)(\.+\d)?$/i.test(version),
        'Marshmallow': /^6(\.\d)(\.+\d)?$/i.test(version),
        'Nougat': /^7(\.\d)(\.+\d)?$/i.test(version),
        'Oreo': /^8(\.\d)(\.+\d)?$/i.test(version),
        'Pie': /^9(\.\d)(\.+\d)?$/i.test(version)
      }, version);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Android() {
      return this._checkAssertsResult(Asserts.one([/android[\s/-](\d+(\.\d+)*)/i.test(this._ua)]), null, this._getAndroidVersionName);
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Bada() {
      return this._checkAssertsResult(Asserts.one([/(bada)[\/\s-]?([\w\.]*)/i.test(this._ua), /bada\/(\d+(\.\d+)*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Blackberry() {
      return this._checkAssertsResult(Asserts.one([/blackberry|\bbb\d+/i.test(this._ua), /rim\stablet/i.test(this._ua)]) && Asserts.one([/rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this._ua), /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this._ua), /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua), /(blackberry)\w*\/?([\w\.]*)/i.test(this._ua), /\bbb(\d+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Contiki() {
      return this._checkAssertsResult(Asserts.one([/(contiki)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get MeeGo() {
      return this._checkAssertsResult(Asserts.one([/(meego)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get RIM() {
      return this._checkAssertsResult(Asserts.one([/(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get QNX() {
      return this._checkAssertsResult(Asserts.one([/(qnx)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Palm() {
      return this._checkAssertsResult(Asserts.one([/(palm\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Symbian() {
      return this._checkAssertsResult(Asserts.one([/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this._ua)]));
    }

    //! TV OSs
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get WebOS() {
      return this._checkAssertsResult(Asserts.one([/(webos)[\/\s-]?([\w\.]*)/i.test(this._ua), /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this._ua), /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Tizen() {
      return this._checkAssertsResult(Asserts.one([/(tizen)[/\s](\d+(\.\d+)*)/i.test(this._ua)]));
    }

    //! Other OSs
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Raspbian() {
      return this._checkAssertsResult(Asserts.one([/raspbian[/\s](\d+(\.\d+)*)/i.test(this._ua)]));
    }

    /**
     *
     *
     * @param {boolean} [assertsResult=false]
     * @param {any} [version=null]
     * @param {any} [versionNameFn=null]
     * @returns boolean
     *
     * @memberOf OS
     */
    _checkAssertsResult(assertsResult = false, version = null, versionNameFn = null) {
      if (assertsResult) {
        this.setVersion(version);
        this.setVersionName(versionNameFn);
        return true;
      }
      return false;
    }

    /**
     *
     *
     * @param {any} [version=null]
     *
     * @memberOf OS
     */
    setVersion(version = null) {
      this.version = (version || RegExp.$1 || 'n/a').replace(/_/gi, '.');
    }

    /**
     *
     *
     * @param {any} [versionNameFn=null]
     *
     * @memberOf OS
     */
    setVersionName(versionNameFn = null) {
      if (versionNameFn instanceof Function) {
        this.versionName = versionNameFn.call(this, this.version);
      }
    }
  }

  //! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
  //! placeholder is rewritten at build time by rollup-plugin-replace.
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('DetectorJS Software Module v' + "3.0.0" + ' initialized');
  }

  /*jshint expr: true */

  /**
   *
   *
   * @export
   * @class Detector
   * @extends {FlagsClass}
   */
  class Detector extends FlagsClass {
    /**
     * Creates an instance of Detector.
     * @param {boolean} [cssFlags=false]
     * @param {string} [cssFlagsPrefix='djs']
     * @param {any} [ua=null]
     *
     * @memberOf Detector
     */
    constructor(ua = null, values = true, cssFlags = false, cssFlagsPrefix = 'djs') {
      super(ua);
      this._values = values;
      this._cssFlags = !!cssFlags ? [] : null;
      this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : '');

      //! Features
      this.checkFeature();

      //! Software
      this.checkEngine();
      this.checkBrowser();
      this.checkOS();

      //! Hardware
      // this.checkDevice();
      this.checkCPU();
      this.checkGPU();
      this.checkPlatform();
      this.setCssFlags();
    }
    //! Feature
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkFeature() {
      const feature = new Feature(this._ua);
      const audio = new AudioFeature(this._ua);
      const video = new VideoFeature(this._ua);
      this.feature = feature.toFlags().merge({
        audio: audio.toFlags(),
        video: video.toFlags()
      });
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
      }
    }

    //! Software
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkEngine() {
      const engine = new Engine(this._ua, this.toFlags());
      if (this._values) {
        this.engine = engine.toValues();
      } else {
        this.engine = engine.toFlags();
      }
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(engine.toCssFlags());
      }
    }

    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkBrowser() {
      const browser = new Browser(this._ua, this.toFlags());
      if (this._values) {
        this.browser = browser.toValues();
      } else {
        this.browser = browser.toFlags();
      }
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(browser.toCssFlags());
      }
    }

    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkOS() {
      const os = new OS(this._ua, this.toFlags());
      if (this._values) {
        this.os = os.toValues();
      } else {
        this.os = os.toFlags();
      }
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(os.toCssFlags());
      }
    }

    //! Hardware
    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkDevice() {
      const device = new Device(this._ua, this.toFlags());
      this.device = device.toFlags();
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(device.toCssFlags());
      }
    }

    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkCPU() {
      const cpu = new CPU(this._ua, this.toFlags());
      if (this._values) {
        this.cpu = cpu.toValues();
      } else {
        this.cpu = cpu.toFlags();
      }
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(cpu.toCssFlags());
      }
    }

    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkGPU() {
      const gpu = new GPU(this._ua, this.toFlags());
      this.gpu = gpu.toFlags();
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(gpu.toCssFlags());
      }
    }

    /**
     *
     *
     *
     * @memberOf Detector
     */
    checkPlatform() {
      const platform = new Platform(this._ua, this.toFlags());
      if (this._values) {
        this.platform = platform.toValues();
      } else {
        this.platform = platform.toFlags();
      }
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(platform.toCssFlags());
      }
    }

    //! CSS Flags
    /**
     *
     *
     *
     * @memberOf Detector
     */
    setCssFlags() {
      if (!!this._cssFlags) {
        const cssFlagsPrefixed = this._cssFlags.map(cssFlag => {
          return this._cssFlagsPrefix + cssFlag;
        });
        const htmlElement = document.documentElement || document.querySelector('html');
        cssFlagsPrefixed.forEach(cssFlag => {
          return htmlElement.className.replace(cssFlag, '');
        });
        htmlElement.className += cssFlagsPrefixed.join(' ').trim();
      }
    }
  }

  //! Development-only startup log (upstream v2 behavior). The `"3.0.0"`
  //! placeholder is rewritten at build time by rollup-plugin-replace.
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('DetectorJS Detector Module v' + ("3.0.0" ) + ' initialized');
  }

  exports.Detector = Detector;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=detector.browser.js.map
