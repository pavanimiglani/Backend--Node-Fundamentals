
const math = require('./math');
const myEmitter = require('./emitter'); // Assuming your custom event emitter module is named 'emitter.js'

const result = math.square(5);
console.log(`Square of 5 is: ${result}`);
myEmitter.emit('customEvent');

