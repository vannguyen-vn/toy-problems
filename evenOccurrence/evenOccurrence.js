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
  var presentNums = [];
  var duplicateNums = {};

  for (var num of arr){
    if (presentNums.includes(num)) {
      presentNums.push(num);
      if (duplicateNums.hasOwnProperty(num)) {
        duplicateNums[num] = duplicateNums[num] + 1;
      } else {
        duplicateNums[num] = 2;
      }
    } else {
      presentNums.push(num);
    }
  }

  var numsWithEvenOccurrences = {};

  for (var key in duplicateNums) {
    if (duplicateNums[key] % 2 === 0) {
      numsWithEvenOccurrences[key] = arr.indexOf(Number(key));
    }
  }

  var smallestIndex = Math.min(...Object.values(numsWithEvenOccurrences))

  return arr[smallestIndex];
};