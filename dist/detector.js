(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Detector = factory());
}(this, (function () { 'use strict';

  window.Reflect = window.Reflect || {};

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */
  if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(search, start) {
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
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
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
      value: function value() {
        var s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
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
      value: function value(arr, iterator) {
        var result = [];

        for (var i = 0; i < arr.length; i += 1) {
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
      value: function value(valueToFind, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        } // 1. Let O be ? ToObject(this value).


        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If len is 0, return false.

        if (len === 0) {
          return false;
        } // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)


        var n = fromIndex | 0; // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.

        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        } // 7. Repeat, while k < len


        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          } // c. Increase k by 1.


          k++;
        } // 8. Return false


        return false;
      }
    });
  }

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */

  if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(search, start) {
        start = typeof start !== 'number' ? 0 : start;

        if (start + search.length > this.length) {
          return false;
        }

        return this.indexOf(search, start) !== -1;
      }
    });
  }

  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  }

  if (!String.prototype.toCamelCase) {
    Object.defineProperty(String.prototype, 'toCamelCase', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        var s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
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
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(target, firstSource) {
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);

        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];

          if (nextSource === undefined || nextSource === null) {
            // eslint-disable-next-line no-continue
            continue;
          }

          nextSource = Object(nextSource);
          var keysArray = Object.keys(Object(nextSource));

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }

        return to;
      }
    });
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  /* eslint-disable */
  (function (Object, GOPS) {
    // @see https://github.com/es-shims/get-own-property-symbols

    if (GOPS in Object) {
      return;
    }

    var setDescriptor,
        G = (typeof global === "undefined" ? "undefined" : _typeof(global)) === _typeof(G) ? window : global,
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
        addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
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
        createWithSymbols = function createWithSymbols(proto, descriptors) {
      var self = create(proto);
      gOPN(descriptors).forEach(function (key) {
        if (propertyIsEnumerable.call(descriptors, key)) {
          $defineProperty(self, key, descriptors[key]);
        }
      });
      return self;
    },
        copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
      var newDescriptor = create(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    },
        get = function get() {},
        onlyNonSymbols = function onlyNonSymbols(name) {
      // eslint-disable-next-line eqeqeq
      return name != internalSymbol && !hOP.call(source, name);
    },
        onlySymbols = function onlySymbols(name) {
      // eslint-disable-next-line eqeqeq
      return name != internalSymbol && hOP.call(source, name);
    },
        propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = String(key);
      return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
    },
        setAndGetSymbol = function setAndGetSymbol(uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function set(value) {
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
        _Symbol = function _Symbol2(description) {
      if (this instanceof _Symbol2) {
        throw new TypeError('Symbol is not a constructor');
      }

      return setAndGetSymbol(prefix.concat(description || '', random, ++id));
    },
        source = create(null),
        sourceConstructor = {
      value: _Symbol
    },
        sourceMap = function sourceMap(uid) {
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
    descriptor.value = _Symbol;
    defineProperty(G, 'Symbol', descriptor); // defining `Symbol.for(key)`

    descriptor.value = function (key) {
      var uid = prefix.concat(prefix, key, random);
      return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };

    defineProperty(_Symbol, 'for', descriptor); // defining `Symbol.keyFor(symbol)`

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

    defineProperty(_Symbol, 'keyFor', descriptor);

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
        get: function get() {
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
      setDescriptor = function setDescriptor(o, key, descriptor) {
        var protoDescriptor = gOPD(ObjectProto, key);
        delete ObjectProto[key];
        defineProperty(o, key, descriptor);
        defineProperty(ObjectProto, key, protoDescriptor);
      };
    }
  })(Object, 'getOwnPropertySymbols');

  (function (O, _Symbol3) {

    var dP = O.defineProperty,
        ObjectProto = O.prototype,
        toString = ObjectProto.toString,
        toStringTag = 'toStringTag',
        descriptor;
    ['iterator', // A method returning the default iterator for an object. Used by for...of.
    'match', // A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by String.prototype.match().
    'replace', // A method that replaces matched substrings of a string. Used by String.prototype.replace().
    'search', // A method that returns the index within a string that matches the regular expression. Used by String.prototype.search().
    'split', // A method that splits a string at the indices that match a regular expression. Used by String.prototype.split().
    'hasInstance', // A method determining if a constructor object recognizes an object as its instance. Used by instanceof.
    'isConcatSpreadable', // A Boolean value indicating if an object should be flattened to its array elements. Used by Array.prototype.concat().
    'unscopables', // An Array of string values that are property values. These are excluded from the with environment bindings of the associated objects.
    'species', // A constructor function that is used to create derived objects.
    'toPrimitive', // A method converting an object to a primitive value.
    toStringTag // A string value used for the default description of an object. Used by Object.prototype.toString().
    ].forEach(function (name) {
      if (!(name in _Symbol3)) {
        dP(_Symbol3, name, {
          value: _Symbol3(name)
        });

        if (name === toStringTag) {
          descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');

          descriptor.value = function () {
            var str = toString.call(this);
            var tst = this == null ? this : this[_Symbol3.toStringTag];
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
      value: function value(object) {
        var keys = !!Reflect && !!Reflect.ownKeys ? Reflect.ownKeys(object) : Object.getOwnPropertyNames(object).concat(Object.getOwnPropertySymbols(object));
        return keys.reduce(function (descriptors, key) {
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
      value: function value() {
        for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
          objs[_key] = arguments[_key];
        }

        var mergeObj = [this].concat(objs).reduce(function (acc, obj) {
          return Object.keys(obj).reduce(function (a, k) {
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
          }, {});
        }, {});
        return Object.assign(this, mergeObj);
      }
    });
  }

  /**
   *
   *
   * @export
   * @class FlagsClass
   */
  var FlagsClass = /*#__PURE__*/function () {
    /**
     * Creates an instance of FlagsClass.
     * @param {any} [ua=null]
     *
     * @memberOf FlagsClass
     */
    function FlagsClass() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, FlagsClass);

      this._booleanFlagsValuePropertyName = 'name';
      this._root = window || global || {};
      this._process = this._root.process || {};
      this._navigator = this._root.navigator || {};
      this._document = this._root.document || null;
      this._ua = ua || this._navigator.userAgent || 'n/a';
    }
    /**
     *
     *
     * @returns {object}
     *
     * @memberOf FlagsClass
     */


    _createClass(FlagsClass, [{
      key: "toValues",
      value: function toValues() {
        var _this = this;

        var proto = Object.getPrototypeOf(this);
        var protoName = (this._booleanFlagsValuePropertyName || this.constructor.name).toLowerCase();
        var protoProperties = Object.getOwnPropertyNames(proto).filter(function (prop) {
          return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        }).concat(Object.getOwnPropertyNames(this).filter(function (prop) {
          return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(_this, prop).get;
        }));
        var protoPropertiesReduced = protoProperties.reduce(function (acc, prop) {
          if (!!_this[prop]) {
            if (typeof _this[prop] === 'boolean') {
              acc[protoName] = prop;
            } else {
              acc[prop] = _this[prop];
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

    }, {
      key: "toFlags",
      value: function toFlags() {
        var _this2 = this;

        var proto = Object.getPrototypeOf(this);
        return Object.getOwnPropertyNames(proto).filter(function (prop) {
          return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        }).reduce(function (acc, prop) {
          acc[prop] = _this2[prop];
          return acc;
        }, {}).merge(Object.getOwnPropertyNames(this).filter(function (prop) {
          return !prop.startsWith('_') && !Object.getOwnPropertyDescriptor(_this2, prop).get;
        }).reduce(function (acc, prop) {
          acc[prop] = _this2[prop];
          return acc;
        }, {}));
      }
    }]);

    return FlagsClass;
  }();

  /**
   *
   *
   * @export
   * @class CssFlagsClass
   * @extends {FlagsClass}
   */

  var CssFlagsClass = /*#__PURE__*/function (_FlagsClass) {
    _inherits(CssFlagsClass, _FlagsClass);

    var _super = _createSuper(CssFlagsClass);

    /**
     * Creates an instance of CssFlagsClass.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='flags']
     *
     * @memberOf CssFlagsClass
     */
    function CssFlagsClass() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flags';

      _classCallCheck(this, CssFlagsClass);

      _this = _super.call(this, ua);
      _this._flags = flags;
      _this._cssFlagsPrefix = cssFlagsPrefix;
      return _this;
    }
    /**
     *
     *
     * @returns object
     *
     * @memberOf CssFlagsClass
     */


    _createClass(CssFlagsClass, [{
      key: "toCssFlags",
      value: function toCssFlags() {
        var _this2 = this;

        var proto = Object.getPrototypeOf(this);
        return Object.getOwnPropertyNames(proto).filter(function (prop) {
          return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        }).reduce(function (acc, prop) {
          if (!!_this2[prop]) {
            acc.push((_this2._cssFlagsPrefix + '--' + prop + (typeof _this2[prop] !== 'boolean' ? '--' + _this2[prop] : '')).toLowerCase());
          }

          return acc;
        }, []);
      }
    }]);

    return CssFlagsClass;
  }(FlagsClass);

  /**
   *
   *
   * @export
   * @class Asserts
   */
  var Asserts = /*#__PURE__*/function () {
    function Asserts() {
      _classCallCheck(this, Asserts);
    }

    _createClass(Asserts, null, [{
      key: "_checkAssert",
      value: function _checkAssert(assert) {
        var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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

    }, {
      key: "all",
      value: function all() {
        var asserts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return asserts.every(function (assert) {
          return Asserts._checkAssert(assert, safe);
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

    }, {
      key: "one",
      value: function one() {
        var asserts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return asserts.some(function (assert) {
          return Asserts._checkAssert(assert, safe);
        });
      }
    }]);

    return Asserts;
  }();

  /**
   *
   *
   * @export
   * @class Feature
   * @extends {CssFlagsClass}
   */

  var Feature = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(Feature, _CssFlagsClass);

    var _super = _createSuper(Feature);

    /**
     * Creates an instance of Feature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='feature']
     *
     * @memberOf Feature
     */
    function Feature() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'feature';

      _classCallCheck(this, Feature);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);

      _this._createTestElements();

      _this.addEventListener = _this.getAddEventListener();
      _this.asyncScript = _this.getAsyncScript();
      _this.battery = _this.getBattery();
      _this.cors = _this.getCors();
      _this.deferScript = _this.getDeferScript();
      _this.file = _this.getFile();
      _this.fileSystem = _this.getFileSystem();
      _this.fullscreen = _this.getFullscreen();
      _this.fullscreenKeyboard = _this.getFullscreenKeyboard();
      _this.geolocation = _this.getGeolocation();
      _this.historyAPI = _this.getHistoryAPI();
      _this.littleEndian = _this.getLittleEndian();
      _this.localStorage = _this.getLocalStorage();
      _this.matchMedia = _this.getMatchMedia();
      _this.querySelector = _this.getQuerySelector();
      _this.querySelectorAll = _this.getQuerySelectorAll();
      _this.serviceWorker = _this.getServiceWorker();
      _this.typedArray = _this.getTypedArray();
      _this.userMedia = _this.getUserMedia();
      _this.vibration = _this.getVibration();
      _this.worker = _this.getWorker();
      return _this;
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


    _createClass(Feature, [{
      key: "_getCssPrefixedProp",
      value: function _getCssPrefixedProp(prop) {
        var _this2 = this;

        var prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._cssPrefixes;
        prop = prop.toCamelCase();
        var prefixedProps = prefixes.map(function (item) {
          return (item === 'spec' ? '' : '-' + item + '-') + prop;
        }); // if ('CSS' in this._root && 'supports' in this._root.CSS) {
        //   return this._root.CSS.supports(prefixedProps.map(item => '(' + item + ': inherit)').join(' or '));
        // }

        var prefixedPropsFound = prefixedProps.filter(function (item) {
          return item in _this2._div.style;
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

    }, {
      key: "_checkCssPrefixedProp",
      value: function _checkCssPrefixedProp(prop) {
        var prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._cssPrefixes;
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

    }, {
      key: "_getCssPrefixedPropValue",
      value: function _getCssPrefixedPropValue(prop, value) {
        var prefixedProp = this._getCssPrefixedProp(prop);

        if (prefixedProp) {
          this._document.body.insertBefore(this._div, null);

          this._div.style[prefixedProp] = value;

          var computedStylePropValue = this._root.getComputedStyle(this._div).getPropertyValue(prefixedProp);

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

    }, {
      key: "_checkCssPrefixedPropValue",
      value: function _checkCssPrefixedPropValue(prop, value) {
        var prefixedPropValue = this._getCssPrefixedPropValue(prop, value);

        return !!prefixedPropValue && prefixedPropValue !== 'none';
      }
      /**
       *
       *
       * @memberof Feature
       */

    }, {
      key: "_createTestElements",
      value: function _createTestElements() {
        this._cssPrefixes = ['spec', 'webkit', 'moz', 'ms', 'o'];
        this._script = this._document.createElement('script');
        this._canvas = this._document.createElement('canvas');
        this._div = this._document.createElement('div');
        this._input = this._document.createElement('input');
        this._img = this._document.createElement('img');
        this._xmlHttpRequest = new this._root.XMLHttpRequest();
      } // /**
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

    }, {
      key: "getAddEventListener",
      value: function getAddEventListener() {
        return 'addEventListener' in this._root;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getAsyncScript",
      value: function getAsyncScript() {
        return 'async' in this._script;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getBattery",
      value: function getBattery() {
        return 'battery' in this._navigator;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getCors",
      value: function getCors() {
        return 'XMLHttpRequest' in this._root && 'withCredentials' in this._xmlHttpRequest;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getDeferScript",
      value: function getDeferScript() {
        return 'defer' in this._script;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getFile",
      value: function getFile() {
        return Asserts.all(['File' in this._root, 'FileReader' in this._root, 'FileList' in this._root, 'Blob' in this._root]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getFileSystem",
      value: function getFileSystem() {
        return 'requestFileSystem' in this._root;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getFullscreen",
      value: function getFullscreen() {
        return Asserts.one(['requestFullscreen' in this._canvas, 'webkitRequestFullscreen' in this._canvas, 'msRequestFullscreen' in this._canvas, 'mozRequestFullScreen' in this._canvas]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getFullscreenKeyboard",
      value: function getFullscreenKeyboard() {
        var _this3 = this;

        return Asserts.all([function () {
          return 'Element' in _this3._root && 'ALLOW_KEYBOARD_INPUT' in _this3._root.Element;
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getGeolocation",
      value: function getGeolocation() {
        return 'geolocation' in this._navigator;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getHistoryAPI",
      value: function getHistoryAPI() {
        var _this4 = this;

        return Asserts.all([function () {
          return 'history' in _this4._root && 'pushState' in _this4._root.history;
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getLittleEndian",
      value: function getLittleEndian() {
        var _this5 = this;

        return Asserts.all([this.getTypedArray, function () {
          return new _this5._root.Int8Array(new _this5._root.Int16Array([1]).buffer)[0] > 0;
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getLocalStorage",
      value: function getLocalStorage() {
        var _this6 = this;

        return Asserts.one([function () {
          return 'localStorage' in _this6._root;
        }], true) && Asserts.one([function () {
          var test = 'x';

          _this6._root.localStorage.setItem(test, test);

          _this6._root.localStorage.removeItem(test);

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

    }, {
      key: "getMatchMedia",
      value: function getMatchMedia() {
        return 'matchMedia' in this._root;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getQuerySelector",
      value: function getQuerySelector() {
        return 'querySelector' in this._document;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getQuerySelectorAll",
      value: function getQuerySelectorAll() {
        return 'querySelectorAll' in this._document;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getServiceWorker",
      value: function getServiceWorker() {
        return 'serviceWorker' in this._navigator;
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getTypedArray",
      value: function getTypedArray() {
        var _this7 = this;

        return Asserts.all([function () {
          return 'Int8Array' in _this7._root && typeof _this7._root.Int8Array !== 'undefined';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getUserMedia",
      value: function getUserMedia() {
        return Asserts.one(['getUserMedia' in this._navigator, 'webkitGetUserMedia' in this._navigator, 'mozGetUserMedia' in this._navigator, 'msGetUserMedia' in this._navigator]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getVibration",
      value: function getVibration() {
        return Asserts.one(['vibrate' in this._navigator, 'webkitVibrate' in this._navigator, 'mozVibrate' in this._navigator, 'msVibrate' in this._navigator]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf Feature
       */

    }, {
      key: "getWorker",
      value: function getWorker() {
        return 'Worker' in this._root;
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "pointerEnabled",
      get: function get() {
        return Asserts.one(['pointerEnabled' in this._navigator, 'msPointerEnabled' in this._navigator]);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "pixelRatio",
      get: function get() {
        return this._root.devicePixelRatio || 1;
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "pointerLock",
      get: function get() {
        return Asserts.one(['pointerLockElement' in this._document, 'webkitPointerLockElement' in this._document, 'mozPointerLockElement' in this._document]);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "quirksMode",
      get: function get() {
        return this._document.compatMode !== 'CSS1Compat';
      }
      /**
       * Test if CSS 3D transforms are supported
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "css3D",
      get: function get() {
        return Asserts.all([this._checkCssPrefixedPropValue.bind(this, 'transform', 'translate3d(1px,1px,1px)'), this._checkCssPrefixedProp.bind(this, 'perspective')], true);
      } // Test if CSS transforms are supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "cssTransform",
      get: function get() {
        return Asserts.one([this._checkCssPrefixedProp.bind(this, 'transform-origin')], true);
      } // Test if CSS transitions are supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "cssTransition",
      get: function get() {
        return Asserts.one([this._checkCssPrefixedProp.bind(this, 'transition')], true);
      } // Test if Device Motion is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "deviceMotion",
      get: function get() {
        return 'DeviceMotionEvent' in this._root;
      } // Test if Device Orientation is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "deviceOrientation",
      get: function get() {
        return 'DeviceOrientationEvent' in this._root;
      } // Test if Context Menu is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "contextMenu",
      get: function get() {
        return Asserts.all(['contextMenu' in this._document, 'HTMLMenuItemElement' in this._root]);
      } // Test if classList API is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "classList",
      get: function get() {
        return 'classList' in this._document;
      } // Test if placeholder attribute is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "placeholder",
      get: function get() {
        return 'placeholder' in this._input;
      } // Test if viewport units are supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "viewportUnit",
      get: function get() {
        var _this8 = this;

        return Asserts.all([function () {
          return _this8._img.style.width = _this8._img.style.width !== '';
        }], true);
      } // Test if REM units are supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "remUnit",
      get: function get() {
        var _this9 = this;

        return Asserts.all([function () {
          return _this9._img.style.width = _this9._img.style.width !== '';
        }], true);
      } // Test if Canvas is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "canvas",
      get: function get() {
        var _this10 = this;

        return Asserts.all([function () {
          return 'getContext' in _this10._canvas && !!_this10._canvas.getContext('2d');
        }], true);
      } // Test if SVG is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "svg",
      get: function get() {
        var _this11 = this;

        return Asserts.all([function () {
          return 'createElementNS' in _this11._document && 'createSVGRect' in _this11._document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        }], true);
      } // Test if WebP is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "webp",
      get: function get() {
        return Asserts.all([function () {
          var elem = document.createElement('canvas');

          if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
          }

          return false;
        }], true);
      } // Test if WebGL is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "webGL",
      get: function get() {
        var _this12 = this;

        return Asserts.one([function () {
          return _this12.canvas && 'WebGLRenderingContext' in _this12._root && (_this12._canvas.getContext('webgl') || _this12._canvas.getContext('experimental-webgl'));
        }, function () {
          return _this12.canvas && 'WebGL2RenderingContext' in _this12._root && _this12._canvas.getContext('webgl2');
        }], true);
      } // Test if WebVR is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "webVR",
      get: function get() {
        return Asserts.all(['getVRDisplays' in this._navigator]);
      } // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "touch",
      get: function get() {
        var _this13 = this;

        return Asserts.one([function () {
          return 'ontouchstart' in _this13._root;
        }, function () {
          return 'ontouchstart' in _this13._document.documentElement;
        }], true) && Asserts.one([function () {
          return 'DocumentTouch' in _this13._root && _this13._document instanceof _this13._root.DocumentTouch;
        }, function () {
          return _this13.pointerEnabled && 'MSGesture' in _this13._root;
        }, function () {
          return 'maxTouchPoints' in _this13._navigator && _this13._navigator.maxTouchPoints > 1;
        }], true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "forceTouch",
      get: function get() {
        var _this14 = this;

        return Asserts.all([function () {
          return 'MouseEvent' in _this14._root && 'WEBKIT_FORCE_AT_MOUSE_DOWN' in _this14._root.MouseEvent && 'WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN' in _this14._root.MouseEvent;
        }], true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "pointerEvents",
      get: function get() {
        return Asserts.all([this._root.PointerEvent], true);
      } // Test if img srcset attribute is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "srcset",
      get: function get() {
        return 'srcset' in this._img;
      } // Test if img sizes attribute is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "sizes",
      get: function get() {
        return 'sizes' in this._img;
      } // Test if Picture element is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "pictureElement",
      get: function get() {
        return 'HTMLPictureElement' in this._root;
      } // Test if Picture element is supported

      /**
       *
       *
       * @readonly
       *
       * @memberOf Feature
       */

    }, {
      key: "dialogElement",
      get: function get() {
        return 'HTMLDialogElement' in this._root;
      }
    }]);

    return Feature;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class VideoFeature
   * @extends {CssFlagsClass}
   */

  var VideoFeature = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(VideoFeature, _CssFlagsClass);

    var _super = _createSuper(VideoFeature);

    /**
     * Creates an instance of VideoFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='video']
     *
     * @memberOf VideoFeature
     */
    function VideoFeature() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'video';

      _classCallCheck(this, VideoFeature);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);

      _this._createTestElements();

      _this.formats = {
        mp4: _this.getMp4(),
        ogv: _this.getOgv(),
        webm: _this.getWebm()
      };
      return _this;
    }
    /**
     *
     *
     * @memberof VideoFeature
     */


    _createClass(VideoFeature, [{
      key: "_createTestElements",
      value: function _createTestElements() {
        this._videoElement = this._document.createElement('video');
      } // /**
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

    }, {
      key: "supported",
      get: function get() {
        var _this2 = this;

        return Asserts.all(['HTMLVideoElement' in this._root, 'HTMLMediaElement' in this._root, function () {
          return !!_this2._videoElement && 'canPlayType' in _this2._videoElement && _this2._videoElement instanceof _this2._root.HTMLVideoElement && _this2._videoElement instanceof _this2._root.HTMLMediaElement;
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf VideoFeature
       */

    }, {
      key: "getMp4",
      value: function getMp4() {
        var _this3 = this;

        return Asserts.all([function () {
          return _this3.supported && _this3._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf VideoFeature
       */

    }, {
      key: "getOgv",
      value: function getOgv() {
        var _this4 = this;

        return Asserts.all([function () {
          return _this4.supported && _this4._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf VideoFeature
       */

    }, {
      key: "getWebm",
      value: function getWebm() {
        var _this5 = this;

        return Asserts.all([function () {
          return _this5.supported && _this5._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '';
        }], true);
      }
    }]);

    return VideoFeature;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class AudioFeature
   * @extends {CssFlagsClass}
   */

  var AudioFeature = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(AudioFeature, _CssFlagsClass);

    var _super = _createSuper(AudioFeature);

    /**
     * Creates an instance of AudioFeature.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='audio']
     *
     * @memberOf AudioFeature
     */
    function AudioFeature() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'audio';

      _classCallCheck(this, AudioFeature);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);

      _this._createTestElements();

      _this.context = _this.getContext();
      _this.formats = {
        mp3: _this.getMp3(),
        webm: _this.getWebm(),
        ogg: _this.getOgg(),
        opus: _this.getOpus(),
        wav: _this.getWav(),
        m4a: _this.getM4a()
      };
      return _this;
    }
    /**
     *
     *
     * @memberof AudioFeature
     */


    _createClass(AudioFeature, [{
      key: "_createTestElements",
      value: function _createTestElements() {
        this._audioElement = this._document.createElement('audio');
      } // /**
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

    }, {
      key: "supported",
      get: function get() {
        var _this2 = this;

        return Asserts.all(['Audio' in this._root, 'HTMLAudioElement' in this._root, 'HTMLMediaElement' in this._root, function () {
          return !!_this2._audioElement && 'canPlayType' in _this2._audioElement && _this2._audioElement instanceof _this2._root.HTMLAudioElement && _this2._audioElement instanceof _this2._root.HTMLMediaElement;
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getContext",
      value: function getContext() {
        return Asserts.one(['AudioContext' in this._root, 'webkitAudioContext' in this._root]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getMp3",
      value: function getMp3() {
        var _this3 = this;

        return Asserts.all([function () {
          return _this3.supported && _this3._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getWebm",
      value: function getWebm() {
        var _this4 = this;

        return Asserts.all([function () {
          return _this4.supported && _this4._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getOgg",
      value: function getOgg() {
        var _this5 = this;

        return Asserts.all([function () {
          return _this5.supported && _this5._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getOpus",
      value: function getOpus() {
        var _this6 = this;

        return Asserts.all([function () {
          return _this6.supported && _this6._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getWav",
      value: function getWav() {
        var _this7 = this;

        return Asserts.all([function () {
          return _this7.supported && _this7._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== '';
        }], true);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf AudioFeature
       */

    }, {
      key: "getM4a",
      value: function getM4a() {
        var _this8 = this;

        return Asserts.all([function () {
          return _this8.supported && (_this8._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || _this8._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== '';
        }], true);
      }
    }]);

    return AudioFeature;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class OS
   * @extends {CssFlagsClass}
   */

  var OS = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(OS, _CssFlagsClass);

    var _super = _createSuper(OS);

    /**
     * Creates an instance of OS.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='os']
     *
     * @memberOf OS
     */
    function OS() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'os';

      _classCallCheck(this, OS);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);
      _this.version = 'n/a';
      _this.versionName = 'n/a';
      return _this;
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


    _createClass(OS, [{
      key: "_getVersionNames",
      value: function _getVersionNames() {
        var versionNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!!version) {
          version = version.replace(/_/ig, '.');
          return Object.getOwnPropertyNames(versionNames).filter(function (versionName) {
            return !!versionNames[versionName];
          })[0] || 'n/a';
        }

        return 'n/a';
      } //! Desktop OSs

      /**
       *
       *
       * @param {any} [version=RegExp.$1 || null]
       * @returns string
       *
       * @memberOf OS
       */

    }, {
      key: "_getWindowsVersionName",
      value: function _getWindowsVersionName() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RegExp.$1 || null;
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

    }, {
      key: "Windows",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/Win/i.test(this._ua)]) && Asserts.one([/Windows ((NT|XP)( \d\d?.\d)?)/i.test(this._ua) //       /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
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

    }, {
      key: "_getMacOSVersionName",
      value: function _getMacOSVersionName() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RegExp.$1 || null;
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
          'Mojave': /^10\.14(\.+\d)?$/i.test(version)
        }, version);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "macOS",
      get: function get() {
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

    }, {
      key: "_getUnixDistroName",
      value: function _getUnixDistroName() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RegExp.$1 || null;
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

    }, {
      key: "Unix",
      get: function get() {
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

    }, {
      key: "_getLinuxDistroName",
      value: function _getLinuxDistroName() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RegExp.$1 || null;
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

    }, {
      key: "Linux",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this.Android, /Linux/i.test(this._ua)]), null, this._getLinuxDistroName);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "ChromiumOS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(cros)\s[\w]+\s([\w\.]+\w)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Solaris",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(sunos)\s?([\w\.\d]*)/i.test(this._ua), /((?:open)?solaris)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Plan9",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(plan\s9)/i.test(this._ua)]));
      }
    }, {
      key: "Minix",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(minix)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "BeOS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(beos)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "OS2",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(os\/2)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "AmigaOS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(amigaos)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "MorphOS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(morphos)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "RISCOS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(risc\sos)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "OpenVMS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(openvms)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Fuchsia",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(fuchsia)/i.test(this._ua)]));
      } //! Mobile OSs

      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "WindowsPhone",
      get: function get() {
        // a.k.a. Windows Mobile
        return this._checkAssertsResult(Asserts.one([/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i.test(this._ua), /(windows\smobile)[\s\/]?([ntce\d\.\s]+\w)/i.test(this._ua), /windows phone (?:os)?\s?(\d+(\.\d+)*)/i.test(this._ua)])); // // Detect Windows Phone 7 desktop mode.
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

    }, {
      key: "iOS",
      get: function get() {
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

    }, {
      key: "_getAndroidVersionName",
      value: function _getAndroidVersionName() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RegExp.$1 || null;
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

    }, {
      key: "Android",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/android[\s/-](\d+(\.\d+)*)/i.test(this._ua)]), null, this._getAndroidVersionName);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Bada",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(bada)[\/\s-]?([\w\.]*)/i.test(this._ua), /bada\/(\d+(\.\d+)*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Blackberry",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/blackberry|\bbb\d+/i.test(this._ua), /rim\stablet/i.test(this._ua)]) && Asserts.one([/rim\stablet\sos\s(\d+(\.\d+)*)/i.test(this._ua), /blackberry\d+\/(\d+([_\s]\d+)*)/i.test(this._ua), /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i.test(this._ua), /(blackberry)\w*\/?([\w\.]*)/i.test(this._ua), /\bbb(\d+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Contiki",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(contiki)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "MeeGo",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(meego)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "RIM",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(rim\stablet\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "QNX",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(qnx)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Palm",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(palm\sos)[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Symbian",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i.test(this._ua)]));
      } //! TV OSs

      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "WebOS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(webos)[\/\s-]?([\w\.]*)/i.test(this._ua), /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i.test(this._ua), /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Tizen",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(tizen)[/\s](\d+(\.\d+)*)/i.test(this._ua)]));
      } //! Other OSs

      /**
       *
       *
       * @readonly
       *
       * @memberOf OS
       */

    }, {
      key: "Raspbian",
      get: function get() {
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

    }, {
      key: "_checkAssertsResult",
      value: function _checkAssertsResult() {
        var assertsResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var versionNameFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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

    }, {
      key: "setVersion",
      value: function setVersion() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.version = (version || RegExp.$1 || 'n/a').replace(/_/ig, '.');
      }
      /**
       *
       *
       * @param {any} [versionNameFn=null]
       *
       * @memberOf OS
       */

    }, {
      key: "setVersionName",
      value: function setVersionName() {
        var versionNameFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (versionNameFn instanceof Function) {
          this.versionName = versionNameFn.call(this, this.version);
        }
      }
    }]);

    return OS;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class Browser
   * @extends {CssFlagsClass}
   */

  var Browser = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(Browser, _CssFlagsClass);

    var _super = _createSuper(Browser);

    /**
     * Creates an instance of Browser.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='browser']
     *
     * @memberOf Browser
     */
    function Browser() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'browser';

      _classCallCheck(this, Browser);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);

      _this._createTestElements();

      _this.setVersion();

      return _this;
    }
    /**
     *
     *
     *
     * @memberOf Browser
     */


    _createClass(Browser, [{
      key: "_createTestElements",
      value: function _createTestElements() {
        this._reStrVerNum = '(?:\\:|\\s|\\/)?(?:(\\w+(?:(?:\\.|\\_)\\w+)+)|\\d+)?';
        this._reStrVer = '(?:version)' + this._reStrVerNum;
        this._reVer = new RegExp(this._reStrVer, 'i');

        this._ua.match(this._reVer);
      } // /**
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

    }, {
      key: "_reTest",
      value: function _reTest() {
        var reStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._reStrVer;
        return new RegExp(reStr, 'i').test(this._ua);
      } //#region Un-Common/Rare/Mythic Browsers

      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Amaya",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:amaya)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Arora",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:arora)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Avant",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:avant(?:\sbrowser))' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Baidu",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:(?:b(?:(?:a)?idu)?(?:d)?)(?:browser)(?:\\_i18n)?)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Basilisk",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:basilisk)' + this._reStrVer)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "BlackBerry",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:blackberry|bb.*;.*\\)\\s)' + this._reStrVer)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Blazer",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:blazer)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Bolt",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:bolt)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Brave",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([!!window.navigator.brave || !!window.navigator.Brave, this._reTest('(?:brave)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Camino",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:camino)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Chimera",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:chimera)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "ComodoDragon",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:comodo(?:\\_|\\s)dragon)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Conkeror",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:conkeror)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Dillo",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:dillo)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Dolphin",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:dolfin)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Dorado",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:dorado.+ser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Doris",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:doris)' + this._reStrVerNum)]));
      }
    }, {
      key: "_getElectronVersion",
      value: function _getElectronVersion() {
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

    }, {
      key: "Electron",
      get: function get() {
        var _this2 = this;

        return this._checkAssertsResult(Asserts.one([function () {
          return _this2._process.type === 'renderer';
        }, // Renderer process
        function () {
          return !!_this2._process.versions.electron;
        }, // Main process
        function () {
          return !!_this2._navigator && _this2._reTest('electron');
        } // Detect the user agent when the `nodeIntegration` option is set to true
        ], true), false, this._getElectronVersion());
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Epiphany",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:epiphany)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Falkon",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:falkon)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Fennec",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:fennec)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Firebird",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:firebird)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Flock",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:flock)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "GoBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:gobrowser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "GoogleBot",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:googlebot)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "iCab",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:icab)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "IceApe",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:iceape)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "IceBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:ice\s?browser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "IceCat",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:icecat)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "IceDragon",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:icedragon)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Iridium",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:iridium)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Iron",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:iron)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Jasmine",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:jasmine)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Konqueror",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:konqueror)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "KMeleon",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:k-meleon)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Links",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:links)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Linx",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:lynx)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Lunascape",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:lunascape)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Maemo",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:maemo\sbrowser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "MaxthonMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:mxios)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Maxthon",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this.MaxthonMobile, this._reTest('(?:maxthon|mxnitro)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Midori",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:midori)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Minimo",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:minimo)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "MIUIBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:xiaomi\\/miuibrowser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Mosaic",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:mosaic)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "MZBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:MZBrowser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Netfront",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:netfront)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Netscape",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:navigator|netscape)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "NetSurf",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:netsurf)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "NokiaBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:nokia\s?browser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "OmniWeb",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:omniweb)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "OviBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:ovibrowser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Palemoon",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:palemoon)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Phoenix",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:phoenix)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "PhantomJS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:phantomjs)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Polaris",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:polaris)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Puffin",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:puffin)' + this._reStrVerNum)]), true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "QQBrowserMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:mqq(?:browser)?)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "QQBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this.QQBrowserMobile, this._reTest('(?:qq(?:browser)?(?:lite)?)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Quark",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:quark)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "QupZilla",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:qupzilla)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Reconq",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:rekonq)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "RockMelt",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:rockmelt)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Sailfish",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:sailfish(?:\s?browser))' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "SamsungBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:samsungbrowser)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "SeaMonkey",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:seamonkey)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Silk",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:silk)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Skyfire",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:skyfire)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Sleipnir",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:sleipnir)' + this._reStrVerNum)]), true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Slim",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:slim(?:browser)?)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "SlimerJS",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:slimerjs)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Swing",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:swing)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "TizenBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:tizen(?:browser)?)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "UCBrowser",
      get: function get() {
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

    }, {
      key: "Vivaldi",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:vivaldi)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "w3m",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:w3m)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Waterfox",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:waterfox)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "WebOSBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:w(?:eb)?osbrowser)' + this._reStrVerNum)]), true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "WeChat",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:micromessenger)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Whale",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([this._reTest('(?:whale)' + this._reStrVerNum)]), true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Yandex",
      get: function get() {
        return Asserts.one([this._reTest('(?:ya(?:browser|ndex))' + this._reStrVerNum)]);
      } //#endregion
      //#region Common Browsers

      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "AndroidBrowser",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this._reTest('like android'), this._reTest('(?:android.*)' + this._reStrVer)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "ChromeMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this._reTest('like chrome'), this._reTest('((?:android.+)crmo|crios)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Chrome",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this.Brave, !this.ChromeMobile, !this.AndroidBrowser, !this._reTest('like chrome'), this._reTest('(?:(?:headless)?chrome)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Chromium",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:chromium)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "EdgeMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:edg(?:ios|a))' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Edge",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this.IE, this._reTest('(?:^(?:(?!mobile|android|ios).)*)(?:edge)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "FirefoxFocus",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:focus)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "FirefoxMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this.FirefoxFocus, this._reTest('(?:fxios)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Firefox",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:firefox|iceweasel)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "IEMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:iemobile)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "IE",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([!this.IEMobile, /(?:msie|ie|trident).*(?:;\srv:(?:(\w+(?:(?:\.|\_)\w+)+)|\d+))/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "OperaMini",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:opera\smini)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "OperaTouch",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:opt)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "OperaCoast",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([this._reTest('(?:coast)' + this._reStrVerNum)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "OperaMobile",
      get: function get() {
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

    }, {
      key: "Opera",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([!!this._root.opera, !!this._root.opr]) && Asserts.all([!this.OperaMobile]) && Asserts.one([this._reTest('(?:op(?:era|r)|mms)' + this._reStrVerNum)]), true);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "SafariMobile",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/iphone|ipad|ipod/i.test(this._ua), !this.AndroidBrowser, !this.Chrome, !this.PhantomJS]) && Asserts.one([/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(this._ua), /(?:Version\/(\d+[\.\d]+).*)?Mobile.*Safari\//i.test(this._ua), /(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)\/(\d+[\.\d]+)/i.test(this._ua), /(?:applewebkit\/\d+.*)(?:.*mobile\/(?:\d+)?)(?:.*safari\/(?:\d+)?)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Browser
       */

    }, {
      key: "Safari",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/safari|applewebkit/i.test(this._ua), !this.AndroidBrowser, !this.SafariMobile, !this.Chrome, !this.PhantomJS]) && Asserts.one([/(?:applewebkit\/\d+.*)(?:version)(?:\s|\/)?(\w+(?:(?:[._])\w+)+|\d+)?(?:.*safari\/(?:\d+)?)?/i.test(this._ua)]));
      } //#endregion

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

    }, {
      key: "_checkAssertsResult",
      value: function _checkAssertsResult() {
        var assertsResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var inverted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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

    }, {
      key: "setVersion",
      value: function setVersion() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var inverted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (inverted) {
          version = version || this.version || RegExp.$1 || 'n/a';
        } else {
          version = version || RegExp.$1 || this.version || 'n/a';
        }

        this.version = version.replace(/_/ig, '.');
      }
    }]);

    return Browser;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class Platform
   * @extends {CssFlagsClass}
   */

  var Platform = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(Platform, _CssFlagsClass);

    var _super = _createSuper(Platform);

    /**
     * Creates an instance of Platform.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='platform']
     *
     * @memberOf Platform
     */
    function Platform() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'platform';

      _classCallCheck(this, Platform);

      return _super.call(this, ua, flags, cssFlagsPrefix);
    }
    /**
     *
     *
     * @readonly
     * @memberOf Platform
     */


    _createClass(Platform, [{
      key: "bot",
      get: function get() {
        return Asserts.one([/googlebot/i.test(this._ua)]);
      }
      /**
       *
       *
       * @readonly
       * @memberof Platform
       */

    }, {
      key: "console",
      get: function get() {
        return Asserts.all([/(?:xbox|playstation|nintendo|archos.*gamepad([2]?))/i.test(this._ua), !/(?:xbmc|kodi|nexbox|newfoxbox)/i.test(this._ua)]);
      }
      /**
       *
       *
       * @readonly
       * @memberof Platform
       */

    }, {
      key: "tv",
      get: function get() {
        return Asserts.one([/(?:google|smart(?:-)|internet\.|(?:i)net|apple|(?:pov|aoc)\_|hbb|web|sonyd|vs|cloud)tv/i.test(this._ua), /(?:viera|bravia|bangolufsen|humax|airties|netcast|owb|grundig|thom(?:son)|arcelik|telefunken|panasonic|hisense|boxee|kylo|dlnadoc|ce-html|tb-pO1|netbox|tv(\s?:box|build))/i.test(this._ua)]) && Asserts.one([!this.mobile, !this.bot, this._flags.feature.fullscreenKeyboard]) && Asserts.one([this._flags.os.Android, this._flags.os.Tizen, this._flags.os.WebOS]);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Platform
       */

    }, {
      key: "tablet",
      get: function get() {
        return Asserts.all([this.mobile, /(ipad|tab(?:let)|kindle|playbook|vega|sm-t|lenovo\st(?:a)b)/i.test(this._ua)]);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Platform
       */

    }, {
      key: "smartphone",
      get: function get() {
        return Asserts.all([this.mobile, !this.tablet]);
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Platform
       */

    }, {
      key: "mobile",
      get: function get() {
        return Asserts.one([this._flags.feature.deviceMotion, this._flags.feature.deviceOrientation, this._flags.feature.pixelRatio > 1]) && Asserts.one([this._flags.feature.touch, this._flags.feature.forceTouch, ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile'].includes(this._flags.browser.name)]) && Asserts.all([!this._flags.feature.pointerEvents, this._flags.feature.file]) || Asserts.all([['Android', 'iOS', 'WindowsPhone', 'Bada', 'Blackberry', 'Contiki', 'MeeGo', 'RIM', 'QNX', 'Palm', 'Symbian', 'WebOS'].includes(this._flags.os.name), ['ChromeMobile', 'EdgeMobile', 'IEMobile', 'FirefoxMobile', 'MaxthonMobile', 'OperaMobile', 'SafariMobile'].includes(this._flags.browser.name)]);
      }
      /**
       *
       *
       * @readonly
       * @memberOf Platform
       */

    }, {
      key: "desktop",
      get: function get() {
        return Asserts.all([!this.bot, !this.console, !this.mobile, !this.tv]);
      }
    }, {
      key: "toValues",
      value: function toValues() {
        var _this = this;

        var proto = Object.getPrototypeOf(this);
        var protoProperties = Object.getOwnPropertyNames(proto).filter(function (prop) {
          return !!Object.getOwnPropertyDescriptors(proto)[prop].get && !!_this[prop];
        });
        return protoProperties[0] || 'n/a';
      }
    }]);

    return Platform;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class Device
   * @extends {CssFlagsClass}
   */

  var Device = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(Device, _CssFlagsClass);

    var _super = _createSuper(Device);

    /**
     * Creates an instance of Device.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='device']
     *
     * @memberOf Device
     */
    function Device() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'device';

      _classCallCheck(this, Device);

      return _super.call(this, ua, flags, cssFlagsPrefix);
    }

    return Device;
  }(CssFlagsClass);

  var CPU = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(CPU, _CssFlagsClass);

    var _super = _createSuper(CPU);

    function CPU() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'cpu';

      _classCallCheck(this, CPU);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);
      _this._booleanFlagsValuePropertyName = 'vendor';
      _this.platform = _this.getPlatform();
      _this.cores = _this.getCores();
      _this.architecture = _this.getArchitecture();
      _this.sparc = _this.getSparc();
      _this.irix = _this.getIrix();
      _this.mips = _this.getMips();
      _this.risc = _this.getRisc();
      _this.avr = _this.getAvr();
      _this.arm = _this.getArm();
      _this.powerPC = _this.getPowerPC();
      _this.amd = _this.getAmd();
      _this.intel = _this.getIntel();
      return _this;
    }
    /**
     *
     *
     * @returns number
     *
     * @memberOf CPU
     */


    _createClass(CPU, [{
      key: "getCores",
      value: function getCores() {
        return this._navigator.hardwareConcurrency || 1;
      }
      /**
       *
       *
       * @returns string
       *
       * @memberOf CPU
       */

    }, {
      key: "getPlatform",
      value: function getPlatform() {
        return this._navigator.platform || 'Win32';
      }
      /**
       *
       *
       * @returns string
       *
       * @memberOf CPU
       */

    }, {
      key: "getArchitecture",
      value: function getArchitecture() {
        var cpuClass = this._navigator.cpuClass || 'x86';

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

    }, {
      key: "getSparc",
      value: function getSparc() {
        return Asserts.one([/(sun4\w)[;\)]/i.test(this._ua), /sparc(?:64)?(?=;);/i.test(this._ua)]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getIrix",
      value: function getIrix() {
        return Asserts.all([/irix(?:64)?(?=;);/i.test(this._ua)]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getMips",
      value: function getMips() {
        return Asserts.all([/mips(?:64)?(?=;);/i.test(this._ua)]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getRisc",
      value: function getRisc() {
        return Asserts.all([/pa-risc(?:64)?(?=;);/i.test(this._ua)]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getAvr",
      value: function getAvr() {
        return Asserts.all([/(?=atmel\s)avr/i.test(this._ua)]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getArm",
      value: function getArm() {
        return Asserts.one([/windows\s(ce|mobile);\sppc;/i.test(this._ua), /arm(?:64|(?=v\d+[;l]))/i.test(this._ua)]);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getPowerPC",
      value: function getPowerPC() {
        return Asserts.one([/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i.test(this._ua), this._navigator.platform === 'MacPPC']);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getAmd",
      value: function getAmd() {
        return Asserts.one([/(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x64', this._navigator.platform === 'Linux x86_64']) || Asserts.one([/(?:(amd(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), /((?:i[346]|x)86)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x86']);
      }
      /**
       *
       *
       * @returns boolean
       *
       * @memberOf CPU
       */

    }, {
      key: "getIntel",
      value: function getIntel() {
        return Asserts.one([/(?:avr32|ia64(?=;))|68k(?=\))/i.test(this._ua), /(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x64', this._navigator.platform === 'MacIntel', this._navigator.platform === 'Linux x86_64']) || Asserts.one([/(?:(x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i.test(this._ua), /(ia32(?=;))/i.test(this._ua), /((?:i[346]|x)86)[;\)]/i.test(this._ua), this._navigator.cpuClass === 'x86']);
      }
    }]);

    return CPU;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class GPU
   * @extends {CssFlagsClass}
   */

  var GPU = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(GPU, _CssFlagsClass);

    var _super = _createSuper(GPU);

    /**
     * Creates an instance of GPU.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='gpu']
     *
     * @memberOf GPU
     */
    function GPU() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'gpu';

      _classCallCheck(this, GPU);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);

      _this._createTestElements();

      _this.webGLVendor = _this._info.webGLVendor;
      _this.webGLRenderer = _this._info.webGLRenderer;
      _this.vendor = _this._info.vendor;
      _this.model = _this._info.model;
      _this.renderer = _this._info.renderer;
      return _this;
    }
    /**
     *
     *
     *
     * @memberOf GPU
     */


    _createClass(GPU, [{
      key: "_createTestElements",
      value: function _createTestElements() {
        this._canvas = this._document.createElement('canvas');
        this._info = this.getInfo();
      } // /**
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

    }, {
      key: "getInfo",
      value: function getInfo() {
        var info = {
          webGLVendor: 'n/a',
          webGLRenderer: 'n/a',
          vendor: 'n/a',
          model: 'n/a',
          renderer: 'n/a'
        };

        try {
          var webGLContext = this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl');

          if (webGLContext) {
            var dbgRenderInfo = webGLContext.getExtension('WEBGL_debug_renderer_info');

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
    }]);

    return GPU;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class Engine
   * @extends {CssFlagsClass}
   */

  var Engine = /*#__PURE__*/function (_CssFlagsClass) {
    _inherits(Engine, _CssFlagsClass);

    var _super = _createSuper(Engine);

    /**
     * Creates an instance of Engine.
     * @param {any} [ua=null]
     * @param {any} [flags={}]
     * @param {string} [cssFlagsPrefix='engine']
     *
     * @memberOf Engine
     */
    function Engine() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cssFlagsPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'engine';

      _classCallCheck(this, Engine);

      _this = _super.call(this, ua, flags, cssFlagsPrefix);
      _this.version = 'n/a';
      return _this;
    } //#region Un-Common/Rare/Mythic Engines

    /**
     *
     *
     * @readonly
     *
     * @memberOf Engine
     */


    _createClass(Engine, [{
      key: "Amaya",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(amaya)\/([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Goanna",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(goanna)\/([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "iCab",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(icab)[\/\s]([23]\.[\d\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "KHTML",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(khtml)[\/\s]\(?([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Links",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(links)[\/\s]\(?([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Linx",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(lynx)\/([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "NetFront",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(netfront)\/([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "NetSurf",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(netsurf)\/([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Presto",
      get: function get() {
        return this._checkAssertsResult(Asserts.one([/(presto)\/([\w\.]+)/i.test(this._ua), /presto\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Tasman",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/(tasman)[\/\s]\(?([\w\.]+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "w3m",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([/w3m[\/\s]([\w\.]+)/i.test(this._ua)]));
      } //#endregion
      //#region Common Engines

      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Trident",
      get: function get() {
        return this._checkAssertsResult(Asserts.all([
        /*@cc_on!@*/
        !!document.documentMode]) && Asserts.one([/trident[\/\s](\d+(\.?_?\d+)+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Blink",
      get: function get() {
        var _this2 = this;

        return this._checkAssertsResult(Asserts.all([function () {
          return 'Intl' in _this2._root && 'v8BreakIterator' in _this2._root.Intl;
        }, 'CSS' in this._root, /webkit\/537\.36.+chrome\/(?!27)/i.test(this._ua)], true));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "EdgeHTML",
      get: function get() {
        return this._checkAssertsResult(Asserts.all(['StyleMedia' in this._root, !this.Trident]) && Asserts.one([/edge\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "Gecko",
      get: function get() {
        return this._checkAssertsResult(Asserts.all(['InstallTrigger' in this._root, !/like gecko/i.test(this._ua)]) && Asserts.one([/rv\:([\w\.]{1,9}).+(gecko)/i.test(this._ua), /gecko\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
      }
      /**
       *
       *
       * @readonly
       *
       * @memberOf Engine
       */

    }, {
      key: "WebKit",
      get: function get() {
        return this._checkAssertsResult(Asserts.all(['webkitConvertPointFromNodeToPage' in this._root]) && Asserts.one([/(?:(?:apple)?webkit)\/(\d+(\.?_?\d+)+)/i.test(this._ua)]));
      } //#endregion

      /**
       *
       *
       * @param {boolean} [assertsResult=false]
       * @param {any} [version=null]
       * @returns boolean
       *
       * @memberOf Engine
       */

    }, {
      key: "_checkAssertsResult",
      value: function _checkAssertsResult() {
        var assertsResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

    }, {
      key: "setVersion",
      value: function setVersion() {
        var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.version = version || RegExp.$1 || 'n/a';
      }
    }]);

    return Engine;
  }(CssFlagsClass);

  /**
   *
   *
   * @export
   * @class Detector
   * @extends {FlagsClass}
   */

  var Detector = /*#__PURE__*/function (_FlagsClass) {
    _inherits(Detector, _FlagsClass);

    var _super = _createSuper(Detector);

    /**
     * Creates an instance of Detector.
     * @param {boolean} [cssFlags=false]
     * @param {string} [cssFlagsPrefix='djs']
     * @param {any} [ua=null]
     *
     * @memberOf Detector
     */
    function Detector() {
      var _this;

      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var cssFlags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cssFlagsPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'djs';

      _classCallCheck(this, Detector);

      _this = _super.call(this, ua);
      _this._values = values;
      _this._cssFlags = !!cssFlags ? [] : null;
      _this._cssFlagsPrefix = cssFlagsPrefix + (!!cssFlagsPrefix ? '--' : ''); //! Features

      _this.checkFeature(); //! Software


      _this.checkEngine();

      _this.checkBrowser();

      _this.checkOS(); //! Hardware
      // this.checkDevice();


      _this.checkCPU();

      _this.checkGPU();

      _this.checkPlatform();

      _this.setCssFlags(); // remove unnecessary memory usage


      delete _this._booleanFlagsValuePropertyName;
      delete _this._values;
      delete _this._cssFlags;
      delete _this._cssFlagsPrefix;
      delete _this._root;
      delete _this._process;
      delete _this._navigator;
      delete _this._document;
      delete _this._ua;
      console.warn('DetectorJS initialized', _this.toFlags());
      return _this;
    } //! Feature

    /**
     *
     *
     *
     * @memberOf Detector
     */


    _createClass(Detector, [{
      key: "checkFeature",
      value: function checkFeature() {
        var feature = new Feature(this._ua);
        var audio = new AudioFeature(this._ua);
        var video = new VideoFeature(this._ua);
        this.feature = feature.toFlags().merge({
          audio: audio.toFlags(),
          video: video.toFlags()
        });

        if (!!this._cssFlags) {
          this._cssFlags = this._cssFlags.concat(feature.toCssFlags(), audio.toCssFlags(), video.toCssFlags());
        }
      } //! Software

      /**
       *
       *
       *
       * @memberOf Detector
       */

    }, {
      key: "checkEngine",
      value: function checkEngine() {
        var engine = new Engine(this._ua, this.toFlags());

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

    }, {
      key: "checkBrowser",
      value: function checkBrowser() {
        var browser = new Browser(this._ua, this.toFlags());

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

    }, {
      key: "checkOS",
      value: function checkOS() {
        var os = new OS(this._ua, this.toFlags());

        if (this._values) {
          this.os = os.toValues();
        } else {
          this.os = os.toFlags();
        }

        if (!!this._cssFlags) {
          this._cssFlags = this._cssFlags.concat(os.toCssFlags());
        }
      } //! Hardware

      /**
       *
       *
       *
       * @memberOf Detector
       */

    }, {
      key: "checkDevice",
      value: function checkDevice() {
        var device = new Device(this._ua, this.toFlags());
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

    }, {
      key: "checkCPU",
      value: function checkCPU() {
        var cpu = new CPU(this._ua, this.toFlags());

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

    }, {
      key: "checkGPU",
      value: function checkGPU() {
        var gpu = new GPU(this._ua, this.toFlags());
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

    }, {
      key: "checkPlatform",
      value: function checkPlatform() {
        var platform = new Platform(this._ua, this.toFlags());

        if (this._values) {
          this.platform = platform.toValues();
        } else {
          this.platform = platform.toFlags();
        }

        if (!!this._cssFlags) {
          this._cssFlags = this._cssFlags.concat(platform.toCssFlags());
        }
      } //! CSS Flags

      /**
       *
       *
       *
       * @memberOf Detector
       */

    }, {
      key: "setCssFlags",
      value: function setCssFlags() {
        var _this2 = this;

        if (!!this._cssFlags) {
          var cssFlagsPrefixed = this._cssFlags.map(function (cssFlag) {
            return _this2._cssFlagsPrefix + cssFlag;
          });

          var htmlElement = document.documentElement || document.querySelector('html');
          cssFlagsPrefixed.forEach(function (cssFlag) {
            return htmlElement.className.replace(cssFlag, '');
          });
          htmlElement.className += cssFlagsPrefixed.join(' ').trim();
        }
      }
    }]);

    return Detector;
  }(FlagsClass);

  return Detector;

})));
//# sourceMappingURL=detector.js.map
