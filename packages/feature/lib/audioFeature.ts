import { Asserts, CssFlagsClass } from '@detector-js/core';

/**
 *
 *
 * @export
 * @class AudioFeature
 * @extends {CssFlagsClass}
 */
export class AudioFeature extends CssFlagsClass {
  #audioElement: HTMLAudioElement;

  context: boolean;

  formats: {
    mp3: boolean;
    webm: boolean;
    ogg: boolean;
    opus: boolean;
    wav: boolean;
    m4a: boolean;
  };

  /**
   * Creates an instance of AudioFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='audio']
   *
   * @memberOf AudioFeature
   */
  constructor(ua: string | null = null, flags = {}, cssFlagsPrefix = 'audio') {
    super(ua, flags, cssFlagsPrefix);

    this.#createTestElements();

    this.context = this.getContext();

    this.formats = {
      mp3: this.getMp3(),
      webm: this.getWebm(),
      ogg: this.getOgg(),
      opus: this.getOpus(),
      wav: this.getWav(),
      m4a: this.getM4a()
    };
  }

  /**
   *
   *
   * @memberof AudioFeature
   */
  #createTestElements() {
    this.#audioElement = this.document.createElement('audio');
  }

  // /**
  //  *
  //  *
  //  * @memberof AudioFeature
  //  */
  // _destroyTestElements() {
  //   this.#audioElement = null;

  //   delete this.#audioElement;
  // }

  /**
   *
   *
   * @readonly
   *
   * @memberOf AudioFeature
   */
  get supported() {
    return Asserts.all(
      [
        'Audio' in this.root,
        'HTMLAudioElement' in this.root,
        'HTMLMediaElement' in this.root,
        () =>
          !!this.#audioElement &&
          'canPlayType' in this.#audioElement &&
          this.#audioElement instanceof HTMLAudioElement &&
          this.#audioElement instanceof HTMLMediaElement
      ],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getContext() {
    return Asserts.one(['AudioContext' in this.root, 'webkitAudioContext' in this.root]);
  }

  /**
   *__
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getMp3() {
    return Asserts.all(
      [() => this.supported && this.#audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== ''],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWebm() {
    return Asserts.all(
      [
        () => this.supported && this.#audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== ''
      ],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOgg() {
    return Asserts.all(
      [() => this.supported && this.#audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== ''],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOpus() {
    return Asserts.all(
      [() => this.supported && this.#audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== ''],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWav() {
    return Asserts.all(
      [() => this.supported && this.#audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== ''],
      true
    );
  }

  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getM4a() {
    return Asserts.all(
      [
        () =>
          this.supported &&
          (this.#audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') ||
            this.#audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== ''
      ],
      true
    );
  }
}
