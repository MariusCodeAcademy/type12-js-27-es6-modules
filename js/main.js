'use strict';
console.log('main.js');

// import named exported function
import { addNums, minusNums } from './modules/operations.js';
// importuoti num1 ir num2 ir panaudoti funkcijos addNums skaiciavimui
function sayHi(name) {
  console.log('Hi from ' + name);
}

const rez1 = addNums(5, 10);
console.log('rez1 ===', rez1);

sayHi('James');
const minusrez = minusNums(5, 7);
console.log('minusrez ===', minusrez);
