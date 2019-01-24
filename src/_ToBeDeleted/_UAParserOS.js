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
  // Console
  /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation
