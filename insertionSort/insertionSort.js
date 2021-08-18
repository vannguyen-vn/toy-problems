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

var insertionSort = array => {

var sortedArray = [];

var compareVals = sortingArray => {

  if (sortingArray.length === 1) {

    var index = 0;

    while (sortedArray[index] !== undefined && sortingArray.length === 1) {
      if (sortingArray[0].value > sortedArray[index].value) {
        index ++;
      } else if (sortingArray[0].value === sortedArray[index.value]) {
        var shifted = sortingArray[0]
        sortedArray.splice(index + 1, 0, shifted)
        return;
      } else if (sortingArray[0].value < sortedArray[index].value) {

        var shifted = sortingArray[0]
        sortedArray.splice(index, 0, shifted)
        return;
      }
    }
    return;
  }

  if (sortingArray[0].value < sortingArray[1].value) {
    sortedArray.push(sortingArray[0]);
    var shiftedElement = sortingArray.shift() //swap with above?
    return compareVals(sortingArray);
  }


  if (sortingArray[0].value > sortingArray[1].value) {
    var temp = sortingArray.shift()
    sortingArray.splice(1, 0, temp)
    return compareVals(sortingArray);
  }

  if (sortingArray[0].value === sortingArray[1].value) {
    sortedArray.push(sortingArray[0], sortingArray[1])
    sortingArray.splice(0, 2)
    return compareVals(sortingArray);
  }

}
  compareVals(array)

  return sortedArray;
};

var testVals1 = testingTransform([1,3,5,9,9,4])
var result1 = insertionSort(testVals1)
console.log(result1)


/*
IOCE
  -Inputs: array of objects
  -Outputs: a new array of inputs
  -Constraints:
    -equal values must keep relative position
    -must have at least one item
    -value must be a number /defined
  -EdgeCases:
    -Only one item => return that item
    -value is infinity => place at end of array
    -all values are the same => return the original array (might not need to do this since we'll build a new one checking)

PROCESS

//create a return array

//if the manipulation array length is 0,
  //return

//if the value of the object is less than the value of the next object in the array
  //push the current value to the return array
  //return the function called with the first element sliced off

//if the value of the object is greater than the value of the next object in the array
  //assign a temp variable to the current object
  //shift the comparison object to index zero and place the temp vaiable at index 1
  //return the function called with the reivised array

//return the return array



SAMPLE DATA
input: [{value: 0 }, {value: 6 }, {value: 5 }, {value: 4 }, {value: 1 }, {value: 3 }, {value: 3 }, {value: 4 }]

copy: [,   , , , , , , ]

[{value: 0 }, {value: 1 }, {value: 3 }, {value: 3 },{value: 4 }, {value: 4 }, {value: 5 }, {value: 5 }, {value: 6 }]

*/

