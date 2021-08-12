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
  var res = {};
  var evenList = [];
  var firstInd = +Infinity;

  for (var i = 0; i < arr.length; i++) {
    var curElem = arr[i];
    if (res[curElem] === undefined) {
      res[curElem] = 1;
      loc[curElem] = i;
    } else {
      res[curElem]++;
    }
  }

  for (var key in res) {
    if (res[key] % 2 === 0) {
      evenList.push(key);
    }
  }

  if (evenList.length === 0) {
    return null;
  }

  for (var i = 0; i < evenList.length; i++) {
    var value = Number(evenList[i]);
    if (arr.indexOf(value) < firstInd) {
      firstInd = arr.indexOf(value);
    }
  }

  return arr[firstInd];
};
