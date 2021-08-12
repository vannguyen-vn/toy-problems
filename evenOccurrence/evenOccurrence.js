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
  if (arr.length === 0) {
    return null;
  }
  var valueOccurances = [[arr[0], 1]];
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < valueOccurances.length; j++) {
      if (valueOccurances[j][0] === arr[i]) {
        valueOccurances[j][1] ++;
        break;
      }
      if (j + 1 === valueOccurances.length) {
        valueOccurances.push([arr[i], 1]);
        break;
      }
    }
  }
for (var i = 0; i < valueOccurances.length; i++) {
  if (valueOccurances[i][1] % 2 === 0) {
    return valueOccurances[i][0];
  }
}
return null;
};
