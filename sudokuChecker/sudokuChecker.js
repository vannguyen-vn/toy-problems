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
  var subgrids = board.split('\n');
  var columns = [];
  var rows = [];
  for (var i = 0; i < 9; i++) {
    for (var k = 0; k < 9; k++) {
      if (k === 0) {
        columns[i] = subgrids[k][i];
      } else {
        columns[i] += subgrids[k][i];
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    var startK = 3 * Math.floor(i / 3);
    for (var k = startK; k < startK + 3; k++) {
      var startInd = 3 * (i % 3);
      if (k === startK) {
        rows[i] = subgrids[k].slice(startInd, startInd + 3);
      } else {
        rows[i] += subgrids[k].slice(startInd, startInd + 3);
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if (!hasOneToNine(subgrids[i]) || !hasOneToNine(columns[i]) || !hasOneToNine(rows[i])) {
      return 'invalid';
    }
  }
  return 'solved';
}

function hasOneToNine(string) {
  var arr = string.split('');
  var nums = arr.map(function (char) {
    return Number(char);
  })
  nums.sort();
  if (nums[4] === 5) {
    for (var i = 0; i < 4; i++) {
      if (nums[i] + nums[8 - i] !== 10) {
        return false;
      }
    }
    return true;
  }
  return false;
}