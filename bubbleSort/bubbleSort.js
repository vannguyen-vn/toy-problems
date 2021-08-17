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


var bubbleSort = function(array) {
  // Your code here.
  var sorted = array.slice() || sorted;
  var temp;

  // Base case: an array of two numbers, array[i] and array[i + 1]
  if (sorted.length === 2) {
    sorted = greaterThanNext(sorted[0], sorted[1]);
    return sorted;
  }

  var switchPlaces = function(sorted) {
    // Need to loop, starting at index 0
    for (var i = 0; i < sorted.length - 1; i++) {
      greaterThanNext(sorted[i], sorted[i + 1]);
    }
  }
  switchPlaces(sorted.slice(0, sorted.length - 1));
};

var greaterThanNext = function(a, b) {
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  return [a, b];
}
