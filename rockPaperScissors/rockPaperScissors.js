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
  var choices = ['R', 'P', 'S'];
  var results = [];
  var getResults = function (playedSoFar, rounds) {
    if (rounds === 0) {
      results.push(playedSoFar)
    } else {
      for (var i = 0; i < choices.length; i++) {
        // console.log(playedSoFar += choices[i])
        getResults(playedSoFar.concat(choices[i]), rounds - 1)
      }
    }
  }
  getResults('', rounds);
  console.log(results.length)
  return results;
};
console.log(rockPaperScissors(3))
