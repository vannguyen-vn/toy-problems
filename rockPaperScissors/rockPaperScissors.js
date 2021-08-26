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
  // var roundsPlayed = 0;
  var throws = ['R', 'P', 'S'];
  var combinations = [];
  // iterate across possible throws array
  // for (var i = 0; i < throws.length; i++) {
  //   // make a string with that letter first
  //   // currentCombo += throws[i];
  //   for (var j = 0; j < throws.length; j++) {
  //     // currentCombo += throws[j]
  //     for (var k = 0; k < throws.length; k++) {
  //       // currentCombo += throws[k];
  //       combinations.push(throws[i] + throws[j] + throws[k]);
  //     }
  //   }
  // }


  var comboBuilder = function(currentCombo) {
    // base
    if (currentCombo.length === rounds) {
      combinations.push(currentCombo);
      currentCombo = '';
      return;
    }
    // recursion
    for (var i = 0; i < throws.length; i++) {
      currentCombo += throws[i];
      comboBuilder(currentCombo);
    }

  }

  comboBuilder('');

  return combinations;

}

