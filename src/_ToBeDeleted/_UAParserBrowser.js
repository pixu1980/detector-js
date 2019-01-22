const browser = [[
  // Presto based
  /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
  /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
  /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
  /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
], [NAME, VERSION], [
  /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
], [[NAME, 'Opera Mini'], VERSION], [
  /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
], [[NAME, 'Opera'], VERSION], [

  // Mixed
  /(kindle)\/([\w\.]+)/i,                                             // Kindle
  /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
  // Lunascape/Maxthon/Netfront/Jasmine/Blazer

  // Trident based
  /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
  // Avant/IEMobile/SlimBrowser/Baidu
  /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

  // Webkit/KHTML based
  /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
  /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
  // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
], [NAME, VERSION], [

  /(konqueror)\/([\w\.]+)/i                                           // Konqueror
], [[NAME, 'Konqueror'], VERSION], [

  /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
], [[NAME, 'IE'], VERSION], [

  /(edge|edgios|edga)\/((\d+)?[\w\.]+)/i                              // Microsoft Edge
], [[NAME, 'Edge'], VERSION], [

  /(yabrowser)\/([\w\.]+)/i                                           // Yandex
], [[NAME, 'Yandex'], VERSION], [

  /(puffin)\/([\w\.]+)/i                                              // Puffin
], [[NAME, 'Puffin'], VERSION], [

  /(focus)\/([\w\.]+)/i                                               // Firefox Focus
], [[NAME, 'Firefox Focus'], VERSION], [

  /(opt)\/([\w\.]+)/i                                                 // Opera Touch
], [[NAME, 'Opera Touch'], VERSION], [

  /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
], [[NAME, 'UCBrowser'], VERSION], [

  /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
], [[NAME, /_/g, ' '], VERSION], [

  /(micromessenger)\/([\w\.]+)/i                                      // WeChat
], [[NAME, 'WeChat'], VERSION], [

  /(brave)\/([\w\.]+)/i                                              // Brave browser
], [[NAME, 'Brave'], VERSION], [

  /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
], [NAME, VERSION], [

  /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
], [NAME, VERSION], [

  /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
], [NAME, VERSION], [

  /(BIDUBrowser)[\/\s]?([\w\.]+)/i                                    // Baidu Browser
], [NAME, VERSION], [

  /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
], [NAME, VERSION], [

  /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
], [NAME], [

  /(LBBROWSER)/i                                      // LieBao Browser
], [NAME], [

  /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
], [VERSION, [NAME, 'MIUI Browser']], [

  /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
], [VERSION, [NAME, 'Facebook']], [

  /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
  /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
], [NAME, VERSION], [

  /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
], [VERSION, [NAME, 'Chrome Headless']], [

  /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

  /((?:oculus|samsung)browser)\/([\w\.]+)/i
], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

  /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
], [VERSION, [NAME, 'Android Browser']], [

  /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
  // Chrome/OmniWeb/Arora/Tizen/Nokia
], [NAME, VERSION], [

  /(dolfin)\/([\w\.]+)/i                                              // Dolphin
], [[NAME, 'Dolphin'], VERSION], [

  /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
], [[NAME, 'Chrome'], VERSION], [

  /(coast)\/([\w\.]+)/i                                               // Opera Coast
], [[NAME, 'Opera Coast'], VERSION], [

  /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
], [VERSION, [NAME, 'Firefox']], [

  /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
], [VERSION, [NAME, 'Mobile Safari']], [

  /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
], [VERSION, NAME], [

  /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
], [[NAME, 'GSA'], VERSION], [

  /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

  /(webkit|khtml)\/([\w\.]+)/i
], [NAME, VERSION], [

  // Gecko based
  /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
], [[NAME, 'Netscape'], VERSION], [
  /(swiftfox)/i,                                                      // Swiftfox
  /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
  // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
  /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

  // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
  /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

  // Other
  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
  // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
  /(links)\s\(([\w\.]+)/i,                                            // Links
  /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
  /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
  /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
], [NAME, VERSION]

  /* /////////////////////
  // Media players BEGIN
  ////////////////////////

  , [

  /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
  /(coremedia) v((\d+)[\w\._]+)/i
  ], [NAME, VERSION], [

  /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
  ], [NAME, VERSION], [

  /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
  ], [NAME, VERSION], [

  /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                      // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                      // NSPlayer/PSP-InternetRadioPlayer/Videos
  /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
  /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
  /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
  ], [NAME, VERSION], [
  /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
  ], [NAME, VERSION], [

  /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
  ], [[NAME, 'Flip Player'], VERSION], [

  /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                      // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
  ], [NAME], [

  /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                      // Gstreamer
  ], [NAME, VERSION], [

  /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
  /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                      // Java/urllib/requests/wget/cURL
  /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
  ], [NAME, VERSION], [

  /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
  ], [[NAME, /_/g, ' '], VERSION], [

  /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                      // MPlayer SVN
  ], [NAME, VERSION], [

  /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
  ], [NAME, VERSION], [

  /(mplayer)/i,                                                       // MPlayer (no other info)
  /(yourmuze)/i,                                                      // YourMuze
  /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
  ], [NAME], [

  /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
  ], [NAME, VERSION], [

  /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
  ], [NAME, VERSION], [

  /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
  ], [NAME, VERSION], [

  /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
  /(winamp)\s((\d+)[\w\.-]+)/i,
  /(winamp)mpeg\/((\d+)[\w\.-]+)/i
  ], [NAME, VERSION], [

  /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                      // inlight radio
  ], [NAME], [

  /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                      // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                      // SoundTap/Totem/Stagefright/Streamium
  ], [NAME, VERSION], [

  /(smp)((\d+)[\d\.]+)/i                                              // SMP
  ], [NAME, VERSION], [

  /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
  /(vlc)\/((\d+)[\w\.-]+)/i,
  /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
  /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
  /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
  ], [NAME, VERSION], [

  /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
  /(windows-media-player)\/((\d+)[\w\.-]+)/i
  ], [[NAME, /-/g, ' '], VERSION], [

  /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                      // Windows Media Server
  ], [VERSION, [NAME, 'Windows']], [

  /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
  ], [NAME, VERSION], [

  /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
  /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
  ], [[NAME, 'rad.io'], VERSION]

  //////////////////////
  // Media players END
  ////////////////////*/
];

