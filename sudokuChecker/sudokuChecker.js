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
  const newBoard = board.split('\n');
  console.log(newBoard);

  const checkDuplicates = (string) => {
    for (int i = 0; i < string.length; i++) {
      for (int j = 0; j < string.length; j++) {
        if (string[i] === string[j]) return true;
      }
    }
  }

  //check rows
  for(let i = 0; i < newBoard.length; i++) {
    if (checkDuplicates(bewBoard[i])) return true;
  }
  //check cols

  //check grid

  return false;
}

let board1 = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
sudokuChecker(board1);
