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
   * @param {any} [ua=window.navigator.userAgent]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='video']
   *
   * @memberOf VideoFeature
   */
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'video') {
    super(ua, flags, cssFlagsPrefix);

    this._createTestElements();

    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm(),
    };

    // remove unnecessary memory usage
    delete this._flags;
  }

  /**
   *
   *
   * @memberof VideoFeature
   */
  _createTestElements() {
    this._videoElement = document.createElement('video');
  }

  /**
   *
   *
   * @memberof VideoFeature
   */
  _destroyTestElements() {
    this._videoElement = null;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf VideoFeature
   */
  get supported() {
    return Asserts.all([
      'HTMLVideoElement' in window,
      'HTMLMediaElement' in window,
      () => !!this._videoElement && 'canPlayType' in this._videoElement && this._videoElement instanceof window.HTMLVideoElement && this._videoElement instanceof window.HTMLMediaElement,
    ]);
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
