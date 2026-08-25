// packages/core/lib/polyfills/core/index.js
var root;
if (typeof window !== "undefined") {
  root = window;
} else if (typeof globalThis !== "undefined") {
  root = globalThis;
} else {
  root = {};
}
root.Reflect = root.Reflect || {};

// packages/core/lib/polyfills/string/includes.js
if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, "includes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value(search, start) {
      start = typeof start !== "number" ? 0 : start;
      if (start + search.length > this.length) {
        return false;
      }
      return this.indexOf(search, start) !== -1;
    }
  });
}

// packages/core/lib/polyfills/string/startsWith.js
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, "startsWith", {
    value(search, rawPos) {
      const pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    }
  });
}

// packages/core/lib/polyfills/string/toCamelCase.js
if (!String.prototype.toCamelCase) {
  Object.defineProperty(String.prototype, "toCamelCase", {
    enumerable: false,
    configurable: true,
    writable: true,
    value() {
      const s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x) => {
        return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
      }).join("");
      return s.slice(0, 1).toLowerCase() + s.slice(1);
    }
  });
}

// packages/core/lib/polyfills/array/map.js
if (!Array.prototype.map) {
  Object.defineProperty(Array.prototype, "map", {
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

// packages/core/lib/polyfills/array/includes.js
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      const o = Object(this);
      const len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      const n = fromIndex | 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      function sameValueZero(x, y) {
        return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
      }
      while (k < len) {
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

// packages/core/lib/polyfills/object/assign.js
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value(target, firstSource) {
      if (target === void 0 || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }
      const to = Object(target);
      for (let i = 1; i < arguments.length; i++) {
        let nextSource = arguments[i];
        if (nextSource === void 0 || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

// packages/core/lib/polyfills/object/getOwnPropertySymbols.js
(function(Object2, GOPS) {
  "use strict";
  if (GOPS in Object2) {
    return;
  }
  var setDescriptor, G = typeof global === typeof G ? window : global, id = 0, random = String(Math.random()), prefix = "__symbol:", prefixLength = prefix.length, internalSymbol = "__symbol@@" + random, DP = "defineProperty", DPies = "defineProperties", GOPN = "getOwnPropertyNames", GOPD = "getOwnPropertyDescriptor", PIE = "propertyIsEnumerable", gOPN = Object2[GOPN], gOPD = Object2[GOPD], create = Object2.create, keys = Object2.keys, freeze = Object2.freeze || Object2, defineProperty = Object2[DP], $defineProperties = Object2[DPies], descriptor = gOPD(Object2, GOPN), ObjectProto = Object2.prototype, hOP = ObjectProto.hasOwnProperty, pIE = ObjectProto[PIE], toString = ObjectProto.toString, addInternalIfNeeded = function(o, uid, enumerable) {
    if (!hOP.call(o, internalSymbol)) {
      defineProperty(o, internalSymbol, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: {}
      });
    }
    o[internalSymbol]["@@" + uid] = enumerable;
  }, createWithSymbols = function(proto, descriptors) {
    var self2 = create(proto);
    gOPN(descriptors).forEach(function(key) {
      if (propertyIsEnumerable.call(descriptors, key)) {
        $defineProperty(self2, key, descriptors[key]);
      }
    });
    return self2;
  }, copyAsNonEnumerable = function(descriptor2) {
    var newDescriptor = create(descriptor2);
    newDescriptor.enumerable = false;
    return newDescriptor;
  }, get = function get2() {
  }, onlyNonSymbols = function(name) {
    return name != internalSymbol && !hOP.call(source, name);
  }, onlySymbols = function(name) {
    return name != internalSymbol && hOP.call(source, name);
  }, propertyIsEnumerable = function propertyIsEnumerable2(key) {
    var uid = String(key);
    return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]["@@" + uid] : pIE.call(this, key);
  }, setAndGetSymbol = function(uid) {
    var descriptor2 = {
      enumerable: false,
      configurable: true,
      get,
      set: function(value) {
        setDescriptor(this, uid, {
          enumerable: false,
          configurable: true,
          writable: true,
          value
        });
        addInternalIfNeeded(this, uid, true);
      }
    };
    defineProperty(ObjectProto, uid, descriptor2);
    source[uid] = defineProperty(
      Object2(uid),
      "constructor",
      sourceConstructor
    );
    return freeze(source[uid]);
  }, Symbol2 = function Symbol3(description) {
    if (this instanceof Symbol3) {
      throw new TypeError("Symbol is not a constructor");
    }
    return setAndGetSymbol(prefix.concat(description || "", random, ++id));
  }, source = create(null), sourceConstructor = { value: Symbol2 }, sourceMap = function(uid) {
    return source[uid];
  }, $defineProperty = function defineProp(o, key, descriptor2) {
    var uid = String(key);
    if (onlySymbols(uid)) {
      setDescriptor(o, uid, descriptor2.enumerable ? copyAsNonEnumerable(descriptor2) : descriptor2);
      addInternalIfNeeded(o, uid, !!descriptor2.enumerable);
    } else {
      defineProperty(o, key, descriptor2);
    }
    return o;
  }, $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
    return gOPN(o).filter(onlySymbols).map(sourceMap);
  };
  descriptor.value = $defineProperty;
  defineProperty(Object2, DP, descriptor);
  descriptor.value = $getOwnPropertySymbols;
  defineProperty(Object2, GOPS, descriptor);
  descriptor.value = function getOwnPropertyNames(o) {
    return gOPN(o).filter(onlyNonSymbols);
  };
  defineProperty(Object2, GOPN, descriptor);
  descriptor.value = function defineProperties(o, descriptors) {
    var symbols = $getOwnPropertySymbols(descriptors);
    if (symbols.length) {
      keys(descriptors).concat(symbols).forEach(function(uid) {
        if (propertyIsEnumerable.call(descriptors, uid)) {
          $defineProperty(o, uid, descriptors[uid]);
        }
      });
    } else {
      $defineProperties(o, descriptors);
    }
    return o;
  };
  defineProperty(Object2, DPies, descriptor);
  descriptor.value = propertyIsEnumerable;
  defineProperty(ObjectProto, PIE, descriptor);
  descriptor.value = Symbol2;
  defineProperty(G, "Symbol", descriptor);
  descriptor.value = function(key) {
    var uid = prefix.concat(prefix, key, random);
    return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
  };
  defineProperty(Symbol2, "for", descriptor);
  descriptor.value = function(symbol) {
    if (onlyNonSymbols(symbol)) {
      throw new TypeError(symbol + " is not a symbol");
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
  defineProperty(Symbol2, "keyFor", descriptor);
  descriptor.value = function getOwnPropertyDescriptor(o, key) {
    var descriptor2 = gOPD(o, key);
    if (descriptor2 && onlySymbols(key)) {
      descriptor2.enumerable = propertyIsEnumerable.call(o, key);
    }
    return descriptor2;
  };
  defineProperty(Object2, GOPD, descriptor);
  descriptor.value = function(proto, descriptors) {
    return arguments.length === 1 || typeof descriptors === "undefined" ? create(proto) : createWithSymbols(proto, descriptors);
  };
  defineProperty(Object2, "create", descriptor);
  descriptor.value = function() {
    var str = toString.call(this);
    return str === "[object String]" && onlySymbols(this) ? "[object Symbol]" : str;
  };
  defineProperty(ObjectProto, "toString", descriptor);
  try {
    if (create(defineProperty({}, prefix, {
      get: function() {
        return defineProperty(this, prefix, { value: true })[prefix];
      }
    }))[prefix] === true) {
      setDescriptor = defineProperty;
    } else {
      throw "IE11";
    }
  } catch (o_O) {
    setDescriptor = function(o, key, descriptor2) {
      var protoDescriptor = gOPD(ObjectProto, key);
      delete ObjectProto[key];
      defineProperty(o, key, descriptor2);
      defineProperty(ObjectProto, key, protoDescriptor);
    };
  }
})(Object, "getOwnPropertySymbols");
(function(O, Symbol2) {
  "use strict";
  var dP = O.defineProperty, ObjectProto = O.prototype, toString = ObjectProto.toString, toStringTag = "toStringTag", descriptor;
  [
    "iterator",
    // A method returning the default iterator for an object. Used by for...of.
    "match",
    // A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by String.prototype.match().
    "replace",
    // A method that replaces matched substrings of a string. Used by String.prototype.replace().
    "search",
    // A method that returns the index within a string that matches the regular expression. Used by String.prototype.search().
    "split",
    // A method that splits a string at the indices that match a regular expression. Used by String.prototype.split().
    "hasInstance",
    // A method determining if a constructor object recognizes an object as its instance. Used by instanceof.
    "isConcatSpreadable",
    // A Boolean value indicating if an object should be flattened to its array elements. Used by Array.prototype.concat().
    "unscopables",
    // An Array of string values that are property values. These are excluded from the with environment bindings of the associated objects.
    "species",
    // A constructor function that is used to create derived objects.
    "toPrimitive",
    // A method converting an object to a primitive value.
    toStringTag
    // A string value used for the default description of an object. Used by Object.prototype.toString().
  ].forEach(function(name) {
    if (!(name in Symbol2)) {
      dP(Symbol2, name, { value: Symbol2(name) });
      if (name === toStringTag) {
        descriptor = O.getOwnPropertyDescriptor(ObjectProto, "toString");
        descriptor.value = function() {
          var str = toString.call(this);
          var tst = this == null ? this : this[Symbol2.toStringTag];
          return tst == null ? str : "[object " + tst + "]";
        };
        dP(ObjectProto, "toString", descriptor);
      }
    }
  });
})(Object, Symbol);
(function(Si, AP, SP) {
  function returnThis() {
    return this;
  }
  if (!AP[Si]) {
    AP[Si] = function() {
      var i = 0, self2 = this, iterator = {
        next: function next() {
          var done = self2.length <= i;
          return done ? { done } : { done, value: self2[i++] };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };
  }
  if (!SP[Si]) {
    SP[Si] = function() {
      var fromCodePoint = String.fromCodePoint, self2 = this, i = 0, length = self2.length, iterator = {
        next: function next() {
          var done = length <= i, c = done ? "" : fromCodePoint(self2.codePointAt(i));
          i += c.length;
          return done ? { done } : { done, value: c };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };
  }
})(Symbol.iterator, Array.prototype, String.prototype);

// packages/core/lib/polyfills/object/getOwnPropertyDescriptors.js
if (!Object.hasOwnProperty("getOwnPropertyDescriptors")) {
  Object.defineProperty(Object, "getOwnPropertyDescriptors", {
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

// packages/core/lib/polyfills/object/merge.js
if (!Object.prototype.merge) {
  Object.defineProperty(Object.prototype, "merge", {
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

// packages/core/lib/asserts.js
var Asserts = class _Asserts {
  /**
   * Evaluates a single assert: values are returned as-is, functions are invoked
   * (in safe mode wrapped in try/catch).
   *
   * @static
   * @param {any} [assert=null]
   * @param {boolean} [safe=false]
   * @returns {any}
   *
   * @memberOf Asserts
   */
  static checkAssert(assert = null, safe = false) {
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
    return asserts.every((assert) => {
      return _Asserts.checkAssert(assert, safe);
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
    return asserts.some((assert) => {
      return _Asserts.checkAssert(assert, safe);
    });
  }
};

// packages/core/lib/flagsClass.js
var FlagsClass = class {
  /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=null]
   *
   * @memberOf FlagsClass
   */
  constructor(ua = null) {
    this._booleanFlagsValuePropertyName = "name";
    this._root = typeof self !== "undefined" && self || typeof window !== "undefined" && window || typeof globalThis !== "undefined" && globalThis || typeof global !== "undefined" && global || {};
    this._process = this._root.process || {};
    this._navigator = this._root.navigator || {};
    this._document = this._root.document || null;
    this._ua = ua || this._navigator.userAgent || "n/a";
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
    const protoProperties = Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).concat(Object.getOwnPropertyNames(this).filter((prop) => {
      return !prop.startsWith("_") && !Object.getOwnPropertyDescriptor(this, prop).get;
    }));
    const protoPropertiesReduced = protoProperties.reduce((acc, prop) => {
      if (!!this[prop]) {
        if (typeof this[prop] === "boolean") {
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
    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, prop) => {
      acc[prop] = this[prop];
      return acc;
    }, {}).merge(Object.getOwnPropertyNames(this).filter((prop) => {
      return !prop.startsWith("_") && !Object.getOwnPropertyDescriptor(this, prop).get;
    }).reduce((acc, prop) => {
      acc[prop] = this[prop];
      return acc;
    }, {}));
  }
};

// packages/core/lib/cssFlagsClass.js
var CssFlagsClass = class extends FlagsClass {
  /**
   * Creates an instance of CssFlagsClass.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='flags']
   *
   * @memberOf CssFlagsClass
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "flags") {
    super(ua);
    this._flags = flags;
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
    return Object.getOwnPropertyNames(proto).filter((prop) => {
      return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
    }).reduce((acc, prop) => {
      if (!!this[prop]) {
        acc.push((this._cssFlagsPrefix + "--" + prop + (typeof this[prop] !== "boolean" ? "--" + this[prop] : "")).toLowerCase());
      }
      return acc;
    }, []);
  }
};

// packages/core/lib/core.js
if (typeof process !== "undefined" && process.env && true) {
  console.log("DetectorJS Core Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
}
export {
  Asserts,
  CssFlagsClass,
  FlagsClass
};
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//# sourceMappingURL=core.mjs.map
