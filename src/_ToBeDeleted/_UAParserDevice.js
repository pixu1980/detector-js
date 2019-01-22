const device = [[

  /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
], [MODEL, VENDOR, [TYPE, TABLET]], [

  /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

  /(apple\s{0,1}tv)/i                                                 // Apple TV
], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

  /(archos)\s(gamepad2?)/i,                                           // Archos
  /(hp).+(touchpad)/i,                                                // HP TouchPad
  /(hp).+(tablet)/i,                                                  // HP Tablet
  /(kindle)\/([\w\.]+)/i,                                             // Kindle
  /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
  /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
], [VENDOR, MODEL, [TYPE, TABLET]], [

  /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
  /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
  /android.+aft([bms])\sbuild/i                                       // Fire TV
], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

  /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
], [MODEL, VENDOR, [TYPE, MOBILE]], [
  /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

  /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
  // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
  /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
  /(asus)-?(\w+)/i                                                    // Asus
], [VENDOR, MODEL, [TYPE, MOBILE]], [
  /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
  // Asus Tablets
  /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

  /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
  /(sony)?(?:sgp.+)\sbuild\//i
], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
  /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

  /\s(ouya)\s/i,                                                      // Ouya
  /(nintendo)\s([wids3u]+)/i                                          // Nintendo
], [VENDOR, MODEL, [TYPE, CONSOLE]], [

  /android.+;\s(shield)\sbuild/i                                      // Nvidia
], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

  /(playstation\s[34portablevi]+)/i                                   // Playstation
], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

  /(sprint\s(\w+))/i                                                  // Sprint Phones
], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

  /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
], [VENDOR, MODEL, [TYPE, TABLET]], [

  /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
  /(zte)-(\w*)/i,                                                     // ZTE
  /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
  // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

  /(nexus\s9)/i                                                       // HTC Nexus 9
], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

  /d\/huawei([\w\s-]+)[;\)]/i,
  /(nexus\s6p)/i                                                      // Huawei
], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

  /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
], [VENDOR, MODEL, [TYPE, MOBILE]], [

  /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
  /(kin\.[onetw]{3})/i                                                // Microsoft Kin
], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

  // Motorola
  /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
  /mot[\s-]?(\w*)/i,
  /(XT\d{3,4}) build\//i,
  /(nexus\s6)/i
], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
  /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

  /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

  /hbbtv.+maple;(\d+)/i
], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

  /\(dtv[\);].+(aquos)/i                                              // Sharp
], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

  /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
  /((SM-T\w+))/i
], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
  /smart-tv.+(samsung)/i
], [VENDOR, [TYPE, SMARTTV], MODEL], [
  /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
  /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
  /sec-((sgh\w+))/i
], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

  /sie-(\w*)/i                                                        // Siemens
], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

  /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
  /(nokia)[\s_-]?([\w-]*)/i
], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

  /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

  /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
  /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
  /(lg) netcast\.tv/i                                                 // LG SmartTV
], [VENDOR, MODEL, [TYPE, SMARTTV]], [
  /(nexus\s[45])/i,                                                   // LG
  /lg[e;\s\/-]+(\w*)/i,
  /android.+lg(\-?[\d\w]+)\s+build/i
], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

  /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

  /linux;.+((jolla));/i                                               // Jolla
], [VENDOR, MODEL, [TYPE, MOBILE]], [

  /((pebble))app\/[\d\.]+\s/i                                         // Pebble
], [VENDOR, MODEL, [TYPE, WEARABLE]], [

  /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
], [VENDOR, MODEL, [TYPE, MOBILE]], [

  /crkey/i                                                            // Google Chromecast
], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

  /android.+;\s(glass)\s\d/i                                          // Google Glass
], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

  /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

  /android.+;\s(pixel( [23])?( xl)?)\s/i                              // Google Pixel
], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

  /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
  /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
  /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    // Xiaomi Mi
  /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
  /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
  /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu Tablet
], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [
  /(mz)-([\w-]{2,})/i                                                 // Meizu Phone
], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

  /android.+a000(1)\s+build/i,                                        // OnePlus
  /android.+oneplus\s(a\d{4})\s+build/i
], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

  /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

  /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

  /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

  /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

  /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

  /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

  /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

  /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

  /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

  /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
  /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

  /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

  /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

  /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

  /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

  /android.+;\s(PH-1)\s/i
], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

  /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

  /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
], [VENDOR, MODEL, [TYPE, TABLET]], [

  /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

  /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
], [VENDOR, MODEL, [TYPE, TABLET]], [

  /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

  /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

  /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
], [VENDOR, MODEL, [TYPE, TABLET]], [

  /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
  /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
], [[TYPE, util.lowerize], VENDOR, MODEL], [

  /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
], [[TYPE, SMARTTV]], [

  /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
], [MODEL, [VENDOR, 'Generic']]


  /*//////////////////////////
    // TODO: move to string map
    ////////////////////////////

    /(C6603)/i                                                          // Sony Xperia Z C6603
    ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
    /(C6903)/i                                                          // Sony Xperia Z 1
    ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

    /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
    ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
    /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
    ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
    /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
    ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
    /(SM-G313HZ)/i                                                      // Samsung Galaxy V
    ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
    /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
    ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
    /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
    ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
    /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
    ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

    /(T3C)/i                                                            // Advan Vandroid T3C
    ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
    /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
    ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
    /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
    ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

    /(V972M)/i                                                          // ZTE V972M
    ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

    /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
    ], [VENDOR, MODEL, [TYPE, MOBILE]], [
    /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
    ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
    /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
    ], [VENDOR, MODEL, [TYPE, MOBILE]], [
    /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
    ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

    /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
    ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

    /////////////
    // END TODO
    ///////////*/
];
