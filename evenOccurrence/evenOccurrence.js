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
  var counterObj = {};
  for (var i = 0; i < arr.length; i++) {
    var currentIndex = arr[i];
    if (counterObj[currentIndex] === undefined) {
        counterObj[currentIndex] = 1;
    } else {
      counterObj[currentIndex]+= 1;
    }
  }

  for (var j = 0; j < arr.length; j++) {
    var currentIndexJ = arr[j];
    if (counterObj[currentIndexJ] % 2 === 0) {
      return currentIndexJ;
    }
  }
  return null;
};



// for (currentIndex in counterObj) {
//   if (counterObj[currentIndex] % 2 === 0) {
//     return currentIndex;
//   }
// }