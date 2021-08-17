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
  // PSEUDOCODE BEGINS

  // 7 5 6 4 3 2 1
  // 5 7 6 4 3 2 1
  // 5 6 7 4 3 2 1
  // 5 6 4 7 3 2 1
  // 5 6 4 3 7 2 1
  // 5 6 4 3 2 7 1
  // 5 6 4 3 2 1 7
  // Declare an empty array
  // Iterate through the array array.length times
  // Compare first element to second element
  // If first element is bigger, switch indexes of elements

  // *** I think the time complexity would be a diminishing n^2, where worst
  // case it would execute n^2, but it would diminish by constant of 1
  // PSEUDOCODE ENDS

  var noBubbles = true;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noBubbles = false;
      }
    }
    if (noBubbles) { return; }
  }
};
