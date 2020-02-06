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
    },
  });
}
