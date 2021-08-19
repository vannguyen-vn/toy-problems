/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  if (array.length <= 1) {
    return array.slice();
  }

  var pivotInd = Math.floor(Math.random() * array.length);
  var pivot = array[pivotInd];
  var lowArr = [];
  var highArr = [];
  for (let i = 0; i < array.length; i++) {
   if (i !== pivotInd && array[i] < pivot) {
     lowArr.push(array[i]);
   } else if (i !== pivotInd && array[i] >= pivot) {
     highArr.push(array[i]);
   }
  }
  var sortedLowArr = quicksort(lowArr);
  var sortedHighArr = quicksort(highArr);
  return sortedLowArr.concat([pivot], sortedHighArr);
};

/*Test
var array = function(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    var num = Math.floor(Math.random() * 2000);
    array.push(num);
  }
  return array;
}

var input = array(10)
console.log('input: ' + input);
var output = quicksort(input);
var expected = input.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true

var input = array(15)
console.log('input: ' + input);
var output = quicksort(input);
var expected = input.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true

var input = array(50)
console.log('input: ' + input);
var output = quicksort(input);
var expected = input.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true
*/