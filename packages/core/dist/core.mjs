var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
window.Reflect = window.Reflect || {};


/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!String.prototype.includes) Object.defineProperty(String.prototype, "includes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value (search, start) {
        start = typeof start !== "number" ? 0 : start;
        if (start + search.length > this.length) return false;
        return this.indexOf(search, start) !== -1;
    }
});


/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!String.prototype.startsWith) Object.defineProperty(String.prototype, "startsWith", {
    value (search, rawPos) {
        const pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
    }
});


/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!String.prototype.toCamelCase) Object.defineProperty(String.prototype, "toCamelCase", {
    enumerable: false,
    configurable: true,
    writable: true,
    value () {
        const s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x)=>{
            return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
        }).join("");
        return s.slice(0, 1).toLowerCase() + s.slice(1);
    }
});




/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!Array.prototype.map) Object.defineProperty(Array.prototype, "map", {
    enumerable: false,
    configurable: true,
    writable: true,
    value (arr, iterator) {
        const result = [];
        for(let i = 0; i < arr.length; i += 1)result.push(iterator(arr[i]));
        return result;
    }
});


/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!Array.prototype.includes) Object.defineProperty(Array.prototype, "includes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value (valueToFind, fromIndex) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        // 1. Let O be ? ToObject(this value).
        const o = Object(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        const len = o.length >>> 0;
        // 3. If len is 0, return false.
        if (len === 0) return false;
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
            return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        }
        // 7. Repeat, while k < len
        while(k < len){
            // a. Let elementK be the result of ? Get(O, ! ToString(k)).
            // b. If SameValueZero(valueToFind, elementK) is true, return true.
            if (sameValueZero(o[k], valueToFind)) return true;
            // c. Increase k by 1.
            k++;
        }
        // 8. Return false
        return false;
    }
});




/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!Object.assign) Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value (target, firstSource) {
        if (target === undefined || target === null) throw new TypeError("Cannot convert first argument to object");
        const to = Object(target);
        for(let i = 1; i < arguments.length; i++){
            let nextSource = arguments[i];
            if (nextSource === undefined || nextSource === null) continue;
            nextSource = Object(nextSource);
            const keysArray = Object.keys(Object(nextSource));
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
            }
        }
        return to;
    }
});


