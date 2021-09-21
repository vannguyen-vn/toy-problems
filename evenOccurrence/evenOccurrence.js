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

var evenOccurrence = arr => {

  var storage = {};

  arr.forEach(element => {
    if (storage[element] !== undefined) {
      storage[element] += 1;
    } else {
      storage[element] = 1;
    }
  });

  for (var i = 0; i < arr.length; i++) {
    if (storage[arr[i]] % 2 === 0) {
      return arr[i]
    } else {
      continue
    }
  }

  return null

};

