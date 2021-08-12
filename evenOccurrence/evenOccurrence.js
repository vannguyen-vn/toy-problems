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

  var storage = {};

  for (var i = 0; i < arr.length; i++) {
    if (storage[arr[i]]) {
      storage[arr[i]]++;
    } else {
      storage[arr[i]] = 1;
    }
  }

  var first = null;
  for (var j = 0; j < arr.length; j++) {
      for (var key in storage) {
          if (storage[key] >= 2) {
            if (arr[j] === Number(key)) {
              first = arr[j];
              return first;
            }
          }
      }
  }

  return first;
};
