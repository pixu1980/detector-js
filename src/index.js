import './Core/Polyfills';

import Detector from './Detector';

// const detectorInitialized = (!!window && window instanceof Window && !!window.detector && window.detector instanceof Detector);
// const detector = detectorInitialized ? window.detector : new Detector(true);

// window.detector = detector;

export default Detector;
