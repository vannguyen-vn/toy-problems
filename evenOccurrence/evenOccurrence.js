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
  // Create an object that stores each number as key
  var storage = {};
  var evenOcc = [];
  // count the occurrence of each value by iterating through the array
  for (var i = 0; i < arr.length; i++) {
    if (!!storage[arr[i]]) {
      storage[arr[i]]++;
    } else {
      storage[arr[i]] = 1;
    }
  }
  for (var key in storage) {
    if (storage[key] % 2 === 0) {
      evenOcc.push(Number(key));
    }
  }
  var first = arr.indexOf(evenOcc[0]);
  for (var i = 0; i < evenOcc.length; i++) {
    if (first > arr.indexOf(evenOcc[i])) {
      first = arr.indexOf(evenOcc[i]);
    }
  }
  return arr[first];

};
