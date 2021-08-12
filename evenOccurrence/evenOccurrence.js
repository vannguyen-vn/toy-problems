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

/*
  define a storage
  loop through the input
    add each unique value to storage and count of each value
  loop through the input
    // if current item that it's count inside the storage is even
      // return that item
  if nothing return null;
*/

var evenOccurrence = function (arr) {
  var storage = {};
  for (var num of arr) {
    storage[num] = storage[num] + 1 || 1;
  }
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (storage[current] % 2 === 0) {
      return current;
    }
  }
};
