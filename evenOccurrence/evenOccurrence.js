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
  let storage = {};

  arr.forEach(function(val, idx) {
    storage[val] = storage[val] + 1 || 1;
  });
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (storage[curr] % 2 === 0) return curr;
  }
  return null;
};

