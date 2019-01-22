import FlagsClass from '../Core/FlagsClass';

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
    const asserts = [
      !!window.Audio,
      !!this._audioElement,
      this._audioElement instanceof window.HTMLAudioElement && this._audioElement instanceof window.HTMLMediaElement,
      !!this._audioElement.canPlayType,
    ];

    return asserts.every(assert => !!assert);
  }

  getContext() {
    return !!window.AudioContext;
  }

  getMp3() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getWebm() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getOgg() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getOpus() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getWav() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getM4a() {
    if (this.supported) {
      return (this._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || this._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== '';
    }

    return false;
  }
}
