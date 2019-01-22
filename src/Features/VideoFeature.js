import FlagsClass from '../Core/FlagsClass';

export default class VideoFeature extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'video') {
    super(ua, cssFlagsPrefix);

    this._videoElement = document.createElement('video');
  }

  get supported() {
    const asserts = [
      !!this._videoElement,
      this._videoElement instanceof this._window.HTMLVideoElement && this._videoElement instanceof this._window.HTMLMediaElement,
      !!this._videoElement.canPlayType,
    ];

    return asserts.every(assert => !!assert);
  }

  get mp4() {
    if(this.supported) {
      return this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  get ogv() {
    if(this.supported) {
      return this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  get webm() {
    if(this.supported) {
      return this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }
}
