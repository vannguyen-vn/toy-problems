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

var rockPaperScissors = function(rounds, combo) {
  var result = [];
  var combo = combo || '';
  var rounds = rounds || 3;

  if (combo.length === rounds) {
    result.push(combo);
    return result;
  }

  var comboMoves = ['R', 'P', 'S'];
  for (var i = 0; i < comboMoves.length; i++) {
    result = result.concat(rockPaperScissors(rounds, combo + comboMoves[i]));
  }
  return result;
};

// module.exports = rockPaperScissors; comment out for PRs