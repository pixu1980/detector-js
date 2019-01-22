/* eslint-disable quote-props */
const osMaps = {
  browser: {
    oldsafari: {
      version: {
        '1.0': '/8',
        '1.2': '/1',
        '1.3': '/3',
        '2.0': '/412',
        '2.0.2': '/416',
        '2.0.3': '/417',
        '2.0.4': '/419',
        '?': '/',
      },
    },
  },
  device: {
    amazon: {
      model: {
        'Fire Phone': ['SD', 'KF'],
      },
    },
    sprint: {
      model: {
        'Evo Shift 4G': '7373KT',
      },
      vendor: {
        'HTC': 'APA',
        'Sprint': 'Sprint',
      },
    },
  },
  os: {
    windows: {
      version: {
        'ME': '4.90',
        'NT 3.11': 'NT3.51',
        'NT 4.0': 'NT4.0',
        '2000': 'NT 5.0',
        'XP': ['NT 5.1', 'NT 5.2'],
        'Vista': 'NT 6.0',
        '7': 'NT 6.1',
        '8': 'NT 6.2',
        '8.1': 'NT 6.3',
        '10': ['NT 6.4', 'NT 10.0'],
        'RT': 'ARM',
      },
    },
  },
};

const os = [[

  // Windows based
  /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
], [NAME, VERSION], [
  /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
  /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
  /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
  /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

  // Mobile/Embedded OS
  /\((bb)(10);/i                                                      // BlackBerry 10
], [[NAME, 'BlackBerry'], VERSION], [
  /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
  /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
  /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
  // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
  /linux;.+(sailfish);/i                                              // Sailfish OS
], [NAME, VERSION], [
  /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
], [[NAME, 'Symbian'], VERSION], [
  /\((series40);/i                                                    // Series 40
], [NAME], [
  /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
], [[NAME, 'Firefox OS'], VERSION], [

  // Console
  /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

  // GNU/Linux based
  /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
  /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
  /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
  // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
  // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
  /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
  /(gnu)\s?([\w\.]*)/i                                                // GNU
], [NAME, VERSION], [

  /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
], [[NAME, 'Chromium OS'], VERSION], [

  // Solaris
  /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
], [[NAME, 'Solaris'], VERSION], [

  // BSD based
  /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
], [NAME, VERSION], [

  /(haiku)\s(\w+)/i                                                   // Haiku
], [NAME, VERSION], [

  /cfnetwork\/.+darwin/i,
  /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

  /(mac\sos\sx)\s?([\w\s\.]*)/i,
  /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

  // Other
  /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
  /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
  /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
  // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
  /(unix)\s?([\w\.]*)/i                                               // UNIX
], [NAME, VERSION]
];
