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
 *  linear
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 *  hm....
 *
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function (array) {
  // helper function for swapping
  let swapElementsAtIndex = function (a, b) {
    let temp = array[b];
    array[b] = array[a];
    array[a] = temp;
  }
  //declare variable for isSwapped. represents boolean
  let isSwapped = false;
  // iterate over same array, comparing one element to the next with
  //  nested for loop
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let currentElement = array[j];
      let nextElement = array[j + 1]
      // if the current element is greater then the next
      if (currentElement > nextElement) {
        // if there is an occurance of swap, set to true
        isSwapped = true;
        //swap
        swapElementsAtIndex(j, j + 1);
      }
    }
    if (!isSwapped) {
      return array;
    }
  }
  return array;
};

// console.log(bubbleSort([2, 1, 3])); // yields [1, 2, 3]

//TODO: comment out!
// module.exports = swapElements;