/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {

  // counter variable


  //result obj
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if(arr[j] === arr[i]) {
        count++;
      }
    }
  //  if (count % 2 === 0) {
  //    return arr[i];
   // }
    obj[arr[i]] = count;
  }

  var values = Object.values(obj);

  var max = 0;

  for(var i = 0; i < values.length; i++) {

      if (values[i] > max) {
          max = values[i]
      }

  }



  for (var item in obj) {
    if (obj[item] % 2 === 0 && obj[item] >= max) {
      if(Number.isNaN(Number(item))) {
        return item;
      } else {

        item = Number(item);
        return item;

      }

    }
  }
  return null;

};
