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
      return Reflect.ownKeys(object).reduce((descriptors, key) => {
        return Object.defineProperty(descriptors, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: Object.getOwnPropertyDescriptor(object, key),
        });
      }, {});
    },
  });
}

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
    },
  });
}

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
    },
  });
}

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
    },
  });
}

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
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
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
    },
  });
}

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7
      let k = 0;
      let value;

      if (arguments.length === 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present, throw a TypeError exception.
        if (k >= len) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i. Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    },
  });
}

if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(search, start) {
      start = (typeof start !== 'number') ? 0 : start;

      if (start + search.length > this.length) {
        return false;
      }

      return this.indexOf(search, start) !== -1;
    },
  });
}

if (!String.prototype.toCamelCase) {
  Object.defineProperty(String.prototype, 'toCamelCase', {
    enumerable: false,
    configurable: true,
    writable: true,
    value() {
      const s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
      return s.slice(0, 1).toLowerCase() + s.slice(1);
    },
  });
}
