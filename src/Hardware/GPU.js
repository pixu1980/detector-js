import CssFlagsClass from '../core/cssFlagsClass';

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
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='gpu']
   *
   * @memberOf GPU
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'gpu') {
    super(ua, flags, cssFlagsPrefix);

    this._createTestElements();

    this.webGLVendor = this._info.webGLVendor;
    this.webGLRenderer = this._info.webGLRenderer;
    this.vendor = this._info.vendor;
    this.model = this._info.model;
    this.renderer = this._info.renderer;
  }

  /**
   *
   *
   *
   * @memberOf GPU
   */
  _createTestElements() {
    this._canvas = this._document.createElement('canvas');
    this._info = this.getInfo();
  }

  // /**
  //  *
  //  *
  //  *
  //  * @memberOf GPU
  //  */
  // _destroyTestElements() {
  //   this._canvas = null;
  //   this._info = null;

  //   delete this._canvas;
  //   delete this._info;
  // }

  /**
   *
   *
   * @returns object
   *
   * @memberOf GPU
   */
  getInfo() {
    const info = {
      webGLVendor: 'n/a',
      webGLRenderer: 'n/a',
      vendor: 'n/a',
      model: 'n/a',
      renderer: 'n/a'
    };

    try {
      const webGLContext = this._canvas.getContext('webgl') || this._canvas.getContext('experimental-webgl');

      if (webGLContext) {
        const dbgRenderInfo = webGLContext.getExtension('WEBGL_debug_renderer_info');

        if (dbgRenderInfo != null) {
          info.merge({
            vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
            model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(' OpenGL Engine', ''),
            renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
          });
        }

        info.merge({
          webGLVendor: webGLContext.getParameter(webGLContext.VENDOR),
          webGLRenderer: webGLContext.getParameter(webGLContext.RENDERER)
        });
      }
    } catch (e) {
      console.warn('webGL is not supported', e.message);
    }

    return info;
  }
}
