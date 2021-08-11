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
  // Create a result array
  var combos = [];
  // Establish player options (array)
  var playerOptions = ['R', 'P', 'S'];
  // Iterate through player options array
  for (var i = 0; i < playerOptions.length; i++) {
    // Iterate again
    for (var j = 0; j < playerOptions.length; j++) {
      // Iterate again
      for (var k = 0; k < playerOptions.length; k++) {
        // Push combo string into result array
        combos.push(playerOptions[i] + playerOptions[k] + playerOptions[j]);
      }
    }
  }
  // Return result array
  return combos;
};

