import FlagsClass from '../Core/FlagsClass';

export default class GPU extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'gpu') {
    super(ua, cssFlagsPrefix);

    this._info = this.getInfo();

    this.webGLVendor = this._info.webGLVendor;
    this.webGLRenderer = this._info.webGLRenderer;
    this.vendor = this._info.vendor;
    this.model = this._info.model;
    this.renderer = this._info.renderer;
  }

  getInfo() {
    const info = {
      webGLVendor: 'unknown',
      webGLRenderer: 'unknown',
      vendor: 'unknown',
      model: 'unknown',
      renderer: 'unknown',
    };

    const canvas = document.createElement('canvas');
    const webGLContext = canvas.getContext('experimental-webgl');

    if (webGLContext) {
      const dbgRenderInfo = webGLContext.getExtension('WEBGL_debug_renderer_info');

      if (dbgRenderInfo != null) {
        info.merge({
          vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
          model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(' OpenGL Engine', ''),
          renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL),
        });
      }

      info.merge({
        webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
        webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER),
      });
    }

    return info;
  }
}
