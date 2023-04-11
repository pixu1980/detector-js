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
          value: Object.getOwnPropertyDescriptor(object, key),
        });
      }, {});
    },
  });
}
