os = format(
  os.replace(/ ce$/i, ' CE')
    .replace(/\bhpw/i, 'web')
    .replace(/\bMacintosh\b/, 'Mac OS')
    .replace(/_PowerPC\b/i, ' OS')
    .replace(/\b(OS X) [^ \d]+/i, '$1')
    .replace(/\bMac (OS X)\b/, '$1')
    .replace(/\/(\d)/, ' $1')
    .replace(/_/g, '.')
    .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
    .replace(/\bx86\.64\b/gi, 'x86_64')
    .replace(/\b(Windows Phone) OS\b/, '$1')
    .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
    .split(' on ')[0]
);



/* Detectable layout engines (order is important). */
var layout = getLayout([
  { 'label': 'EdgeHTML', 'pattern': '(?:Edge|EdgA|EdgiOS)' },
  'Trident',
  { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
  'iCab',
  'Presto',
  'NetFront',
  'Tasman',
  'KHTML',
  'Gecko'
]);

/* Detectable browser names (order is important). */
var name = getName([
  'Adobe AIR',
  'Arora',
  'Avant Browser',
  'Breach',
  'Camino',
  'Electron',
  'Epiphany',
  'Fennec',
  'Flock',
  'Galeon',
  'GreenBrowser',
  'iCab',
  'Iceweasel',
  'K-Meleon',
  'Konqueror',
  'Lunascape',
  'Maxthon',
  { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|EdgA|EdgiOS)' },
  'Midori',
  'Nook Browser',
  'PaleMoon',
  'PhantomJS',
  'Raven',
  'Rekonq',
  'RockMelt',
  { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
  'SeaMonkey',
  { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
  'Sleipnir',
  'SlimBrowser',
  { 'label': 'SRWare Iron', 'pattern': 'Iron' },
  'Sunrise',
  'Swiftfox',
  'Waterfox',
  'WebPositive',
  'Opera Mini',
  { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
  'Opera',
  { 'label': 'Opera', 'pattern': 'OPR' },
  'Chrome',
  { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
  { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
  { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
  { 'label': 'IE', 'pattern': 'IEMobile' },
  { 'label': 'IE', 'pattern': 'MSIE' },
  'Safari'
]);

/* Detectable products (order is important). */
var product = getProduct([
  { 'label': 'BlackBerry', 'pattern': 'BB10' },
  'BlackBerry',
  { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
  { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
  { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
  { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
  { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
  { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
  { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
  { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
  { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
  'Google TV',
  'Lumia',
  'iPad',
  'iPod',
  'iPhone',
  'Kindle',
  { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
  'Nexus',
  'Nook',
  'PlayBook',
  'PlayStation Vita',
  'PlayStation',
  'TouchPad',
  'Transformer',
  { 'label': 'Wii U', 'pattern': 'WiiU' },
  'Wii',
  'Xbox One',
  { 'label': 'Xbox 360', 'pattern': 'Xbox' },
  'Xoom'
]);

/* Detectable manufacturers. */
var manufacturer = getManufacturer({
  'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
  'Archos': {},
  'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
  'Asus': { 'Transformer': 1 },
  'Barnes & Noble': { 'Nook': 1 },
  'BlackBerry': { 'PlayBook': 1 },
  'Google': { 'Google TV': 1, 'Nexus': 1 },
  'HP': { 'TouchPad': 1 },
  'HTC': {},
  'LG': {},
  'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
  'Motorola': { 'Xoom': 1 },
  'Nintendo': { 'Wii U': 1, 'Wii': 1 },
  'Nokia': { 'Lumia': 1 },
  'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
  'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 }
});

/* Detectable operating systems (order is important). */
var os = getOS([
  'Windows Phone',
  'Android',
  'CentOS',
  { 'label': 'Chrome OS', 'pattern': 'CrOS' },
  'Debian',
  'Fedora',
  'FreeBSD',
  'Gentoo',
  'Haiku',
  'Kubuntu',
  'Linux Mint',
  'OpenBSD',
  'Red Hat',
  'SuSE',
  'Ubuntu',
  'Xubuntu',
  'Cygwin',
  'Symbian OS',
  'hpwOS',
  'webOS ',
  'webOS',
  'Tablet OS',
  'Tizen',
  'Linux',
  'Mac OS X',
  'Macintosh',
  'Mac',
  'Windows 98;',
  'Windows '
]);

// Clean up Google TV.
if ((data = /\bGoogle TV\b/.exec(product))) {
  product = data[0];
}
// Detect simulators.
if (/\bSimulator\b/i.test(ua)) {
  product = (product ? product + ' ' : '') + 'Simulator';
}
// Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
  description.push('running in Turbo/Uncompressed mode');
}
// Detect IE Mobile 11.
if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
  data = parse(ua.replace(/like iPhone OS/, ''));
  manufacturer = data.manufacturer;
  product = data.product;
}
// Detect iOS.
else if (/^iP/.test(product)) {
  name || (name = 'Safari');
  os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
    ? ' ' + data[1].replace(/_/g, '.')
    : '');
}
// Detect Kubuntu.
else if (name == 'Konqueror' && !/buntu/i.test(os)) {
  os = 'Kubuntu';
}
// Detect Android browsers.
else if ((manufacturer && manufacturer != 'Google' &&
  ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
  (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
  name = 'Android Browser';
  os = /\bAndroid\b/.test(os) ? os : 'Android';
}
// Detect Silk desktop/accelerated modes.
else if (name == 'Silk') {
  if (!/\bMobi/i.test(ua)) {
    os = 'Android';
    description.unshift('desktop mode');
  }
  if (/Accelerated *= *true/i.test(ua)) {
    description.unshift('accelerated');
  }
}
// Detect PaleMoon identifying as Firefox.
else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
  description.push('identifying as Firefox ' + data[1]);
}
// Detect Firefox OS and products running Firefox.
else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
  os || (os = 'Firefox OS');
  product || (product = data[1]);
}
// Detect false positives for Firefox/Safari.
else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
  // Escape the `/` for Firefox 1.
  if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
    // Clear name of false positives.
    name = null;
  }
  // Reassign a generic name.
  if ((data = product || manufacturer || os) &&
    (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
    name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
  }
}
// Add Chrome version to description for Electron.
else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
  description.push('Chromium ' + data);
}
// Detect non-Opera (Presto-based) versions (order is important).
if (!version) {
  version = getVersion([
    '(?:Cloud9|CriOS|CrMo|Edge|EdgA|EdgiOS|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
    'Version',
    qualify(name),
    '(?:Firefox|Minefield|NetFront)'
  ]);
}
// Detect stubborn layout engines.
if ((data =
  layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
  /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
  /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
  !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
  layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
)) {
  layout = [data];
}
// Detect Windows Phone 7 desktop mode.
if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
  name += ' Mobile';
  os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
  description.unshift('desktop mode');
}
// Detect Windows Phone 8.x desktop mode.
else if (/\bWPDesktop\b/i.test(ua)) {
  name = 'IE Mobile';
  os = 'Windows Phone 8.x';
  description.unshift('desktop mode');
  version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
}
// Detect IE 11 identifying as other browsers.
else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
  if (name) {
    description.push('identifying as ' + name + (version ? ' ' + version : ''));
  }
  name = 'IE';
  version = data[1];
}
// Leverage environment features.
if (useFeatures) {
  // Detect server-side environments.
  // Rhino has a global function while others have a global object.
  if (isHostType(context, 'global')) {
    if (java) {
      data = java.lang.System;
      arch = data.getProperty('os.arch');
      os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
    }
    if (rhino) {
      try {
        version = context.require('ringo/engine').version.join('.');
        name = 'RingoJS';
      } catch (e) {
        if ((data = context.system) && data.global.system == context.system) {
          name = 'Narwhal';
          os || (os = data[0].os || null);
        }
      }
      if (!name) {
        name = 'Rhino';
      }
    }
    else if (
      typeof context.process == 'object' && !context.process.browser &&
      (data = context.process)
    ) {
      if (typeof data.versions == 'object') {
        if (typeof data.versions.electron == 'string') {
          description.push('Node ' + data.versions.node);
          name = 'Electron';
          version = data.versions.electron;
        } else if (typeof data.versions.nw == 'string') {
          description.push('Chromium ' + version, 'Node ' + data.versions.node);
          name = 'NW.js';
          version = data.versions.nw;
        }
      }
      if (!name) {
        name = 'Node.js';
        arch = data.arch;
        os = data.platform;
        version = /[\d.]+/.exec(data.version);
        version = version ? version[0] : null;
      }
    }
  }
  // Detect Adobe AIR.
  else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
    name = 'Adobe AIR';
    os = data.flash.system.Capabilities.os;
  }
  // Detect PhantomJS.
  else if (getClassOf((data = context.phantom)) == phantomClass) {
    name = 'PhantomJS';
    version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
  }
  // Detect IE compatibility modes.
  else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
    // We're in compatibility mode when the Trident version + 4 doesn't
    // equal the document mode.
    version = [version, doc.documentMode];
    if ((data = +data[1] + 4) != version[1]) {
      description.push('IE ' + version[1] + ' mode');
      layout && (layout[1] = '');
      version[1] = data;
    }
    version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
  }
  // Detect IE 11 masking as other browsers.
  else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
    description.push('masking as ' + name + ' ' + version);
    name = 'IE';
    version = '11.0';
    layout = ['Trident'];
    os = 'Windows';
  }
  os = os && format(os);
}
// Detect prerelease phases.
if (version && (data =
  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
  /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
  /\bMinefield\b/i.test(ua) && 'a'
)) {
  prerelease = /b/i.test(data) ? 'beta' : 'alpha';
  version = version.replace(RegExp(data + '\\+?$'), '') +
    (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
}
// Detect Firefox Mobile.
if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
  name = 'Firefox Mobile';
}
// Obscure Maxthon's unreliable version.
else if (name == 'Maxthon' && version) {
  version = version.replace(/\.[\d.]+/, '.x');
}
// Detect Xbox 360 and Xbox One.
else if (/\bXbox\b/i.test(product)) {
  if (product == 'Xbox 360') {
    os = null;
  }
  if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
    description.unshift('mobile mode');
  }
}
// Add mobile postfix.
else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
  (os == 'Windows CE' || /Mobi/i.test(ua))) {
  name += ' Mobile';
}
// Detect IE platform preview.
else if (name == 'IE' && useFeatures) {
  try {
    if (context.external === null) {
      description.unshift('platform preview');
    }
  } catch (e) {
    description.unshift('embedded');
  }
}
// Detect BlackBerry OS version.
// http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
  (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
  version
)) {
  data = [data, /BB10/.test(ua)];
  os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
  version = null;
}
// Detect Opera identifying/masking itself as another browser.
// http://www.opera.com/support/kb/view/843/
else if (this != forOwn && product != 'Wii' && (
  (useFeatures && opera) ||
  (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
  (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
  (name == 'IE' && (
    (os && !/^Win/.test(os) && version > 5.5) ||
    /\bWindows XP\b/.test(os) && version > 8 ||
    version == 8 && !/\bTrident\b/.test(ua)
  ))
) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
  // When "identifying", the UA contains both Opera and the other browser's name.
  data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
  if (reOpera.test(name)) {
    if (/\bIE\b/.test(data) && os == 'Mac OS') {
      os = null;
    }
    data = 'identify' + data;
  }
  // When "masking", the UA contains only the other browser's name.
  else {
    data = 'mask' + data;
    if (operaClass) {
      name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
    } else {
      name = 'Opera';
    }
    if (/\bIE\b/.test(data)) {
      os = null;
    }
    if (!useFeatures) {
      version = null;
    }
  }
  layout = ['Presto'];
  description.push(data);
}
// Detect WebKit Nightly and approximate Chrome/Safari versions.
if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
  // Correct build number for numeric comparison.
  // (e.g. "532.5" becomes "532.05")
  data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
  // Nightly builds are postfixed with a "+".
  if (name == 'Safari' && data[1].slice(-1) == '+') {
    name = 'WebKit Nightly';
    prerelease = 'alpha';
    version = data[1].slice(0, -1);
  }
  // Clear incorrect browser versions.
  else if (version == data[1] ||
    version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
    version = null;
  }
  // Use the full Chrome version when available.
  data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
  // Detect Blink layout engine.
  if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
    layout = ['Blink'];
  }
  // Detect JavaScriptCore.
  // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
  if (!useFeatures || (!likeChrome && !data[1])) {
    layout && (layout[1] = 'like Safari');
    data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
  } else {
    layout && (layout[1] = 'like Chrome');
    data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
  }
  // Add the postfix of ".x" or "+" for approximate versions.
  layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
  // Obscure version for some Safari 1-2 releases.
  if (name == 'Safari' && (!version || parseInt(version) > 45)) {
    version = data;
  }
}
// Detect Opera desktop modes.
if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
  name += ' ';
  description.unshift('desktop mode');
  if (data == 'zvav') {
    name += 'Mini';
    version = null;
  } else {
    name += 'Mobile';
  }
  os = os.replace(RegExp(' *' + data + '$'), '');
}
// Detect Chrome desktop mode.
else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
  description.unshift('desktop mode');
  name = 'Chrome Mobile';
  version = null;

  if (/\bOS X\b/.test(os)) {
    manufacturer = 'Apple';
    os = 'iOS 4.3+';
  } else {
    os = null;
  }
}
// Strip incorrect OS versions.
if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
  ua.indexOf('/' + data + '-') > -1) {
  os = trim(os.replace(data, ''));
}
// Add layout engine.
if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
  /Browser|Lunascape|Maxthon/.test(name) ||
  name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
  /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
  // Don't add layout details to description if they are falsey.
  (data = layout[layout.length - 1]) && description.push(data);
}
// Combine contextual information.
if (description.length) {
  description = ['(' + description.join('; ') + ')'];
}
// Append manufacturer to description.
if (manufacturer && product && product.indexOf(manufacturer) < 0) {
  description.push('on ' + manufacturer);
}
// Append product to description.
if (product) {
  description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
}
// Parse the OS into an object.
if (os) {
  data = / ([\d.+]+)$/.exec(os);
  isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
  os = {
    'architecture': 32,
    'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
    'version': data ? data[1] : null,
    'toString': function () {
      var version = this.version;
      return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
    }
  };
}
// Add browser/OS architecture.
if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
  if (os) {
    os.architecture = 64;
    os.family = os.family.replace(RegExp(' *' + data), '');
  }
  if (
    name && (/\bWOW64\b/i.test(ua) ||
      (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
  ) {
    description.unshift('32-bit');
  }
}
// Chrome 39 and above on OS X is always 64-bit.
else if (
  os && /^OS X/.test(os.family) &&
  name == 'Chrome' && parseFloat(version) >= 39
) {
  os.architecture = 64;
}

ua || (ua = null);

/*------------------------------------------------------------------------*/

/**
 * The platform object.
 *
 * @name platform
 * @type Object
 */
var platform = {};

/**
 * The platform description.
 *
 * @memberOf platform
 * @type string|null
 */
platform.description = ua;

/**
 * The name of the browser's layout engine.
 *
 * The list of common layout engines include:
 * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
 *
 * @memberOf platform
 * @type string|null
 */
platform.layout = layout && layout[0];

/**
 * The name of the product's manufacturer.
 *
 * The list of manufacturers include:
 * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
 * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
 * "Nokia", "Samsung" and "Sony"
 *
 * @memberOf platform
 * @type string|null
 */
platform.manufacturer = manufacturer;

/**
 * The name of the browser/environment.
 *
 * The list of common browser names include:
 * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
 * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
 * "Opera Mini" and "Opera"
 *
 * Mobile versions of some browsers have "Mobile" appended to their name:
 * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
 *
 * @memberOf platform
 * @type string|null
 */
platform.name = name;

/**
 * The alpha/beta release indicator.
 *
 * @memberOf platform
 * @type string|null
 */
platform.prerelease = prerelease;

/**
 * The name of the product hosting the browser.
 *
 * The list of common products include:
 *
 * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
 * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
 *
 * @memberOf platform
 * @type string|null
 */
platform.product = product;

/**
 * The browser's user agent string.
 *
 * @memberOf platform
 * @type string|null
 */
platform.ua = ua;

/**
 * The browser/environment version.
 *
 * @memberOf platform
 * @type string|null
 */
platform.version = name && version;

/**
 * The name of the operating system.
 *
 * @memberOf platform
 * @type Object
 */
platform.os = os || {

  /**
   * The CPU architecture the OS is built for.
   *
   * @memberOf platform.os
   * @type number|null
   */
  'architecture': null,

  /**
   * The family of the OS.
   *
   * Common values include:
   * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
   * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
   * "Android", "iOS" and "Windows Phone"
   *
   * @memberOf platform.os
   * @type string|null
   */
  'family': null,

  /**
   * The version of the OS.
   *
   * @memberOf platform.os
   * @type string|null
   */
  'version': null,

  /**
   * Returns the OS string.
   *
   * @memberOf platform.os
   * @returns {string} The OS string.
   */
  'toString': function () { return 'null'; }
};

platform.parse = parse;
platform.toString = toStringPlatform;

if (platform.version) {
  description.unshift(version);
}
if (platform.name) {
  description.unshift(name);
}
if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
  description.push(product ? '(' + os + ')' : 'on ' + os);
}
if (description.length) {
  platform.description = description.join(' ');
}

// Some AMD build optimizers, like r.js, check for condition patterns like the following:
if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
  // Expose platform on the global object to prevent errors when platform is
  // loaded by a script tag in the presence of an AMD loader.
  // See http://requirejs.org/docs/errors.html#mismatch for more details.
  root.platform = platform;

  // Define as an anonymous module so platform can be aliased through path mapping.
  define(function () {
    return platform;
  });
}
// Check for `exports` after `define` in case a build optimizer adds an `exports` object.
else if (freeExports && freeModule) {
  // Export for CommonJS support.
  forOwn(platform, function (value, key) {
    freeExports[key] = value;
  });
}
else {
  // Export to the global object.
  root.platform = platform;
}
