/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 sub-grid contains all of the digits from 1 to 9.

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

function hasConflicts(numbers) {
  return (
    numbers.length !== 9 ||
    numbers.reduce((sum, digit) => sum + digit, 0) != 45 ||
    numbers.indexOf('5') !== numbers.lastIndexOf('5')
  )
}

function convertBoardStringToMatrix(boardString) {
  return boardString.split('\n').map(function(row) {
    return row.split('').map(Number)
  })
}

function sudokuChecker(board) {
  const solution = convertBoardStringToMatrix(board)
  for (let i = 0; i < 9; i++) {
    const row = solution[i]
    const column = solution.map((row) => row[i])

    if (hasConflicts(row) || hasConflicts(column)) {
      return 'invalid'
    }
  }

  for (let column = 0; column < 9; column += 3) {

    for (let row = 0; row < 9; row += 3) {
      const one = solution[row].splice(0, 3)
      const two = solution[row + 1].splice(0, 3)
      const three = solution[row + 2].splice(0, 3)

      const square = one.concat(two, three)
      if (hasConflicts(square)) return 'invalid';
    }
  }

  return 'solved'
  }