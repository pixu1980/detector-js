import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

/**
 *
 *
 * @export
 * @class AudioFeature
 * @extends {CssFlagsClass}
 */
export default class AudioFeature extends CssFlagsClass {
  /**
   * Creates an instance of AudioFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='audio']
   *
   * @memberOf AudioFeature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = 'audio') {
    super(ua, flags, cssFlagsPrefix);

    // Mimetypes accepted:
    //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
    //   bit.ly/iphoneoscodecs

    this._createTestElements();

    this.context = this.getContext();

    this.formats = {
      mp3: this.getMp3(),
      webm: this.getWebm(),
      ogg: this.getOgg(),
      opus: this.getOpus(),
      wav: this.getWav(),
      m4a: this.getM4a(),
    };
  }

  /**
   *
   *
   * @memberof AudioFeature
   */
  _createTestElements() {
    this._audioElement = this._document.createElement('audio');
  }

  /**
   *
   *
   * @memberof AudioFeature
   */
  _destroyTestElements() {
    this._audioElement = null;
  }

  /**
   *
   *
   * @readonly
   *
   * @memberOf AudioFeature
   */
  get supported() {
    return Asserts.all([
      'Audio' in this._root,
      'HTMLAudioElement' in this._root,
      'HTMLMediaElement' in this._root,
      () => !!this._audioElement && 'canPlayType' in this._audioElement && this._audioElement instanceof this._root.HTMLAudioElement && this._audioElement instanceof this._root.HTMLMediaElement,
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getContext() {
    return Asserts.one([
      'AudioContext' in this._root,
      'webkitAudioContext' in this._root,
    ]);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getMp3() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWebm() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOgg() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOpus() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWav() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== '',
    ], true);
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getM4a() {
    return Asserts.all([
      () => this.supported && (this._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || this._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== '',
    ], true);
  }
}
