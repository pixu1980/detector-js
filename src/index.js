import Detector from './Detector';

((global, factory) => {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get DetectorJS.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    module.exports = global.document ?
      factory(global, true) :
      (w) => {
        if(!w.document) {
          throw new Error('DetectorJS requires a window with a document');
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
  // Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, (window) => {
  let detector;

  if(!window.detector) {
    detector = new Detector();
    window.detector = detector;
  } else {
    detector = window.detector;
  }

  return detector;
});
