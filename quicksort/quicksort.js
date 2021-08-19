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


var quicksort = function(array) {
  // select middle element on array as pivot

  var swap = (index1, index2, array) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }

  var sort = (array) => {

    if(array.length === 1) {
      return array;
    }

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[i] > array[j]) {
          array = swap(i, j, array);
        } else if (j < i && array[j] > array[i]) {
          array = swap(i, j, array);
        }
      }
    }
    return array;
  }

  var pivot = array[(array.length - 1) / 2];

  var arr1, arr2 = [];

  //separate it into two arrays
  array.forEach((item) => {
    if (item > pivot) {
      arr1.push(item)
    } else {
      arr2.push(item)
    }
  })

  arr1 = sort(arr1);
  arr2 = sort(arr2);

  var result = [...arr1, pivot, ...arr2];

  return result;


};
