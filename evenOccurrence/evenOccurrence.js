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

  arr.forEach(element => {
    if (storage[element] !== undefined) {
      storage[element] += 1;
    } else {
      storage[element] = 1;
    }
  });

  for (var element in storage) {
    if ( (storage[element] > 0) && (storage[element] % 2 === 0) ) {
      return element
    }
    return null;
  }

};