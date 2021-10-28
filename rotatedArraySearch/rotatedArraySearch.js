/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {

  if (rotated.length < 1) {
    return null;
  }


  var midIndex;
  var leftIndex = 0;
  var rightIndex = rotated.length - 1;

  while (leftIndex <= rightIndex) {
    midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (rotated[midIndex] === target) {
      return midIndex;
    }
    // is left sorted?
    if (rotated[leftIndex] <= rotated[midIndex]) {
      // is it within left?
      if (rotated[leftIndex] <= target && target < rotated[midIndex]) {
        // stay within left
        rightIndex = midIndex - 1;
        // move right, it is not within left
      } else {
        leftIndex = midIndex + 1;
      }

    } else {
      // is it within right?
      if (rotated[midIndex] < target && target <= rotated[rightIndex]) {
        // stay within right
        leftIndex = midIndex + 1;
      } else {
        // move left, it is not within right
        rightIndex = midIndex - 1;
      }
    }

  }

  return null;

};

