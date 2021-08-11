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

var rockPaperScissors = function (value) {
  var results = [];
  var options = ['R', 'P', 'S'];
  value = value || 3;

  if (value === 1) {
    return options;
  } else {
    var recurseRound = rockPaperScissors(value - 1);
    for(var i = 0; i < options.length; i++) {
      for( var j = 0; j < recurseRound.length; j++) {
        results.push(options[i] + recurseRound[j]);
      }
    }
  }
  return results;
};

