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
  // Your code here.
  var evensContainer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evensContainer.push(arr[i]);
    }
  }
  if (evensContainer.length === 0) {
    return null;
  }
  var multiplesContainer = [];
  for (var j = 0; j < evensContainer.length; j++) {
    var currentNum = evensContainer[j];
    var nextNum = evensContainer[j + 1];
    if (currentNum = nextNum) {
      multiplesContainer.push(currentNum);
    }
  }
  return multiplesContainer[0];
};
