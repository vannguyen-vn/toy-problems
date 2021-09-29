/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  if (array.length < 3) {
    return;
  } else if (array.length === 3) {
    return array.reduce((a, b) => a * b)
  }
  var largest = [];
  var largestNeg = [];
  array.forEach((num) => {

    if (largest.length < 3) {
      largest.push(num);
    } else {
        var testNum = num;
        for (var i = 0; i < largest.length; i++) {
        if (testNum > largest[i]) {
          testNum = largest.splice(i, 1, testNum)[0];
        }
      }
    }
    if (num < 0) {
      if (largestNeg.length < 2) {
        largestNeg.push(num);
      } else {
        var testNum = num;
        for (var i = 0; i < largestNeg.length; i++) {
          if (testNum < largestNeg[i]) {
            testNum = largestNeg.splice(i, 1, testNum)[0];
          }
        }
      }
    }
  });
  largest.sort((a, b) => b - a);
  if (largestNeg.length === 2) {
    var negAbs = Math.abs(largestNeg[0] + largestNeg[1]);
    if (negAbs > largest[0] + largest[1]) {
      largest = [...largestNeg, largest[2]];
    } else if (negAbs > largest[0] + largest[2]) {
      largest = [...largestNeg, largest[1]];
    } else if (negAbs > largest[1] + largest[2]) {
      largest = [...largestNeg, largest[0]];
    }
  }
  return largest.reduce((a, b) => a * b)
};

// module.exports = largestProductOfThree;