/* eslint-disable */ (function(Object1, GOPS) {
    "use strict";
    // (C) Andrea Giammarchi - Mit Style
    // @see https://github.com/es-shims/get-own-property-symbols
    if (GOPS in Object1) return;
    var setDescriptor, G = typeof $parcel$global === typeof G ? window : $parcel$global, id = 0, random = String(Math.random()), prefix = "__\x01symbol:", prefixLength = prefix.length, internalSymbol = "__\x01symbol@@" + random, DP = "defineProperty", DPies = "defineProperties", GOPN = "getOwnPropertyNames", GOPD = "getOwnPropertyDescriptor", PIE = "propertyIsEnumerable", gOPN = Object1[GOPN], gOPD = Object1[GOPD], create = Object1.create, keys = Object1.keys, freeze = Object1.freeze || Object1, defineProperty = Object1[DP], $defineProperties = Object1[DPies], descriptor = gOPD(Object1, GOPN), ObjectProto = Object1.prototype, hOP = ObjectProto.hasOwnProperty, pIE = ObjectProto[PIE], toString = ObjectProto.toString, addInternalIfNeeded = function(o, uid, enumerable) {
        if (!hOP.call(o, internalSymbol)) defineProperty(o, internalSymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: {}
        });
        o[internalSymbol]["@@" + uid] = enumerable; // eslint-disable-line no-param-reassign
    }, createWithSymbols = function(proto, descriptors) {
        var self = create(proto);
        gOPN(descriptors).forEach(function(key) {
            if (propertyIsEnumerable.call(descriptors, key)) $defineProperty(self, key, descriptors[key]);
        });
        return self;
    }, copyAsNonEnumerable = function(descriptor) {
        var newDescriptor = create(descriptor);
        newDescriptor.enumerable = false;
        return newDescriptor;
    }, get = function get() {}, onlyNonSymbols = function(name) {
        // eslint-disable-next-line eqeqeq
        return name != internalSymbol && !hOP.call(source, name);
    }, onlySymbols = function(name) {
        // eslint-disable-next-line eqeqeq
        return name != internalSymbol && hOP.call(source, name);
    }, propertyIsEnumerable = function propertyIsEnumerable(key) {
        var uid = String(key);
        return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]["@@" + uid] : pIE.call(this, key);
    }, setAndGetSymbol = function(uid) {
        var descriptor = {
            enumerable: false,
            configurable: true,
            get: get,
            set: function(value) {
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
        source[uid] = defineProperty(Object1(uid), "constructor", sourceConstructor);
        return freeze(source[uid]);
    }, Symbol1 = function Symbol1(description) {
        if (this instanceof Symbol1) throw new TypeError("Symbol is not a constructor");
        return setAndGetSymbol(prefix.concat(description || "", random, ++id));
    }, source = create(null), sourceConstructor = {
        value: Symbol1
    }, sourceMap = function(uid) {
        return source[uid];
    }, $defineProperty = function defineProp(o, key, descriptor) {
        var uid = String(key);
        if (onlySymbols(uid)) {
            setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
            addInternalIfNeeded(o, uid, !!descriptor.enumerable);
        } else defineProperty(o, key, descriptor);
        return o;
    }, $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
        return gOPN(o).filter(onlySymbols).map(sourceMap);
    };
    descriptor.value = $defineProperty;
    defineProperty(Object1, DP, descriptor);
    descriptor.value = $getOwnPropertySymbols;
    defineProperty(Object1, GOPS, descriptor);
    descriptor.value = function getOwnPropertyNames(o) {
        return gOPN(o).filter(onlyNonSymbols);
    };
    defineProperty(Object1, GOPN, descriptor);
    descriptor.value = function defineProperties(o, descriptors) {
        var symbols = $getOwnPropertySymbols(descriptors);
        if (symbols.length) keys(descriptors).concat(symbols).forEach(function(uid) {
            if (propertyIsEnumerable.call(descriptors, uid)) $defineProperty(o, uid, descriptors[uid]);
        });
        else $defineProperties(o, descriptors);
        return o;
    };
    defineProperty(Object1, DPies, descriptor);
    descriptor.value = propertyIsEnumerable;
    defineProperty(ObjectProto, PIE, descriptor);
    descriptor.value = Symbol1;
    defineProperty(G, "Symbol", descriptor);
    // defining `Symbol.for(key)`
    descriptor.value = function(key) {
        var uid = prefix.concat(prefix, key, random);
        return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };
    defineProperty(Symbol1, "for", descriptor);
    // defining `Symbol.keyFor(symbol)`
    descriptor.value = function(symbol) {
        if (onlyNonSymbols(symbol)) throw new TypeError(symbol + " is not a symbol");
        if (!hOP.call(source, symbol)) return void 0;
        var label = symbol.slice(prefixLength);
        if (label.slice(0, prefixLength) !== prefix) return void 0;
        label = label.slice(prefixLength);
        if (label === random) return void 0;
        label = label.slice(0, label.length - random.length);
        return label.length > 0 ? label : void 0;
    };
    defineProperty(Symbol1, "keyFor", descriptor);
    descriptor.value = function getOwnPropertyDescriptor(o, key) {
        var descriptor = gOPD(o, key);
        if (descriptor && onlySymbols(key)) descriptor.enumerable = propertyIsEnumerable.call(o, key);
        return descriptor;
    };
    defineProperty(Object1, GOPD, descriptor);
    descriptor.value = function(proto, descriptors) {
        return arguments.length === 1 || typeof descriptors === "undefined" ? create(proto) : createWithSymbols(proto, descriptors);
    };
    defineProperty(Object1, "create", descriptor);
    descriptor.value = function() {
        var str = toString.call(this);
        return str === "[object String]" && onlySymbols(this) ? "[object Symbol]" : str;
    };
    defineProperty(ObjectProto, "toString", descriptor);
    try {
        if (create(defineProperty({}, prefix, {
            get: function() {
                return defineProperty(this, prefix, {
                    value: true
                })[prefix];
            }
        }))[prefix] === true) setDescriptor = defineProperty;
        else throw "IE11"; // eslint-disable-line no-throw-literal
    } catch (o_O) {
        setDescriptor = function(o, key, descriptor) {
            var protoDescriptor = gOPD(ObjectProto, key);
            delete ObjectProto[key];
            defineProperty(o, key, descriptor);
            defineProperty(ObjectProto, key, protoDescriptor);
        };
    }
})(Object, "getOwnPropertySymbols");
(function(O, Symbol1) {
    "use strict";
    var dP = O.defineProperty, ObjectProto = O.prototype, toString = ObjectProto.toString, toStringTag = "toStringTag", descriptor;
    [
        "iterator",
        "match",
        "replace",
        "search",
        "split",
        "hasInstance",
        "isConcatSpreadable",
        "unscopables",
        "species",
        "toPrimitive",
        toStringTag // A string value used for the default description of an object. Used by Object.prototype.toString().
    ].forEach(function(name) {
        if (!(name in Symbol1)) {
            dP(Symbol1, name, {
                value: Symbol1(name)
            });
            if (name === toStringTag) {
                descriptor = O.getOwnPropertyDescriptor(ObjectProto, "toString");
                descriptor.value = function() {
                    var str = toString.call(this);
                    var tst = this == null ? this : this[Symbol1.toStringTag];
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
    /*
   * make Arrays usable as iterators
   * so that other iterables can copy same logic
   */ if (!AP[Si]) // eslint-disable-next-line no-param-reassign
    AP[Si] = function() {
        var i = 0, self = this, iterator = {
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
    /*
   * make Strings usable as iterators
   * to simplify Array.from and for/of like loops
   */ if (!SP[Si]) // eslint-disable-next-line no-param-reassign
    SP[Si] = function() {
        var fromCodePoint = String.fromCodePoint, self = this, i = 0, length = self.length, iterator = {
            next: function next() {
                var done = length <= i, c = done ? "" : fromCodePoint(self.codePointAt(i));
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
})(Symbol.iterator, Array.prototype, String.prototype);


/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!Object.hasOwnProperty("getOwnPropertyDescriptors")) Object.defineProperty(Object, "getOwnPropertyDescriptors", {
    configurable: true,
    enumerable: true,
    writable: true,
    value (object) {
        const keys = !!Reflect && !!Reflect.ownKeys ? Reflect.ownKeys(object) : Object.getOwnPropertyNames(object).concat(Object.getOwnPropertySymbols(object));
        return keys.reduce((descriptors, key)=>{
            return Object.defineProperty(descriptors, key, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: Object.getOwnPropertyDescriptor(object, key)
            });
        }, {});
    }
});


/* eslint-disable prefer-destructuring */ /* eslint-disable prefer-rest-params */ /* eslint-disable no-restricted-globals */ /* eslint-disable no-bitwise */ if (!Object.prototype.merge) Object.defineProperty(Object.prototype, "merge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value (...objs) {
        const mergeObj = [
            this,
            ...objs
        ].reduce((acc, obj)=>Object.keys(obj).reduce((a, k)=>{
                if (acc.hasOwnProperty(k)) {
                    if (acc[k] instanceof Array) acc[k] = [].concat(acc[k], obj[k]);
                    else if (acc[k] instanceof Object && Object.keys(acc[k]).length > 0 && obj[k] instanceof Object && Object.keys(obj[k]).length > 0) acc[k].merge(obj[k]);
                    else acc[k] = obj[k];
                } else acc[k] = obj[k];
                return acc;
            }, {}), {});
        return Object.assign(this, mergeObj);
    }
});






var $2426f1e58e1f61c7$exports = {};

$parcel$export($2426f1e58e1f61c7$exports, "Asserts", () => $2426f1e58e1f61c7$export$a01bb7117a391d00);
/**
 *
 *
 * @export
 * @class Asserts
 */ class $2426f1e58e1f61c7$export$a01bb7117a391d00 {
    static #checkAssert(assert, safe = false) {
        if (!!assert) {
            if (assert instanceof Function) {
                if (!!safe) try {
                    return assert();
                } catch (e) {
                    return false;
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
   */ static all(asserts = [], safe = false) {
        return asserts.every((assert)=>{
            return $2426f1e58e1f61c7$export$a01bb7117a391d00.#checkAssert(assert, safe);
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
   */ static one(asserts = [], safe = false) {
        return asserts.some((assert)=>{
            return $2426f1e58e1f61c7$export$a01bb7117a391d00.#checkAssert(assert, safe);
        });
    }
}


var $68b5bd8872046f6d$exports = {};

$parcel$export($68b5bd8872046f6d$exports, "FlagsClass", () => $68b5bd8872046f6d$export$4f3d6547cdbed990);
/**
 *
 *
 * @export
 * @class FlagsClass
 */ class $68b5bd8872046f6d$export$4f3d6547cdbed990 {
    #booleanFlagsValuePropertyName;
    get booleanFlagsValuePropertyName() {
        return this.#booleanFlagsValuePropertyName;
    }
    set booleanFlagsValuePropertyName(booleanFlagsValuePropertyName) {
        this.#booleanFlagsValuePropertyName = booleanFlagsValuePropertyName;
    }
    #root;
    get root() {
        return this.#root;
    }
    #process;
    get process() {
        return this.#process;
    }
    #navigator;
    get navigator() {
        return this.#navigator;
    }
    #document;
    get document() {
        return this.#document;
    }
    #ua;
    get ua() {
        return this.#ua;
    }
    /**
   * Creates an instance of FlagsClass.
   * @param {any} [ua=null]
   *
   * @memberOf FlagsClass
   */ constructor(ua = null){
        this.#booleanFlagsValuePropertyName = "name";
        this.#root = self || window || $parcel$global || {};
        this.#process = this.#root.process || {};
        this.#navigator = this.#root.navigator || {};
        this.#document = this.#root.document || null;
        this.#ua = ua || this.#navigator.userAgent || "n/a";
    }
    /**
   *
   *
   * @returns {object}
   *
   * @memberOf FlagsClass
   */ toValues() {
        const proto = Object.getPrototypeOf(this);
        const protoName = (this.#booleanFlagsValuePropertyName || this.constructor.name).toLowerCase();
        const protoProperties = Object.getOwnPropertyNames(proto).filter((prop)=>{
            return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        }).concat(Object.getOwnPropertyNames(this).filter((prop)=>{
            return !prop.startsWith("_") && !Object.getOwnPropertyDescriptor(this, prop)?.get;
        }));
        const protoPropertiesReduced = protoProperties.reduce((acc, prop)=>{
            if (!!this[prop]) {
                if (typeof this[prop] === "boolean") acc[protoName] = prop;
                else acc[prop] = this[prop];
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
   */ toFlags() {
        const proto = Object.getPrototypeOf(this);
        return Object.getOwnPropertyNames(proto).filter((prop)=>{
            return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        }).reduce((acc, prop)=>{
            acc[prop] = this[prop];
            return acc;
        }, {})//@ts-ignore
        .merge(Object.getOwnPropertyNames(this).filter((prop)=>{
            return !prop.startsWith("_") && !Object.getOwnPropertyDescriptor(this, prop)?.get;
        }).reduce((acc, prop)=>{
            acc[prop] = this[prop];
            return acc;
        }, {}));
    }
}


var $f3e43a5a97f6663e$exports = {};

$parcel$export($f3e43a5a97f6663e$exports, "CssFlagsClass", () => $f3e43a5a97f6663e$export$f4dfb95cdf26c5c7);

class $f3e43a5a97f6663e$export$f4dfb95cdf26c5c7 extends (0, $68b5bd8872046f6d$export$4f3d6547cdbed990) {
    #flags;
    get flags() {
        return this.#flags;
    }
    #cssFlagsPrefix;
    get cssFlagsPrefix() {
        return this.#cssFlagsPrefix;
    }
    /**
   * Creates an instance of CssFlagsClass.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='flags']
   *
   * @memberOf CssFlagsClass
   */ constructor(ua = null, flags = {}, cssFlagsPrefix = "flags"){
        super(ua);
        this.#flags = flags;
        this.#flags[1] = true;
        this.#cssFlagsPrefix = cssFlagsPrefix;
    }
    /**
   *
   *
   * @returns object
   *
   * @memberOf CssFlagsClass
   */ toCssFlags() {
        const proto = Object.getPrototypeOf(this);
        return Object.getOwnPropertyNames(proto).filter((prop)=>{
            return !!Object.getOwnPropertyDescriptors(proto)[prop].get;
        }).reduce((acc, prop)=>{
            if (!!this[prop]) acc.push(`${this.#cssFlagsPrefix}--${prop}--${typeof this[prop] !== "boolean" ? "--" + this[prop] : ""}`.toLowerCase());
            return acc;
        }, []);
    }
}


"use strict";


export {$2426f1e58e1f61c7$export$a01bb7117a391d00 as Asserts, $68b5bd8872046f6d$export$4f3d6547cdbed990 as FlagsClass, $f3e43a5a97f6663e$export$f4dfb95cdf26c5c7 as CssFlagsClass};
//# sourceMappingURL=core.mjs.map
