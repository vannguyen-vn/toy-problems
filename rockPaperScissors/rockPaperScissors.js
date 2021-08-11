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
  var options = ['R', 'P', 'S'];
  var results = [];
  var first, second, third;
  var helperFunction = function(first, second, third) {
    results.push(`${first}${second}${third}`);
  }
  options.forEach(function (first) {
    options.forEach(function (second) {
      options.forEach(function (third) {
        helperFunction(first, second, third);
      })
    });
  });
  if (!numberOfRounds) { return results; }
  return results.slice(0, numberOfRounds);
};