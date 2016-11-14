'use strict';


var allNumbers = [1, 2, 4, 5, 6, 7, 8],

someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],

noNumbers = ['это', 'массив', 'без', 'чисел'];

emptyArray = [];

function isAllTrue(source, filterFn){
		if(source.length == 0){
			throw new Error('array is empty');
		}

	for(var i = 0; i < source.length; i++) {
		if(filterFn(source[i]) != true) {
			return false;
		} else {
			return true;
		}
	}
	return isAllTrue(source, filterFn);
}
function isNumber(val) {
	return typeof val === 'number';
}

var result = isAllTrue(allNumbers, isNumber);
var result2 = isAllTrue(someNumbers, isNumber);
var result3 = isAllTrue(noNumbers, isNumber);
try {
var result4 = isAllTrue(emptyArray, isNumber);
	console.log(result4);
}catch(e) {
	console.log(e.message);
}
	console.log(result);
	console.log(result2);//не возвращает false ????;
	console.log(result3);
