import './Polyfills/index';

import Detector from './Detector';

if(typeof module !== 'undefined') {
  // module export
  module.exports = Detector;
}
