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

var insertionSort = function(array) {
  // Your code goes here. Feel free to add helper functions if needed.
  // create a sorted array variable and set to empty array
  // iterate over the input array
    // iterate over the new array
    // if the array is empty
      // push into the array
    // compare value of old array to value of new array
    // if they have the same value and the next number is different
      // make the value in the new array at the current index have an order property that is one more than it once was
      //add the order property of the current element and set it to one more than the property of the current element in the new array
      // splice into the array (index+1, 0, current element)
    // if the value the element from theold array runs into is greater than it
      // splice the old value into the new value using (index, 0, current elem)
    // if the value the element from the old array runs into is less than the current element
      // if the next value is greater than the current element
        // splice using index+1

  var oldArray = array;
  var newArray = [];

  for (var i = 0; i < oldArray.length; i++) {
    var oldElement = oldArray[i];
    if (newArray.length === 0) {
      newArray.push(oldElement);
      continue;
    }
    for (var j = 0; j < newArray.length; j++) {
      var newElement = newArray[j];
      if (oldElement.value === newElement.value && newArray.value !== oldElement.value) {
        if (newArray[j].order === undefined) {
          newArray[j]. order = 1;
        }
        oldArray[i].order = newArray[j].order + 1;
        newArray.splice(j+1, 0, oldArray[i]);
        break;
      }
      if (oldElement.value < newElement.value) {
        newArray.splice(j, 0, oldElement);
        break;
      }
      if (oldElement.value > newElement.value && ((newArray[j+1] === undefined) || oldElement.value < (newArray[j+1].value))) {
        newArray.splice(j+1, 0, oldElement)
        break;
      }
    }
  }
  console.log(newArray)
  return newArray;
};



var array = [4, 8, 1, 6, 4, 7]

var test = (testingTransform(array));

insertionSort(test);