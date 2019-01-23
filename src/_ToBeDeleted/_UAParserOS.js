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
      },
    },
  },
};

const os = [[

  // Windows based
  /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
], [NAME, VERSION], [

  // Mobile/Embedded OS
  /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
  // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
  /linux;.+(sailfish);/i                                              // Sailfish OS
], [NAME, VERSION], [
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


  // BSD based
  /\s([frentopc-]{3,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
], [NAME, VERSION], [

  /(haiku)\s(\w+)/i                                                   // Haiku
], [NAME, VERSION], [

  /cfnetwork\/.+darwin/i,
], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [


  // Other
  /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
