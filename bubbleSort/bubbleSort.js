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



//search and swap values throughout the array (array.length - 1) number of times for each index
//do array.length - i - 1 for the inner array because the larger value should bubble to the end of the array after each inner loop


var bubbleSort = function(array) {

  var swapTracker = false;
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      var firstVal = array[j];
      var secondVal = array[j+1];
      swapTracker = false;
      if (firstVal > secondVal) {
        array[j] = secondVal;
        array[j+1] = firstVal;
        swapTracker = true;
      }
    }
    //if after an inner loop, no swap occured, then we are done sorting
    if (!swapTracker) {
      break;
    }
  }
  return array;

};