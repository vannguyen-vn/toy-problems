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
  var playOptions = ['R', 'P', 'S'];
  var gamesPlayed = [];
  var playGame = function(rounds, currentSequence) {
    if (rounds === 0) {
      gamesPlayed.push(currentSequence);
    } else {
      for (var i = 0; i < playOptions.length; i ++) {
        playGame(rounds - 1, currentSequence + playOptions[i]);
      }
    }
  };
  playGame(rounds, '');
  return gamesPlayed;
};


