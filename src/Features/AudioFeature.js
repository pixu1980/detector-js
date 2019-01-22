import FlagsClass from '../Core/FlagsClass';

export default class AudioFeature extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'audio') {
    super(ua, cssFlagsPrefix);

    this._window.AudioContext = this._window.AudioContext || this._window.webkitAudioContext;
    this._audioElement = document.createElement('audio');
  }

  get supported() {
    const asserts = [
      !!this._window.Audio,
      !!this._audioElement,
      this._audioElement instanceof this._window.HTMLAudioElement && this._audioElement instanceof this._window.HTMLMediaElement,
      !!this._audioElement.canPlayType,
    ];

    return asserts.every(assert => !!assert);
  }

  get context() {
    return !!this._window.AudioContext;
  }

  get ogg() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  get opus() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  get mp3() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '') !== '';
    }

    return false;
  }

  // Mimetypes accepted:
  //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
  //   bit.ly/iphoneoscodecs
  get wav() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  get m4a() {
    if (this.supported) {
      return (this._audioElement.canPlayType('audio/x-m4a;').replace(/^no$/, '') || this._audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) !== '';
    }

    return false;
  }

  get webm() {
    if (this.supported) {
      return this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }
}
