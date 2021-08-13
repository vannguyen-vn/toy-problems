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
  var obj = {};
  var container = [];

  arr.forEach(function(item) {
      if (obj[item] === undefined) {
        obj[item] = true;
      } else {
        container.push(item);
      }
  });

  for (var i = 0; i < arr.length; i ++){
    var currentValue = arr[i];
    for (var j = 0; j < container.length; j++) {
      if (container[j] === currentValue) {
        return currentValue;
      }
    }
  }
  return null;
};