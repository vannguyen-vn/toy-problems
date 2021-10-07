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

// input: array (of numbers?)
// output: sorted array
// constraints: use recursion
// edge cases: empty array, one value, two values
var quicksort = function(array) {
  // use midpoint as "pivot"- calculate midpoint in array using its length (round down if necessary)
  if (array.length <= 1) {
    return array
  }
  var pivot = array[Math.floor(array.length/2)]
  var lessThan = []
  var greaterThan = []
  var middle = []
  // loop through array
  for (var i = 0; i < array.length; i++) {
    var num = array[i]
     // if value less than pivot
     if (num < pivot) {
        // add to less than group
        lessThan.push(num)
     } else if (num === pivot) {
       middle.push(num)
     } else {// otherwise
      // add to greater than group
      greaterThan.push(num)

     }
  }

  // re-sort less than group
  lessThan = quicksort(lessThan)

  // resort greater than group
  greaterThan = quicksort(greaterThan)

  // return both groups with pivot in between
  return lessThan.concat(middle).concat(greaterThan)
};

//example
// var numbers = [4, 16, 2, 7, 9, 15, 8]
// "pivot" would be 7
// is 4 < 7 ? yes, is 16 < 7 ? no  // split the array in two using that midpoint
  // then loop through both arrays
  // for left side
    // for each element
     // check if current number <= "pivot"
  // for right side
   // for each element
     // check if current number > "pivot"
  // identify base case: when array has 1 value left?
  // on each recursive call send in a slightly smaller array
// is 9 > 7 ? yes, is 15 > 7 ? yes
// console.log(quicksort(numbers))