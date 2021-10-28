/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  const matrix = mapStr.split('\n').map(function cb(str) {
    return str.split('');
  });
  const row = matrix.length;
  const col = matrix[0].length;
  let islandCount = 0;
  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (matrix[i][k] === '0') {
        matrix[i][k] = 'land';
        const isConnectedTop = i > 0 && matrix[i - 1][k] === 'land';
        const isConnectedLeft = k > 0 && matrix[i][k - 1] === 'land';
        const isConnectedBottom = i < row -1 && matrix[i + 1][k] === 'land';
        const isConnectedRight = k < col -1 && matrix[i][k + 1] === 'land';
        if (!isConnectedTop && !isConnectedLeft && !isConnectedBottom && !isConnectedRight) {
          islandCount++;
        }
        markLand(matrix, i, k, row, col, '');
      }
    }
  }
  return islandCount;
};

function markLand(matrix, i, k, row, col, direction) {
  if(i > 0 && matrix[i - 1][k] === '0' && direction !== 'top') {
    matrix[i - 1][k] = 'land';
    markLand(matrix, i - 1, k, row, col, 'bottom');
  }
  if (k > 0 && matrix[i][k - 1] === '0' && direction !== 'left') {
    matrix[i][k - 1] = 'land';
    markLand(matrix, i, k - 1, row, col, 'right');
  }
  if(i < row - 1 && matrix[i + 1][k] === '0' && direction !== 'bottom') {
    matrix[i + 1][k] = 'land';
    markLand(matrix, i + 1, k, row, col, 'top');
  }
  if (k < col - 1 && matrix[i][k + 1] === '0' && direction !== 'right') {
    matrix[i][k + 1] = 'land';
    markLand(matrix, i, k + 1, row, col, 'left');
  }
};