/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

var swap = function (array, i) {
  var oldVal = array[i];
  array[i] = array[i + 1];
  array[i + 1] = oldVal;
};

var sort = function(array, lastSwapPos) {
  lastSwapPos = lastSwapPos || array.length - 1;
  var currSwapPos;
  array.forEach(function(item, i, array) {
    if(i < lastSwapPos && item > array[i + 1]) {
      swap(array, i);
      currSwapPos = i;
    }
  });
  if(!currSwapPos) {
    return 0;
  } else {
    return currSwapPos;
  }
};

var bubbleSort = function(array) {
  var lastSwapPos = sort(array);
  while (lastSwapPos !== 0) {
    lastSwapPos = sort(array, lastSwapPos);
  }
  return array;
};

//Time Complexity: O(n^2)

/*Test
var input = [2, 1, 3, 12, 1341, 231, 31, 1, 3, 4, 5, 7, 9];
console.log('input: ' + input);
var output = bubbleSort(input);
var inputCopy = input.slice();
var expected = inputCopy.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true

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
var output = bubbleSort(input);
var inputCopy = input.slice();
var expected = inputCopy.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true

var input = array(20)
console.log('input: ' + input);
var output = bubbleSort(input);
var inputCopy = input.slice();
var expected = inputCopy.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true

var input = array(50)
console.log('input: ' + input);
var output = bubbleSort(input);
var inputCopy = input.slice();
var expected = inputCopy.sort(function(a, b) {
  return a - b;
});
console.log('output: ' + output);
console.log(JSON.stringify(output) === JSON.stringify(expected)); //true
*/