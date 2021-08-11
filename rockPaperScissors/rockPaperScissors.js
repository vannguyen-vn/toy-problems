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

var rockPaperScissors = function (numberOfRounds) {
  numberOfRounds = numberOfRounds || 3;
  var options = ['R', 'P', 'S'];
  var results = [];
  var recursiveFunction  = function (string) {
    if (string.length === numberOfRounds) {
      results.push(string);
    } else {
      options.forEach(function (letter) {
        recursiveFunction(string + letter);
      });
    }
  }
  options.forEach(function (letter) {
    recursiveFunction(letter);
  });
  return results;
};