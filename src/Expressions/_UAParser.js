/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */

(function (window, undefined) {

  'use strict';

  //////////////
  // Constants
  /////////////


  var LIBVERSION  = '0.7.19',
      EMPTY       = '',
      UNKNOWN     = '?',
      FUNC_TYPE   = 'function',
      UNDEF_TYPE  = 'undefined',
      OBJ_TYPE    = 'object',
      STR_TYPE    = 'string',
      MAJOR       = 'major', // deprecated
      MODEL       = 'model',
      NAME        = 'name',
      TYPE        = 'type',
      VENDOR      = 'vendor',
      VERSION     = 'version',
      ARCHITECTURE= 'architecture',
      CONSOLE     = 'console',
      MOBILE      = 'mobile',
      TABLET      = 'tablet',
      SMARTTV     = 'smarttv',
      WEARABLE    = 'wearable',
      EMBEDDED    = 'embedded';


  ///////////
  // Helper
  //////////


  var util = {
      extend : function (regexes, extensions) {
          var margedRegexes = {};
          for (var i in regexes) {
              if (extensions[i] && extensions[i].length % 2 === 0) {
                  margedRegexes[i] = extensions[i].concat(regexes[i]);
              } else {
                  margedRegexes[i] = regexes[i];
              }
          }
          return margedRegexes;
      },
      has : function (str1, str2) {
        if (typeof str1 === "string") {
          return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
        } else {
          return false;
        }
      },
      lowerize : function (str) {
          return str.toLowerCase();
      },
      major : function (version) {
          return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
      },
      trim : function (str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
  };


  ///////////////
  // Map helper
  //////////////


  var mapper = {

      rgx : function (ua, arrays) {

          //var result = {},
          var i = 0, j, k, p, q, matches, match;//, args = arguments;

          /*// construct object barebones
          for (p = 0; p < args[1].length; p++) {
              q = args[1][p];
              result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
          }*/

          // loop through all regexes maps
          while (i < arrays.length && !matches) {

              var regex = arrays[i],       // even sequence (0,2,4,..)
                  props = arrays[i + 1];   // odd sequence (1,3,5,..)
              j = k = 0;

              // try matching uastring with regexes
              while (j < regex.length && !matches) {

                  matches = regex[j++].exec(ua);

                  if (!!matches) {
                      for (p = 0; p < props.length; p++) {
                          match = matches[++k];
                          q = props[p];
                          // check if given property is actually array
                          if (typeof q === OBJ_TYPE && q.length > 0) {
                              if (q.length == 2) {
                                  if (typeof q[1] == FUNC_TYPE) {
                                      // assign modified match
                                      this[q[0]] = q[1].call(this, match);
                                  } else {
                                      // assign given value, ignore regex match
                                      this[q[0]] = q[1];
                                  }
                              } else if (q.length == 3) {
                                  // check whether function or regex
                                  if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                      // call function (usually string mapper)
                                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                  } else {
                                      // sanitize match using given regex
                                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                  }
                              } else if (q.length == 4) {
                                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                              }
                          } else {
                              this[q] = match ? match : undefined;
                          }
                      }
                  }
              }
              i += 2;
          }
          // console.log(this);
          //return this;
      },

      str : function (str, map) {

          for (var i in map) {
              // check if array
              if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                  for (var j = 0; j < map[i].length; j++) {
                      if (util.has(map[i][j], str)) {
                          return (i === UNKNOWN) ? undefined : i;
                      }
                  }
              } else if (util.has(map[i], str)) {
                  return (i === UNKNOWN) ? undefined : i;
              }
          }
          return str;
      }
  };


  ///////////////
  // String map
  //////////////


  var maps = {

      browser : {
          oldsafari : {
              version : {
                  '1.0'   : '/8',
                  '1.2'   : '/1',
                  '1.3'   : '/3',
                  '2.0'   : '/412',
                  '2.0.2' : '/416',
                  '2.0.3' : '/417',
                  '2.0.4' : '/419',
                  '?'     : '/'
              }
          }
      },

      device : {
          amazon : {
              model : {
                  'Fire Phone' : ['SD', 'KF']
              }
          },
          sprint : {
              model : {
                  'Evo Shift 4G' : '7373KT'
              },
              vendor : {
                  'HTC'       : 'APA',
                  'Sprint'    : 'Sprint'
              }
          }
      },

      os : {
          windows : {
              version : {
                  'ME'        : '4.90',
                  'NT 3.11'   : 'NT3.51',
                  'NT 4.0'    : 'NT4.0',
                  '2000'      : 'NT 5.0',
                  'XP'        : ['NT 5.1', 'NT 5.2'],
                  'Vista'     : 'NT 6.0',
                  '7'         : 'NT 6.1',
                  '8'         : 'NT 6.2',
                  '8.1'       : 'NT 6.3',
                  '10'        : ['NT 6.4', 'NT 10.0'],
                  'RT'        : 'ARM'
              }
          }
      }
  };


  //////////////
  // Regex map
  /////////////


  var regexes = {


  };


  /////////////////
  // Constructor
  ////////////////
  /*
  var Browser = function (name, version) {
      this[NAME] = name;
      this[VERSION] = version;
  };
  var CPU = function (arch) {
      this[ARCHITECTURE] = arch;
  };
  var Device = function (vendor, model, type) {
      this[VENDOR] = vendor;
      this[MODEL] = model;
      this[TYPE] = type;
  };
  var Engine = Browser;
  var OS = Browser;
  */
  var UAParser = function (uastring, extensions) {

      if (typeof uastring === 'object') {
          extensions = uastring;
          uastring = undefined;
      }

      if (!(this instanceof UAParser)) {
          return new UAParser(uastring, extensions).getResult();
      }

      var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
      var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
      //var browser = new Browser();
      //var cpu = new CPU();
      //var device = new Device();
      //var engine = new Engine();
      //var os = new OS();

      this.getBrowser = function () {
          var browser = { name: undefined, version: undefined };
          mapper.rgx.call(browser, ua, rgxmap.browser);
          browser.major = util.major(browser.version); // deprecated
          return browser;
      };
      this.getCPU = function () {
          var cpu = { architecture: undefined };
          mapper.rgx.call(cpu, ua, rgxmap.cpu);
          return cpu;
      };
      this.getDevice = function () {
          var device = { vendor: undefined, model: undefined, type: undefined };
          mapper.rgx.call(device, ua, rgxmap.device);
          return device;
      };
      this.getEngine = function () {
          var engine = { name: undefined, version: undefined };
          mapper.rgx.call(engine, ua, rgxmap.engine);
          return engine;
      };
      this.getOS = function () {
          var os = { name: undefined, version: undefined };
          mapper.rgx.call(os, ua, rgxmap.os);
          return os;
      };
      this.getResult = function () {
          return {
              ua      : this.getUA(),
              browser : this.getBrowser(),
              engine  : this.getEngine(),
              os      : this.getOS(),
              device  : this.getDevice(),
              cpu     : this.getCPU()
          };
      };
      this.getUA = function () {
          return ua;
      };
      this.setUA = function (uastring) {
          ua = uastring;
          //browser = new Browser();
          //cpu = new CPU();
          //device = new Device();
          //engine = new Engine();
          //os = new OS();
          return this;
      };
      return this;
  };

  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = {
      NAME    : NAME,
      MAJOR   : MAJOR, // deprecated
      VERSION : VERSION
  };
  UAParser.CPU = {
      ARCHITECTURE : ARCHITECTURE
  };
  UAParser.DEVICE = {
      MODEL   : MODEL,
      VENDOR  : VENDOR,
      TYPE    : TYPE,
      CONSOLE : CONSOLE,
      MOBILE  : MOBILE,
      SMARTTV : SMARTTV,
      TABLET  : TABLET,
      WEARABLE: WEARABLE,
      EMBEDDED: EMBEDDED
  };
  UAParser.ENGINE = {
      NAME    : NAME,
      VERSION : VERSION
  };
  UAParser.OS = {
      NAME    : NAME,
      VERSION : VERSION
  };
  //UAParser.Utils = util;

  ///////////
  // Export
  //////////


  // check js environment
  if (typeof(exports) !== UNDEF_TYPE) {
      // nodejs env
      if (typeof module !== UNDEF_TYPE && module.exports) {
          exports = module.exports = UAParser;
      }
      // TODO: test!!!!!!!!
      /*
      if (require && require.main === module && process) {
          // cli
          var jsonize = function (arr) {
              var res = [];
              for (var i in arr) {
                  res.push(new UAParser(arr[i]).getResult());
              }
              process.stdout.write(JSON.stringify(res, null, 2) + '\n');
          };
          if (process.stdin.isTTY) {
              // via args
              jsonize(process.argv.slice(2));
          } else {
              // via pipe
              var str = '';
              process.stdin.on('readable', function() {
                  var read = process.stdin.read();
                  if (read !== null) {
                      str += read;
                  }
              });
              process.stdin.on('end', function () {
                  jsonize(str.replace(/\n$/, '').split('\n'));
              });
          }
      }
      */
      exports.UAParser = UAParser;
  } else {
      // requirejs env (optional)
      if (typeof(define) === FUNC_TYPE && define.amd) {
          define(function () {
              return UAParser;
          });
      } else if (window) {
          // browser env
          window.UAParser = UAParser;
      }
  }

  // jQuery/Zepto specific (optional)
  // Note:
  //   In AMD env the global scope should be kept clean, but jQuery is an exception.
  //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
  //   and we should catch that.
  var $ = window && (window.jQuery || window.Zepto);
  if (typeof $ !== UNDEF_TYPE && !$.ua) {
      var parser = new UAParser();
      $.ua = parser.getResult();
      $.ua.get = function () {
          return parser.getUA();
      };
      $.ua.set = function (uastring) {
          parser.setUA(uastring);
          var result = parser.getResult();
          for (var prop in result) {
              $.ua[prop] = result[prop];
          }
      };
  }

})(typeof window === 'object' ? window : this);
