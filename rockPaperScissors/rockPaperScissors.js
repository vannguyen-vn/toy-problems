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
  //set default four "rounds" to three
  rounds = rounds || 3;
  var roundsPlayed = 0;
  var throws = ['R', 'P', 'S'];
  var combinations = [];
  // iterate across possible throws array
  var findCombos = function() {
    for (var i = 0; i < throws.length; i++) {
      // make a string with that letter first
      var combo = throws[i];
      roundsPlayed++
      if (roundsPlayed < rounds) {
        combo += findCombos(throws)
      } else {
        roundsPlayed = 0
      }
      if (combo.length = rounds) {
        combinations.push(combo);
      }
      return combo;
    }

  findCombos();

  return combinations;

  };
}

