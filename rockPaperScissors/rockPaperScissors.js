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
  var result = [];
  var rounds = rounds || 3;
  var options = ['R', 'P', 'S'];

  var playSet = function(count, str) {

    if (count === rounds) {
      result.push(str);
      return;
    }
    count++;
    for (var x = 0; x < options.length; x++) {
      currentStr = str + options[x];
      playSet(count, currentStr);
    }
  };

  playSet(0, '');
  return result;
};
