import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class VideoFeature
 * @extends {CssFlagsClass}
 */
export class VideoFeature extends CssFlagsClass {
  #videoElement: HTMLVideoElement;

  formats: {
    mp4: boolean;
    ogv: boolean;
    webm: boolean;
  };

  /**
   * Creates an instance of VideoFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='video']
   *
   * @memberOf VideoFeature
   */
  constructor(ua: string|null = null, flags = {}, cssFlagsPrefix = 'video') {
    super(ua, flags, cssFlagsPrefix);

    this._createTestElements();

    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm()
    };
  }

  /**
   *
   *
   * @memberof VideoFeature
   */
  _createTestElements() {
    this.#videoElement = this.document.createElement('video');
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
    return Asserts.all(
      [
        'HTMLVideoElement' in this.root,
        'HTMLMediaElement' in this.root,
        () =>
          !!this.#videoElement &&
          'canPlayType' in this.#videoElement &&
          this.#videoElement instanceof HTMLVideoElement &&
          this.#videoElement instanceof HTMLMediaElement
      ],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getMp4() {
    return Asserts.all(
      [
        () =>
          this.supported &&
          this.#videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== ''
      ],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getOgv() {
    return Asserts.all(
      [
        () =>
          this.supported &&
          this.#videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== ''
      ],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getWebm() {
    return Asserts.all(
      [
        () =>
          this.supported &&
          this.#videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== ''
      ],
      true
    );
  }
}
