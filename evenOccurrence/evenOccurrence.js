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

/*
storage object
for loop through arr
  update frequencies in obj object
  +1 if exists or if does not exist, set to 1

loop through storage arr
  get frequency of arr[i] from obj
  find first even number frequency using % 2
    return arr[j]

return null
*/

var evenOccurrence = function (arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }

  for (var j = 0; j < arr.length; j++) {
    var values = obj[arr[j]];
    if (values % 2 === 0) {
      return arr[j];
    }
  }

  return null;
};

/*
Map - attempt

var evenOccurrence = function (arr) {
  const map = new Map();
  for (var i = 0; i < arr.length; i++) {
    if (map.get(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (const [key, value] of map) {
    if (value % 2 === 0) {
      return key;
    }
  }
  return null;
}
*/
