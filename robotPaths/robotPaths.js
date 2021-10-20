/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function (n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

/*
initialize paths
create board

base case - path found, reached bottom left corner
  path++
  return

if out of boundary
  return

if visited
  return
if not visited
  recursive call all paths
  up
  down
  left
  right
  toggle piece back

return paths
*/

var robotPaths = function (n, board, i, j) {
  var paths = 0;

  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }

  var findPaths = function (i, j) {
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }

    if (i < 0 || j < 0 || i >= n || j >= n) {
      return;
    }

    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      board.togglePiece(i, j);

      findPaths(i, j + 1);
      findPaths(i + 1, j);
      findPaths(i, j - 1);
      findPaths(i - 1, j);

      board.togglePiece(i, j);
    }
  }

  findPaths(0, 0);

  return paths;
};

