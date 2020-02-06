/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value(search, rawPos) {
      const pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    },
  });
}
