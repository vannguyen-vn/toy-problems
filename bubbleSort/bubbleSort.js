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
// [2, 1, 6, 3, 5, 4]

var isSorted = function(array) {
  for (var j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      return false;
    }
  }
  return true;
}

var bubbleSort = function(array) {
  // Your code here.

  while (!isSorted(array)) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var helper = array[i];
        array[i] = array[i + 1];
        array[i + 1] = helper;
      }
    }
  }

  return array;
};

// console.log(bubbleSort([2,4,1,3,5]))

// console.log(bubbleSort([2, 1, 6, 3, 5, 4]))

/*
var shuffleDeck = function(deck) {
  // Your code here
  var copy = deck.slice();
  var result = [];

  for (var i = 0; i < deck.length; i++) {
    result.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }

  return result;
};

var array100 = Array.from(Array(100).keys())
console.log('original', array100)

var array100shuffled = shuffleDeck(array100);
console.log('shuffled', array100shuffled)

var array100sorted = bubbleSort(array100shuffled);
console.log('sorted', array100sorted)
*/