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
  var returnEle = null;
  var evens = [];

  arr.forEach(element => {
    if (storage[element] === 1) {
      storage[element] ++
      evens.push(element)
    } else {
      storage[element] = 1;
    }
  });

  for (var i = 0; i < evens.length; i++) {
    if (storage[evens[i]] % 2 === 0) {
      return evens[i]
    } else {
      continue
    }
  }

  return null

};
