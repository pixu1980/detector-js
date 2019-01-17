/* eslint-disable indent */
/* eslint-disable no-void */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */
/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
export const maxSafeInteger = Math.pow(2, 53) - 1;

/**
* Get first matched item for a string
* @param {RegExp} regexp
* @param {String} ua
* @return {Array|{index: number, input: string}|*|boolean|string}
*/
export function getFirstMatch(regexp, ua) {
  const match = ua.match(regexp);
  return (match && match.length > 0 && match[1]) || '';
}

/**
 * Get second matched item for a string
 * @param regexp
 * @param {String} ua
 * @return {Array|{index: number, input: string}|*|boolean|string}
 */
export function getSecondMatch(regexp, ua) {
  const match = ua.match(regexp);
  return (match && match.length > 1 && match[2]) || '';
}

/**
 * Match a regexp and return a constant or undefined
 * @param {RegExp} regexp
 * @param {String} ua
 * @param {*} _const Any const that will be returned if regexp matches the string
 * @return {*}
 */
export function matchAndReturnConst(regexp, ua, _const) {
  if (regexp.test(ua)) {
    return _const;
  }
  return void (0);
}

export function getWindowsVersionName(version) {
  switch (version) {
    case 'NT': return 'NT';
    case 'XP': return 'XP';
    case 'NT 5.0': return '2000';
    case 'NT 5.1': return 'XP';
    case 'NT 5.2': return '2003';
    case 'NT 6.0': return 'Vista';
    case 'NT 6.1': return '7';
    case 'NT 6.2': return '8';
    case 'NT 6.3': return '8.1';
    case 'NT 10.0': return '10';
    default: return undefined;
  }
}

/**
 * Get Android version name
 *    1.5 - Cupcake
 *    1.6 - Donut
 *    2.0 - Eclair
 *    2.1 - Eclair
 *    2.2 - Froyo
 *    2.x - Gingerbread
 *    3.x - Honeycomb
 *    4.0 - Ice Cream Sandwich
 *    4.1 - Jelly Bean
 *    4.4 - KitKat
 *    5.x - Lollipop
 *    6.x - Marshmallow
 *    7.x - Nougat
 *    8.x - Oreo
 *    9.x - ?
 *
 * @example
 *   getAndroidVersionName("7.0") // 'Nougat'
 *
 * @param  {string} version
 * @return {string} versionName
 */
export function getAndroidVersionName(version) {
  const v = version.split('.').splice(0, 2).map(s => parseInt(s, 10) || 0);
  v.push(0);
  if (v[0] === 1 && v[1] < 5) return undefined;
  if (v[0] === 1 && v[1] < 6) return 'Cupcake';
  if (v[0] === 1 && v[1] >= 6) return 'Donut';
  if (v[0] === 2 && v[1] < 2) return 'Eclair';
  if (v[0] === 2 && v[1] === 2) return 'Froyo';
  if (v[0] === 2 && v[1] > 2) return 'Gingerbread';
  if (v[0] === 3) return 'Honeycomb';
  if (v[0] === 4 && v[1] < 1) return 'Ice Cream Sandwich';
  if (v[0] === 4 && v[1] < 4) return 'Jelly Bean';
  if (v[0] === 4 && v[1] >= 4) return 'KitKat';
  if (v[0] === 5) return 'Lollipop';
  if (v[0] === 6) return 'Marshmallow';
  if (v[0] === 7) return 'Nougat';
  if (v[0] === 8) return 'Oreo';
  return undefined;
}

/**
 * Get version precisions count
 *
 * @example
 *   getVersionPrecision("1.10.3") // 3
 *
 * @param  {string} version
 * @return {number}
 */
export function getVersionPrecision(version) {
  return version.split('.').length;
}

/**
 * Calculate browser version weight
 *
 * @example
 *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
 *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
 *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
 *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
 *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
 *
 * @param {String} versionA versions versions to compare
 * @param {String} versionB versions versions to compare
 * @param {boolean} [isLoose] enable loose comparison
 * @return {Number} comparison result: -1 when versionA is lower,
 * 1 when versionA is bigger, 0 when both equal
 */
/* eslint consistent-return: 1 */
export function compareVersions(versionA, versionB, isLoose = false) {
  // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
  const versionAPrecision = getVersionPrecision(versionA);
  const versionBPrecision = getVersionPrecision(versionB);

  let precision = Math.max(versionAPrecision, versionBPrecision);
  let lastPrecision = 0;

  const chunks = [versionA, versionB].map((version) => {
    const delta = precision - getVersionPrecision(version);

    // 2) "9" -> "9.0" (for precision = 2)
    const _version = version + new Array(delta + 1).join('.0');

    // 3) "9.0" -> ["000000000"", "000000009"]
    return _version.split('.').map(chunk => new Array(20 - chunk.length).join('0') + chunk).reverse();
  });

  // adjust precision for loose comparison
  if (isLoose) {
    lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
  }

  // iterate in reverse order by reversed chunks array
  precision -= 1;
  while (precision >= lastPrecision) {
    // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
    if (chunks[0][precision] > chunks[1][precision]) {
      return 1;
    }

    if (chunks[0][precision] === chunks[1][precision]) {
      if (precision === lastPrecision) {
        // all version chunks are same
        return 0;
      }

      precision -= 1;
    } else if (chunks[0][precision] < chunks[1][precision]) {
      return -1;
    }
  }

  return null;
}

/**
 * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
 *
 * @private
 * @param {string} string The string to qualify.
 * @returns {string} The qualified string.
 */
export function qualifyForRegEx(string) {
  return String(string).replace(/([ -])(?!$)/g, '$1?');
}

/**
 * Capitalizes a string value.
 *
 * @private
 * @param {string} string The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(string) {
  string = String(string);
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Removes leading and trailing whitespace from a string.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} The trimmed string.
 */
export function trim(string) {
  return String(string).replace(/^ +| +$/g, '');
}


/**
 * Merges two or more objects
 * @param {...Object} objs
 * @return {Object}
 */
export function merge(...objs) {
  return [...objs].reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
    acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
    return acc;
  }, {}), {});
}

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  export function forOwn(object, callback) {
    Object.keys(object).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    });
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  export function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  export function isHostType(object, property) {
    const type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type)
      && (type === 'object' ? !!object[property] : true);
  }


/**
 * An iteration utility for arrays and objects.
 *
 * @private
 * @param {Array|Object} object The object to iterate over.
 * @param {Function} callback The function called per iteration.
 */
export function each(object, callback) {
  let index = -1;
  const length = object ? object.length : 0;

  if (typeof length === 'number' && length > -1 && length <= maxSafeInteger) {
    while (++index < length) {
      callback(object[index], index, object);
    }
  } else {
    forOwn(object, callback);
  }
}


export default {
  merge,
  getFirstMatch,
  getSecondMatch,
  matchAndReturnConst,
  getWindowsVersionName,
  getAndroidVersionName,
  getVersionPrecision,
  compareVersions,
  qualifyForRegEx,
  capitalize,
  trim,
};
