import './map';
import './includes';

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
      start = (typeof start !== 'number') ? 0 : start;

      if (start + search.length > this.length) {
        return false;
      }

      return this.indexOf(search, start) !== -1;
    },
  });
}

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value(search, rawPos) {
      const pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    },
  });
}

if (!String.prototype.toCamelCase) {
  Object.defineProperty(String.prototype, 'toCamelCase', {
    enumerable: false,
    configurable: true,
    writable: true,
    value() {
      const s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x) => {
        return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
      }).join('');

      return s.slice(0, 1).toLowerCase() + s.slice(1);
    },
  });
}
