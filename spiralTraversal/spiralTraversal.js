/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {

  if (matrix.length === 0 || matrix[0].length === 0) {
    return null;
  }

  var result = [];

  var rowStart = 0;
  var rowEnd = matrix.length - 1;
  var colStart = 0;
  var colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (var i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (var i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (var i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i])
      }
    }
    rowEnd--;

    if (colStart <= colEnd) {
      for (var i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart])
      }
    }
   }

   return result;

};

