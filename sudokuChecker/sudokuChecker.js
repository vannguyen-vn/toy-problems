/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function sudokuChecker(board) {
  var rows = board.split('\n');

  for(const row of rows) {
    if (row.length !== 9 || isInvalid(row)) {
      return 'invalid';
    }
  }

  return 'solved';
}

function isInvalid(row) {
  const SUDOKUS = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for(let i = 0; i < row.length; i++) {
    SUDOKUS[row[i]] += 1;
    if (SUDOKUS[row[i]] > 1) {
      return true;
    }
  }

  return false;
}

// module.exports = { sudokuChecker };
