// Example: ECMAScript modules
import { Detector } from 'detector-js';

const detector = new Detector('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Version/17.0 Safari/605.1.15');
console.log(JSON.stringify(detector.toValues(), null, 2));
