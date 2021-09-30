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
  var result = 'solved';

  //make an array of strings from the rows
  var rows = board.split('\n');
  console.log(rows);

  //make an array of strings from the columns
  var columns = [];
  for (var c = 0; c < 9; c++) {
    var column = '';
    for (var r = 0; r < 9; r++) {
      column += rows[r][c];
    }
    columns.push(column);
  }
  console.log(columns);

  //make an array of strings from the 3x3 grids
  var grids = [];
  //iterate along rows array
  //use b var for boxes of 3
  for (var rb = 0; rb < 9; rb += 3) {
    for (var cb = 0; cb < 9; cb += 3) {
      var grid = '';
      //slice 0-3 in rows 0-2
      for (var r = rb; r < rb + 3; r++) {
        for (var c = cb; c < cb + 3; c++) {
          grid += rows[r][c];
        }
      }
      grids.push(grid);
    }
  }
  console.log(grids);

  //helper function to check the array
  var check9s = function(array) {
    //iterate along that array
    for (var i = 0; i < array.length; i ++) {
      //check that each contains all numbers 1-9
      for (var n = 1; n <= 9; n++) {
        //if it doesn't, switch to 'invalid'
        if (!array[i].includes(`${n}`)) {
          result = 'invalid';
        }
      }
    }
  }

  check9s(rows);
  check9s(columns);
  check9s(grids);

  return result;
}
