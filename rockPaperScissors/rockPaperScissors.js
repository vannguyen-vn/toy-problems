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

var rockPaperScissors = function (combo, rounds) {
  var result = [];
  var combo = combo || '';
  var rounds = rounds || 0;
  // base
  // if combo length is 3
  if (combo.length === 3) {
    // add into the result
    result.push(combo);
    return result;
  }

  rounds++;


  // recursion
  // ['R', 'P', 'S']
  var comboMoves = ['R', 'P', 'S'];
  // add a character into our combo
  for (var i = 0; i < comboMoves.length; i++) {
    combo += comboMoves[i];
    result = result.concat(rockPaperScissors(combo, rounds));
    rounds++;
    if (rounds >= 3) {
      return result;
    }
  }
    // run our function on that combo

  return result;
};

