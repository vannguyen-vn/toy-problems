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


function getColumns(rows) {
  var cols = [];

  for(let j = 0; j < rows.length; j++) {
    let str = '';
    for(let i = 0; i < 9; i++) {
      str += rows[i][j];
    }
    cols.push(str);
  }

  return cols;
}

function getBoxes(rows) {
  var boxes = [];

  for(let o = 0; o < 9; o+=3) {
    let str = '';
    for(let i = 0; i < 9; i++) {
      for(let j = o; j < (o + 3); j++) {
        str += rows[i][j];
      }
      if ((i + 1) % 3 === 0) {
        boxes.push(str);
        str = '';
      }
    }
  }

  return boxes;
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

function sudokuChecker(board) {
  const rows = board.split('\n');
  const columns = getColumns(rows);
  const boxes = getBoxes(rows, columns);

  console.log(rows, columns, boxes);

  if(rows.length !== 9 || columns.length !== 9 || boxes.length !== 9) {
    return 'invalid';
  }

  for(let i = 0; i < 9; i++) {
    if (
      rows[i].length !== 9 ||
      columns[i].length !== 9 ||
      boxes[i].length !== 9 ||
      isInvalid(rows[i]) ||
      isInvalid(columns[i]) ||
      isInvalid(boxes[i])
    ) {
      return 'invalid';
    }
  }

  return 'solved';
}


// module.exports = { sudokuChecker };
