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
    },
  });
}
