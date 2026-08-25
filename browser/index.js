// Browser entry for the self-contained bundles.
// Assigns the Detector class directly to the global, so consumers can call
// `new Detector()` after loading dist/detector.browser(.min).js.
import { Detector } from '@detector-js/detector';

const root = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : {});

root.Detector = Detector;

export default Detector;