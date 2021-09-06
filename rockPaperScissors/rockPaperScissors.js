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

var rockPaperScissors = function (rounds, playedSoFar, results) {

  results = results || [];
  playedSoFar = playedSoFar || '';
  rounds = rounds || 3;

  if (playedSoFar.length === rounds) {
    results.push(playedSoFar);
    return;
  }

  ['R', 'P', 'S'].forEach((currentPlay) => {
    rockPaperScissors(rounds, playedSoFar + currentPlay, results)
  })

  return results;
};


// Refactored to deal with any number of rounds, and without use of inner function
