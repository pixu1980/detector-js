/*global Window*/

import Detector from './Detector';

const detectorInitialized = (!!window && window instanceof Window && !!window.detector);

const detector = detectorInitialized ? window.detector : new Detector();

window.detector = detector;

export default detector;
