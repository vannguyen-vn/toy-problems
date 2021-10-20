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

var robotPaths = function (n, board, i, j) {
  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }

  var m = board.length;
  var n = board[0].length;

  for (var i = 0; i < m; i++) {
    board[i][0] = 1;
  }

  for (var j = 0; j < n; i++) {
    board[0][j] = 1;
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      board[i][j] = board[i][j - 1] + board[i - 1][j];
    }
  }

  return board[m - 1][n - 1];
};

