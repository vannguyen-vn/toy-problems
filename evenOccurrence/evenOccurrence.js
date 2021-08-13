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
  //I: array of Numbers
  //O: the first num Value, that has occured an even number of times (two)
  //make an object that holds all values of the array;
  let arrayValueObj = {};
  for (var i = 0; i < arr.length; i++) {
    var currentValue = arr[i];
    if (arrayValueObj[currentValue] === undefined) {
      arrayValueObj[currentValue] = 1;
    } else {
      arrayValueObj[currentValue]++;
    }
  }
  if (Object.values(arrayValueObj)) {
    return getKeyByTheValue(arrayValueObj, 2) || null;
  }
};

var getKeyByTheValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value)
}
