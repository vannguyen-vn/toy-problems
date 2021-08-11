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

var rockPaperScissors = function () {
  var moveSet = ['R', 'P', 'S'];
  var moveCombos = [];
  var rounds = 3;

  // could we iterate across the array and push the move into the current rounds array
  var possibleMoves = function(currentMoves) {
    // check if this is the first move or if we already have a string of current moves
    currentMoves = currentMoves || '';
    // check the length of current moves against rounds and add it to the move combos array
    if ( currentMoves.length === rounds ) {
      moveCombos.push(currentMoves);
      return;
    }
    moveSet.forEach(function(move) {
      possibleMoves(currentMoves + move);
    });
  };
  // start the recursive function call to assemble the list of all possible moves
  possibleMoves();

  return moveCombos;
};

module.exports = rockPaperScissors;