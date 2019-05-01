'use strict';

function showAd(message = 'AD') {
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header AD');
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Rich is great!');
showAd('Footer AD');
