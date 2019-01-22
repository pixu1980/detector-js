import FlagsClass from '../Core/FlagsClass';
import Asserts from '../Utils/Asserts';

export default class AudioFeature extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'audio') {
    super(ua, cssFlagsPrefix);

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this._audioElement = document.createElement('audio');

    // Mimetypes accepted:
    //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
    //   bit.ly/iphoneoscodecs

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

  get supported() {
    return Asserts.all([
      !!window.Audio,
      !!this._audioElement,
      this._audioElement instanceof window.HTMLAudioElement && this._audioElement instanceof window.HTMLMediaElement,
      !!this._audioElement.canPlayType,
    ]);
  }

  getContext() {
    return Asserts.all([
      !!window.AudioContext,
    ]);
  }

  getMp3() {
    return Asserts.all([
      this.supported,
      this._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== '',
    ], true);
  }

  getWebm() {
    return Asserts.all([
      this.supported,
      this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }

  getOgg() {
    return Asserts.all([
      this.supported,
      this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }

  getOpus() {
    return Asserts.all([
      this.supported,
      this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== '',
    ], true);
  }

  getWav() {
    return Asserts.all([
      this.supported,
      this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== '',
    ], true);
  }

  getM4a() {
    return Asserts.all([
      this.supported,
      (this._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || this._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== '',
    ], true);
  }
}
