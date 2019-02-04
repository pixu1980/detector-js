import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class VideoFeature
 * @extends {CssFlagsClass}
 */
export default class VideoFeature extends CssFlagsClass {
  /**
   * Creates an instance of VideoFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='video']
   *
   * @memberOf VideoFeature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'video') {
    super(ua, flags, cssFlagsPrefix);

    this._createTestElements();

    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm(),
    };
  }

  /**
   *
   *
   * @memberof VideoFeature
   */
  _createTestElements() {
    this._videoElement = this._document.createElement('video');
  }

  // /**
  //  *
  //  *
  //  * @memberof VideoFeature
  //  */
  // _destroyTestElements() {
  //   this._viewElement = null;

  //   delete this._videoElement;
  // }

  /**
   *
   *
   * @readonly
   *
   * @memberOf VideoFeature
   */
  get supported() {
    return Asserts.all([
      'HTMLVideoElement' in this._root,
      'HTMLMediaElement' in this._root,
      () => !!this._videoElement && 'canPlayType' in this._videoElement && this._videoElement instanceof this._root.HTMLVideoElement && this._videoElement instanceof this._root.HTMLMediaElement,
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getMp4() {
    return Asserts.all([
      () => this.supported && this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getOgv() {
    return Asserts.all([
      () => this.supported && this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getWebm() {
    return Asserts.all([
      () => this.supported && this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }
}
