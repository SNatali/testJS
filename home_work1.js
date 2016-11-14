'use strict';

var arr = ['я', 'умею', 'выводить', 'значения']

function consoleRec (arr, i) {

  if(arr.length > i) {
    console.log(arr[i]);
    ++i;


		consoleRec(arr,i);
  } else {
  	return false;
  }
}

consoleRec(arr, 0);
