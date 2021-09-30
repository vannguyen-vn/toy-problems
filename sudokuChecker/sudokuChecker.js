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
  // Your code here.
  var rows = board.match(/\d+/g);
  var columns = [];
  var squares = [];
  // console.log(rows)
  rows.forEach((row, rowIndex) => {
    for (var i = 0; i < row.length; i++) {
      if (rowIndex === 0) {
        columns[i] = row[i];
      } else {
        columns[i] += row[i];
      }
      if (rowIndex < 3){
        if(i < 3) {
          if (!squares[0]) {
            squares[0] = row[i];
          } else {
            squares[0] += row[i];
          }
        } else if (i >=3 && i < 6) {
          if (!squares[1]) {
            squares[1] = row[i];
          } else {
            squares[1] += row[i];
          }
        } else {
          if (!squares[2]) {
            squares[2] = row[i];
          } else {
            squares[2] += row[i];
          }
        }
      } else if (rowIndex >= 3 && rowIndex < 6) {
        if(i < 3) {
          if (!squares[3]) {
            squares[3] = row[i];
          } else {
            squares[3] += row[i];
          }
        } else if (i >=3 && i < 6) {
          if (!squares[4]) {
            squares[4] = row[i];
          } else {
            squares[4] += row[i];
          }
        } else {
          if (!squares[5]) {
            squares[5] = row[i];
          } else {
            squares[5] += row[i];
          }
        }
      } else {
        if(i < 3) {
          if (!squares[6]) {
            squares[6] = row[i];
          } else {
            squares[6] += row[i];
          }
        } else if (i >=3 && i < 6) {
          if (!squares[7]) {
            squares[7] = row[i];
          } else {
            squares[7] += row[i];
          }
        } else {
          if (!squares[8]) {
            squares[8] = row[i];
          } else {
            squares[8] += row[i];
          }
        }
      }
    }
  });

  var duplicateDigit = /([\d]).*?\1/;

  for(var i = 0; i < rows.length; i++) {
    if (duplicateDigit.test(rows[i])) {
      return 'invalid';
    }
  }
  for(var i = 0; i < columns.length; i++) {
    if (duplicateDigit.test(columns[i])) {
      return 'invalid';
    }
  }
  for(var i = 0; i < squares.length; i++) {
    if (duplicateDigit.test(squares[i])) {
      return 'invalid';
    }
  }

  // console.log(columns)
  // console.log(squares)
  return 'solved'
}

// module.exports = sudokuChecker;
