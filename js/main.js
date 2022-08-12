'use strict';
console.log('main.js');

// import named exported function
import { addNums, minusNums } from './modules/operations.js';
// importuoti num1 ir num2 ir panaudoti funkcijos addNums skaiciavimui

import { num11 as n1, num2 as n2, arr } from './modules/variables.js';
// import * as kintai from './modules/variables.js';

// importuoti numatytaji exporta
import sayHiHere from './modules/sayHi.js';
import calcAvg from './modules/avg.js';
// import calcAvg from './modules/avg.js';
import { displayAfterH1 } from './modules/htmlDisplay.js';
import http from './modules/http.js';

const rez1 = addNums(n1, n2);
console.log('rez1 ===', rez1);
displayAfterH1(rez1);

// sayHi('James');
sayHiHere('James');
const minusrez = minusNums(5, 7);
console.log('minusrez ===', minusrez);

const avg1 = calcAvg(arr);
console.log('avg1 ===', avg1.toFixed(2));
displayAfterH1(avg1.toFixed(2));

const users = await http('https://jsonplaceholder.typicode.com/dfsdfsdfsdf');
console.log('users ===', users);
