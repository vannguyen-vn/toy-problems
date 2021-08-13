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

var rockPaperScissors = function (rounds) {
  var rounds = rounds || 3;
  var result = [];
  var plays = ['R', 'P', 'S'];
  var helpFunction = function(played, roundsLeft) {
    if (roundsLeft === 0) {
      result.push(played);
    } else {
      for (var i = 0; i < plays.length; i++) {
        helpFunction(played + plays[i], roundsLeft - 1);
      }
    }
  };
  helpFunction('', rounds);
  return result;
};



