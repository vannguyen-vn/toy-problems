/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({ value: array[i], i: i });
  }

  return transform;
};

// // Working solution for single values
// var insertionSort = function (array
// ) {
//   // Your code goes here. Feel free to add helper functions if needed.
//   for (var i = 0; i < array.length; i++) {
//     // innerInsertionSort(array, array[i]);
//     if (i === 0) {
//       continue;
//     }
//     for (var j = 0; j < i; j++) {
//       if (j === 0) {
//         if (array[i] < array[0]) {
//           array.unshift(array.splice(i, 1)[0]);
//           break;
//         }
//       } else {
//         let lower = array[j - 1];
//         let higher = array[j];
//         if (array[i] === higher) {
//           continue;
//         } else {
//           if (lower <= array[i] && array[i] <= higher) {
//             array.splice(j, 0, array.splice(i, 1)[0]);
//             break;
//           }
//         }
//       }
//     }
//   }
//   return array;
// };

// console.log(insertionSort([3,2,1]))
// console.log(insertionSort([4,3,2,10,12,1,5,6]))

// Working solution for objects
var insertionSort = function (array
  ) {
    // Your code goes here. Feel free to add helper functions if needed.
    for (var i = 0; i < array.length; i++) {
      // innerInsertionSort(array, array[i]);
      if (i === 0) {
        continue;
      }
      for (var j = 0; j < i; j++) {
        if (j === 0) {
          if (array[i].value < array[0].value) {
            array.unshift(array.splice(i, 1)[0]);
            break;
          }
        } else {
          let lower = array[j - 1];
          let higher = array[j];
          if (array[i].value === higher.value) {
            continue;
          } else {
            if (lower.value <= array[i].value && array[i].value <= higher.value) {
              array.splice(j, 0, array.splice(i, 1)[0]);
              break;
            }
          }
        }
      }
    }
    return array;
  };

  // console.log(insertionSort(testingTransform([3,2,1])))
  // console.log(insertionSort(testingTransform([4,1,2,13,5,5,10,12,1,5,6])))
  // console.log(insertionSort(testingTransform([3,3,3,3,3,2,1,3,4,3])))

