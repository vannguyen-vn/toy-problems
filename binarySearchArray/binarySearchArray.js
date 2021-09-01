/*
var binarySearch = function (array, target) {
  let mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return mid;
  } else

  if (array.length === 1) {
    return null;
  }

  if (array[mid] > target) {
    binarySearch(array.slice(0, mid));
  } else {
    binarySearch(array.slice(mid + 1));
  }
};
*/

var binarySearch = function (array, target) {
  var index = null;

  // recursive function
  let recBS = (arr, tgt, start, stop) => {
      debugger;
    // cannot start below 1
    if (start <= stop) {
      let mid = Math.floor(arr.length / 2);

      if (arr[mid] > tgt) {
        return recBS(arr, tgt, start, mid - 1);
      } else {
        return recBS(arr, tgt, mid + 1, stop);
      }
    }

    return null;
  }

  index = recBS(array, target, 0, array.length - 1);

  return index;
};

// let test = [1,2,3,4,5];

// let result = binarySearch(test, 4);

// console.log(result);