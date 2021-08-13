/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var res = [];
  var evenList = [];
  var firstInd = +Infinity;

  for (var i = 0; i < arr.length; i++) {
    var curElem = arr[i];
    if (res.indexOf(curElem) === -1) {
      res.push(curElem, 1);
    } else {
      res[res.indexOf(curElem) + 1]++;
    }
  }

  for (var i = 1; i < res.length; i+=2) {
    if (res[i] % 2 === 0) {
      evenList.push(res[i - 1]);
    }
  }

  if (evenList.length === 0) {
    return null;
  }

  for (var i = 0; i < evenList.length; i++) {
    if (arr.indexOf(evenList[i]) < firstInd) {
      firstInd = arr.indexOf(evenList[i]);
    }
  }

  return arr[firstInd];
};
