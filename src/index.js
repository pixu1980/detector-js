import './Core/Polyfills';

import Detector from './Detector';

if(typeof module !== 'undefined') {
  module.exports = Detector;
}
