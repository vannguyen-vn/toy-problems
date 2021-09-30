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
  var array = board.split('\n');
  var newArr = [];
  var str = "";
  for (var i = 0; i < array.length; i++) {
    if (!validation(array[i])) {
      return 'invalid';
    }

    for (var j = 0; j < array[i].length; j++) {
      str += array[j][i];
    }
    newArr.push(str);
    str = "";
  }

  for (var m = 0; m < newArr.length; m++) {
    if (!validation(array[m])) {
      return 'invalid';
    }
  }
  return 'solved';
}

function validation(string) {
  if (string !== undefined) {
  var arr = string.split('');
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] > 9 || arr[k] < 1) {
      console.log(arr[k])
      return false;
    }
  }
  if ([...new Set(arr)].length !== 9) {

    return false;
  }
  return true;
  }
}