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

// input: none
// output: array with all combinations of R P and S
var rockPaperScissors = function (roundsToPlay) {
  var possibleCombos = [];
  var playerOptions = ['R', 'P', 'S']


  var stillInPlay = function (currentGame) {
    var currentGame = currentGame || '';

    if (currentGame.length === roundsToPlay) {
      // add the game to our possible combos list
      return possibleCombos.push(currentGame)
    }
    // loop through player options
    for (var i = 0; i < playerOptions.length; i++) {
      currentMove = playerOptions[i];
        // check if game is still in play after adding the next move
        stillInPlay(currentGame + currentMove)
    }
  }

  stillInPlay()
  return possibleCombos;
};

rockPaperScissors(5)