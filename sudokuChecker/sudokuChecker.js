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



const validate = (array) => {
  let result = {};
  for (let i = 0; i < array.length; i++){
    if (result[array[i]] === undefined){
      result[array[i]] = true;
    } else{
      return false;
    }
  }
  return true;
}

function sudokuChecker(board) {
  // Your code here.
  // organize board into an array of arrays of integers
  let rows = board.split('\n')
  // validate rows
  // validate columns
  for(let i = 0; i < rows.length; i++){
    if (!validate(rows[i])){
      // return 'invalid' if not
      return 'invalid';
    }
    if (!validate( rows[i][0] + rows[i][1] + rows[i][2] + rows[i][3] + rows[i][4] + rows[i][5] + rows[i][6] + rows[i][7] + rows[i][8] )){
      return 'invalid';
    }
  }
  // validate grid
  for(let i = 0; i < rows.length; i+= 3){
    if (!validate(rows[i][i] + rows[i + 1][i] + rows[i + 2][i] + rows[i][i + 1] + rows[i + 1][i + 1] + rows[i + 2][i + 1] + rows[i][i + 2] + rows[i + 1][i + 2] + rows[i + 2][i + 2])) {
      return 'invalid';
    }
    if (!validate(rows[i][i + 3] + rows[i + 1][i + 3] + rows[i + 2][i + 3] + rows[i][i + 4] + rows[i + 1][i + 4] + rows[i + 2][i + 4] + rows[i][i + 5] + rows[i + 1][i + 5] + rows[i + 2][i + 5])) {
      return 'invalid';
    }
    if (!validate(rows[i][i + 6] + rows[i + 1][i + 6] + rows[i + 2][i + 6] + rows[i][i + 7] + rows[i + 1][i + 7] + rows[i + 2][i + 7] + rows[i][i + 8] + rows[i + 1][i + 8] + rows[i + 2][i + 8])) {
      return 'invalid';
    }
  }
  // return 'solved' if conditions have been met
  return 'solved'
}

// console.log(sudokuChecker(board))