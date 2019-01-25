import CssFlagsClass from '../Core/CssFlagsClass';
import Asserts from '../Core/Asserts';

export default class VideoFeature extends CssFlagsClass {
  constructor(ua = window.navigator.userAgent, flags = {}, cssFlagsPrefix = 'video') {
    super(ua, flags, cssFlagsPrefix);

    this._videoElement = document.createElement('video');

    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm(),
    };

    // remove unnecessary memory usage
    delete this._flags;
  }

  get supported() {
    return Asserts.all([
      !!this._videoElement,
      this._videoElement instanceof window.HTMLVideoElement && this._videoElement instanceof window.HTMLMediaElement,
      !!this._videoElement.canPlayType,
    ]);
  }

  getMp4() {
    return Asserts.all([
      this.supported,
      this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, '') !== '',
    ], true);
  }

  getOgv() {
    return Asserts.all([
      this.supported,
      this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }

  getWebm() {
    return Asserts.all([
      this.supported,
      this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '') !== '',
    ], true);
  }
}
