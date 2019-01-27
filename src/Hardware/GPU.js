import CssFlagsClass from '../Core/CssFlagsClass';

/**
 *
 *
 * @export
 * @class GPU
 * @extends {CssFlagsClass}
 */
export default class GPU extends CssFlagsClass {
  /**
   * Creates an instance of GPU.
   * @param {any} [ua=window.navigator.userAgent]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='gpu']
   *
   * @memberOf GPU
   */
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'gpu') {
    super(ua, flags, cssFlagsPrefix);

    this._info = this.getInfo();

    this.webGLVendor = this._info.webGLVendor;
    this.webGLRenderer = this._info.webGLRenderer;
    this.vendor = this._info.vendor;
    this.model = this._info.model;
    this.renderer = this._info.renderer;
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf GPU
   */
  getInfo() {
    const info = {
      webGLVendor: 'u/a',
      webGLRenderer: 'u/a',
      vendor: 'u/a',
      model: 'u/a',
      renderer: 'u/a',
    };

    try {
      const canvas = document.createElement('canvas');
      const webGLContext = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

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
    } catch(e) {
      console.warn('webGL is not supported', e.message);
    }

    return info;
  }
}
