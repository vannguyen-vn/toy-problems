/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296
896275314
214963857
589427163
362189745
471356982
923541678
648792531
157638429"
*/



function sudokuChecker(board) {
  board = sudokuMatrix(board)
  var rows = [[],[],[],[],[],[],[],[],[]]
  var columns = [[],[],[],[],[],[],[],[],[]]
  var boxes = [[],[],[],[],[],[],[],[],[]]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {

      let cell = board[i][j];


        if (rows[i].includes(cell)) {
          return false
        } else {
          rows[i].push(cell);
        }
        if (columns[j].includes(cell)) {
          return false;
        } else {
        columns[j].push(cell);
        }

        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          return false;
        } else {
          boxes[boxIndex].push(cell);
        }

      }
    }


  return true;
}

function sudokuMatrix(string) {
  var count = 0;
  var myArray = []
  for (var i = 0; i < 9; i++) {
    myArray[i] = []
    for (var j = 0; j < 9; j++) {
      myArray[i][j] = string[count];
      count++;
    }
  }
  return myArray;
}