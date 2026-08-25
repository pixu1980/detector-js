(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

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

  // packages/feature/lib/webAPIs.js
  var WEB_API_GLOBALS = [
    "AbortController",
    "AbortSignal",
    "AbsoluteOrientationSensor",
    "AbstractRange",
    "Accelerometer",
    "AesCbcParams",
    "AesCtrParams",
    "AesDerivedKeyParams",
    "AesGcmParams",
    "AesKeyGenParams",
    "AmbientLightSensor",
    "AnalyserNode",
    "Animation",
    "AnimationEffect",
    "AnimationEvent",
    "AnimationPlaybackEvent",
    "AnimationTimeline",
    "Attr",
    "AudioBuffer",
    "AudioBufferSourceNode",
    "AudioContext",
    "AudioData",
    "AudioDecoder",
    "AudioDestinationNode",
    "AudioEncoder",
    "AudioListener",
    "AudioNode",
    "AudioParam",
    "AudioParamDescriptor",
    "AudioParamMap",
    "AudioPlaybackStats",
    "AudioProcessingEvent",
    "AudioScheduledSourceNode",
    "AudioSession",
    "AudioSinkInfo",
    "AudioTrack",
    "AudioTrackList",
    "AudioWorklet",
    "AudioWorkletGlobalScope",
    "AudioWorkletNode",
    "AudioWorkletProcessor",
    "AuthenticatorAssertionResponse",
    "AuthenticatorAttestationResponse",
    "AuthenticatorResponse",
    "BackgroundFetchEvent",
    "BackgroundFetchManager",
    "BackgroundFetchRecord",
    "BackgroundFetchRegistration",
    "BackgroundFetchUpdateUIEvent",
    "BarProp",
    "BarcodeDetector",
    "BaseAudioContext",
    "BatteryManager",
    "BeforeInstallPromptEvent",
    "BeforeUnloadEvent",
    "BiquadFilterNode",
    "Blob",
    "BlobEvent",
    "BluetoothCharacteristicProperties",
    "BluetoothDevice",
    "BluetoothRemoteGATTCharacteristic",
    "BluetoothRemoteGATTDescriptor",
    "BluetoothRemoteGATTServer",
    "BluetoothRemoteGATTService",
    "BluetoothUUID",
    "BrowserCaptureMediaStreamTrack",
    "BufferedChangeEvent",
    "ByteLengthQueuingStrategy",
    "CDATASection",
    "COEPViolationReport",
    "CSPViolationReport",
    "CSS",
    "CSSAnimation",
    "CSSConditionRule",
    "CSSContainerRule",
    "CSSCounterStyleRule",
    "CSSFontFaceDescriptors",
    "CSSFontFaceRule",
    "CSSFontFeatureValuesMap",
    "CSSFontFeatureValuesRule",
    "CSSFontPaletteValuesRule",
    "CSSFunctionDeclarations",
    "CSSFunctionDescriptors",
    "CSSFunctionRule",
    "CSSGroupingRule",
    "CSSImageValue",
    "CSSImportRule",
    "CSSKeyframeRule",
    "CSSKeyframesRule",
    "CSSKeywordValue",
    "CSSLayerBlockRule",
    "CSSLayerStatementRule",
    "CSSMathClamp",
    "CSSMathInvert",
    "CSSMathMax",
    "CSSMathMin",
    "CSSMathNegate",
    "CSSMathProduct",
    "CSSMathSum",
    "CSSMathValue",
    "CSSMatrixComponent",
    "CSSMediaRule",
    "CSSNamespaceRule",
    "CSSNestedDeclarations",
    "CSSNumericArray",
    "CSSNumericValue",
    "CSSPageDescriptors",
    "CSSPageRule",
    "CSSPerspective",
    "CSSPositionTryDescriptors",
    "CSSPositionTryRule",
    "CSSPositionValue",
    "CSSPrimitiveValue",
    "CSSPropertyRule",
    "CSSPseudoElement",
    "CSSRotate",
    "CSSRule",
    "CSSRuleList",
    "CSSScale",
    "CSSScopeRule",
    "CSSSkew",
    "CSSSkewX",
    "CSSSkewY",
    "CSSStartingStyleRule",
    "CSSStyleDeclaration",
    "CSSStyleProperties",
    "CSSStyleRule",
    "CSSStyleSheet",
    "CSSStyleValue",
    "CSSSupportsRule",
    "CSSTransformComponent",
    "CSSTransformValue",
    "CSSTransition",
    "CSSTranslate",
    "CSSUnitValue",
    "CSSUnparsedValue",
    "CSSValue",
    "CSSValueList",
    "CSSVariableReferenceValue",
    "CSSViewTransitionRule",
    "Cache",
    "CacheStorage",
    "CanMakePaymentEvent",
    "CanvasCaptureMediaStreamTrack",
    "CanvasGradient",
    "CanvasPattern",
    "CanvasRenderingContext2D",
    "CaptureController",
    "CaretPosition",
    "ChannelMergerNode",
    "ChannelSplitterNode",
    "ChapterInformation",
    "CharacterBoundsUpdateEvent",
    "CharacterData",
    "Client",
    "Clients",
    "ClipboardChangeEvent",
    "ClipboardEvent",
    "ClipboardItem",
    "CloseEvent",
    "CloseWatcher",
    "CommandEvent",
    "Comment",
    "CompositionEvent",
    "CompressionStream",
    "ConstantSourceNode",
    "ContactAddress",
    "ContactsManager",
    "ContentIndex",
    "ContentIndexEvent",
    "ContentVisibilityAutoStateChangeEvent",
    "ConvolverNode",
    "CookieChangeEvent",
    "CookieStore",
    "CookieStoreManager",
    "CountQueuingStrategy",
    "CrashReport",
    "CrashReportContext",
    "CreateMonitor",
    "Credential",
    "CredentialsContainer",
    "CropTarget",
    "Crypto",
    "CryptoKey",
    "CryptoKeyPair",
    "CustomElementRegistry",
    "CustomEvent",
    "CustomStateSet",
    "DOMError",
    "DOMException",
    "DOMHighResTimeStamp",
    "DOMImplementation",
    "DOMMatrix",
    "DOMMatrixReadOnly",
    "DOMParser",
    "DOMPoint",
    "DOMPointReadOnly",
    "DOMQuad",
    "DOMRect",
    "DOMRectList",
    "DOMRectReadOnly",
    "DOMStringList",
    "DOMStringMap",
    "DOMTokenList",
    "DataCue",
    "DataTransfer",
    "DataTransferItem",
    "DataTransferItemList",
    "DecompressionStream",
    "DedicatedWorkerGlobalScope",
    "DeferredRequestInit",
    "DelayNode",
    "DelegatedInkTrailPresenter",
    "DeprecationReport",
    "DeviceMotionEvent",
    "DeviceMotionEventAcceleration",
    "DeviceMotionEventRotationRate",
    "DeviceOrientationEvent",
    "DevicePosture",
    "DirectoryEntrySync",
    "DirectoryReaderSync",
    "Document",
    "DocumentFragment",
    "DocumentPictureInPicture",
    "DocumentPictureInPictureEvent",
    "DocumentTimeline",
    "DocumentType",
    "DragEvent",
    "DynamicsCompressorNode",
    "EcKeyGenParams",
    "EcKeyImportParams",
    "EcdhKeyDeriveParams",
    "EcdsaParams",
    "EditContext",
    "Element",
    "ElementInternals",
    "EncodedAudioChunk",
    "EncodedVideoChunk",
    "ErrorEvent",
    "Event",
    "EventCounts",
    "EventSource",
    "EventTarget",
    "ExtendableCookieChangeEvent",
    "ExtendableEvent",
    "ExtendableMessageEvent",
    "EyeDropper",
    "FeaturePolicy",
    "FederatedCredential",
    "FederatedCredentialInit",
    "Fence",
    "FencedFrameConfig",
    "FetchEvent",
    "FetchLaterResult",
    "FileEntrySync",
    "FileList",
    "FileReader",
    "FileReaderSync",
    "FileSystemChangeRecord",
    "FileSystemDirectoryEntry",
    "FileSystemDirectoryHandle",
    "FileSystemDirectoryReader",
    "FileSystemEntry",
    "FileSystemFileEntry",
    "FileSystemFileHandle",
    "FileSystemHandle",
    "FileSystemObserver",
    "FileSystemSync",
    "FileSystemSyncAccessHandle",
    "FileSystemWritableFileStream",
    "FocusEvent",
    "FontData",
    "FontFace",
    "FontFaceSet",
    "FontFaceSetLoadEvent",
    "FormData",
    "FormDataEvent",
    "FragmentDirective",
    "GPU",
    "GPUAdapter",
    "GPUAdapterInfo",
    "GPUBindGroup",
    "GPUBindGroupLayout",
    "GPUBuffer",
    "GPUCanvasContext",
    "GPUCommandBuffer",
    "GPUCommandEncoder",
    "GPUCompilationInfo",
    "GPUCompilationMessage",
    "GPUComputePassEncoder",
    "GPUComputePipeline",
    "GPUDevice",
    "GPUDeviceLostInfo",
    "GPUError",
    "GPUExternalTexture",
    "GPUInternalError",
    "GPUOutOfMemoryError",
    "GPUPipelineError",
    "GPUPipelineLayout",
    "GPUQuerySet",
    "GPUQueue",
    "GPURenderBundle",
    "GPURenderBundleEncoder",
    "GPURenderPassEncoder",
    "GPURenderPipeline",
    "GPUSampler",
    "GPUShaderModule",
    "GPUSupportedFeatures",
    "GPUSupportedLimits",
    "GPUTexture",
    "GPUTextureView",
    "GPUUncapturedErrorEvent",
    "GPUValidationError",
    "GainNode",
    "GamepadButton",
    "GamepadEvent",
    "GamepadHapticActuator",
    "GamepadPose",
    "GeolocationCoordinates",
    "GeolocationPosition",
    "GeolocationPositionError",
    "GestureEvent",
    "GravitySensor",
    "Gyroscope",
    "HID",
    "HIDConnectionEvent",
    "HIDDevice",
    "HIDInputReportEvent",
    "HMDVRDevice",
    "HTMLAllCollection",
    "HTMLAnchorElement",
    "HTMLAreaElement",
    "HTMLAudioElement",
    "HTMLBRElement",
    "HTMLBaseElement",
    "HTMLBodyElement",
    "HTMLButtonElement",
    "HTMLCanvasElement",
    "HTMLCollection",
    "HTMLDListElement",
    "HTMLDataElement",
    "HTMLDataListElement",
    "HTMLDetailsElement",
    "HTMLDialogElement",
    "HTMLDivElement",
    "HTMLDocument",
    "HTMLElement",
    "HTMLEmbedElement",
    "HTMLFencedFrameElement",
    "HTMLFieldSetElement",
    "HTMLFontElement",
    "HTMLFormControlsCollection",
    "HTMLFormElement",
    "HTMLFrameSetElement",
    "HTMLGeolocationElement",
    "HTMLHRElement",
    "HTMLHeadElement",
    "HTMLHeadingElement",
    "HTMLHtmlElement",
    "HTMLIFrameElement",
    "HTMLImageElement",
    "HTMLInputElement",
    "HTMLLIElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLLinkElement",
    "HTMLMapElement",
    "HTMLMarqueeElement",
    "HTMLMediaElement",
    "HTMLMenuElement",
    "HTMLMetaElement",
    "HTMLMeterElement",
    "HTMLModElement",
    "HTMLOListElement",
    "HTMLObjectElement",
    "HTMLOptGroupElement",
    "HTMLOptionElement",
    "HTMLOptionsCollection",
    "HTMLOutputElement",
    "HTMLParagraphElement",
    "HTMLParamElement",
    "HTMLPictureElement",
    "HTMLPreElement",
    "HTMLProgressElement",
    "HTMLQuoteElement",
    "HTMLScriptElement",
    "HTMLSelectElement",
    "HTMLSelectedContentElement",
    "HTMLSlotElement",
    "HTMLSourceElement",
    "HTMLSpanElement",
    "HTMLStyleElement",
    "HTMLTableCaptionElement",
    "HTMLTableCellElement",
    "HTMLTableColElement",
    "HTMLTableElement",
    "HTMLTableRowElement",
    "HTMLTableSectionElement",
    "HTMLTemplateElement",
    "HTMLTextAreaElement",
    "HTMLTimeElement",
    "HTMLTitleElement",
    "HTMLTrackElement",
    "HTMLUListElement",
    "HTMLUnknownElement",
    "HTMLVideoElement",
    "HashChangeEvent",
    "Headers",
    "Highlight",
    "HighlightRegistry",
    "History",
    "HkdfParams",
    "HmacImportParams",
    "HmacKeyGenParams",
    "IDBCursor",
    "IDBCursorWithValue",
    "IDBDatabase",
    "IDBFactory",
    "IDBIndex",
    "IDBKeyRange",
    "IDBObjectStore",
    "IDBOpenDBRequest",
    "IDBRecord",
    "IDBRequest",
    "IDBTransaction",
    "IDBVersionChangeEvent",
    "IIRFilterNode",
    "IdentityCredential",
    "IdentityCredentialError",
    "IdentityCredentialRequestOptions",
    "IdentityProvider",
    "IdleDeadline",
    "IdleDetector",
    "ImageBitmap",
    "ImageBitmapRenderingContext",
    "ImageCapture",
    "ImageData",
    "ImageDecoder",
    "ImageTrack",
    "ImageTrackList",
    "Ink",
    "InputDeviceCapabilities",
    "InputDeviceInfo",
    "InputEvent",
    "InstallEvent",
    "IntegrityViolationReport",
    "InteractionContentfulPaint",
    "InterestEvent",
    "IntersectionObserverEntry",
    "InterventionReport",
    "Keyboard",
    "KeyboardEvent",
    "KeyboardLayoutMap",
    "KeyframeEffect",
    "LanguageDetector",
    "LanguageModel",
    "LargestContentfulPaint",
    "LaunchParams",
    "LaunchQueue",
    "LayoutShift",
    "LayoutShiftAttribution",
    "LinearAccelerationSensor",
    "Location",
    "Lock",
    "LockManager",
    "MIDIAccess",
    "MIDIConnectionEvent",
    "MIDIInput",
    "MIDIInputMap",
    "MIDIMessageEvent",
    "MIDIOutput",
    "MIDIOutputMap",
    "MIDIPort",
    "Magnetometer",
    "ManagedMediaSource",
    "ManagedSourceBuffer",
    "MathMLElement",
    "MediaDeviceInfo",
    "MediaDevices",
    "MediaElementAudioSourceNode",
    "MediaEncryptedEvent",
    "MediaError",
    "MediaKeyMessageEvent",
    "MediaKeySession",
    "MediaKeyStatusMap",
    "MediaKeySystemAccess",
    "MediaKeys",
    "MediaList",
    "MediaMetadata",
    "MediaQueryList",
    "MediaQueryListEvent",
    "MediaRecorderErrorEvent",
    "MediaSource",
    "MediaSourceHandle",
    "MediaStream",
    "MediaStreamAudioDestinationNode",
    "MediaStreamAudioSourceNode",
    "MediaStreamEvent",
    "MediaStreamTrack",
    "MediaStreamTrackAudioSourceNode",
    "MediaStreamTrackEvent",
    "MediaStreamTrackGenerator",
    "MediaStreamTrackProcessor",
    "MediaTrackConstraints",
    "MediaTrackSettings",
    "MediaTrackSupportedConstraints",
    "MerchantValidationEvent",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "Metadata",
    "MimeType",
    "MimeTypeArray",
    "MouseEvent",
    "MouseScrollEvent",
    "MutationEvent",
    "MutationObserver",
    "MutationRecord",
    "NDEFMessage",
    "NDEFReader",
    "NDEFReadingEvent",
    "NDEFRecord",
    "NamedNodeMap",
    "NavigateEvent",
    "Navigation",
    "NavigationActivation",
    "NavigationCurrentEntryChangeEvent",
    "NavigationDestination",
    "NavigationHistoryEntry",
    "NavigationPrecommitController",
    "NavigationPreloadManager",
    "NavigationTransition",
    "Navigator",
    "NavigatorLogin",
    "NavigatorUAData",
    "NetworkInformation",
    "Node",
    "NodeIterator",
    "NodeList",
    "NotRestoredReasonDetails",
    "NotRestoredReasons",
    "Notification",
    "NotificationEvent",
    "OTPCredential",
    "OfflineAudioCompletionEvent",
    "OfflineAudioContext",
    "OffscreenCanvasRenderingContext2D",
    "OrientationSensor",
    "OscillatorNode",
    "OverconstrainedError",
    "PageRevealEvent",
    "PageSwapEvent",
    "PageTransitionEvent",
    "PaintRenderingContext2D",
    "PaintSize",
    "PaintWorkletGlobalScope",
    "PannerNode",
    "PasswordCredential",
    "PasswordCredentialInit",
    "Path2D",
    "PaymentAddress",
    "PaymentManager",
    "PaymentMethodChangeEvent",
    "PaymentRequestEvent",
    "PaymentRequestUpdateEvent",
    "PaymentResponse",
    "Pbkdf2Params",
    "Performance",
    "PerformanceElementTiming",
    "PerformanceEntry",
    "PerformanceEventTiming",
    "PerformanceLongAnimationFrameTiming",
    "PerformanceLongTaskTiming",
    "PerformanceMark",
    "PerformanceMeasure",
    "PerformanceNavigation",
    "PerformanceNavigationTiming",
    "PerformanceObserver",
    "PerformanceObserverEntryList",
    "PerformancePaintTiming",
    "PerformanceResourceTiming",
    "PerformanceScriptTiming",
    "PerformanceServerTiming",
    "PerformanceSoftNavigation",
    "PerformanceTiming",
    "PerformanceTimingConfidence",
    "PeriodicSyncEvent",
    "PeriodicSyncManager",
    "PeriodicWave",
    "PermissionStatus",
    "PermissionsPolicyViolationReport",
    "PictureInPictureEvent",
    "PictureInPictureWindow",
    "Plugin",
    "PluginArray",
    "PointerEvent",
    "PopStateEvent",
    "PositionSensorVRDevice",
    "PreferenceManager",
    "PreferenceObject",
    "Presentation",
    "PresentationAvailability",
    "PresentationConnection",
    "PresentationConnectionAvailableEvent",
    "PresentationConnectionCloseEvent",
    "PresentationConnectionList",
    "PresentationReceiver",
    "PresentationRequest",
    "PressureObserver",
    "PressureRecord",
    "ProcessingInstruction",
    "Profiler",
    "ProgressEvent",
    "PromiseRejectionEvent",
    "PublicKeyCredential",
    "PublicKeyCredentialCreationOptions",
    "PublicKeyCredentialRequestOptions",
    "PushEvent",
    "PushManager",
    "PushMessageData",
    "PushSubscription",
    "PushSubscriptionOptions",
    "QuotaExceededError",
    "RTCAudioSourceStats",
    "RTCCertificate",
    "RTCCertificateStats",
    "RTCCodecStats",
    "RTCDTMFSender",
    "RTCDTMFToneChangeEvent",
    "RTCDataChannel",
    "RTCDataChannelEvent",
    "RTCDataChannelStats",
    "RTCDtlsTransport",
    "RTCEncodedAudioFrame",
    "RTCEncodedVideoFrame",
    "RTCError",
    "RTCErrorEvent",
    "RTCIceCandidate",
    "RTCIceCandidatePair",
    "RTCIceCandidatePairStats",
    "RTCIceCandidateStats",
    "RTCIceParameters",
    "RTCIceTransport",
    "RTCIdentityAssertion",
    "RTCInboundRtpStreamStats",
    "RTCOutboundRtpStreamStats",
    "RTCPeerConnection",
    "RTCPeerConnectionIceErrorEvent",
    "RTCPeerConnectionIceEvent",
    "RTCPeerConnectionStats",
    "RTCRemoteInboundRtpStreamStats",
    "RTCRemoteOutboundRtpStreamStats",
    "RTCRtpReceiver",
    "RTCRtpScriptTransform",
    "RTCRtpScriptTransformer",
    "RTCRtpSender",
    "RTCRtpTransceiver",
    "RTCSctpTransport",
    "RTCSessionDescription",
    "RTCStatsReport",
    "RTCTrackEvent",
    "RTCTransformEvent",
    "RTCTransportStats",
    "RTCVideoSourceStats",
    "RadioNodeList",
    "Range",
    "ReadableByteStreamController",
    "ReadableStream",
    "ReadableStreamBYOBReader",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "ReadableStreamDefaultReader",
    "RelativeOrientationSensor",
    "RemotePlayback",
    "ReportingObserver",
    "Request",
    "RequestInit",
    "ResizeObserverEntry",
    "ResizeObserverSize",
    "Response",
    "RestrictionTarget",
    "RsaHashedImportParams",
    "RsaHashedKeyGenParams",
    "RsaOaepParams",
    "RsaPssParams",
    "SVGAElement",
    "SVGAngle",
    "SVGAnimateColorElement",
    "SVGAnimateElement",
    "SVGAnimateMotionElement",
    "SVGAnimateTransformElement",
    "SVGAnimatedAngle",
    "SVGAnimatedBoolean",
    "SVGAnimatedEnumeration",
    "SVGAnimatedInteger",
    "SVGAnimatedLength",
    "SVGAnimatedLengthList",
    "SVGAnimatedNumber",
    "SVGAnimatedNumberList",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedRect",
    "SVGAnimatedString",
    "SVGAnimatedTransformList",
    "SVGAnimationElement",
    "SVGCircleElement",
    "SVGClipPathElement",
    "SVGComponentTransferFunctionElement",
    "SVGDefsElement",
    "SVGDescElement",
    "SVGDiscardElement",
    "SVGElement",
    "SVGEllipseElement",
    "SVGFEBlendElement",
    "SVGFEColorMatrixElement",
    "SVGFEComponentTransferElement",
    "SVGFECompositeElement",
    "SVGFEConvolveMatrixElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDistantLightElement",
    "SVGFEDropShadowElement",
    "SVGFEFloodElement",
    "SVGFEFuncAElement",
    "SVGFEFuncBElement",
    "SVGFEFuncGElement",
    "SVGFEFuncRElement",
    "SVGFEGaussianBlurElement",
    "SVGFEImageElement",
    "SVGFEMergeElement",
    "SVGFEMergeNodeElement",
    "SVGFEMorphologyElement",
    "SVGFEOffsetElement",
    "SVGFEPointLightElement",
    "SVGFESpecularLightingElement",
    "SVGFESpotLightElement",
    "SVGFETileElement",
    "SVGFETurbulenceElement",
    "SVGFilterElement",
    "SVGForeignObjectElement",
    "SVGGElement",
    "SVGGeometryElement",
    "SVGGradientElement",
    "SVGGraphicsElement",
    "SVGImageElement",
    "SVGLength",
    "SVGLengthList",
    "SVGLineElement",
    "SVGLinearGradientElement",
    "SVGMPathElement",
    "SVGMarkerElement",
    "SVGMaskElement",
    "SVGMetadataElement",
    "SVGNumber",
    "SVGNumberList",
    "SVGPathElement",
    "SVGPatternElement",
    "SVGPoint",
    "SVGPointList",
    "SVGPolygonElement",
    "SVGPolylineElement",
    "SVGPreserveAspectRatio",
    "SVGRadialGradientElement",
    "SVGRect",
    "SVGRectElement",
    "SVGSVGElement",
    "SVGScriptElement",
    "SVGSetElement",
    "SVGStopElement",
    "SVGStringList",
    "SVGStyleElement",
    "SVGSwitchElement",
    "SVGSymbolElement",
    "SVGTSpanElement",
    "SVGTextContentElement",
    "SVGTextElement",
    "SVGTextPathElement",
    "SVGTextPositioningElement",
    "SVGTitleElement",
    "SVGTransform",
    "SVGTransformList",
    "SVGUnitTypes",
    "SVGUseElement",
    "SVGViewElement",
    "Sanitizer",
    "SanitizerConfig",
    "Scheduler",
    "Scheduling",
    "Screen",
    "ScreenDetailed",
    "ScreenDetails",
    "ScreenOrientation",
    "ScriptProcessorNode",
    "ScrollTimeline",
    "SecurePaymentConfirmationRequest",
    "SecurityPolicyViolationEvent",
    "Selection",
    "Sensor",
    "SensorErrorEvent",
    "SerialPort",
    "ServiceWorkerContainer",
    "ServiceWorkerGlobalScope",
    "ServiceWorkerRegistration",
    "ShadowRoot",
    "SharedStorage",
    "SharedStorageOperation",
    "SharedStorageRunOperation",
    "SharedStorageSelectURLOperation",
    "SharedStorageWorklet",
    "SharedStorageWorkletGlobalScope",
    "SharedWorker",
    "SharedWorkerGlobalScope",
    "SnapEvent",
    "SourceBuffer",
    "SourceBufferList",
    "SpeechGrammar",
    "SpeechGrammarList",
    "SpeechRecognition",
    "SpeechRecognitionAlternative",
    "SpeechRecognitionErrorEvent",
    "SpeechRecognitionEvent",
    "SpeechRecognitionPhrase",
    "SpeechRecognitionResult",
    "SpeechRecognitionResultList",
    "SpeechSynthesisErrorEvent",
    "SpeechSynthesisEvent",
    "SpeechSynthesisUtterance",
    "SpeechSynthesisVoice",
    "StaticRange",
    "StereoPannerNode",
    "StorageAccessHandle",
    "StorageEvent",
    "StorageManager",
    "StylePropertyMap",
    "StylePropertyMapReadOnly",
    "StyleSheet",
    "StyleSheetList",
    "SubmitEvent",
    "SubtleCrypto",
    "Summarizer",
    "SyncEvent",
    "SyncManager",
    "TaskAttributionTiming",
    "TaskController",
    "TaskPriorityChangeEvent",
    "TaskSignal",
    "Text",
    "TextDecoder",
    "TextDecoderStream",
    "TextEncoder",
    "TextEncoderStream",
    "TextEvent",
    "TextFormat",
    "TextFormatUpdateEvent",
    "TextMetrics",
    "TextTrack",
    "TextTrackCue",
    "TextTrackCueList",
    "TextTrackList",
    "TextUpdateEvent",
    "TimeEvent",
    "TimeRanges",
    "ToggleEvent",
    "Touch",
    "TouchEvent",
    "TouchList",
    "TrackEvent",
    "TransformStream",
    "TransformStreamDefaultController",
    "TransitionEvent",
    "Translator",
    "TreeWalker",
    "TrustedHTML",
    "TrustedScript",
    "TrustedScriptURL",
    "TrustedTypePolicy",
    "TrustedTypePolicyFactory",
    "UIEvent",
    "URL",
    "URLPattern",
    "URLSearchParams",
    "USBAlternateInterface",
    "USBConfiguration",
    "USBConnectionEvent",
    "USBDevice",
    "USBEndpoint",
    "USBInTransferResult",
    "USBInterface",
    "USBIsochronousInTransferPacket",
    "USBIsochronousInTransferResult",
    "USBIsochronousOutTransferPacket",
    "USBIsochronousOutTransferResult",
    "USBOutTransferResult",
    "UserActivation",
    "VRDisplay",
    "VRDisplayCapabilities",
    "VRDisplayEvent",
    "VREyeParameters",
    "VRFieldOfView",
    "VRFrameData",
    "VRLayerInit",
    "VRPose",
    "VRStageParameters",
    "VTTCue",
    "VTTRegion",
    "ValidityState",
    "VideoColorSpace",
    "VideoDecoder",
    "VideoEncoder",
    "VideoFrame",
    "VideoPlaybackQuality",
    "VideoTrack",
    "VideoTrackGenerator",
    "VideoTrackList",
    "ViewTimeline",
    "ViewTransition",
    "ViewTransitionTypeSet",
    "Viewport",
    "VirtualKeyboard",
    "VisibilityStateEntry",
    "WGSLLanguageFeatures",
    "WakeLockSentinel",
    "WaveShaperNode",
    "WebGL2RenderingContext",
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLContextEvent",
    "WebGLFramebuffer",
    "WebGLObject",
    "WebGLProgram",
    "WebGLQuery",
    "WebGLRenderbuffer",
    "WebGLRenderingContext",
    "WebGLSampler",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLSync",
    "WebGLTexture",
    "WebGLTransformFeedback",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    "WebKitPoint",
    "WebSocketStream",
    "WebTransport",
    "WebTransportBidirectionalStream",
    "WebTransportDatagramDuplexStream",
    "WebTransportDatagramsWritable",
    "WebTransportError",
    "WebTransportReceiveStream",
    "WebTransportSendGroup",
    "WebTransportSendStream",
    "WheelEvent",
    "Window",
    "WindowClient",
    "WindowControlsOverlay",
    "WindowControlsOverlayGeometryChangeEvent",
    "WindowSharedStorage",
    "WorkerGlobalScope",
    "WorkerLocation",
    "WorkerNavigator",
    "Worklet",
    "WorkletGlobalScope",
    "WorkletSharedStorage",
    "WritableStream",
    "WritableStreamDefaultController",
    "WritableStreamDefaultWriter",
    "XMLDocument",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
    "XMLSerializer",
    "XPathEvaluator",
    "XPathExpression",
    "XPathResult",
    "XRAnchor",
    "XRAnchorSet",
    "XRBoundedReferenceSpace",
    "XRCPUDepthInformation",
    "XRCompositionLayer",
    "XRCubeLayer",
    "XRCylinderLayer",
    "XRDepthInformation",
    "XREquirectLayer",
    "XRFrame",
    "XRHand",
    "XRHitTestResult",
    "XRHitTestSource",
    "XRInputSource",
    "XRInputSourceArray",
    "XRInputSourceEvent",
    "XRInputSourcesChangeEvent",
    "XRJointPose",
    "XRJointSpace",
    "XRLayer",
    "XRLayerEvent",
    "XRLightEstimate",
    "XRLightProbe",
    "XRMediaBinding",
    "XRPose",
    "XRProjectionLayer",
    "XRQuadLayer",
    "XRRay",
    "XRReferenceSpace",
    "XRReferenceSpaceEvent",
    "XRRenderState",
    "XRRigidTransform",
    "XRSession",
    "XRSessionEvent",
    "XRSpace",
    "XRSubImage",
    "XRSystem",
    "XRTransientInputHitTestResult",
    "XRTransientInputHitTestSource",
    "XRView",
    "XRViewerPose",
    "XRViewport",
    "XRVisibilityMaskChangeEvent",
    "XRWebGLBinding",
    "XRWebGLDepthInformation",
    "XRWebGLLayer",
    "XRWebGLSubImage",
    "XSLTProcessor"
  ];

  // packages/feature/lib/audioFeature.js
  var AudioFeature = class extends CssFlagsClass {
    /**
     * Creates an instance of AudioFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='audio']
     *
     * @memberOf AudioFeature
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "audio") {
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
      this._audioElement = this._document.createElement("audio");
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
      return Asserts.all([
        "Audio" in this._root,
        "HTMLAudioElement" in this._root,
        "HTMLMediaElement" in this._root,
        () => !!this._audioElement && "canPlayType" in this._audioElement && this._audioElement instanceof this._root.HTMLAudioElement && this._audioElement instanceof this._root.HTMLMediaElement
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getContext() {
      return Asserts.one([
        "AudioContext" in this._root,
        "webkitAudioContext" in this._root
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getMp3() {
      return Asserts.all([
        () => this.supported && this._audioElement.canPlayType("audio/mpeg;").replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getWebm() {
      return Asserts.all([
        () => this.supported && this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getOgg() {
      return Asserts.all([
        () => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getOpus() {
      return Asserts.all([
        () => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getWav() {
      return Asserts.all([
        () => this.supported && this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf AudioFeature
     */
    getM4a() {
      return Asserts.all([
        () => this.supported && (this._audioElement.canPlayType("audio/x-m4a;").replace(/^no$/, "") || this._audioElement.canPlayType("audio/aac;").replace(/^no$/, "")) !== ""
      ], true);
    }
  };

  // packages/feature/lib/videoFeature.js
  var VideoFeature = class extends CssFlagsClass {
    /**
     * Creates an instance of VideoFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='video']
     *
     * @memberOf VideoFeature
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "video") {
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
      this._videoElement = this._document.createElement("video");
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
      return Asserts.all([
        "HTMLVideoElement" in this._root,
        "HTMLMediaElement" in this._root,
        () => !!this._videoElement && "canPlayType" in this._videoElement && this._videoElement instanceof this._root.HTMLVideoElement && this._videoElement instanceof this._root.HTMLMediaElement
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getMp4() {
      return Asserts.all([
        () => this.supported && this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getOgv() {
      return Asserts.all([
        () => this.supported && this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, "") !== ""
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf VideoFeature
     */
    getWebm() {
      return Asserts.all([
        () => this.supported && this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") !== ""
      ], true);
    }
  };

  // packages/feature/lib/feature.js
  var Feature = class extends CssFlagsClass {
    /**
     * Creates an instance of Feature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='feature']
     *
     * @memberOf Feature
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "feature") {
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
      for (let i = 0; i < WEB_API_GLOBALS.length; i += 1) {
        const globalName = WEB_API_GLOBALS[i];
        const flag = globalName.toCamelCase();
        if (!(flag in this)) {
          this[flag] = this._probeGlobal(globalName);
        }
      }
    }
    /**
     * Probes whether a Web API interface is exposed on the global root
     * (window / globalThis / worker global). Safe mode, never throws.
     *
     * @param {string} globalName
     * @returns {boolean}
     *
     * @memberOf Feature
     */
    _probeGlobal(globalName) {
      return Asserts.one([
        () => globalName in this._root && !!this._root[globalName]
      ], true);
    }
    /**
     * The MDN Web API catalog (windowGlobal names) used by the detector,
     * exposed for tooling/UIs (`featureFlag = globalName.toCamelCase()`,
     * `mdn = https://developer.mozilla.org/en-US/docs/Web/API/<globalName>`).
     *
     * @static
     * @returns {object}
     *
     * @memberOf Feature
     */
    static get APIS() {
      return {
        globals: WEB_API_GLOBALS
      };
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
      const prefixedProps = prefixes.map((item) => {
        return (item === "spec" ? "" : "-" + item + "-") + prop;
      });
      const prefixedPropsFound = prefixedProps.filter((item) => {
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
        if (!!computedStylePropValue && typeof computedStylePropValue === "string") {
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
      return !!prefixedPropValue && prefixedPropValue !== "none";
    }
    /**
     *
     *
     * @memberof Feature
     */
    _createTestElements() {
      this._cssPrefixes = ["spec", "webkit", "moz", "ms", "o"];
      this._script = this._document.createElement("script");
      this._canvas = this._document.createElement("canvas");
      this._div = this._document.createElement("div");
      this._input = this._document.createElement("input");
      this._img = this._document.createElement("img");
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
      return "addEventListener" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getAsyncScript() {
      return "async" in this._script;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBattery() {
      return "battery" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBluetooth() {
      return "bluetooth" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getBroadcastChannel() {
      return "BroadcastChannel" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCaches() {
      return "caches" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getClipboard() {
      return "clipboard" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCors() {
      return "XMLHttpRequest" in this._root && "withCredentials" in this._xmlHttpRequest;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getCredentials() {
      return "credentials" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getDeferScript() {
      return "defer" in this._script;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFile() {
      return Asserts.all([
        "File" in this._root,
        "FileReader" in this._root,
        "FileList" in this._root,
        "Blob" in this._root
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFileSystem() {
      return "requestFileSystem" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFetch() {
      return "fetch" in this._root && typeof this._root.fetch === "function";
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFullscreen() {
      return Asserts.one([
        "requestFullscreen" in this._canvas,
        "webkitRequestFullscreen" in this._canvas,
        "msRequestFullscreen" in this._canvas,
        "mozRequestFullScreen" in this._canvas
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getFullscreenKeyboard() {
      return Asserts.all([
        () => "Element" in this._root && "ALLOW_KEYBOARD_INPUT" in this._root.Element
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getGeolocation() {
      return "geolocation" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getGamepad() {
      return "getGamepads" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getHistoryAPI() {
      return Asserts.all([
        () => "history" in this._root && "pushState" in this._root.history
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getIndexedDB() {
      return "indexedDB" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getIntersectionObserver() {
      return "IntersectionObserver" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getLittleEndian() {
      return Asserts.all([
        this.getTypedArray.bind(this),
        () => new this._root.Int8Array(new this._root.Int16Array([1]).buffer)[0] > 0
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getLocalStorage() {
      return Asserts.one([
        () => "localStorage" in this._root
      ], true) && Asserts.one([
        () => {
          const test = "x";
          this._root.localStorage.setItem(test, test);
          this._root.localStorage.removeItem(test);
          return true;
        }
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMatchMedia() {
      return "matchMedia" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMediaCapabilities() {
      return "mediaCapabilities" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMediaRecorder() {
      return "MediaRecorder" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getMediaSession() {
      return "mediaSession" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getNFC() {
      return "nfc" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getNotifications() {
      return "Notification" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getOffscreenCanvas() {
      return "OffscreenCanvas" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getOnline() {
      return "onLine" in this._navigator && !!this._navigator.onLine;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getPaymentRequest() {
      return "PaymentRequest" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getPermissions() {
      return "permissions" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getQuerySelector() {
      return "querySelector" in this._document;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getQuerySelectorAll() {
      return "querySelectorAll" in this._document;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getResizeObserver() {
      return "ResizeObserver" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getSerial() {
      return "serial" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getSpeechSynthesis() {
      return "speechSynthesis" in this._navigator && "SpeechSynthesisUtterance" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getStorage() {
      return "storage" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getStructuredClone() {
      return "structuredClone" in this._root && typeof this._root.structuredClone === "function";
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getServiceWorker() {
      return "serviceWorker" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getTypedArray() {
      return Asserts.all([
        () => "Int8Array" in this._root && typeof this._root.Int8Array !== "undefined"
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getUSB() {
      return "usb" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getUserMedia() {
      return Asserts.one([
        "getUserMedia" in this._navigator,
        "webkitGetUserMedia" in this._navigator,
        "mozGetUserMedia" in this._navigator,
        "msGetUserMedia" in this._navigator
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getVibration() {
      return Asserts.one([
        "vibrate" in this._navigator,
        "webkitVibrate" in this._navigator,
        "mozVibrate" in this._navigator,
        "msVibrate" in this._navigator
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getVisualViewport() {
      return "visualViewport" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWakeLock() {
      return "wakeLock" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebAssembly() {
      return "WebAssembly" in this._root && "compile" in this._root.WebAssembly;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebAuthn() {
      return "PublicKeyCredential" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebCrypto() {
      return Asserts.all([
        "crypto" in this._root,
        () => "subtle" in this._root.crypto
      ], true);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebLocks() {
      return "locks" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebRTC() {
      return "RTCPeerConnection" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebShare() {
      return "share" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebSocket() {
      return "WebSocket" in this._root;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWebXr() {
      return "xr" in this._navigator;
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf Feature
     */
    getWorker() {
      return "Worker" in this._root;
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerEnabled() {
      return Asserts.one([
        "pointerEnabled" in this._navigator,
        "msPointerEnabled" in this._navigator
      ]);
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
      return Asserts.one([
        "pointerLockElement" in this._document,
        "webkitPointerLockElement" in this._document,
        "mozPointerLockElement" in this._document
      ]);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get quirksMode() {
      return this._document.compatMode !== "CSS1Compat";
    }
    /**
     * Test if CSS 3D transforms are supported
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get css3D() {
      return Asserts.all([
        this._checkCssPrefixedPropValue.bind(this, "transform", "translate3d(1px,1px,1px)"),
        this._checkCssPrefixedProp.bind(this, "perspective")
      ], true);
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
      return Asserts.one([
        this._checkCssPrefixedProp.bind(this, "transform-origin")
      ], true);
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
      return Asserts.one([
        this._checkCssPrefixedProp.bind(this, "transition")
      ], true);
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
      return "DeviceMotionEvent" in this._root;
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
      return "DeviceOrientationEvent" in this._root;
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
      return Asserts.all([
        "contextMenu" in this._document,
        "HTMLMenuItemElement" in this._root
      ]);
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
      return "classList" in this._document;
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
      return "placeholder" in this._input;
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
      return Asserts.all([
        () => this._img.style.width = this._img.style.width !== ""
      ], true);
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
      return Asserts.all([
        () => this._img.style.width = this._img.style.width !== ""
      ], true);
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
      return Asserts.all([
        () => "getContext" in this._canvas && !!this._canvas.getContext("2d")
      ], true);
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
      return Asserts.all([
        () => "createElementNS" in this._document && "createSVGRect" in this._document.createElementNS("http://www.w3.org/2000/svg", "svg")
      ], true);
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
      return Asserts.all([
        () => {
          const elem = document.createElement("canvas");
          if (!!(elem.getContext && elem.getContext("2d"))) {
            return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
          }
          return false;
        }
      ], true);
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
      return Asserts.one([
        () => this.canvas && "WebGLRenderingContext" in this._root && (this._canvas.getContext("webgl") || this._canvas.getContext("experimental-webgl")),
        () => this.canvas && "WebGL2RenderingContext" in this._root && this._canvas.getContext("webgl2")
      ], true);
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
      return Asserts.all([
        "getVRDisplays" in this._navigator
      ]);
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
      return Asserts.one([
        () => "ontouchstart" in this._root,
        () => "ontouchstart" in this._document.documentElement
      ], true) && Asserts.one([
        () => "DocumentTouch" in this._root && this._document instanceof this._root.DocumentTouch,
        () => this.pointerEnabled && "MSGesture" in this._root,
        () => "maxTouchPoints" in this._navigator && this._navigator.maxTouchPoints > 1
      ], true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get forceTouch() {
      return Asserts.all([
        () => "MouseEvent" in this._root && "WEBKIT_FORCE_AT_MOUSE_DOWN" in this._root.MouseEvent && "WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN" in this._root.MouseEvent
      ], true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Feature
     */
    get pointerEvents() {
      return Asserts.all([
        !!this._root.PointerEvent
      ], true);
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
      return "srcset" in this._img;
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
      return "sizes" in this._img;
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
      return "HTMLPictureElement" in this._root;
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
      return "HTMLDialogElement" in this._root;
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
      return Asserts.one([
        () => this.canvas && "WebGL2RenderingContext" in this._root && !!this._canvas.getContext("webgl2")
      ], true);
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
      return Asserts.one([
        () => "gpu" in this._navigator && !!this._navigator.gpu && typeof this._navigator.gpu.requestAdapter === "function"
      ], true);
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
      return this._navigator.deviceMemory || "n/a";
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
  };
  if (typeof process !== "undefined" && process.env && true) {
    console.log("DetectorJS Feature Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
  }

  // packages/hardware/lib/platform.js
  var Platform = class extends CssFlagsClass {
    /**
     * Creates an instance of Platform.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='platform']
     *
     * @memberOf Platform
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "platform") {
      super(ua, flags, cssFlagsPrefix);
    }
    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */
    get bot() {
      return Asserts.one([
        /googlebot/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @readonly
     * @memberof Platform
     */
    get console() {
      return Asserts.all([
        /(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this._ua),
        !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @readonly
     * @memberof Platform
     */
    get tv() {
      return Asserts.one([
        /(?:google|smart(?:-)?|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this._ua),
        /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this._ua)
      ]) && Asserts.one([
        !this.mobile,
        !this.bot,
        this._flags.feature.fullscreenKeyboard
      ]) && Asserts.one([
        // os is usually the values-mode snapshot ({ name }) from Detector, but a
        // flags-mode os ({ Android: true, … }) is tolerated too
        () => {
          const os = this._flags.os || {};
          const { name } = os;
          return name ? /^(android|tizen|webos)/i.test(String(name)) : !!os.Android || !!os.Tizen || !!os.WebOS;
        }
      ]);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get tablet() {
      return Asserts.all([
        this.mobile,
        /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get smartphone() {
      return Asserts.all([
        this.mobile,
        !this.tablet
      ]);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Platform
     */
    get mobile() {
      return Asserts.one([
        this._flags.feature.deviceMotion,
        this._flags.feature.deviceOrientation,
        this._flags.feature.pixelRatio > 1
      ]) && Asserts.one([
        this._flags.feature.touch,
        this._flags.feature.forceTouch,
        ["ChromeMobile", "EdgeMobile", "IEMobile", "FirefoxMobile", "MaxthonMobile", "OperaMobile", "SafariMobile", "SamsungBrowser", "DuckDuckGo", "Facebook", "Instagram", "TikTok", "Kiwi", "HuaweiBrowser", "Line"].includes(this._flags.browser.name)
      ]) && Asserts.all([
        !this._flags.feature.pointerEvents,
        this._flags.feature.file
      ]) || Asserts.all([
        ["Android", "iOS", "WindowsPhone", "Bada", "Blackberry", "Contiki", "MeeGo", "RIM", "QNX", "Palm", "Symbian", "WebOS"].includes(this._flags.os.name),
        ["ChromeMobile", "EdgeMobile", "IEMobile", "FirefoxMobile", "MaxthonMobile", "OperaMobile", "SafariMobile", "SamsungBrowser", "DuckDuckGo", "Facebook", "Instagram", "TikTok", "Kiwi", "HuaweiBrowser", "Line"].includes(this._flags.browser.name)
      ]);
    }
    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */
    get desktop() {
      return Asserts.all([
        !this.bot,
        !this.console,
        !this.mobile,
        !this.tv
      ]);
    }
    toValues() {
      const proto = Object.getPrototypeOf(this);
      const protoProperties = Object.getOwnPropertyNames(proto).filter((prop) => {
        return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!this[prop];
      });
      return protoProperties[0] || "n/a";
    }
  };

  // packages/hardware/lib/device.js
  var Device = class extends CssFlagsClass {
    /**
     * Creates an instance of Device.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='device']
     *
     * @memberOf Device
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "device") {
      super(ua, flags, cssFlagsPrefix);
    }
  };

  // packages/hardware/lib/cpu.js
  var CPU = class extends CssFlagsClass {
    constructor(ua = null, flags = {}, cssFlagsPrefix = "cpu") {
      super(ua, flags, cssFlagsPrefix);
      this._booleanFlagsValuePropertyName = "vendor";
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
      return this._navigator.platform || "Win32";
    }
    /**
     *
     *
     * @returns string
     *
     * @memberOf CPU
     */
    getArchitecture() {
      let cpuClass = this._navigator.cpuClass || "x86";
      if (Asserts.one([
        cpuClass === "arm64",
        this._navigator.platform === "MacARM",
        /(?:arm64|aarch64|armv\d|(?:^|[\/\s;(])arm(?=[\s;)\/]|$))/i.test(this._ua)
      ])) {
        cpuClass = "arm64";
      } else if (Asserts.one([
        cpuClass === "x64",
        ["Win64", "Linux x86_64", "Linux i686"].includes(this._navigator.platform),
        /(?:x86_64|x86-64|win64|wow64|x64;|amd64|ia64|sparc64|ppc64|mips64|pa-risc64|irix64|powerpc64)/i.test(this._ua)
      ])) {
        cpuClass = "x64";
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
      return Asserts.one([
        /(sun4\w)[;\)]/i.test(this._ua),
        /sparc(?:64)?(?=;);/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getIrix() {
      return Asserts.all([
        /irix(?:64)?(?=;);/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getMips() {
      return Asserts.all([
        /mips(?:64)?(?=;);/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getRisc() {
      return Asserts.all([
        /pa-risc(?:64)?(?=;);/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getAvr() {
      return Asserts.all([
        /(?=atmel\s)avr/i.test(this._ua)
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getArm() {
      return Asserts.one([
        /windows\s(ce|mobile);\sppc;/i.test(this._ua),
        /(?:arm64|aarch64|armv\d|(?:^|[\/\s;(])arm(?=[\s;)\/]|$))/i.test(this._ua),
        this._navigator.platform === "MacARM"
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getPowerPC() {
      return Asserts.one([
        /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua),
        this._navigator.platform === "MacPPC"
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getAmd() {
      return Asserts.one([
        /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
        this._navigator.cpuClass === "x64",
        this._navigator.platform === "Linux x86_64"
      ]) || Asserts.one([
        /(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
        /((?:i[346]|x)86)[;\)]/i.test(this._ua),
        this._navigator.cpuClass === "x86"
      ]);
    }
    /**
     *
     *
     * @returns boolean
     *
     * @memberOf CPU
     */
    getIntel() {
      return Asserts.one([
        /(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua),
        /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
        this._navigator.cpuClass === "x64",
        this._navigator.platform === "Linux x86_64"
      ]) || Asserts.one([
        /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua),
        /(ia32(?=;))/i.test(this._ua),
        /((?:i[346]|x)86)[;\)]/i.test(this._ua),
        this._navigator.cpuClass === "x86"
      ]);
    }
    /**
     * Resolves the true CPU architecture through User-Agent Client Hints
     * (navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness'])).
     * High-entropy: async, can be denied; falls back to the UA-based result.
     *
     * @returns {Promise<object>}
     *
     * @memberOf CPU
     */
    upgrade() {
      return __async(this, null, function* () {
        const uaData = this._navigator.userAgentData;
        if (uaData && typeof uaData.getHighEntropyValues === "function") {
          try {
            const hints = yield uaData.getHighEntropyValues(["architecture", "bitness"]);
            const arch = hints && typeof hints.architecture === "string" ? hints.architecture : null;
            if (arch === "arm") {
              this.architecture = String(hints.bitness || "64") === "32" ? "arm" : "arm64";
              this.arm = true;
              this.intel = false;
              this.amd = false;
              this.powerPC = false;
            } else if (arch === "x86") {
              this.architecture = String(hints.bitness || "64") === "32" ? "x86" : "x64";
              this.intel = true;
              this.amd = false;
              this.arm = false;
            }
          } catch (e) {
          }
        }
        return this.toValues();
      });
    }
  };

  // packages/hardware/lib/gpu.js
  var GPU = class extends CssFlagsClass {
    /**
     * Creates an instance of GPU.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='gpu']
     *
     * @memberOf GPU
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "gpu") {
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
      this._canvas = this._document.createElement("canvas");
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
        webGLVendor: "n/a",
        webGLRenderer: "n/a",
        vendor: "n/a",
        model: "n/a",
        renderer: "n/a"
      };
      try {
        const webGLContext = this._canvas.getContext("webgl") || this._canvas.getContext("experimental-webgl");
        if (webGLContext) {
          const dbgRenderInfo = webGLContext.getExtension("WEBGL_debug_renderer_info");
          if (dbgRenderInfo != null) {
            info.merge({
              vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
              model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(" OpenGL Engine", ""),
              renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
            });
          }
          info.merge({
            webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
            webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER)
          });
        }
      } catch (e) {
        console.warn("webGL is not supported", e.message);
      }
      return info;
    }
  };

  // packages/software/lib/browser.js
  var Browser = class extends CssFlagsClass {
    /**
     * Creates an instance of Browser.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='browser']
     *
     * @memberOf Browser
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "browser") {
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
      this._reStrVerNum = "(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?";
      this._reStrVer = "(?:version)" + this._reStrVerNum;
      this._reVer = new RegExp(this._reStrVer, "i");
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
      return new RegExp(reStr, "i").test(this._ua);
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
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:amaya)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Arora() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:arora)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Avant() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:avant(?:sbrowser))" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Baidu() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Basilisk() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:basilisk)" + this._reStrVer)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get BlackBerry() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:blackberry|bb.*;.*\\)\\s)" + this._reStrVer)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Blazer() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:blazer)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Bolt() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:bolt)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Brave() {
      return this._checkAssertsResult(Asserts.one([
        !!this._navigator.brave || !!this._navigator.Brave,
        this._reTest("(?:brave)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Camino() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:camino)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chimera() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:chimera)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get ComodoDragon() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:comodo(?:\\_|\\s)dragon)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Conkeror() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:conkeror)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dillo() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:dillo)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dolphin() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:dolfin)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Dorado() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:dorado.+ser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Doris() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:doris)" + this._reStrVerNum)
      ]));
    }
    _getElectronVersion() {
      try {
        return this._process.versions.electron;
      } catch (e) {
        return "n/a";
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
      return this._checkAssertsResult(Asserts.one([
        () => {
          var _a;
          return ((_a = this._process) == null ? void 0 : _a.type) === "renderer";
        },
        // Renderer process
        () => {
          var _a, _b;
          return !!((_b = (_a = this._process) == null ? void 0 : _a.versions) == null ? void 0 : _b.electron);
        },
        // Main process
        () => !!this._navigator && this._reTest("electron")
        // Detect the user agent when the `nodeIntegration` option is set to true
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
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:epiphany)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Falkon() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:falkon)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Fennec() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:fennec)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Firebird() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:firebird)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Flock() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:flock)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get GoBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:gobrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get GoogleBot() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:googlebot)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get iCab() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:icab)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceApe() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:iceape)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:ices?browser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceCat() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:icecat)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IceDragon() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:icedragon)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Iridium() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:iridium)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Iron() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:iron)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Jasmine() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:jasmine)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Konqueror() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:konqueror)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get KMeleon() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:k-meleon)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Links() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:links)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Linx() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:lynx)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Lunascape() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:lunascape)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Maemo() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:maemosbrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MaxthonMobile() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:mxios)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Maxthon() {
      return this._checkAssertsResult(Asserts.all([
        !this.MaxthonMobile,
        this._reTest("(?:maxthon|mxnitro)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Midori() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:midori)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Minimo() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:minimo)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MIUIBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:xiaomi\\/miuibrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Mosaic() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:mosaic)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get MZBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:MZBrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Netfront() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:netfront)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Netscape() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:navigator|netscape)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get NetSurf() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:netsurf)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get NokiaBrowser() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:nokias?browser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OmniWeb() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:omniweb)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OviBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:ovibrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Palemoon() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:palemoon)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Phoenix() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:phoenix)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get PhantomJS() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:phantomjs)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Polaris() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:polaris)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Puffin() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:puffin)" + this._reStrVerNum)
      ]), true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QQBrowserMobile() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:mqq(?:browser)?)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QQBrowser() {
      return this._checkAssertsResult(Asserts.all([
        !this.QQBrowserMobile,
        this._reTest("(?:qq(?:browser)?(?:lite)?)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Quark() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:quark)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get QupZilla() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:qupzilla)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Reconq() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:rekonq)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get RockMelt() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:rockmelt)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Sailfish() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:sailfish(?:s?browser))" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SamsungBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:samsungbrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SeaMonkey() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:seamonkey)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Silk() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:silk)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Skyfire() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:skyfire)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Sleipnir() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:sleipnir)" + this._reStrVerNum)
      ]), true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Slim() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:slim(?:browser)?)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SlimerJS() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:slimerjs)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Swing() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:swing)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get TizenBrowser() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:tizen(?:browser)?)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get UCBrowser() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:uc(?:mini|browser))" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Vivaldi() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:vivaldi)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get w3m() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:w3m)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Waterfox() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:waterfox)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get WebOSBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:w(?:eb)?osbrowser)" + this._reStrVerNum)
      ]), true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get WeChat() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:micromessenger)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Whale() {
      return this._checkAssertsResult(Asserts.all([
        this._reTest("(?:whale)" + this._reStrVerNum)
      ]), true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Yandex() {
      return Asserts.one([
        this._reTest("(?:ya(?:browser|ndex))" + this._reStrVerNum)
      ]);
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
      return this._checkAssertsResult(Asserts.all([
        !this._reTest("like android"),
        this._reTest("(?:android.*)" + this._reStrVer)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get ChromeMobile() {
      return this._checkAssertsResult(Asserts.all([
        !this._reTest("like chrome"),
        this._reTest("((?:android.+)crmo|crios)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chrome() {
      return this._checkAssertsResult(Asserts.all([
        !this.Brave,
        !this.Electron,
        !this.SamsungBrowser,
        !this.ChromeMobile,
        !this.AndroidBrowser,
        !this._reTest("like chrome"),
        this._reTest("(?:(?:headless)?chrome)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Chromium() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:chromium)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get EdgeMobile() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:edg(?:ios|a))" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Edge() {
      return this._checkAssertsResult(Asserts.all([
        !this.IE,
        this._reTest("(?:^(?:(?!mobile|android|ios).)*)(?:edge|edg)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get FirefoxFocus() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:focus)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get FirefoxMobile() {
      return this._checkAssertsResult(Asserts.one([
        this.FirefoxFocus,
        this._reTest("(?:fxios)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Firefox() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:firefox|iceweasel)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IEMobile() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:iemobile)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get IE() {
      return this._checkAssertsResult(Asserts.all([
        !this.IEMobile,
        /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaMini() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:operasmini)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaTouch() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:opt)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaCoast() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:coast)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get OperaMobile() {
      return this._checkAssertsResult(Asserts.one([
        !!this._root.opera,
        !!this._root.opr
      ]) && Asserts.one([
        this.OperaMini,
        this.OperaCoast,
        this.OperaTouch,
        this._reTest("(?:op(?:r|ios))" + this._reStrVerNum) && /(?:mobile|mobi|iphone|ipad|ipod|android|tablet)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Opera() {
      return this._checkAssertsResult(Asserts.one([
        !!this._root.opera,
        !!this._root.opr
      ]) && Asserts.all([
        !this.OperaMobile
      ]) && Asserts.one([
        this._reTest("(?:op(?:era|r)|mms)" + this._reStrVerNum)
      ]), true);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get SafariMobile() {
      return this._checkAssertsResult(Asserts.all([
        /iphone|ipad|ipod/i.test(this._ua),
        !this.AndroidBrowser,
        !this.Chrome,
        !this.PhantomJS
      ]) && Asserts.one([
        /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this._ua),
        /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this._ua),
        /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this._ua),
        /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Safari() {
      return this._checkAssertsResult(Asserts.all([
        /safari|applewebkit/i.test(this._ua),
        !this.AndroidBrowser,
        !this.SafariMobile,
        !this.Chrome,
        !this.PhantomJS
      ]) && Asserts.one([
        /(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this._ua)
      ]));
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
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:duckduckgo)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Facebook() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:fban|fbav)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Instagram() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:instagram)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get TikTok() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:tiktok)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Kiwi() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:kiwi)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get HuaweiBrowser() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:huaweibrowser)" + this._reStrVerNum)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Browser
     */
    get Line() {
      return this._checkAssertsResult(Asserts.one([
        this._reTest("(?:line)" + this._reStrVerNum)
      ]));
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
        version = version || this.version || RegExp.$1 || "n/a";
      } else {
        version = version || RegExp.$1 || this.version || "n/a";
      }
      this.version = version.replace(/_/gi, ".");
    }
  };

  // packages/software/lib/engine.js
  var Engine = class extends CssFlagsClass {
    /**
     * Creates an instance of Engine.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='engine']
     *
     * @memberOf Engine
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "engine") {
      super(ua, flags, cssFlagsPrefix);
      this.version = "n/a";
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
      return this._checkAssertsResult(Asserts.all([
        /(amaya)\/([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Goanna() {
      return this._checkAssertsResult(Asserts.all([
        /(goanna)\/([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get iCab() {
      return this._checkAssertsResult(Asserts.all([
        /(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get KHTML() {
      return this._checkAssertsResult(Asserts.all([
        /(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Links() {
      return this._checkAssertsResult(Asserts.all([
        /(links)[\/\s]\(?([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Linx() {
      return this._checkAssertsResult(Asserts.all([
        /(lynx)\/([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get NetFront() {
      return this._checkAssertsResult(Asserts.all([
        /(netfront)\/([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get NetSurf() {
      return this._checkAssertsResult(Asserts.all([
        /(netsurf)\/([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Presto() {
      return this._checkAssertsResult(Asserts.one([
        /(presto)\/([\w\.]+)/i.test(this._ua),
        /presto\/(\d+(\.?_?\d+)+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Tasman() {
      return this._checkAssertsResult(Asserts.all([
        /(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get w3m() {
      return this._checkAssertsResult(Asserts.all([
        /w3m[\/\s]([\w\.]+)/i.test(this._ua)
      ]));
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
      var _a;
      return this._checkAssertsResult(Asserts.all([
        !!((_a = this._document) == null ? void 0 : _a.documentMode)
      ]) && Asserts.one([
        /trident[\/\s](\d+(\.?_?\d+)+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Blink() {
      return this._checkAssertsResult(Asserts.all([
        () => "Intl" in this._root && "v8BreakIterator" in this._root.Intl,
        "CSS" in this._root,
        /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua)
      ], true));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get EdgeHTML() {
      return this._checkAssertsResult(Asserts.all([
        "StyleMedia" in this._root,
        !this.Trident
      ]) && Asserts.one([
        /edge\/(\d+(\.?_?\d+)+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get Gecko() {
      return this._checkAssertsResult(Asserts.all([
        "InstallTrigger" in this._root,
        !/like gecko/i.test(this._ua)
      ]) && Asserts.one([
        /rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua),
        /gecko\/(\d+(\.?_?\d+)+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */
    get WebKit() {
      return this._checkAssertsResult(Asserts.all([
        "webkitConvertPointFromNodeToPage" in this._root
      ]) && Asserts.one([
        /(?:(?:apple)?webkit)\/(\d+(\.?_?\d+)+)/i.test(this._ua)
      ]));
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
      this.version = version || RegExp.$1 || "n/a";
    }
  };

  // packages/software/lib/os.js
  var OS = class extends CssFlagsClass {
    /**
     * Creates an instance of OS.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='os']
     *
     * @memberOf OS
     */
    constructor(ua = null, flags = {}, cssFlagsPrefix = "os") {
      super(ua, flags, cssFlagsPrefix);
      this.version = "n/a";
      this.versionName = "n/a";
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
        version = version.replace(/_/ig, ".");
        return Object.getOwnPropertyNames(versionNames).filter((versionName) => {
          return !!versionNames[versionName];
        })[0] || "n/a";
      }
      return "n/a";
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
        "CE": /CE/i.test(version),
        "95": /95/i.test(version),
        "98": /98/i.test(version),
        "ME": /ME/i.test(version),
        "2000": /NT(\s)?5\.0/i.test(version),
        "XP": /NT(\s)?5\.1/i.test(version) || /XP/i.test(version),
        "2003": /NT(\s)?5\.2/i.test(version),
        "Vista": /NT(\s)?6\.0/i.test(version),
        "7": /NT(\s)?6\.1/i.test(version),
        "8": /NT(\s)?6\.2/i.test(version),
        "8.1": /NT(\s)?6\.3/i.test(version),
        "10": /NT(\s)?6\.4/i.test(version) || /NT(\s)?10\.0/i.test(version),
        "RT": /ARM/.test(version)
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
      return this._checkAssertsResult(Asserts.all([
        /Win/i.test(this._ua)
      ]) && Asserts.one([
        /Windows ((NT|XP)( \d\d?.\d)?)/i.test(this._ua)
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
        "Tempo": /^8\.0(\.+\d)?$/i.test(version),
        "Bride of Buster": /^8\.1(\.+\d)?$/i.test(version),
        "Allegro": /^8\.5(\.+\d)?$/i.test(version),
        "Veronica": /^8\.6(\.+\d)?$/i.test(version),
        // source https://en.wikipedia.org/wiki/Mac_OS_9
        "Sonata": /^9\.0(\.+[012356789])?$/i.test(version),
        "Minuet": /^9\.0\.4$/i.test(version),
        "Fortissimo": /^9\.1(\.+\d)?$/i.test(version),
        "Moonlight": /^9\.2(\.+[023456789])?$/i.test(version),
        "Limelight": /^9\.2\.1$/i.test(version),
        // source https://en.wikipedia.org/wiki/List_of_Apple_operating_systems
        "Cheetah": /^10\.0(\.+\d)?$/i.test(version),
        "Puma": /^10\.1(\.+\d)?$/i.test(version),
        "Jaguar": /^10\.2(\.+\d)?$/i.test(version),
        "Panther": /^10\.3(\.+\d)?$/i.test(version),
        "Tiger": /^10\.4(\.+\d)?$/i.test(version),
        "Leopard": /^10\.5(\.+\d)?$/i.test(version),
        "Snow Leopard": /^10\.6(\.+\d)?$/i.test(version),
        "Lion": /^10\.7(\.+\d)?$/i.test(version),
        "Mountain Lion": /^10\.8(\.+\d)?$/i.test(version),
        "Mavericks": /^10\.9(\.+\d)?$/i.test(version),
        "Yosemite": /^10\.10(\.+\d)?$/i.test(version),
        "El Capitan": /^10\.11(\.+\d)?$/i.test(version),
        "Sierra": /^10\.12(\.+\d)?$/i.test(version),
        "High Sierra": /^10\.13(\.+\d)?$/i.test(version),
        "Mojave": /^10\.14(\.+\d)?$/i.test(version),
        "Catalina": /^10\.15(\.+\d)?$/i.test(version),
        "Big Sur": /^11(\.+\d)(\.+\d)?$/i.test(version),
        "Monterey": /^12(\.+\d)(\.+\d)?$/i.test(version),
        "Ventura": /^13(\.+\d)(\.+\d)?$/i.test(version),
        "Sonoma": /^14(\.+\d)(\.+\d)?$/i.test(version),
        "Sequoia": /^15(\.+\d)(\.+\d)?$/i.test(version),
        "Tahoe": /^26(\.+\d)(\.+\d)?$/i.test(version)
      }, version);
    }
    //! Client Hints (User-Agent Client Hints) — real OS version when the UA legacy-compat
    //! string hides it (modern macOS always reports "Mac OS X 10_15_7" while the real
    //! version is, e.g., 26.6.2 "Tahoe"). platformVersion is high-entropy: only available
    //! through the async getHighEntropyValues() and can be denied (Permissions-Policy).
    /**
     *
     *
     * @param {any} [hints=null]
     * @returns {string|null}
     *
     * @memberOf OS
     */
    _getClientHintsPlatformVersion(hints = null) {
      const pv = hints && hints.platformVersion != null ? String(hints.platformVersion) : null;
      if (!pv) return null;
      const version = pv.replace(/_/g, ".");
      return /^\d+(\.\d+){0,2}$/.test(version) ? version : null;
    }
    /**
     * Maps a client-hints platform version to the marketing macOS version.
     * Handles both marketing-style values (11..15, 26) and Darwin-style values
     * (20..26, e.g. Chrome on macOS reports 24.4.0 for Sequoia 15).
     *
     * @param {string} clientHintsVersion
     * @returns {string|null}
     *
     * @memberOf OS
     */
    _mapMacOSVersion(clientHintsVersion) {
      const major = parseInt(clientHintsVersion.split(".")[0], 10);
      if (Number.isNaN(major)) return null;
      if (major >= 20) {
        const darwinToMarketing = {
          19: "10.15",
          20: "11",
          21: "12",
          22: "13",
          23: "14",
          24: "15",
          25: "26",
          26: "26"
        }[major];
        if (!darwinToMarketing) return null;
        const rest = clientHintsVersion.split(".").slice(1).join(".");
        return rest ? `${darwinToMarketing}.${rest}` : darwinToMarketing;
      }
      if (major >= 11) {
        return clientHintsVersion;
      }
      return null;
    }
    /**
     * Best-effort Windows version name from client hints
     * (Chromium reports 15.0.0 for Windows 11, 10.0.0/1.0.0 for Windows 10).
     *
     * @param {string} clientHintsVersion
     * @returns {string|null}
     *
     * @memberOf OS
     */
    _getWindowsVersionNameFromHints(clientHintsVersion) {
      if (clientHintsVersion.startsWith("15.")) return "11";
      if (clientHintsVersion.startsWith("10.") || clientHintsVersion.startsWith("1.")) return "10";
      return null;
    }
    /**
     * Safari has no User-Agent Client Hints, and its UA keeps the legacy-compat
     * string ("Mac OS X 10_15_7"). Since Safari 26 (bundled with macOS 26,
     * September 2025) Apple aligned Safari and macOS version numbers 1:1, so the
     * "Version/" token reveals the real macOS version (e.g. Version/26.6.2 →
     * macOS 26.6.2 'Tahoe'). Older Safari majors were back-ported across several
     * macOS releases, so only the post-renumbering era is unambiguous.
     *
     * @param {string} ua
     * @returns {string|null}
     *
     * @memberOf OS
     */
    _getSafariMacOSVersion(ua) {
      if (!/safari/i.test(ua)) return null;
      const m = /Version\/(\d+(\.\d+){0,2})/i.exec(ua);
      if (!m) return null;
      const major = parseInt(m[1], 10);
      if (major < 26) return null;
      return m[1].replace(/_/gi, ".");
    }
    /**
     * Resolves the real OS version through User-Agent Client Hints and refreshes
     * the values (used by Detector.upgrade()). Falls back to the UA-based result
     * when hints are unavailable or denied.
     *
     * @returns {Promise<object>}
     *
     * @memberOf OS
     */
    upgrade() {
      return __async(this, null, function* () {
        const uaData = this._navigator.userAgentData;
        if (!uaData || typeof uaData.getHighEntropyValues !== "function") {
          return this.toValues();
        }
        try {
          const hints = yield uaData.getHighEntropyValues(["platformVersion"]);
          const pv = this._getClientHintsPlatformVersion(hints);
          if (!pv) {
            return this.toValues();
          }
          const values = this.toValues();
          if (this.macOS) {
            const macVersion = this._mapMacOSVersion(pv);
            if (macVersion && macVersion !== values.version) {
              const version = macVersion.replace(/_/gi, ".");
              return __spreadProps(__spreadValues({}, values), {
                version,
                versionName: this._getMacOSVersionName(version)
              });
            }
          }
          if (this.Windows) {
            const windowsName = this._getWindowsVersionNameFromHints(pv);
            if (windowsName && windowsName !== values.versionName) {
              return __spreadProps(__spreadValues({}, values), { versionName: windowsName });
            }
          }
        } catch (e) {
        }
        return this.toValues();
      });
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get macOS() {
      const ch = this._getClientHintsPlatformVersion(this._navigator.userAgentData);
      const chMac = ch ? this._mapMacOSVersion(ch) : this._getSafariMacOSVersion(this._ua);
      return this._checkAssertsResult(Asserts.all([
        !this.iOS,
        !/mobile\//i.test(this._ua),
        /mac/i.test(this._ua),
        !/like mac/i.test(this._ua)
      ]) && Asserts.one([
        /(macintosh|mac(?=_powerpc)\s)/i.test(this._ua),
        /(mac\sos\sx)\s?([\w\s\.]*)/i.test(this._ua)
      ]) && Asserts.one([
        /Mac[ +]OS[ +]X(?:[ /](?:Version )?(\d+(?:[_\.]\d+)+))?/i.test(this._ua),
        /Mac (\d+(?:[_\.]\d+)+)/i.test(this._ua),
        /mac os x (\d+(\.?_?\d+)+)/i.test(this._ua)
      ]), chMac, this._getMacOSVersionName);
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
        "FreeBSD": /\s(freebsd)\s?([\w\.]*)/i.test(version),
        "NetBSD": /\s(netbsd|dragonfly)\s?([\w\.]*)/i.test(version),
        "OpenBSD": /\s(openbsd|dragonfly)\s?([\w\.]*)/i.test(version),
        "PC-BSD": /\s(pc-bsd|dragonfly)\s?([\w\.]*)/i.test(version),
        "DragonFly": /\s(dragonfly)\s?([\w\.]*)/i.test(version)
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
      return this._checkAssertsResult(Asserts.all([
        /X11/i.test(this._ua)
      ]) && Asserts.one([
        /(unix)\s?([\w\.]*)/i.test(this._ua)
      ]), null, this._getUnixDistroName);
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
        "Mint": /(mint)[\/\s\(]?(\w*)/i.test(version),
        "Mageia": /(mageia)[;\s]/i.test(version),
        "VectorLinux": /(vectorlinux)[;\s]/i.test(version),
        "Joli": /(joli)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Ubuntu": /([kxln]?ubuntu)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Debian": /(debian)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "SuSE": /(suse|opensuse)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Gentoo": /(gentoo)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Arch": /((?=\s)arch)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Slackware": /(slackware)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Fedora": /(fedora)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Mandriva": /(mandriva)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "CentOS": /(centos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "PCLinuxOS": /(pclinuxos)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "RedHat": /(redhat)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Zenwalk": /(zenwalk)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version),
        "Linpus": /(linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i.test(version)
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
      return this._checkAssertsResult(Asserts.all([
        !this.Android,
        /Linux/i.test(this._ua)
      ]), null, this._getLinuxDistroName);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get ChromiumOS() {
      return this._checkAssertsResult(Asserts.one([
        /(cros)\s[\w]+\s([\w\.]+\w)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Solaris() {
      return this._checkAssertsResult(Asserts.one([
        /(sunos)\s?([\w\.\d]*)/i.test(this._ua),
        /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Plan9() {
      return this._checkAssertsResult(Asserts.one([
        /(plan\s9)/i.test(this._ua)
      ]));
    }
    get Minix() {
      return this._checkAssertsResult(Asserts.one([
        /(minix)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get BeOS() {
      return this._checkAssertsResult(Asserts.one([
        /(beos)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get OS2() {
      return this._checkAssertsResult(Asserts.one([
        /(os\/2)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get AmigaOS() {
      return this._checkAssertsResult(Asserts.one([
        /(amigaos)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get MorphOS() {
      return this._checkAssertsResult(Asserts.one([
        /(morphos)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get RISCOS() {
      return this._checkAssertsResult(Asserts.one([
        /(risc\sos)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get OpenVMS() {
      return this._checkAssertsResult(Asserts.one([
        /(openvms)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Fuchsia() {
      return this._checkAssertsResult(Asserts.one([
        /(fuchsia)/i.test(this._ua)
      ]));
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
      return this._checkAssertsResult(Asserts.one([
        /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this._ua),
        /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this._ua),
        /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get iOS() {
      return this._checkAssertsResult(Asserts.all([
        !this._root.MSStream,
        /iP(?:ad|hone|od)/.test(this._ua)
      ]) && Asserts.one([
        /os\s((\d+([_\s]\d+)*)|(\d+(?:[_\.]\d+)*)) like mac os x/i.test(this._ua)
      ]));
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
        "1.0": /^1\.[01234]$/i.test(version),
        "Cupcake": /^1\.5(\.+\d)?$/i.test(version),
        "Donut": /^1\.6(\.+\d)?$/i.test(version),
        "Eclair": /^2\.[01](\.+\d)?$/i.test(version),
        "Froyo": /^2\.2(\.+\d)?$/i.test(version),
        "Gingerbread": /^2\.3(\.+\d)?$/i.test(version),
        "Honeycomb": /^3(\.+\d)(\.+\d)?$/i.test(version),
        "Ice Cream Sandwich": /^4\.[01](\.+\d)?$/i.test(version),
        "Jelly Bean": /^4\.[23](\.+\d)?$/i.test(version),
        "KitKat": /^4\.[456789](\.+\d)?$/i.test(version),
        "Lollipop": /^5(\.\d)(\.+\d)?$/i.test(version),
        "Marshmallow": /^6(\.\d)(\.+\d)?$/i.test(version),
        "Nougat": /^7(\.\d)(\.+\d)?$/i.test(version),
        "Oreo": /^8(\.\d)(\.+\d)?$/i.test(version),
        "Pie": /^9(\.\d)(\.+\d)?$/i.test(version)
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
      return this._checkAssertsResult(Asserts.one([
        /android[\s/-](\d+(\.\d+)*)/i.test(this._ua)
      ]), null, this._getAndroidVersionName);
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Bada() {
      return this._checkAssertsResult(Asserts.one([
        /(bada)[\/\s-]?([\w\.]*)/i.test(this._ua),
        /bada\/(\d+(\.\d+)*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Blackberry() {
      return this._checkAssertsResult(Asserts.one([
        /blackberry|\bbb\d+/i.test(this._ua),
        /rim\stablet/i.test(this._ua)
      ]) && Asserts.one([
        /rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this._ua),
        /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this._ua),
        /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua),
        /(blackberry)\w*\/?([\w\.]*)/i.test(this._ua),
        /\bbb(\d+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Contiki() {
      return this._checkAssertsResult(Asserts.one([
        /(contiki)[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get MeeGo() {
      return this._checkAssertsResult(Asserts.one([
        /(meego)[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get RIM() {
      return this._checkAssertsResult(Asserts.one([
        /(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get QNX() {
      return this._checkAssertsResult(Asserts.one([
        /(qnx)[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Palm() {
      return this._checkAssertsResult(Asserts.one([
        /(palm\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Symbian() {
      return this._checkAssertsResult(Asserts.one([
        /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this._ua)
      ]));
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
      return this._checkAssertsResult(Asserts.one([
        /(?:web0s|webos)[\/\s-]?([\w\.]*)/i.test(this._ua),
        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this._ua),
        /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua)
      ]));
    }
    /**
     *
     *
     * @readonly
     *
     * @memberOf OS
     */
    get Tizen() {
      return this._checkAssertsResult(Asserts.one([
        /(tizen)[/\s](\d+(\.\d+)*)/i.test(this._ua)
      ]));
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
      return this._checkAssertsResult(Asserts.one([
        /raspbian[/\s](\d+(\.\d+)*)/i.test(this._ua)
      ]));
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
      this.version = (version || RegExp.$1 || "n/a").replace(/_/gi, ".");
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
  };

  // packages/detector/lib/detector.js
  var Detector = class extends FlagsClass {
    /**
     * Creates an instance of Detector.
     * @param {boolean} [cssFlags=false]
     * @param {string} [cssFlagsPrefix='djs']
     * @param {any} [ua=null]
     *
     * @memberOf Detector
     */
    constructor(ua = null, values = true, cssFlags = false, cssFlagsPrefix = "djs") {
      super(ua);
      this._values = values;
      this._cssFlags = !!cssFlags ? [] : null;
      this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? "--" : "");
      this.checkFeature();
      this.checkEngine();
      this.checkBrowser();
      this.checkOS();
      this.checkCPU();
      this.checkGPU();
      this._refineCpuWithGpu();
      this.checkPlatform();
      this.setCssFlags();
      this.upgrade();
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
      this._os = os;
      if (this._values) {
        this.os = os.toValues();
      } else {
        this.os = os.toFlags();
      }
      if (!!this._cssFlags) {
        this._cssFlags = this._cssFlags.concat(os.toCssFlags());
      }
    }
    /**
     * Resolves the real OS version through User-Agent Client Hints (high-entropy)
     * and refreshes `os` (e.g. modern macOS reports a legacy-compat UA "Mac OS X
     * 10_15_7" while the real version is, say, 26.6.2 "Tahoe").
     * Already kicked off automatically in the constructor; call it again to await.
     *
     * @returns {Promise<object>}
     *
     * @memberOf Detector
     */
    /**
     * Refines the CPU detection from the GPU (WebGL) identity — the only reliable
     * synchronous evidence for Apple Silicon, since UA/platform use the legacy
     * "MacIntel"/"Mac OS X 10_15_7" strings on both Intel and Apple chips.
     *
     * @memberOf Detector
     */
    _refineCpuWithGpu() {
      const { cpu } = this;
      if (!cpu) return;
      const { vendor, model, renderer } = this.gpu || {};
      const gpuText = String([vendor, model, renderer].filter(Boolean).join(" "));
      if (/apple\s+(?:m(?:[1-9]|pro|max|ultra)|gpu)\b/i.test(gpuText)) {
        this.cpu = __spreadProps(__spreadValues({}, cpu), {
          architecture: "arm64",
          vendor: "apple"
        });
      } else if (cpu.architecture === "arm64" && this._isMacOS() && (!cpu.vendor || cpu.vendor === "arm")) {
        this.cpu = __spreadProps(__spreadValues({}, cpu), {
          vendor: "apple"
        });
      } else if (/\bintel\b/i.test(gpuText) && (!cpu.architecture || cpu.architecture === "x86")) {
        this.cpu = __spreadProps(__spreadValues({}, cpu), {
          architecture: "x64",
          vendor: "intel"
        });
      }
    }
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberOf Detector
     */
    _isMacOS() {
      const os = this.os || {};
      return os.name === "macOS" || /mac/i.test(this.ua);
    }
    /**
     * Resolves the real OS and CPU versions through User-Agent Client Hints
     * (high-entropy), then re-runs the GPU-based CPU refinement. Auto-started in
     * the constructor; await it for determinism. Safe no-op when hints are absent
     * (Safari/WebKit, Firefox) or denied (Permissions-Policy).
     *
     * @returns {Promise<object>}
     *
     * @memberOf Detector
     */
    upgrade() {
      const tasks = [];
      if (this._os && typeof this._os.upgrade === "function") {
        tasks.push(this._os.upgrade().then((values) => {
          this.os = values;
        }));
      }
      if (this._cpu && typeof this._cpu.upgrade === "function") {
        tasks.push(this._cpu.upgrade().then((values) => {
          this.cpu = values;
          this._refineCpuWithGpu();
        }));
      }
      this._upgradePromise = Promise.all(tasks).then(() => {
        this._upgraded = true;
        return this.toFlags ? this.toFlags() : this.os;
      });
      return this._upgradePromise;
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
      this._cpu = cpu;
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
        const cssFlagsPrefixed = this._cssFlags.map((cssFlag) => {
          return this._cssFlagsPrefix + cssFlag;
        });
        const htmlElement = document.documentElement || document.querySelector("html");
        cssFlagsPrefixed.forEach((cssFlag) => {
          return htmlElement.className.replace(cssFlag, "");
        });
        htmlElement.className += cssFlagsPrefixed.join(" ").trim();
      }
    }
  };
  if (Feature && Feature.APIS) {
    Detector.PROBES = Feature.APIS;
  }
  if (typeof process !== "undefined" && process.env && true) {
    console.log("DetectorJS Detector Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
  }

  // browser/index.js
  var root2 = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
  root2.Detector = Detector;
  var index_default = Detector;
})();
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//! MDN Web API catalog (auto-generated from the MDN /docs/Web/API index):
//! every interface available on the global root becomes a feature flag.
//! Existing flags (above) are never shadowed.
//! Features
//! Hardware
//! Software
//! MDN Web API catalog (probes + mdn urls) — exposed for tooling/UIs
//# sourceMappingURL=detector.browser.js.map
