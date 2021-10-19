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

/*
rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
target = 2
return 5

index: 0 1 2 3 4 5 6
array: 4 5 6 0 1 2 3

binary search
find smallest element
find 0
then check if target is on right side or on left side

binary search again on side that contains target
  return index if found

return null
*/

// var rotatedArraySearch = function (rotated, target) {

//   if (rotated === null || rotated.length === 0) {
//     return null;
//   }

//   var left = 0;
//   var right = rotated.length - 1;

//   // left < right - exits loop when left === right, found min element
//   // binary search to find min element
//   while (left < right) {
//     var mid = Math.floor((left + right) / 2);
//     if (rotated[mid] > rotated[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   // found min element - stored at left
//   // reassign pointers
//   var min = left;
//   left = 0;
//   right = rotated.length - 1;

//   // find which side target is located, right or left of min
//   if (target >= rotated[mid] && target <= rotated[right]) {
//     // adjust boundaries to search right
//     left = min;
//   } else {
//     right = min;
//   }

//   // binary search on reduced array to find target if present
//   while (left <= right) {
//     var mid = Math.floor((left + right) / 2);
//     if (rotated[mid] === target) {
//       return mid;
//     } else if (rotated[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return null;
// };

var rotatedArraySearch = function (rotated, target) {

  if (rotated === null || rotated.length === 0) {
    return null;
  }

  var left = 0;
  var right = rotated.length - 1;

  while (left <= right) {
    var mid = Math.floor((right + left) / 2);
    if (rotated[mid] === target) {
      return mid;
    }

    if (rotated[left] <= rotated[mid]) {
      if (rotated[left] <= target && target <= rotated[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (rotated[mid] <= target && target <= rotated[right]) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
  }

  return null;
};
