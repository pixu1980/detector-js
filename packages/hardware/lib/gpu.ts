import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class GPU
 * @extends {CssFlagsClass}
 */
export class GPU extends CssFlagsClass {
  webGLVendor: string;
  webGLRenderer: string;
  vendor: string;
  model: string;
  renderer: string;

  #canvas: HTMLCanvasElement;
  #info: { webGLVendor: string; webGLRenderer: string; vendor: string; model: string; renderer: string };

  /**
   * Creates an instance of GPU.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='gpu']
   *
   * @memberOf GPU
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'gpu') {
    super(ua, flags, cssFlagsPrefix);

    this.#createTestElements();

    this.webGLVendor = this.#info.webGLVendor;
    this.webGLRenderer = this.#info.webGLRenderer;
    this.vendor = this.#info.vendor;
    this.model = this.#info.model;
    this.renderer = this.#info.renderer;
  }

  /**
   *
   *
   *
   * @memberOf GPU
   */
  #createTestElements() {
    this.#canvas = this.document.createElement('canvas');
    this.#info = this.getInfo();
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
      const webGLContext: WebGLRenderingContext | RenderingContext =
        this.#canvas.getContext('webgl')! ?? this.#canvas.getContext('experimental-webgl')!;

      if (webGLContext) {
        const dbgRenderInfo = webGLContext.getExtension('WEBGL_debug_renderer_info');

        if (dbgRenderInfo != null) {
          // @ts-ignore
          info.merge({
            vendor: webGLContext.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL),
            model: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL).replace(' OpenGL Engine', ''),
            renderer: webGLContext.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
          });
        }

        // @ts-ignore
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
