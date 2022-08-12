'use strict';
console.log('operations.js');

const sk = 15;

// named export
export function addNums(a, b) {
  return a + b;
}

console.log('I am log just sitting in operations.js');

export function minusNums(a, b) {
  return a - b;
}
