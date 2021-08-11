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

var rockPaperScissors = function (
) {
  var result = [];
  var out = ['R', 'P', 'S'];
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      result.push(out[i]+out[j]);
    }
  }
  return result;
};

