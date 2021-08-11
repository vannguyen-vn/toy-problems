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
  if (rounds === 1) {
    return ['R', 'P', 'S'];
  }

  var preArr = rockPaperScissors(rounds - 1);
  var result = [];
  preArr.forEach(function(item) {
    var string = item;
    result.push(string + 'R');
    result.push(string + 'P');
    result.push(string + 'S');
  })
  return result;
};


