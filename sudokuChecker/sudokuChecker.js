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
  //Check the length of the list to make sure it's possible to have a correct board (10 * 8 + 9)
  if (board.length !== 89 ) {
    return invalid;
  }

  //Transform input string into array
  var splitBoard = board.split('\n');

  //Organize array into row matrix
  var rowMatrix = [];
  splitBoard.forEach(stringRow => {
    var row = [];
    for (let i = 0; i < row.length; i++) {
      row.push(stringRow[i]);
   }
   rowMatrix.push(row);
  })

  //Check each row in row matrix to make sure each number is in the row once
  if (! valuesIncluded(rowMatrix) ) {
    return invalid;
  }

  //organize the row matrix into a column matrix
  var columnMatrix = [[], [], [], [], [], [], [], [], []]
  rowMatrix.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      columnMatrix[i].push(row[i])
    }
  })

  //Check to make sure each column has all numbers
  if (! valuesIncluded(columnMatrix) ) {
    return invalid;
  }

  //organize row matrix into cells



}

var valuesIncluded = function (matrix) {
  rowMatrix.forEach(row => {
    var counter = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8:0, 9:0};

    row.forEach((value) => {
      counter[value] ++;
      if counter[value] > 1 {
        return invalid;
      }
    })

    if (Object.values.includes(0)) {
      return false;
    }

  })
  return true;
}

sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")