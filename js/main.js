'use strict';
console.log('main.js');

// import named exported function
import { addNums, minusNums } from './modules/operations.js';
// importuoti num1 ir num2 ir panaudoti funkcijos addNums skaiciavimui
import { num11 as n1, num2 as n2 } from './modules/variables.js';
// importuoti numatytaji exporta
import sayHiHere from './modules/sayHi.js';

const rez1 = addNums(n1, n2);
console.log('rez1 ===', rez1);

// sayHi('James');
sayHiHere('James');
const minusrez = minusNums(5, 7);
console.log('minusrez ===', minusrez);
