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


// input: string (representing a sudoku board)
// output: string, 'solved' or 'invalid'
// constraints: each row and column has numbers 1 - 9
// edge cases: N/A
function sudokuChecker(board) {
  // create an object to organize (each key called row(1-9) or column(1-9))
  // split the string on /n into an array of numbers
  // loop through the array
     // add a key to the obj called row + index
     // loop through each row of numbers
       // push each number to an array
      // set the array as the value at that key

  // sort each array and loop through to make sure they have 1 - 9
  // the check that each column includes each number 1 - 9 ?
}
