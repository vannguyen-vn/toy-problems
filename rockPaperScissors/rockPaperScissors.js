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

var rockPaperScissors = function(rounds) {
  // TODO: your solution here
  var result = '';
  for (var i = 0; i < rounds; i++) {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      result += 'R';
    } else if (randomNum === 1) {
      result += 'P';
    } else {
      result += 'S';
    }
  }
  return result;
};

