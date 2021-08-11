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

var rockPaperScissors = function (rounds, string, array
) {
  rounds = (rounds !== undefined) ? rounds : 3;
  string = string || '';
  array = array || [];
  if (string.length === rounds) {
    array.push(string);
    return;
  }
  ['R', 'P', 'S'].forEach(hand => rockPaperScissors(rounds, string + hand, array));
  return array;
};
