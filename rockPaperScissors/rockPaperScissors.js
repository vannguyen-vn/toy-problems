/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(combo) {
  var result = [];
  var combo = combo || '';

  if (combo.length === 3) {
    result.push(combo);
    return result;
  }

  var comboMoves = ['R', 'P', 'S'];
  for (var i = 0; i < comboMoves.length; i++) {
    result = result.concat(rockPaperScissors(combo + comboMoves[i]));
  }
  return result;
};