import FlagsClass from '../Core/FlagsClass';

export default class VideoFeature extends FlagsClass {
  constructor(ua = window.navigator.userAgent, cssFlagsPrefix = 'video') {
    super(ua, cssFlagsPrefix);

    this._videoElement = document.createElement('video');

    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm(),
    };
  }

  get supported() {
    const asserts = [
      !!this._videoElement,
      this._videoElement instanceof window.HTMLVideoElement && this._videoElement instanceof window.HTMLMediaElement,
      !!this._videoElement.canPlayType,
    ];

    return asserts.every(assert => !!assert);
  }

  getMp4() {
    if(this.supported) {
      return this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getOgv() {
    if(this.supported) {
      return this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }

  getWebm() {
    if(this.supported) {
      return this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '';
    }

    return false;
  }
}
