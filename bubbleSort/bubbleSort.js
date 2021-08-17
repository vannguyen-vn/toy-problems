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
 * know, try to intuit this without consulting the Googles. // The time complexity is quadratic because it could involve n ^ 2 operations.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm? // If a sorted array were passed in, the operation would be linear, but I don't think that changes the time comlexity of the whole algorithm.
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed? // Yes. It's one less operation each time, which I think makes it logarithmic.
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // Your code here.
  var resultArray = array;
  var switches = 0;

  var loopThrough = function(endIndex) {
    for (var i = 0; i < endIndex + 1; i++) {
      if (resultArray[i] > resultArray[i + 1]) {
        resultArray.splice(i, 2, array[i + 1], array[i]);
        switches++
      }
    }
    if (switches !== 0) {
      switches = 0;
      return loopThrough(endIndex - 1);
    } else {
      return resultArray;
    }
  }

  return loopThrough(array.length - 1);

};

