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

var rockPaperScissors = function (numRounds) {

  //Input: 3 for three rounds
  //Output: 27 partitions

  var containedThrows = [];

  var plays = ['R', 'P', 'S'];

  //put those generators into the array only if that partion does not exists in the container
  //iterate through selectFrom options and make a callback function to add to stringify;
  var generateThrows = function(throwsUsed, roundsLeft) {
    //base case
    if (roundsLeft == 0) {
      containedThrows.push(throwsUsed);
    } else {
      for (var i = 0; i < plays.length; i++) {
        var currentThrow = plays[i];
        generateThrows(throwsUsed.concat(currentThrow), roundsLeft - 1)
      }
    }
  };
  generateThrows('', numRounds);

  return containedThrows;
};