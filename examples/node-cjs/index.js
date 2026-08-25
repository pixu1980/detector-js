// Example: CommonJS (Node.js / bundlers with CJS)
const { Detector } = require('detector-js');

const detector = new Detector();
console.log('browser', detector.browser);
console.log('os     ', detector.os);
console.log('cpu    ', detector.cpu);
console.log('flags  ', Object.keys(detector.feature).length, 'capability flags');
