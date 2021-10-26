/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 var matrix = [
   [1,2,3,4],
   [5,6,7,8],
   [9,'A','B','C'],
   ['D','E','F','G']
  ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

/*
check if matrix is null, or length is 0
  return null

reflect matrix across x axis

loop through top right side of the -x axis
two for loops
  obtain current i and j pair [i,j]
  swap with [j, i]


reflect func - matrix
last index
for loop - half the length
  complement index: last index - i
  swap indices points for top row and bottom row

*/

// var rotateMatrix = function (matrix) {

//   if (matrix === null || matrix.length === 0) {
//     return null;
//   }

//   var reflect = function (matrix) {
//     var lastRowIdx = matrix.length - 1;
//     for (var i = 0; i < Math.floor(matrix.length / 2); i++) {
//       var complementRowIdx = lastRowIdx - i;
//       var row = matrix[i];

//       matrix[i] = matrix[complementRowIdx];
//       matrix[complementRowIdx] = row;

//     }
//   };

//   reflect(matrix);

//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = i + 1; j < matrix[0].length; j++) {
//       var temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
// };


// var rotateMatrix = function (matrix) {

//   if (matrix === null || matrix.length === 0) {
//     return null;
//   }

//   //[1,2,3],>>>>    [1,4,7]
//   //[4,5,6],>>>>    [2,5,8]
//   //[7,8,9]>>>>     [3,6,9]

//   var n = matrix.length;

//   for (var i = 0; i < n; i++) {
//     for (var j = i; j < n; j++) {
//       var temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }

//   //[1,4,7],>>>>    [7,4,1]
//   //[2,5,8],>>>>    [8,5,2]
//   //[3,6,9]>>>>     [9,6,2]

//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < (n / 2); j++) {
//       var temp = matrix[i][j];
//       matrix[i][j] = matrix[i][n - j - 1];
//       matrix[i][n - j - 1] = temp;
//     }
//   }
// };

var rotateMatrix = (matrix) => {

  let res = [];
  let size = matrix.length;

  for (let i = size - 1; i >= 0; i--) {
    res[i] = [];
    for (let j = 0; j < size; j++) {
      res[i][j] = matrix[size - 1 - j][i];
    }
  }

  return res;

}
