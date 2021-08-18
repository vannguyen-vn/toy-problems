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
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

// input: array of objects each with key named value and value with a number
// output: array of objs with values ordered small to large
// constraints: N/A
// edge cases: empty array, or array with only one value
var insertionSort = function(array) {
  // Your code goes here. Feel free to add helper functions if needed.
     // loop through array
    for (var j = 0; j < array.length; j++) {
      // for each
        // compare value of current element and previous element
        // while the previous value is bigger...
          // move current element to previous index
        // if current elements value is smaller than the previous value
        if (array[j].value < array[j - 1].value) {
          // then switch the elements order
          var placeHolder = array[j].value
          array[j].value = array[j - 1].value
          array[j - 1] = placeHolder
        }
  }

  return array;
};


console.log(insertionSort([{value: 2}, {value: 1}, {value: 3}]) )// yields [{value: 1}, {value: 2}, {value: 3}]
