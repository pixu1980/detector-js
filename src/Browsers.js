export default class Browsers {
  constructor(ua = window.navigator.userAgent) {
    this.ua = ua;
  }

  get Electron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
      return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
      return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof window.navigator === 'object' && typeof this.ua === 'string' && this.ua.indexOf('Electron') >= 0) {
      return true;
    }

    return false;
  }
}
