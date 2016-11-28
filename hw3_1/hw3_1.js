var arr = [1, 2, 3, 4, 5, 6];

//forEach() method executes a provided function once per array element.
  function func(elem){
    console.log(elem)
  }

  function fn(ar , func) {

    for(var i = 0; i < arr.length; i++){
       func(arr[i]);
    }
  };
  console.log(fn(arr, func) );

  console.log('-------')

  var res = arr.forEach(function(el){
    console.log(el);
  });


/*filter() method creates a new array with all elements
that pass the test implemented by the provided function.*/

 function filterFn(source , filter){
   var res = [];
   for(var i = 0; i < source.length; i++){
     if(source[i] > 3) {
      res.[res.length] = source[i];
     }
   }
   return res;
 };
  var result = filterFn(arr , 3);
  console.log(result);

  console.log("----------");

  var res = arr.filter(function(el){
    return el > 3;
  });
  console.log(res);



  /*map() method creates a new array with the results of
calling a provided function on every element in this array.*/
  function fn(elem) {
    return elem * elem;
  }
  function map(ar, filterFn){
   var res = [];
    for(var i = 0; i < ar.length; i++){
     res[i] = filterFn(ar[i]);
  }
  return res;
};
  console.log(map(arr, fn))

   console.log("------------");

  var roots = arr.map(function(el){
    return el*2;
  });
  console.log(roots);



/*reduce  method applies a function against an accumulator and each value of
the array (from left-to-right) to reduce it to a single value.*/

 var res = 0;
  for(var i = 0; i < arr.length; i++){
    res += arr[i];
  }
  console.log(res);

  console.log("-----------");

  var result = arr.reduce(function(prev, next){
    return prev+next;
  });
  console.log(result);

/*slice  */

function slice (ar, start, end) {
  for (let i = start; i < end; i++) {
        console.log(ar[i]);
  }
  }

  slice(arr, 1, 4);


