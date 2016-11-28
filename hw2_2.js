'use strict';

var allNumbers = [1, 2, 4, 5, 6, 7, 8],

someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],

noNumbers = ['это', 'массив', 'без', 'чисел'];

function isSomeTrue(source, filterFn){
  for(var i = 0; i < source.length; i++) {
    if(filterFn(source[i])) {
      return true;
    }
  }
  return false;
}
function isNumber(val) {
  return typeof val === 'number';
}

var result = isSomeTrue(allNumbers, isNumber);
var result2 = isSomeTrue(someNumbers, isNumber);
var result3 = isSomeTrue(noNumbers, isNumber);
  console.log(result);
  console.log(result2);
  console.log(result3);
