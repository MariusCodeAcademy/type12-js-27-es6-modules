'use strict';

export function displayAfterH1(value) {
  const h2El = document.createElement('h2');
  h2El.textContent = value;
  document.querySelector('h1').after(h2El);
}
