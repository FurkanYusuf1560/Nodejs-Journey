 // const firstModule = require('./first-module')
 import firstModule from './first-module.js'

console.log(firstModule.add(4,5));

try {
    
    console.log('trying to divide by zero');
    let result = firstModule.divide(0,5);
    console.log(result);
    

} catch (error) {
    console.log('Caught an error', error.message);
    
}